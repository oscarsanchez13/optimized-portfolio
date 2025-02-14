"use client";

export default function AboutMe() {
    return (
        <section id="about-me" className="py-16 w-full h-auto bg-white text-black">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Sticky Notes with Achievements */}
                    <div className="sticky-note transform rotate-3">
                        <p className="text-lg font-semibold">🌍 7 International Projects</p>
                        <p className="text-sm">Led cross-functional teams across multiple countries.</p>
                    </div>
                    <div className="sticky-note transform -rotate-3">
                        <p className="text-lg font-semibold">💻 300+ Coding Challenges</p>
                        <p className="text-sm">Solved 300+ challenges in JavaScript, DevOps, and system design.</p>
                    </div>
                    <div className="sticky-note transform rotate-2">
                        <p className="text-lg font-semibold">🌎 Bilingual</p>
                        <p className="text-sm">Fluent in English and Spanish, enabling global collaboration.</p>
                    </div>
                    <div className="sticky-note transform -rotate-2">
                        <p className="text-lg font-semibold">🏆 Leadership Awards</p>
                        <p className="text-sm">Central Gulf Coast Manager of The Year 2022, 2023</p>
                    </div>
                    <div className="sticky-note transform rotate-3">
                        <p className="text-lg font-semibold">📚 1000+ Hours of Learning</p>
                        <p className="text-sm">Dedicated to continuous learning and professional development.</p>
                    </div>
                    <div className="sticky-note transform -rotate-3">
                        <p className="text-lg font-semibold">🚀 Built 15+ Full-Stack Applications</p>
                        <p className="text-sm">Developed and deployed multiple scalable software solutions.</p>
                    </div>
                    <div className="sticky-note transform rotate-2">
                        <p className="text-lg font-semibold">📊 50+ System Design Scenarios Practiced</p>
                        <p className="text-sm">Studied and practiced system design principles for scalability.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
