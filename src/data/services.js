import {
    FaLaravel,
    FaVuejs,
    FaReact,
    FaServer,
} from "react-icons/fa";

import { SiDocker } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

export const services = [
    {
        title: "Laravel Development",
        icon: FaLaravel,
        color: "text-red-500",
        description:
            "Scalable web applications, admin panels, CRM systems, REST APIs, and enterprise solutions.",
    },

    {
        title: "Vue.js Development",
        icon: FaVuejs,
        color: "text-green-500",
        description:
            "Modern dashboards, responsive interfaces, reusable components, and SPA development.",
    },

    {
        title: "React Development",
        icon: FaReact,
        color: "text-cyan-400",
        description:
            "Fast React applications using Vite, Tailwind CSS, reusable components, and responsive design.",
    },

    {
        title: "API Integration",
        icon: FaServer,
        color: "text-purple-400",
        description:
            "Stripe, Razorpay, OpenAI, Azure Maps, third-party APIs, and webhook integrations.",
    },

    {
        title: "Automation & AI",
        icon: FaRobot,
        color: "text-pink-400",
        description:
            "Queue Jobs, Cron Jobs, AI automation, OpenAI integrations, background processing, and workflow optimization.",
    },

    {
        title: "Deployment & DevOps",
        icon: SiDocker,
        color: "text-blue-400",
        description:
            "Docker, Git, CI/CD, server deployment, performance optimization, and maintenance.",
    },
];