import {FaArrowRight} from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";
import {TypeAnimation} from "react-type-animation";
import FloatingTech from "./FloatingTech.jsx";
import {motion} from "framer-motion";
import resume from "../../assets/resume.pdf"

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen ..."
        >
            <section className="relative overflow-hidden min-h-screen flex items-center">

                {/* Background Glow */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-20 left-20 w-80 h-80 bg-purple-600 rounded-full blur-[150px] opacity-25"></div>

                    <div
                        className="absolute bottom-10 right-20 w-80 h-80 bg-pink-600 rounded-full blur-[150px] opacity-25"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}

                    <motion.div
                        initial={{opacity: 0, x: -80}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                    >
                        <div>

                            <p className="text-purple-400 text-lg">
                                👋 Hello, I'm
                            </p>

                            <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
                                Mirali
                                <br/>
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                          Thanki
                        </span>
                            </h1>

                            <TypeAnimation
                                sequence={[
                                    "Senior Full Stack Developer",
                                    2000,
                                    "Laravel Developer",
                                    2000,
                                    "Vue.js Developer",
                                    2000,
                                    "React Developer",
                                    2000,
                                    "API Integration Expert",
                                    2000,
                                    "Automation Solution Developer",
                                    2000,
                                ]}
                                wrapper="h2"
                                speed={50}
                                repeat={Infinity}
                                className="text-2xl md:text-3xl mt-8 font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent"
                            />

                            <p className="mt-8 text-gray-400 leading-8 max-w-xl text-lg">
                                I build scalable web applications using Laravel, Vue.js, React,
                                PHP, MySQL, REST APIs, automation platforms, and modern frontend
                                technologies to create fast, responsive, and user-friendly digital
                                experiences.
                            </p>

                            <FloatingTech/>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <a
                                    href={resume}
                                    download
                                    className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                                    Download Resume
                                </a>

                                <button
                                    className="border border-purple-500 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-purple-600 transition">
                                    Contact Me
                                    <FaArrowRight/>
                                </button>

                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1}}
                    >
                        <div className="flex justify-center">

                            <div className="relative">

                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"></div>

                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="relative w-80 h-80 rounded-full border-4 border-purple-500 object-cover"
                                />

                            </div>

                        </div>
                    </motion.div>

                </div>

            </section>
        </section>
    );
}

export default Hero;