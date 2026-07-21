function StatsCard({ number, title }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">

            <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {number}
            </h3>

            <p className="text-gray-400 mt-3">
                {title}
            </p>

        </div>
    );
}

export default StatsCard;