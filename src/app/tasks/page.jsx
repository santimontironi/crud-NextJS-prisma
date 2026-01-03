"use client"

import { useContext } from "react"
import { TaskContext } from "@/context/TaskContext";
import Loader from "../components/Loader";
import TaskItem from "../components/TaskItem";
import { Toaster } from "sonner";
import { toast } from "sonner";
import Link from "next/link";

const TasksPage = () => {

    const { tasks, loading, deleteTask } = useContext(TaskContext);

    const handleDelete = (id) => {
        toast("¿Eliminar esta tarea?", {
            action: {
                label: "Eliminar",
                onClick: () => deleteTask(id),
            },
            cancel: {
                label: "Cancelar",
            },
        });
    };

    return (
        <section className="min-h-screen bg-linear-to-br from-black via-stone-900 to-black py-12 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-green-400 mb-2">
                        Mis Tareas
                    </h1>
                    <p className="text-gray-400">
                        Administra y organiza tus tareas pendientes
                    </p>
                </div>

                {loading.get ? (
                    <Loader />
                ) : (
                    <div>
                        {tasks.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20">
                                <div className="bg-stone-900/80 backdrop-blur-xl rounded-2xl border border-green-800/30 p-12 text-center max-w-md">
                                    <svg
                                        className="w-20 h-20 text-green-700/50 mx-auto mb-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        />
                                    </svg>
                                    <p className="text-gray-400 text-lg mb-4">
                                        No hay tareas disponibles
                                    </p>

                                    <p className="text-gray-500 text-sm">
                                        Crea una nueva tarea para comenzar
                                    </p>

                                    <Link href='/new'>
                                        <button className="mt-6 px-6 py-3 bg-linear-to-r from-green-700 to-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-900/50 hover:shadow-xl hover:shadow-green-800/60 transition-all duration-200 cursor-pointer">
                                            Crear tarea
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tasks.map((task) => (
                                    <TaskItem key={task.id} task={task} onDelete={handleDelete} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <Toaster richColors position="top-center" />
        </section>
    )
}

export default TasksPage