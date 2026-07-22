import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function TimelineCard({ experience, index }) {
    return (
        <div
            className={`relative md:w-1/2 ${
                index % 2 === 0
                    ? "md:pr-10 md:self-start"
                    : "md:pl-10 md:self-end"
            }`}
        >
            {/* Timeline Dot */}
            <div className="hidden md:block absolute top-8 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-slate-950
      left-1/2 -translate-x-1/2"></div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500 transition duration-300 hover:-translate-y-2">

                <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-purple-400">
                    <FaBriefcase />
                    {experience.company}
                </div>

                <div className="flex flex-wrap gap-6 mt-4 text-gray-400">

                    <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        {experience.duration}
                    </div>

                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        {experience.location}
                    </div>

                </div>

                <ul className="mt-6 space-y-3">

                    {experience.achievements.map((item) => (
                        <li
                            key={item}
                            className="flex gap-3 text-gray-300"
                        >
                            <span className="text-green-400 mt-1">✔</span>

                            <span>{item}</span>

                        </li>
                    ))}

                </ul>

            </div>
        </div>
    );
}

export default TimelineCard;