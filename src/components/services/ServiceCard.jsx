function ServiceCard({ service }) {

    const Icon = service.icon;

    return (
        <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition-all duration-300 hover:-translate-y-3">

            <div
                className={`text-6xl mb-6 ${service.color} transition duration-300 group-hover:scale-110`}
            >
                <Icon />
            </div>

            <h3 className="text-2xl font-bold">
                {service.title}
            </h3>

            <p className="mt-5 text-gray-400 leading-7">
                {service.description}
            </p>

        </div>
    );
}

export default ServiceCard;