const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-900 to-black px-4">
      <div className="rounded-2xl bg-white/10 p-10 text-center backdrop-blur-md">
        <h1 className="text-8xl font-bold text-white">404</h1>

        <p className="mt-4 text-2xl font-semibold text-gray-200">
          Página no encontrada
        </p>

        <p className="mt-2 text-gray-400">
          Parece que este camino no lleva a ningún lado.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
        >
          Ir al inicio
        </a>
      </div>
    </div>
  )
}

export default NotFound