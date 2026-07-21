function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                <h1 className="text-2xl font-bold">
                    <span className="text-purple-500">Mirali</span>
                    <span className="text-pink-500">.</span>
                </h1>

                <ul className="hidden md:flex gap-8 font-medium">
                    <li className="hover:text-purple-400 cursor-pointer">Home</li>
                    <li className="hover:text-purple-400 cursor-pointer">About</li>
                    <li className="hover:text-purple-400 cursor-pointer">Skills</li>
                    <li className="hover:text-purple-400 cursor-pointer">Projects</li>
                    <li className="hover:text-purple-400 cursor-pointer">Contact</li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;