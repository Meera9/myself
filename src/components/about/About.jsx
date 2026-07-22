import {
    FaCheckCircle,
    FaLaravel,
    FaVuejs,
    FaReact,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import StatsCard from "./StatsCard";

const features = [
    "Laravel Expert",
    "Vue.js Developer",
    "React Developer",
    "REST API Integration",
    "Automation Solutions",
    "Performance Optimization",
];

function About() {
    return (
        <section id="about" className="py-24">

            <SectionTitle
                subtitle="Who I Am"
                title="About Me"
            />

            <Container>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}

                    <div>

                        <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">

                            <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center text-7xl">

                                👨‍💻

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div>

                        <h3 className="text-3xl font-bold mb-6">

                            Senior Full Stack Developer

                        </h3>

                        <p className="text-gray-400 leading-8">

                            I'm a passionate Full Stack Developer with 8+ years of
                            experience building scalable web applications, enterprise
                            dashboards, multilingual platforms, REST APIs, automation
                            systems, and modern user interfaces. I enjoy transforming
                            business ideas into fast, secure, and user-friendly
                            applications.

                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mt-10">

                            {features.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <FaCheckCircle className="text-purple-400" />

                                    <span>{item}</span>
                                </div>
                            ))}

                        </div>

                        <div className="flex gap-4 mt-10">

                            <FaLaravel className="text-5xl text-red-500" />

                            <FaVuejs className="text-5xl text-green-500" />

                            <FaReact className="text-5xl text-cyan-400 animate-spin [animation-duration:10s]" />

                        </div>

                    </div>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

                    <StatsCard number="8+" title="Years Experience" />

                    <StatsCard number="40+" title="Projects Delivered" />

                    <StatsCard number="20+" title="API Integrations" />

                    <StatsCard number="60%" title="Performance Improvement" />

                </div>

            </Container>

        </section>
    );
}

export default About;