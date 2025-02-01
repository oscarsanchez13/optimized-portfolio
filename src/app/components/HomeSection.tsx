"use client";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Typewriter from "./Typewriter";

export default function HomeSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1020);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="home" className="relative w-screen h-screen overflow-hidden">
            {!isMobile ? (
                <div className="flex h-full w-full">
                    {/* Left Side - Ensure Full Coverage & Remove White Edge */}
                    <div className="flex-1 h-full bg-gradient-to-r from-black via-gray-900 to-gray-700 flex items-center px-24">
                        <div className="text-white">
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I&apos;m Oscar.</h1>
                            <p className="text-lg md:text-2xl leading-relaxed">
                                I&apos;m a passionate <Typewriter /> with expertise in{" "}
                                <span className="text-emerald-400 font-semibold">Operational Management</span>.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Full-Width Image with Overlay */}
                    <div className="flex-1 h-full relative">
                        <img
                            src="/Reverce.jpg"
                            alt="Oscar Sanchez"
                            className="absolute w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-700 to-black opacity-40"></div>
                    </div>
                </div>
            ) : (
                /* Mobile View - Fullscreen Image with Bottom Centered Text */
                <div className="relative w-full h-full">
                    <img
                        src="/Reverce.jpg"
                        alt="Oscar Sanchez"
                        className="-translate-x-8 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-12 right-1/2 transform -translate-x-1 text-left text-white px-6">
                        <h1 className="text-5xl font-bold">Hi, I&apos;m Oscar.</h1>
                        <p className="text-lg leading-relaxed">
                            I&apos;m a passionate <Typewriter /> with expertise in{" "}
                            <span className="text-emerald-400 font-semibold">Operational Management</span>.
                        </p>
                    </div>
                </div>
            )}

            {/* Scroll Down Arrow - Adjust for Mobile */}
            <div
                className="absolute right-1/2 transform translate-x-1/2 text-white animate-bounce opacity-80
                md:bottom-10 md:text-5xl text-4xl"
                style={{ bottom: window.innerWidth < 768 ? "calc(2rem + -20px)" : "2rem" }} // Moves arrow down 100px on mobile
            >

                    <FaChevronDown />
                </div>            
        </section>
    );
}
