import {
    FaLaravel,
    FaVuejs,
    FaReact,
    FaPhp,
    FaDocker,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import {
    SiMysql,
    SiTailwindcss,
    SiJavascript,
    SiPostman,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

export const skillCategories = [
    {
        title: "Backend",
        skills: [
            {
                name: "Laravel",
                icon: FaLaravel,
                color: "text-red-500",
            },
            {
                name: "PHP",
                icon: FaPhp,
                color: "text-indigo-400",
            },
            {
                name: "REST API",
                icon: FaLaravel,
                color: "text-purple-400",
            },
            {
                name: "MySQL",
                icon: SiMysql,
                color: "text-blue-500",
            },
        ],
    },

    {
        title: "Frontend",
        skills: [
            {
                name: "Vue.js",
                icon: FaVuejs,
                color: "text-green-500",
            },
            {
                name: "React",
                icon: FaReact,
                color: "text-cyan-400",
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
                color: "text-yellow-400",
            },
            {
                name: "Tailwind",
                icon: SiTailwindcss,
                color: "text-sky-400",
            },
        ],
    },

    {
        title: "Tools",
        skills: [
            {
                name: "Git",
                icon: FaGitAlt,
                color: "text-orange-500",
            },
            {
                name: "GitHub",
                icon: FaGithub,
                color: "text-white",
            },
            {
                name: "Docker",
                icon: FaDocker,
                color: "text-blue-400",
            },
            {
                name: "VS Code",
                icon: FaCode,
                color: "text-blue-500",
            }
        ],
    },

    {
        title: "Other",
        skills: [
            {
                name: "Postman",
                icon: SiPostman,
                color: "text-orange-400",
            },
            {
                name: "Automation",
                icon: FaLaravel,
                color: "text-pink-400",
            },
            {
                name: "Payment Gateway",
                icon: FaLaravel,
                color: "text-purple-400",
            },
            {
                name: "API Integration",
                icon: FaLaravel,
                color: "text-green-400",
            },
        ],
    },
];