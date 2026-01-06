"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [loadingLogin, setLoadingLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);

  const { data: session, status } = useSession();

  const router = useRouter();

  async function formSubmit(data) {
    setLoadingLogin(true);
    setErrorLogin(null);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setErrorLogin("Credenciales incorrectas.")
      setLoadingLogin(false);
    }

    router.push('/tasks');

    reset();
  }

  useEffect(() => {
    if (status === "authenticated") {
      router.push('/tasks');
    }
  },[status]);

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-stone-900 to-black flex items-center justify-center p-6">
      {loadingLogin ? (
        <Loader />
      ) : (
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-green-400 mb-2">
                Iniciar Sesión
              </h1>
              <p className="text-gray-400 text-sm">
                Accede a tu cuenta de tareas
              </p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">

                {errorLogin && (
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
                        {errorLogin}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
                  <input id="email" type="email" {...register('email', { required: 'El correo es obligatorio', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Correo electrónico inválido' } })} className={`w-full px-4 py-3 bg-black/40 border-2 rounded-lg text-gray-100 placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:bg-black/60 ${errors.email ? 'border-red-600/70 focus:border-red-500' : 'border-green-800/50 focus:border-green-600'}`} placeholder="usuario@ejemplo.com" />
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
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
                  <input id="password" type="password" {...register('password', { required: 'La contraseña es obligatoria' })} className={`w-full px-4 py-3 bg-black/40 border-2 rounded-lg text-gray-100 placeholder-gray-500 transition-colors duration-200 focus:outline-none focus:bg-black/60 ${errors.password ? 'border-red-600/70 focus:border-red-500' : 'border-green-800/50 focus:border-green-600'}`} placeholder="••••••••" />
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

                <button type="submit" className="w-full px-6 py-3 cursor-pointer bg-linear-to-r from-green-700 to-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-900/50 transition-all duration-200 hover:shadow-xl hover:shadow-green-800/60 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  Iniciar Sesión
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-green-800/30"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-stone-900 text-gray-500">
                      ¿No tienes cuenta?
                    </span>
                  </div>
                </div>

                <Link href="/register">
                  <button type="button" className="w-full px-6 py-3 cursor-pointer bg-black/40 border-2 border-green-800/50 text-green-400 font-semibold rounded-lg hover:bg-black/60 hover:border-green-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-black">
                    Crear una cuenta
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


export default LoginPage