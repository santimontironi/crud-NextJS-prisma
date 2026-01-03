import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-stone-900 to-black">
      <div className="relative flex items-center justify-center min-h-screen px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-800/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/40 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Sistema de Gestión de Tareas
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6 tracking-tight">
            Organiza tu Trabajo
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto">
            Gestiona tus tareas de manera eficiente y mantén el control total de tus proyectos
          </p>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Una plataforma simple y poderosa para administrar todas tus tareas en un solo lugar
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/tasks">
              <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-green-700 to-green-600 text-white font-semibold rounded-lg shadow-lg shadow-green-900/50 hover:shadow-xl hover:shadow-green-800/60 transition-all duration-200">
                Ver Mis Tareas
              </button>
            </Link>
            <Link href="/tasks/new">
              <button className="w-full sm:w-auto px-8 py-4 bg-black/40 border-2 border-green-800/50 text-green-400 font-semibold rounded-lg hover:bg-black/60 hover:border-green-600 transition-all duration-200">
                Crear Nueva Tarea
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="bg-stone-900/80 backdrop-blur-xl border border-green-800/30 rounded-xl p-6 hover:border-green-700/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Gestión Simple
              </h3>
              <p className="text-gray-400 text-sm">
                Crea, edita y elimina tareas con facilidad. Interface intuitiva y rápida.
              </p>
            </div>

            <div className="bg-stone-900/80 backdrop-blur-xl border border-green-800/30 rounded-xl p-6 hover:border-green-700/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Rápido y Eficiente
              </h3>
              <p className="text-gray-400 text-sm">
                Optimizado para rendimiento. Accede a tus tareas instantáneamente.
              </p>
            </div>

            <div className="bg-stone-900/80 backdrop-blur-xl border border-green-800/30 rounded-xl p-6 hover:border-green-700/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                Seguro y Confiable
              </h3>
              <p className="text-gray-400 text-sm">
                Tus datos están protegidos. Sistema robusto y seguro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;