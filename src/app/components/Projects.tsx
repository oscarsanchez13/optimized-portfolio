"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiNextdotjs, SiDocker, SiKubernetes, SiJenkins, SiReact, SiGithubactions, SiAmazon } from "react-icons/si";

// Project Data
const allProjects = [
    { id: 1, name: "DevOps Dashboard", image: "/projects/devops-dashboard.png", description: "A real-time dashboard for monitoring Kubernetes clusters.", tech: [SiNextdotjs, SiKubernetes, SiDocker, SiAmazon ], repo: "#", live: "#" },
    { id: 2, name: "Monitoring with Grafana", image: "/projects/grafana-monitoring.PNG", description: "Real-time observability using Grafana, Prometheus, and Loki.", tech: [SiNextdotjs, SiDocker, SiAmazon], repo: "#", live: "#" },
    { id: 3, name: "Cloud Cost Optimization Tool", image: "/projects/cloud-cost.PNG", description: "A tool for analyzing and optimizing cloud infrastructure costs.", tech: [SiAmazon, SiKubernetes, SiDocker], repo: "#", live: "#" },
    { id: 4, name: "Multi-Region Kubernetes Clusters", image: "/projects/multi-region-k8s.png", description: "Deploying Kubernetes clusters across multiple AWS regions.", tech: [SiKubernetes, SiAmazon], repo: "#", live: "#" },
    { id: 5, name: "Kubernetes Auto-Scaler", image: "/projects/k8s-auto-scaler.png", description: "Auto-scaling Kubernetes deployments based on real-time metrics.", tech: [SiKubernetes, SiAmazon, SiDocker], repo: "#", live: "#" },
    { id: 6, name: "Fullstack Logging System", image: "/projects/logging-system.png", description: "A full-stack logging system for distributed applications.", tech: [SiReact, SiNextdotjs, SiDocker], repo: "#", live: "#" },
    { id: 7, name: "GitHub Actions CI/CD Workflow", image: "/projects/github-actions.png", description: "Automated CI/CD pipeline using GitHub Actions.", tech: [SiGithubactions, SiJenkins, SiDocker], repo: "#", live: "#" },
    { id: 8, name: "CI/CD Pipeline Manager", image: "/projects/cicd-pipeline.png", description: "A CI/CD pipeline visualization tool for DevOps engineers.", tech: [SiReact, SiJenkins, SiGithubactions, SiAmazon], repo: "#", live: "#" },
    { id: 9, name: "Infrastructure as Code (IaC)", image: "/projects/iac.PNG", description: "Using Terraform and AWS to define infrastructure as code.", tech: [SiAmazon, SiDocker, SiNextdotjs], repo: "#", live: "#" },
    { id: 10, name: "Serverless API with AWS Lambda", image: "/projects/aws-lambda-api.png", description: "A highly scalable serverless API deployed on AWS Lambda.", tech: [SiAmazon, SiNextdotjs], repo: "#", live: "#" },
];

