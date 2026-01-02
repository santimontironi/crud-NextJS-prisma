"use client"
import Link from "next/link";

const TaskItem = ({ task }) => {

  return (
    <Link href={`/tasks/${task.id}`}>
      <div className="cursor-pointer group bg-stone-900/80 backdrop-blur-xl rounded-xl border border-green-800/30 p-6 hover:border-green-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/20">

        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-green-400 group-hover:text-green-300 transition-colors">
            {task.title}
          </h3>
          <div className="flex gap-2">

            <button className="p-2 rounded-lg cursor-pointer bg-black/40 border border-green-800/30 hover:border-green-600 hover:bg-black/60 transition-all duration-200">
              <svg
                className="w-4 h-4 text-gray-400 hover:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>

            <button className="p-2 rounded-lg cursor-pointer bg-black/40 border border-red-800/30 hover:border-red-600 hover:bg-red-900/20 transition-all duration-200">
              <svg
                className="w-4 h-4 text-gray-400 hover:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-gray-400 mb-4 line-clamp-3">
          {task.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-green-800/20">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{new Date(task.createdAt).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            })}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskItem;