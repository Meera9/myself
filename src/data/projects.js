import project1 from "../assets/images/projects/vue-form-builder.jpg";
import project2 from "../assets/images/projects/image-strip-gallery.jpg";
import project3 from "../assets/images/projects/vue-data-table.png";


export const projects = [
    {
        id: 1,
        title: "Vue 3 Form Builder Pro",
        category: "Vue.js",
        image: project1,
        description:
            "Vue 3 form builder boilerplate with reactive schema validation, multi-language error messages, and reusable form components.",

        technologies: [
            "Vue 3",
            "Vee-Validate",
            "Yup",
            "Vue i18n",
            "Tailwind CSS",
            "Vite",
        ],

        features: [
            "Reactive Schema Validation",
            "Multi-language Support",
            "Reusable Form Components",
            "Tailwind / Bootstrap Ready",
        ],

        github: "https://github.com/Meera9/vue3-form-builder-pro-validation-multilang",
    },
    {
        id: 2,
        title: "Responsive Image Strip Gallery",
        category: "HTML/CSS",

        image: project2,

        description:
            "A lightweight responsive image strip gallery built using HTML, CSS, and JavaScript. The layout maintains fixed columns while adapting smoothly across different screen sizes.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
        ],

        features: [
            "Fixed Column Layout",
            "Responsive Gallery",
            "Lightweight",
            "Pure JavaScript",
        ],

        github: "https://github.com/Meera9/responsive-image-strip-gallery-fixed-columns",
    },
    {
        id: 3,
        title: "Vue 3 Reusable Data Table Component",
        category: "Open Source",

        image: project3,

        description:
            "A highly reusable Vue 3 data table component built with the Composition API. Designed for enterprise applications with dynamic columns, scoped slots, custom cell rendering, client-side sorting, and seamless API integration.",

        technologies: [
            "Vue 3",
            "Composition API",
            "JavaScript",
            "Reusable Components",
            "Slots",
            "Lodash",
            "Moment.js",
        ],

        features: [
            "Dynamic Column Configuration",
            "Scoped Slot Rendering",
            "Custom Cell Templates",
            "Column Sorting",
            "API Data Support",
            "Reusable Across Projects",
            "Generic Component Architecture",
            "Minimal Configuration",
        ],

        github: "https://github.com/Meera9/vue3-table-custom-component",

        demo: "#",
    }
];