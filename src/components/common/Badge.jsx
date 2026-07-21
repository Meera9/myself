function Badge({ children }) {
    return (
        <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-md text-sm hover:border-pink-500 transition">
      {children}
    </span>
    );
}

export default Badge;