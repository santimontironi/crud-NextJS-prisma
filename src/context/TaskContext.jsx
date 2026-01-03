"use client"
import { createContext, useState, useEffect } from "react"
import { addTask, getTasks, getTaskById, deleteTaskById, updateTaskById } from "@/services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState({
        add: false,
        get: true,
        getById: true,
        patch: false
    })

    async function createTask(task) {
        setLoading({ ...loading, add: true });
        try {
            const taskAdded = await addTask(task);
            setTasks((prev) => [...prev, taskAdded.data]);
            return taskAdded;
        }
        catch (error) {
            throw error;
        }
        finally {
            setTimeout(() => {
                setLoading((prev) => ({ ...prev, add: false }));
            }, 2500);
        }
    }

    useEffect(() => {
        async function allTasks() {
            try {
                const res = await getTasks()
                setTasks(res.data.tasks);
            }
            catch (error) {
                console.error("Error al obtener tareas:", error);
            }
            finally {
                setTimeout(() => {
                    setLoading((prev) => ({ ...prev, get: false }));
                }, 2500);
            }
        }

        allTasks()
    }, [])

    async function taskById(id) {
        try{
            const res =  await getTaskById(id);
            setTask(res.data.task);
            return res.data.task;
        }
        catch(error){ 
            console.error("Error al obtener la tarea por ID:", error);
        }
        finally{
            setTimeout(() => {
                setLoading((prev) => ({ ...prev, getById: false }));
            }, 2500);
        }
    }

    async function deleteTask(id) {
        try {
            const res = await deleteTaskById(id);
            setTasks((prev) => prev.filter((task) => task.id !== res.data.task.id));
            return res.data.task
        }
        catch (error) {
            throw error;
        }
    }

    async function updateTask(id, updatedTask) {
        setLoading({ ...loading, patch: true });
        try {
            const res = await updateTaskById(id, updatedTask);
            setTasks((prev) => prev.map((task) => task.id === res.data.task.id ? res.data.task : task));
            return res.data.task;
        }
        catch (error) {
            throw error;
        }
        finally{
            setTimeout(() =>{
                setLoading((prev) => ({ ...prev, patch: false }));
            },2500)
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, createTask, loading, taskById, task, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}