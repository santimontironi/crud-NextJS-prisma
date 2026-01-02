"use client"

import { useContext, useEffect } from "react"
import { TaskContext } from "@/context/TaskContext";
import TaskCard from "@/app/components/TaskCard";
import Loader from "@/app/components/Loader";
import { useParams, useRouter } from "next/navigation";

const Task = () => {

  const params = useParams();
  const router = useRouter();
  const { id } = params

  const { taskById, task, loading } = useContext(TaskContext);

  useEffect(() => {
    taskById(id);
  }, [id])

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-stone-900 to-black py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Volver a tareas</span>
        </button>

        {loading.getById ? <Loader/> : (
          <TaskCard task={task} />
        )}
      </div>
    </section>
  )
}

export default Task