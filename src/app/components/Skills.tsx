"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { DiJavascript1, DiReact, DiNodejs, DiDocker, DiGit, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiGraphql, SiKubernetes, SiTerraform, SiAmazon, SiGithubactions, SiJenkins, SiHelm, SiPrometheus, SiGrafana, SiExpress, SiHtml5, SiCss3, SiGitlab, SiNetlify, SiFigma, SiPostman, SiAuth0, SiVercel } from "react-icons/si";

// Mapping stack names to their respective React Icons
const skillIcons: { [key: string]: JSX.Element } = {
  "JavaScript": <DiJavascript1 className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 drop-shadow-lg shadow-white" />,
  "TypeScript": <SiTypescript className="w-10 h-10 md:w-12 md:h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "React": <DiReact className="w-10 h-10 md:w-12 md:h-12 text-blue-400 drop-shadow-lg shadow-white" />,
  "Next.js": <SiNextdotjs className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg shadow-white" />,
  "Tailwind CSS": <SiTailwindcss className="w-10 h-10 md:w-12 md:h-12 text-blue-400 drop-shadow-lg shadow-white" />,
  "MongoDB": <SiMongodb className="w-10 h-10 md:w-12 md:h-12 text-green-500 drop-shadow-lg shadow-white" />,
  "Node.js": <DiNodejs className="w-10 h-10 md:w-12 md:h-12 text-green-600 drop-shadow-lg shadow-white" />,
  "Express.js": <SiExpress className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg shadow-white" />,
  "GraphQL": <SiGraphql className="w-10 h-10 md:w-12 md:h-12 text-pink-500 drop-shadow-lg shadow-white" />,
  "Docker": <DiDocker className="w-10 h-10 md:w-12 md:h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "Kubernetes": <SiKubernetes className="w-10 h-10 md:w-12 md:h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "Terraform": <SiTerraform className="w-10 h-10 md:w-12 md:h-12 text-purple-500 drop-shadow-lg shadow-white" />,
  "AWS": <SiAmazon className="w-10 h-10 md:w-12 md:h-12 text-orange-500 drop-shadow-lg shadow-white" />,
  "GitHub Actions": <SiGithubactions className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg shadow-white" />,
  "Jenkins": <SiJenkins className="w-10 h-10 md:w-12 md:h-12 text-red-500 drop-shadow-lg shadow-white" />,
  "Helm": <SiHelm className="w-10 h-10 md:w-12 md:h-12 text-blue-600 drop-shadow-lg shadow-white" />,
  "Prometheus": <SiPrometheus className="w-10 h-10 md:w-12 md:h-12 text-orange-500 drop-shadow-lg shadow-white" />,
  "Grafana": <SiGrafana className="w-10 h-10 md:w-12 md:h-12 text-orange-400 drop-shadow-lg shadow-white" />,
  "Git": <DiGit className="w-10 h-10 md:w-12 md:h-12 text-red-500 drop-shadow-lg shadow-white" />,
  "GitLab": <SiGitlab className="w-10 h-10 md:w-12 md:h-12 text-orange-500 drop-shadow-lg shadow-white" />,
  "PostgreSQL": <DiPostgresql className="w-10 h-10 md:w-12 md:h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "HTML5": <SiHtml5 className="w-10 h-10 md:w-12 md:h-12 text-orange-500 drop-shadow-lg shadow-white" />,
  "CSS3": <SiCss3 className="w-10 h-10 md:w-12 md:h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "Netlify": <SiNetlify className="w-10 h-10 md:w-12 md:h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "Figma": <SiFigma className="w-10 h-10 md:w-12 md:h-12 text-pink-500 drop-shadow-lg shadow-white" />,
  "Postman": <SiPostman className="w-10 h-10 md:w-12 md:h-12 text-orange-500 drop-shadow-lg shadow-white" />,
  "Auth0": <SiAuth0 className="w-10 h-10 md:w-12 md:h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "Vercel": <SiVercel className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg shadow-white" />,
  "Azure DevOps": <Image src="/icons/azure-devops.png" alt="Azure DevOps" width={48} height={48} className="drop-shadow-lg shadow-white" />,
};

const skillsData = {
  TechnicalExperience: {
    Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Netlify", "Figma"],
    Backend: ["Node.js", "Express.js", "GraphQL", "MongoDB", "PostgreSQL", "Postman", "Auth0"],
    DevOps: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "Jenkins", "Helm", "Prometheus", "Grafana", "Git", "GitLab", "Vercel"],
  },
  SoftSkills: ["Leadership", "Process Optimization", "Team Building", "Strategic Planning", "Agile Methodologies", "Problem-Solving", "Decision-Making", "Communication", "Time Management", "Adaptability", "Bilingual (English/Spanish)"],
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof skillsData.TechnicalExperience>("Frontend");

  return (
    <section id="skills" className="relative flex flex-col items-center bg-black py-20 text-white">
      <motion.h2 className="section-title text-4xl font-bold text-center mb-12">Soft Skills</motion.h2>

      <motion.div className="w-full max-w-5xl overflow-x-auto glass-dark p-6 rounded-xl shadow-lg flex space-x-4 scrollbar-hide border border-emerald-400/20">
        {skillsData.SoftSkills.map((skill) => (
          <div key={skill} className="flex flex-col items-center justify-center glass-strong border border-emerald-400/30 px-4 py-3 rounded-xl w-32 h-32 md:w-40 md:h-40 text-center hover:scale-105 transition-transform duration-300 glow-hover">
            <span className="text-xs md:text-sm font-semibold text-emerald-400">{skill}</span>
          </div>
        ))}
      </motion.div>

      <div className="my-8"></div>

      <motion.h2 className="section-title text-4xl font-bold text-center mb-12">Technical Skills</motion.h2>

      <div className="flex space-x-4 mb-8">
        {Object.keys(skillsData.TechnicalExperience).map((category) => (
          <button
            key={category}
            className={`px-6 py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
              selectedCategory === category
                ? "glass-strong border-2 border-emerald-400 text-emerald-400 glow-primary"
                : "glass border border-emerald-400/30 text-white hover:border-emerald-400/50"
            }`}
            onClick={() => setSelectedCategory(category as keyof typeof skillsData.TechnicalExperience)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div key={selectedCategory} className="w-full max-w-5xl overflow-x-auto glass-dark p-6 rounded-xl shadow-lg flex space-x-4 scrollbar-hide border border-emerald-400/20">
        {skillsData.TechnicalExperience[selectedCategory].map((skill) => (
          <div key={skill} className="flex flex-col items-center justify-center glass-strong border border-emerald-400/30 px-4 py-3 rounded-xl w-32 h-32 md:w-40 md:h-40 text-center hover:scale-105 transition-transform duration-300 glow-hover">
            {skillIcons[skill] || <span className="w-10 h-10 md:w-12 md:h-12"></span>}
            <span className="text-xs md:text-sm font-semibold mt-2 text-white">{skill}</span>
          </div>
        ))}
      </motion.div>
      <p className="font-thin text-center mt-8 text-sm text-gray-400">* I&apos;m always learning new technologies. If a specific stack isn't listed here, I can quickly adapt to it.</p>
    </section>
  );
}
