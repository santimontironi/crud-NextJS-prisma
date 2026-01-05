"use client"
import { useContext, useState } from "react"
import { UserContext } from "@/context/UserContext";
import { useForm } from "react-hook-form"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";

const RegisterPage = () => {

  const { register: registerUser, loading } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [errorRegister, setErrorRegister] = useState(null);

  const router = useRouter();

  async function formSubmit(data) {
    try {
      setErrorRegister(null);
      await registerUser(data);
      router.push('/login');
    }
    catch (error) {
      if (error.response?.data?.message) {
        setErrorRegister(error.response.data.message);
      }
    }
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-stone-900 to-black flex items-center justify-center p-6">
      {loading.register ? <Loader /> : (

        <div className="w-full max-w-md">
          <div className="bg-stone-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-800/30 overflow-hidden">
            <div className="bg-linear-to-r from-green-900/40 to-green-800/20 border-b border-green-800/30 p-8 text-center">
              <div className="inline-block mb-4">
                <div className="w-16 h-16 bg-green-900/40 border-2 border-green-700/50 rounded-xl flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-green-400 mb-2">
                Crear Cuenta
              </h1>
              <p className="text-gray-400 text-sm">
                Regístrate para empezar a gestionar tus tareas
              </p>
            </div>
            <div className="p-8">
              <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
                {errorRegister && (
                  <div className="bg-red-900/20 border border-red-600/50 rounded-lg p-4 flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
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
                    <div>
                      <p className="text-red-400 text-sm font-medium">
                        {errorRegister}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', {
                      required: 'El nombre es obligatorio',
                      minLength: {
                        value: 2,
                        message: 'El nombre debe tener al menos 2 caracteres',
                      },
                    })}
                    className={`
                    w-full px-4 py-3 bg-black/40 border-2 rounded-lg
                    text-gray-100 placeholder-gray-500
                    transition-colors duration-200
                    focus:outline-none focus:bg-black/60
                    ${errors.name
                        ? 'border-red-600/70 focus:border-red-500'
                        : 'border-green-800/50 focus:border-green-600'
                      }
                  `}
                    placeholder="Juan"
                  />
                  {errors.name && (
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
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="surname"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Apellido
                  </label>
                  <input
                    id="surname"
                    type="text"
                    {...register('surname', {
                      required: 'El apellido es obligatorio',
                      minLength: {
                        value: 2,
                        message: 'El apellido debe tener al menos 2 caracteres',
                      },
                    })}
                    className={`
                    w-full px-4 py-3 bg-black/40 border-2 rounded-lg
                    text-gray-100 placeholder-gray-500
                    transition-colors duration-200
                    focus:outline-none focus:bg-black/60
                    ${errors.surname
                        ? 'border-red-600/70 focus:border-red-500'
                        : 'border-green-800/50 focus:border-green-600'
                      }
                  `}
                    placeholder="Pérez"
                  />
                  {errors.surname && (
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
                      {errors.surname.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'El correo es obligatorio',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Correo electrónico inválido',
                      },
                    })}
                    className={`
                    w-full px-4 py-3 bg-black/40 border-2 rounded-lg
                    text-gray-100 placeholder-gray-500
                    transition-colors duration-200
                    focus:outline-none focus:bg-black/60
                    ${errors.email
                        ? 'border-red-600/70 focus:border-red-500'
                        : 'border-green-800/50 focus:border-green-600'
                      }
                  `}
                    placeholder="usuario@ejemplo.com"
                  />
                  {errors.email && (
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
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    {...register('password', {
                      required: 'La contraseña es obligatoria',
                      minLength: {
                        value: 6,
                        message: 'La contraseña debe tener al menos 6 caracteres',
                      },
                    })}
                    className={`
                    w-full px-4 py-3 bg-black/40 border-2 rounded-lg
                    text-gray-100 placeholder-gray-500
                    transition-colors duration-200
                    focus:outline-none focus:bg-black/60
                    ${errors.password
                        ? 'border-red-600/70 focus:border-red-500'
                        : 'border-green-800/50 focus:border-green-600'
                      }
                  `}
                    placeholder="••••••••"
                  />
                  {errors.password && (
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
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="
                  w-full px-6 py-3 bg-linear-to-r from-green-700 to-green-600
                  text-white font-semibold rounded-lg
                  shadow-lg shadow-green-900/50
                  transition-all duration-200
                  hover:shadow-xl hover:shadow-green-800/60
                  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-black
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2
                  cursor-pointer
                "
                >
                  Crear cuenta
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-green-800/30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-stone-900 text-gray-500">
                      ¿Ya tienes cuenta?
                    </span>
                  </div>
                </div>

                <Link href="/login">
                  <button
                    type="button"
                    className="
                    w-full px-6 py-3 bg-black/40 border-2 border-green-800/50
                    cursor-pointer
                    text-green-400 font-semibold rounded-lg
                    hover:bg-black/60 hover:border-green-600
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-black
                  "
                  >
                    Iniciar Sesión
                  </button>
                </Link>
              </form>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default RegisterPage