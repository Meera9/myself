import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import TimelineCard from "./TimelineCard";

import { experiences } from "../../data/experience";

function Experience() {
    return (
        <section id="experience" className="py-24">

            <SectionTitle
                subtitle="Career Journey"
                title="Work Experience"
            />

            <Container>

                <div className="relative flex flex-col gap-12">

                    {/* Center Line */}

                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 -translate-x-1/2"></div>

                    {experiences.map((experience, index) => (
                        <TimelineCard
                            key={experience.id}
                            experience={experience}
                            index={index}
                        />
                    ))}

                </div>

            </Container>

        </section>
    );
}

export default Experience;