function Navbar() {
    return (
        <header className="bg-gray-800 p-4 fixed w-full top-0 z-10 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Óscar Pineda</h1>
                <ul className="flex space-x-6">
                    <li><a href="#inicio" className="hover:text-blue-400">Inicio</a></li>
                    <li><a href="#sobre-mi" className="hover:text-blue-400">Sobre mí</a></li>
                    <li><a href="#proyectos" className="hover:text-blue-400">Proyectos</a></li>
                    <li><a href="#contacto" className="hover:text-blue-400">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
