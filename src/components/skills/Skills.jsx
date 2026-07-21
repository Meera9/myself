import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "./SkillCard";

import { skillCategories } from "../../data/skills";

function Skills() {
    return (
        <section id="skills" className="py-24">

            <SectionTitle
                subtitle="My Expertise"
                title="Skills & Technologies"
            />

            <Container>

                <div className="grid lg:grid-cols-2 gap-10">

                    {skillCategories.map((category) => (

                        <div
                            key={category.title}
                            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
                        >

                            <h2 className="text-2xl font-bold mb-8 text-purple-400">
                                {category.title}
                            </h2>

                            <div className="grid grid-cols-2 gap-5">

                                {category.skills.map((skill) => (

                                    <SkillCard
                                        key={skill.name}
                                        {...skill}
                                    />

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </Container>

        </section>
    );
}

export default Skills;