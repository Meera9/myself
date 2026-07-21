import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import ServiceCard from "./ServiceCard";

import { services } from "../../data/services";

function Services() {
    return (
        <section id="services" className="py-24">

            <SectionTitle
                subtitle="What I Do"
                title="Services"
            />

            <Container>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => (

                        <ServiceCard
                            key={service.title}
                            service={service}
                        />

                    ))}

                </div>

            </Container>

        </section>
    );
}

export default Services;