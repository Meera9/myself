import {useState, useEffect} from "react";
import {Link} from "react-scroll";
import {HiMenuAlt3, HiX} from "react-icons/hi";

const menus = [
    {name: "Home", to: "home"},
    {name: "About", to: "about"},
    {name: "Skills", to: "skills"},
    {name: "Experience", to: "experience"},
    {name: "Projects", to: "projects"},
    {name: "Contact", to: "contact"},
];

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scroll
                    ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/10"
                    : "bg-slate-950 lg:bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

                {/* Logo */}

                <h1 className="text-3xl font-black cursor-pointer">

                    <span className="text-purple-500">M</span>

                    <span className="text-white">T</span>

                    <span className="text-pink-500">.</span>

                </h1>

                {/* Desktop */}

                <ul className="hidden lg:flex gap-10">

                    {menus.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                duration={600}
                                offset={-80}
                                activeClass="text-purple-400"
                                className="block py-3 text-white hover:text-pink-400"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                </ul>

                {/* Resume */}

                <a
                    href="/resume.pdf"
                    download
                    className="hidden lg:block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition"
                >
                    Resume
                </a>

                {/* Mobile */}

                <button
                    onClick={() => setMenu(!menu)}
                    className="lg:hidden text-4xl text-white"
                >
                    {menu ? <HiX/> : <HiMenuAlt3/>}
                </button>

            </div>

            {/* Mobile Menu */}

            {menu && (
                <div className="lg:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 shadow-xl">
                    {menus.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={() => setMenu(false)}
                            className="block py-5 text-center text-white hover:text-pink-400 hover:bg-slate-800 transition-all duration-300 cursor-pointer"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}

        </header>
    );
}

export default Navbar;