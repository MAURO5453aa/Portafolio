import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />

      <main className="pt-20">
        {/* ... las secciones como antes ... */}
      </main>

      <footer className="bg-gray-900 text-center p-4 text-sm text-gray-400">
        © 2025 Óscar Pineda. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
