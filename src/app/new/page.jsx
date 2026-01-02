'use client';

import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import Loader from '../components/Loader';

const NewTaskPage = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const { createTask, loading } = useContext(TaskContext);

  async function submitForm(data) {
    try {
      await createTask(data);
      reset();
    }
    catch (error) {
      console.error("Error creando tarea:", error);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-stone-900 to-black flex items-center justify-center p-6">

      {loading.add ? <Loader /> : (
        <div className="w-full max-w-2xl">
          <div className="bg-stone-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-800/30 p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-green-400 mb-2">
                Crear Nueva Tarea
              </h1>
              <p className="text-gray-400">
                Completa los campos para agregar una tarea
              </p>
            </div>
            <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nombre de la Tarea
                </label>
                <input
                  id="title"
                  type="text"
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
                  ${errors.title
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
                  ${errors.description
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

              <div className="pt-2">
                <button
                  type="submit"
                  className="
                  w-full px-6 py-3 bg-linear-to-r from-green-700 to-green-600
                  text-white font-semibold rounded-lg
                  cursor-pointer
                  shadow-lg shadow-green-900/50
                  transition-all duration-200
                  hover:shadow-xl hover:shadow-green-800/60
                  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-black
                "
                >
                  Crear Tarea
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTaskPage;