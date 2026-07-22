import {
    FaLaravel,
    FaVuejs,
    FaReact,
} from "react-icons/fa";


const techs = [
    {
        name: "Laravel",
        icon: <FaLaravel/>,
        color: "text-red-400",
    },
    {
        name: "Vue.js",
        icon: <FaVuejs/>,
        color: "text-green-400",
    },
    {
        name: "React",
        icon: <FaReact/>,
        color: "text-cyan-400",
    },
];

function FloatingTech() {
    return (
        <div className="flex flex-wrap gap-4 mt-12">
            {techs.map((item) => (
                <div
                    key={item.name}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500 transition duration-300 hover:-translate-y-1"
                >
          <span className={`text-2xl ${item.color}`}>
            {item.icon}
          </span>

                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}

export default FloatingTech;