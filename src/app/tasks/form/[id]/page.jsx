"use client"
import { useContext, useEffect } from "react"
import { TaskContext } from "@/context/TaskContext";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import { useForm } from "react-hook-form";

const FormPage = () => {

  const params = useParams();
  const router = useRouter();
  const { id } = params

  const { taskById, task, loading, updateTask } = useContext(TaskContext);

  useEffect(() => {
    taskById(id);
  }, [id])

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    await updateTask(id, data);
    router.push('/tasks');
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-stone-900 to-black py-12 px-6">
      {loading.getById || loading.patch ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          
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
            <span className="font-medium">Volver</span>
          </button>

          <div className="bg-stone-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-800/30 p-8">
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-green-400 mb-2">
                Editar Tarea
              </h1>
              <p className="text-gray-400">
                Actualiza la información de tu tarea
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Título de la Tarea
                </label>
                <input
                  id="title"
                  type="text"
                  defaultValue={task?.title}
                  {...register('title', {
                    required: 'El título es obligatorio',
                    minLength: {
                      value: 3,
                      message: 'El título debe tener al menos 3 caracteres',
                    },
                    maxLength: {
                      value: 100,
                      message: 'El título no puede exceder 100 caracteres',
                    },
                  })}
                  className={`
                    w-full px-4 py-3 bg-black/40 border-2 rounded-lg
                    text-gray-100 placeholder-gray-500
                    transition-colors duration-200
                    focus:outline-none focus:bg-black/60
                    ${
                      errors.title
                        ? 'border-red-600/70 focus:border-red-500'
                        : 'border-green-800/50 focus:border-green-600'
                    }
                  `}
                  placeholder="Ej: Completar informe mensual"
                />
                {errors.title && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1.5">
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
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Descripción
                </label>
                <textarea
                  id="description"
                  rows={5}
                  defaultValue={task?.description}
                  {...register('description', {
                    required: 'La descripción es obligatoria',
                    minLength: {
                      value: 10,
                      message: 'La descripción debe tener al menos 10 caracteres',
                    },
                    maxLength: {
                      value: 500,
                      message: 'La descripción no puede exceder 500 caracteres',
                    },
                  })}
                  className={`
                    w-full px-4 py-3 bg-black/40 border-2 rounded-lg
                    text-gray-100 placeholder-gray-500 resize-none
                    transition-colors duration-200
                    focus:outline-none focus:bg-black/60
                    ${
                      errors.description
                        ? 'border-red-600/70 focus:border-red-500'
                        : 'border-green-800/50 focus:border-green-600'
                    }
                  `}
                  placeholder="Describe los detalles de la tarea..."
                />
                {errors.description && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1.5">
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
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading.patch}
                  className="
                    flex-1 px-6 py-3 bg-linear-to-r from-green-700 to-green-600
                    text-white font-semibold rounded-lg
                    shadow-lg shadow-green-900/50
                    transition-all duration-200
                    cursor-pointer
                    hover:shadow-xl hover:shadow-green-800/60
                    focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-black
                    disabled:opacity-50 disabled:cursor-not-allowed
                    flex items-center justify-center gap-2
                  "
                >Editar tarea</button>
            
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="
                    px-6 py-3 bg-black/40 border-2 border-green-800/50
                    text-gray-300 font-semibold rounded-lg
                    hover:bg-black/60 hover:border-green-600
                    cursor-pointer
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-black
                  "
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default FormPage