"use client"

import { useContext } from "react"
import { TaskContext } from "@/context/TaskContext";
import Loader from "../components/Loader";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {

    const { tasks, loading } = useContext(TaskContext);

    return (
        <section>
            {loading.get ? <Loader /> : (
                <div>
                    {tasks.length === 0 ? (
                        <p className="text-gray-400 text-center mt-10">
                            No hay tareas disponibles. Crea una nueva tarea.
                        </p>
                    ) : (
                        tasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))
                    )}
                </div>
            )}
        </section>
    )
}

export default TasksPage