import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import {SiFiverr} from "react-icons/si";
import Container from "../common/Container";

export default function Contact() {
    const contacts = [
        {
            title: "Email",
            value: "meerathanki09@gmail.com",
            icon: <FaEnvelope size={28}/>,
            link: "mailto:meerathanki09@gmail.com",
            color: "from-pink-500 to-rose-500",
        },
        {
            title: "GitHub",
            value: "github.com/Meera9",
            icon: <FaGithub size={28}/>,
            link: "https://github.com/Meera9",
            color: "from-slate-700 to-slate-900",
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/mirali-thanki-4487b3122/",
            icon: <FaLinkedin size={28}/>,
            link: "https://www.linkedin.com/in/mirali-thanki-4487b3122/",
            color: "from-blue-500 to-blue-700",
        },
        {
            title: "Fiverr",
            value: "fiverr.com/meerathanki9",
            icon: <SiFiverr size={28}/>,
            link: "https://www.fiverr.com/meerathanki9",
            color: "from-green-500 to-emerald-600",
        },
    ];

    return (
        <section
            id="contact"
            className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        >
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <p className="uppercase tracking-widest text-pink-400 font-semibold">
                        Contact
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                        Let's Work Together
                    </h2>

                    <p className="text-gray-400 mt-6 leading-8">
                        Whether you need a Laravel application, Vue.js frontend,
                        API integration, automation solution, or a full-stack web
                        application, feel free to reach out. I'm always happy to discuss
                        new projects and collaboration opportunities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {contacts.map((item) => (
                        <a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group"
                        >
                            <div
                                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-full transition duration-300 hover:-translate-y-2 hover:border-pink-500">
                                <div
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-6`}
                                >
                                    {item.icon}
                                </div>

                                <h3 className="text-white text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 mt-3 break-all">
                                    {item.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}