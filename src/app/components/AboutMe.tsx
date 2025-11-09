"use client";

export default function AboutMe() {
    return (
        <section id="about-me" className="py-20 w-full h-auto bg-black text-white relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="section-title text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Achievement Cards */}
                    <div className="glass-strong border border-emerald-400/30 p-6 rounded-xl w-72 hover:scale-105 transition-transform duration-300 glow-hover transform rotate-1">
                        <p className="text-2xl mb-2">🌍</p>
                        <p className="text-xl font-bold text-emerald-400 mb-2">14 International Projects</p>
                        <p className="text-sm text-gray-300">Led cross-functional teams across multiple countries.</p>
                    </div>
                    <div className="glass-strong border border-emerald-400/30 p-6 rounded-xl w-72 hover:scale-105 transition-transform duration-300 glow-hover transform -rotate-1">
                        <p className="text-2xl mb-2">💻</p>
                        <p className="text-xl font-bold text-emerald-400 mb-2">300+ Coding Challenges</p>
                        <p className="text-sm text-gray-300">Solved 300+ challenges in JavaScript, DevOps, and system design.</p>
                    </div>
                    <div className="glass-strong border border-emerald-400/30 p-6 rounded-xl w-72 hover:scale-105 transition-transform duration-300 glow-hover transform rotate-1">
                        <p className="text-2xl mb-2">🌎</p>
                        <p className="text-xl font-bold text-emerald-400 mb-2">Bilingual</p>
                        <p className="text-sm text-gray-300">Fluent in English and Spanish, enabling global collaboration.</p>
                    </div>
                    <div className="glass-strong border border-emerald-400/30 p-6 rounded-xl w-72 hover:scale-105 transition-transform duration-300 glow-hover transform -rotate-1">
                        <p className="text-2xl mb-2">🏆</p>
                        <p className="text-xl font-bold text-emerald-400 mb-2">Leadership Awards</p>
                        <p className="text-sm text-gray-300">Central Gulf Coast Leader of The Year 2022, 2023</p>
                    </div>
                    <div className="glass-strong border border-emerald-400/30 p-6 rounded-xl w-72 hover:scale-105 transition-transform duration-300 glow-hover transform rotate-1">
                        <p className="text-2xl mb-2">📚</p>
                        <p className="text-xl font-bold text-emerald-400 mb-2">1000+ Hours of Learning</p>
                        <p className="text-sm text-gray-300">Dedicated to continuous learning and professional development.</p>
                    </div>
                    <div className="glass-strong border border-emerald-400/30 p-6 rounded-xl w-72 hover:scale-105 transition-transform duration-300 glow-hover transform -rotate-1">
                        <p className="text-2xl mb-2">🚀</p>
                        <p className="text-xl font-bold text-emerald-400 mb-2">15+ Full-Stack Applications</p>
                        <p className="text-sm text-gray-300">Developed and deployed multiple scalable software solutions.</p>
                    </div>
                    <div className="glass-strong border border-emerald-400/30 p-6 rounded-xl w-72 hover:scale-105 transition-transform duration-300 glow-hover transform rotate-1">
                        <p className="text-2xl mb-2">📊</p>
                        <p className="text-xl font-bold text-emerald-400 mb-2">50+ System Design Scenarios</p>
                        <p className="text-sm text-gray-300">Studied and practiced system design principles for scalability.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
