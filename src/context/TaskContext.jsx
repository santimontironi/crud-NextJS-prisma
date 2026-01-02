"use client"
import { createContext, useState, useEffect } from "react"
import { addTask, getTasks, getTaskById } from "@/services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState({
        add: false,
        delete: false,
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

    return (
        <TaskContext.Provider value={{ tasks, createTask, loading, taskById, task }}>
            {children}
        </TaskContext.Provider>
    )
}