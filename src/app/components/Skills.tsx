"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { DiJavascript1, DiReact, DiNodejs, DiDocker, DiGit } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiGraphql, SiKubernetes, SiTerraform, SiAmazon, SiGithubactions, SiJenkins, SiHelm, SiPrometheus, SiGrafana, SiExpress } from "react-icons/si";

// Mapping stack names to their respective React Icons
const skillIcons: { [key: string]: JSX.Element } = {
  "JavaScript": <DiJavascript1 className="w-12 h-12 text-yellow-500 drop-shadow-lg shadow-white" />,
  "TypeScript": <SiTypescript className="w-12 h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "React": <DiReact className="w-12 h-12 text-blue-400 drop-shadow-lg shadow-white" />,
  "Next.js": <SiNextdotjs className="w-12 h-12 text-white drop-shadow-lg shadow-white" />,
  "Tailwind CSS": <SiTailwindcss className="w-12 h-12 text-blue-400 drop-shadow-lg shadow-white" />,
  "MongoDB": <SiMongodb className="w-12 h-12 text-green-500 drop-shadow-lg shadow-white" />,
  "Node.js": <DiNodejs className="w-12 h-12 text-green-600 drop-shadow-lg shadow-white" />,
  "Express.js": <SiExpress className="w-12 h-12 text-white drop-shadow-lg shadow-white" />,
  "GraphQL": <SiGraphql className="w-12 h-12 text-pink-500 drop-shadow-lg shadow-white" />,
  "Docker": <DiDocker className="w-12 h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "Kubernetes": <SiKubernetes className="w-12 h-12 text-blue-500 drop-shadow-lg shadow-white" />,
  "Terraform": <SiTerraform className="w-12 h-12 text-purple-500 drop-shadow-lg shadow-white" />,
  "AWS": <SiAmazon className="w-12 h-12 text-orange-500 drop-shadow-lg shadow-white" />,
  "GitHub Actions": <SiGithubactions className="w-12 h-12 text-white drop-shadow-lg shadow-white" />,
  "Jenkins": <SiJenkins className="w-12 h-12 text-red-500 drop-shadow-lg shadow-white" />,
  "Helm": <SiHelm className="w-12 h-12 text-blue-600 drop-shadow-lg shadow-white" />,
  "Prometheus": <SiPrometheus className="w-12 h-12 text-orange-500 drop-shadow-lg shadow-white" />,
  "Grafana": <SiGrafana className="w-12 h-12 text-orange-400 drop-shadow-lg shadow-white" />,
  "Git": <DiGit className="w-12 h-12 text-red-500 drop-shadow-lg shadow-white" />,
  "Azure DevOps": <Image src="/icons/azure-devops.png" alt="Azure DevOps" width={48} height={48} className="drop-shadow-lg shadow-white" />,
};

const skillsData: {
    TechnicalExperience: Record<string, string[]>;
    SoftSkills: string[];
  } = {
    TechnicalExperience: {
      Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js", "GraphQL", "MongoDB"],
      DevOps: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "Jenkins", "Helm", "Prometheus", "Grafana"],
    },
    SoftSkills: ["Leadership", "Process Optimization", "Team Building", "Strategic Planning", "Agile Methodologies"],
  };
  

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  return (
    <section id="skills" className="relative flex flex-col items-center bg-white py-20 text-black">
      {/* Section Title */}
      <motion.h2 className="text-4xl font-bold text-center mb-8 text-emerald-500" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        Technical Skills
      </motion.h2>

      {/* Category Buttons */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(skillsData.TechnicalExperience).map((category) => (
          <button key={category} className={`px-6 py-2 text-lg font-semibold rounded-md ${selectedCategory === category ? "bg-emerald-500 text-white" : "bg-gray-200 text-black hover:bg-gray-300"}`} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Scrollable Skills List */}
      <motion.div key={selectedCategory} className="w-full max-w-3xl overflow-x-auto bg-gray-200 p-6 rounded-lg shadow-lg flex space-x-4 scrollbar-hide" initial={{ opacity: 0, x: selectedCategory === "Frontend" ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        {skillsData.TechnicalExperience[selectedCategory].map((skill) => (
          <div key={skill} className="flex flex-col items-center justify-center bg-gray-800 text-white px-6 py-4 rounded-md w-36 h-36 text-center shadow-lg">
            {skillIcons[skill] || <span className="w-12 h-12"></span>} {/* Display icon if exists */}
            <span className="text-sm font-semibold mt-2">{skill}</span>
          </div>
        ))}
      </motion.div>

      {/* Soft Skills - Now Scrollable */}
<motion.div className="mt-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
  <h2 className="text-4xl font-bold text-center mb-8 text-emerald-500">Soft Skills</h2>
  <div className="w-full max-w-3xl overflow-x-auto bg-gray-200 p-6 rounded-lg shadow-lg flex space-x-4 scrollbar-hide">
    {skillsData.SoftSkills.map((skill) => (
      <div key={skill} className="flex flex-col items-center justify-center bg-gray-700 text-white px-6 py-4 rounded-md w-36 h-36 text-center shadow-lg">
        <span className="text-sm font-semibold">{skill}</span>
      </div>
    ))}
  </div>
</motion.div>


      {/* Disclaimer */}
      <motion.p className="mt-6 text-center text-gray-600 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        *I&apos;m always learning new technologies. If a specific stack isn’t listed here, I can quickly adapt to it.
      </motion.p>
    </section>
  );
}
// currently has a responsive issue with the soft skills section