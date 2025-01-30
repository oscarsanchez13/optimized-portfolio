"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        name: "DevOps Dashboard",
        image: "/projects/devops-dashboard.png", // Replace with your actual image paths
        description: "A real-time dashboard for monitoring Kubernetes clusters and deployments.",
        tech: ["Next.js", "Kubernetes", "Docker", "Grafana"],
        repo: "https://github.com/your-repo",
        live: "https://your-live-site.com"
    },
    {
        id: 2,
        name: "CI/CD Pipeline Manager",
        image: "/projects/cicd-pipeline.png",
        description: "A CI/CD pipeline visualization tool for DevOps engineers.",
        tech: ["React", "Jenkins", "GitHub Actions", "AWS"],
        repo: "https://github.com/your-repo",
        live: "https://your-live-site.com"
    }
];

export default function Projects() {
    const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

    const handleFlip = (index: number) => {
        setFlipped((prev) => prev.map((f, i) => (i === index ? !f : f)));
    };

    return (
        <section id="projects" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative w-full h-64 md:h-80 cursor-pointer perspective"
                            onClick={() => handleFlip(index)}
                        >
                            {/* Card Container */}
                            <div
                                className={`absolute w-full h-full transition-transform transform-style-3d ${
                                    flipped[index] ? "rotate-y-180" : ""
                                }`}
                            >
                                {/* Front Side */}
                                <div className="absolute w-full h-full bg-black rounded-lg shadow-lg overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="opacity-80"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                        <h3 className="text-xl font-semibold">{project.name}</h3>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute w-full h-full bg-gray-800 rounded-lg p-6 flex flex-col justify-between transform rotate-y-180 backface-hidden">
                                    <div>
                                        <h3 className="text-xl font-semibold">{project.name}</h3>
                                        <p className="text-sm mt-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center"
                                        >
                                            <FaGithub className="mr-2" /> Repository
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded flex items-center"
                                        >
                                            <FaExternalLinkAlt className="mr-2" /> Live Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
