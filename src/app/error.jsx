"use client"

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Algo deu errado!</h1>
        <p className="text-gray-600 mb-4">Tente recarregar a página.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-brandYellow text-white rounded-lg hover:bg-opacity-90 transition"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}

export default Error
