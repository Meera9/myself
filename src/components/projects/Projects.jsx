import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";

function Projects() {
    return (
        <section id="projects" className="py-24">

            <SectionTitle
                subtitle="Portfolio"
                title="Featured Projects"
            />

            <Container>

                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                </div>

            </Container>

        </section>
    );
}

export default Projects;