export default function Projects() {
    // ✅ FIX 1: Delay state initialization to prevent hydration mismatch
    const [visibleProjects, setVisibleProjects] = useState<number | null>(null);

    useEffect(() => {
        setVisibleProjects(4); // Set initial state AFTER mount to prevent hydration mismatch
    }, []);

    const loadMoreProjects = () => {
        if (visibleProjects !== null) {
            setVisibleProjects((prev) => Math.min((prev ?? 0) + 2, allProjects.length));
        }
    };

    return (
        <section id="projects" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="section-title text-4xl font-bold text-center mb-10">Projects</h2>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {visibleProjects !== null &&
                        allProjects.slice(0, visibleProjects).map((project) => (
                            <motion.div
                                key={project.id}
                                className="relative w-full h-64 md:h-80 cursor-pointer group border border-black transform-style-3d perspective-1000"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="absolute w-full h-full transition-transform transform-style-3d group-hover:rotate-y-180 duration-500 ease-in-out">
                                    
                                    {/* Front Side */}
                                    <div className="absolute w-full h-full bg-black rounded-lg shadow-lg overflow-hidden">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill={true}
                                                priority={project.id <= 3} // ✅ FIX 2: Ensures first images load faster
                                                className="opacity-80 object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white font-bold text-lg p-4 rounded-lg">
                                                {project.tech.map((TechIcon, index) => (
                                                    <span key={index} className="mx-1">
                                                        {TechIcon.name.replace("Si", "")}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                            <h3 className="text-xl font-semibold">{project.name}</h3>
                                        </div>
                                    </div>

                                    {/* Back Side (Flips on Hover) */}
                                    <div className="absolute w-full h-full bg-gray-800 rounded-lg p-4 flex flex-col justify-between transform rotate-y-180 backface-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        
                                        {/* Tech Icons on Top */}
                                        <div className="flex justify-center gap-2 mb-2">
                                            {project.tech.map((TechIcon, index) => (
                                                <TechIcon key={index} className="text-3xl text-emerald-500" />
                                            ))}
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-center">{project.description}</p>

                                        {/* Buttons */}
                                        <div className="flex gap-4 mt-4 justify-center">
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer"
                                                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-center w-1/2">
                                                <FaGithub className="text-lg" />
                                                <span>Repository</span>
                                            </a>
                                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                                className="bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-lg flex items-center justify-center w-1/2">
                                                <FaExternalLinkAlt className="text-lg" />
                                                <span>Live Site</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }

                    {/* View More Projects */}
                    {visibleProjects !== null && visibleProjects < allProjects.length && (
                        <motion.div 
                            className="flex items-center justify-center border border-black bg-gray-700 hover:bg-gray-600 text-white cursor-pointer w-full h-64 md:h-80"
                            onClick={loadMoreProjects}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-xl font-semibold flex items-center gap-2">
                                <span>View More Projects</span> <span className="text-2xl">+</span>
                            </span>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}


// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { SiNextdotjs, SiDocker, SiKubernetes, SiJenkins, SiReact, SiGithubactions, SiAmazon } from "react-icons/si";

// // Project Data
// const allProjects = [
//     { id: 1, name: "DevOps Dashboard", image: "/projects/devops-dashboard.png", description: "A real-time dashboard for monitoring Kubernetes clusters.", tech: [SiNextdotjs, SiKubernetes, SiDocker, SiAmazon ], repo: "#", live: "#" },
//     { id: 2, name: "Monitoring with Grafana", image: "/projects/grafana-monitoring.PNG", description: "Real-time observability using Grafana, Prometheus, and Loki.", tech: [SiNextdotjs, SiDocker, SiAmazon], repo: "#", live: "#" },
//     { id: 3, name: "Cloud Cost Optimization Tool", image: "/projects/cloud-cost.PNG", description: "A tool for analyzing and optimizing cloud infrastructure costs.", tech: [SiAmazon, SiKubernetes, SiDocker], repo: "#", live: "#" },
//     { id: 4, name: "Multi-Region Kubernetes Clusters", image: "/projects/multi-region-k8s.png", description: "Deploying Kubernetes clusters across multiple AWS regions.", tech: [SiKubernetes, SiAmazon], repo: "#", live: "#" },
//     { id: 5, name: "Kubernetes Auto-Scaler", image: "/projects/k8s-auto-scaler.png", description: "Auto-scaling Kubernetes deployments based on real-time metrics.", tech: [SiKubernetes, SiAmazon, SiDocker], repo: "#", live: "#" },
//     { id: 6, name: "Fullstack Logging System", image: "/projects/logging-system.png", description: "A full-stack logging system for distributed applications.", tech: [SiReact, SiNextdotjs, SiDocker], repo: "#", live: "#" },
//     { id: 7, name: "GitHub Actions CI/CD Workflow", image: "/projects/github-actions.png", description: "Automated CI/CD pipeline using GitHub Actions.", tech: [SiGithubactions, SiJenkins, SiDocker], repo: "#", live: "#" },
//     { id: 8, name: "CI/CD Pipeline Manager", image: "/projects/cicd-pipeline.png", description: "A CI/CD pipeline visualization tool for DevOps engineers.", tech: [SiReact, SiJenkins, SiGithubactions, SiAmazon], repo: "#", live: "#" },
//     { id: 9, name: "Infrastructure as Code (IaC)", image: "/projects/iac.PNG", description: "Using Terraform and AWS to define infrastructure as code.", tech: [SiAmazon, SiDocker, SiNextdotjs], repo: "#", live: "#" },
//     { id: 10, name: "Serverless API with AWS Lambda", image: "/projects/aws-lambda-api.png", description: "A highly scalable serverless API deployed on AWS Lambda.", tech: [SiAmazon, SiNextdotjs], repo: "#", live: "#" },
// ];

// export default function Projects() {
//     const [visibleProjects, setVisibleProjects] = useState(4);

//     const loadMoreProjects = () => {
//         setVisibleProjects((prev) => Math.min(prev + 2, allProjects.length));
//     };

//     return (
//         <section id="projects" className="py-16 bg-gray-900 text-white">
//             <div className="container mx-auto px-6 md:px-12 lg:px-20">
//                 <h2 className="section-title text-4xl font-bold text-center mb-10">Projects</h2>

//                 {/* Project Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//                     {allProjects.slice(0, visibleProjects).map((project) => (
//                         <motion.div
//                             key={project.id}
//                             className="relative w-full h-64 md:h-80 cursor-pointer group border border-black transform-style-3d perspective-1000"
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <div className="absolute w-full h-full transition-transform transform-style-3d group-hover:rotate-y-180 duration-500 ease-in-out">
                                
//                                 {/* Front Side */}
//                                 <div className="absolute w-full h-full bg-black rounded-lg shadow-lg overflow-hidden">
//                                 {project.image ? (
//                                         <Image
//                                             src={project.image}
//                                             alt={project.name}
//                                             layout="fill"
//                                             objectFit="cover"
//                                             className="opacity-80"
//                                         />
//                                         ) : (
//                                             <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white font-bold text-lg p-4 rounded-lg">
//                                             {project.tech.map((TechIcon, index) => (
//                                             <span key={index} className="mx-1">
//                                                 {TechIcon.name.replace("Si", "")}
//                                             </span>
//                                             ))}
//                                         </div>
                                        
//                                         )}
//                                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
//                                         <h3 className="text-xl font-semibold">{project.name}</h3>
//                                     </div>
//                                 </div>

//                                 {/* Back Side (Flips on Hover) */}
//                                 <div className="absolute w-full h-full bg-gray-800 rounded-lg p-4 flex flex-col justify-between transform rotate-y-180 backface-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    
//                                     {/* Tech Icons on Top */}
//                                     <div className="flex justify-center gap-2 mb-2">
//                                         {project.tech.map((TechIcon, index) => (
//                                             <TechIcon key={index} className="text-3xl text-emerald-500" />
//                                         ))}
//                                     </div>

//                                     {/* Description */}
//                                     <p className="text-sm text-center">{project.description}</p>

//                                     {/* Buttons (Equally Spaced & Aligned) */}
//                                     <div className="flex gap-4 mt-4 justify-center">
//                                         <a href={project.repo} target="_blank" rel="noopener noreferrer"
//                                             className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-center w-1/2">
//                                             <FaGithub className="text-lg" />
//                                             <span>Repository</span>
//                                         </a>
//                                         <a href={project.live} target="_blank" rel="noopener noreferrer"
//                                             className="bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-lg flex items-center justify-center w-1/2">
//                                             <FaExternalLinkAlt className="text-lg" />
//                                             <span>Live Site</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}

//                 {/* View More Projects - Hidden When No More Projects */}
//                 {visibleProjects < allProjects.length && (
//                     <motion.div 
//                         className="flex items-center justify-center border border-black bg-gray-700 hover:bg-gray-600 text-white cursor-pointer w-full h-64 md:h-80"
//                         onClick={loadMoreProjects}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <span className="text-xl font-semibold flex items-center gap-2">
//                             <span>View More Projects</span> <span className="text-2xl">+</span>
//                         </span>
//                     </motion.div>
//                 )}
//                 </div>
//             </div>
//         </section>
//     );
// }