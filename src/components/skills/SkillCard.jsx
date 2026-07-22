function SkillCard({ icon: Icon, name, color }) {
    return (
        <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">

            <Icon
                className={`text-5xl mb-5 ${color} group-hover:scale-110 transition`}
            />

            <h3 className="font-semibold text-lg">
                {name}
            </h3>

        </div>
    );
}

export default SkillCard;