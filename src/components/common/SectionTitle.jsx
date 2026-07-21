import Container from "./Container";

function SectionTitle({title, subtitle, center = true,}) {
    return (
        <Container>

            <div className={center ? "text-center mb-20" : "mb-20"}>

                <p className="uppercase tracking-[4px] text-purple-400 font-semibold">

                    {subtitle}

                </p>

                <h2 className="text-4xl md:text-5xl font-black mt-4">

                    {title}

                </h2>

                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>

            </div>

        </Container>
    );
}

export default SectionTitle;