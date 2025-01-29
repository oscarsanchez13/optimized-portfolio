export default function HomeSection() {
    return (
        <section id="home" className="relative w-full h-screen bg-gradient-to-r from-black to-gray-700 flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/Reverce.jpg"
                    alt="Oscar Sanchez"
                    className="w-full h-full object-cover opacity-70"
                />
            </div>

            {/* Text Content */}
            <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center h-full px-6 lg:px-12">
                {/* Left Side - Text */}
                <div className="w-full md:w-1/2 text-left text-white z-10 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm Oscar.</h1>
                    <p className="text-lg md:text-2xl leading-relaxed font-semibold">
                        I'm a passionate{" "}
                        <span className="text-emerald-400">Software Engineer</span>{" "}
                        with expertise in{" "}
                        <span className="text-emerald-400">Operational Management</span>{" "}
                        and{" "}
                        <span className="text-emerald-400">DevOps</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
