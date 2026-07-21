import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import Button from "../common/Button";

function ProjectCard({project}) {
    return (
        <div
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-purple-500">

            {/* Project Image */}
            <div className="relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"/>
            </div>

            {/* Content */}
            <div className="p-8">

        <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
          {project.category}
        </span>

                <h3 className="mt-5 text-2xl font-bold">
                    {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-sm"
                        >
              {tech}
            </span>
                    ))}
                </div>

                {/* Features */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                        <div
                            key={feature}
                            className="text-sm text-gray-300"
                        >
                            ✔ {feature}
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                    <Button
                        href={project.github}
                        variant="secondary"
                        className="flex-1"
                    >
                        <FaGithub className="mr-2"/>
                        GitHub
                    </Button>

                    {/*<Button*/}
                    {/*    href={project.demo}*/}
                    {/*    className="flex-1"*/}
                    {/*>*/}
                    {/*    <FaExternalLinkAlt className="mr-2" />*/}
                    {/*    Live Demo*/}
                    {/*</Button>*/}
                </div>

            </div>
        </div>
    );
}

export default ProjectCard;