"use client"
import { createContext, useState, useEffect } from "react"
import { addTask, getTasks } from "@/services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState({
        add: false,
        delete: false,
        get: true,
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
                setLoading({ ...loading, add: false });
            }, 1500);
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
                    setLoading({ ...loading, get: false });
                }, 1500);
            }
        }

        allTasks()
    }, [])

    return (
        <TaskContext.Provider value={{ tasks, createTask, loading }}>
            {children}
        </TaskContext.Provider>
    )
}