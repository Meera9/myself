function Button({children, variant = "primary", href, onClick, className = "",}) {
    const styles = {
        primary:
            "bg-gradient-to-r from-purple-600 to-pink-500 text-white",

        secondary:
            "border border-purple-500 text-white hover:bg-purple-500",

        outline:
            "border border-white/20 bg-white/5 backdrop-blur",
    };

    if (href) {
        return (
            <a
                href={href}
                className={`inline-flex items-center justify-center px-7 py-3 rounded-xl transition duration-300 hover:scale-105 ${styles[variant]} ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center justify-center px-7 py-3 rounded-xl transition duration-300 hover:scale-105 ${styles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;