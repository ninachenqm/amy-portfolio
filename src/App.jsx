

function App() {

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-teal-400 mb-4">
        Tailwind CSS Is Ready!
      </h1>
      <p className="text-xl text-gray-300">
        If this text is styled with a dark background, large teal title, and light paragraph text, Tailwind is working!
      </p>
      <div className="mt-8">
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          A Tailwind Button
        </button>
      </div>

      {/* 在这里，我们稍后会加入 Navbar 和 React Router 的 <Routes> */}
    </div>
  )
}

export default App
