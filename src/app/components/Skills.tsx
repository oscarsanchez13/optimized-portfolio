"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const skillsData = {
  TechnicalExperience: {
    Frontend: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
    Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
    DevOps: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions"],
  },
  SoftSkills: [
    "Leadership",
    "Process Optimization",
    "Team Building",
    "Strategic Planning",
  ],
};

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  // Fetch a random image from Unsplash API
  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=technology,dark,coding&client_id=YOUR_UNSPLASH_ACCESS_KEY`
        );
        const data = await response.json();
        setBackgroundImage(data.urls.full);
      } catch (error) {
        console.error("Failed to fetch background image", error);
      }
    };

    fetchBackground();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-row h-screen bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(to bottom, #0d1117, #161b22)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Massive Vertical "SKILLS" Title */}
      <div className="absolute left-4 top-0 h-full flex items-center">
        <motion.h1
          className="text-gray-300 dark:text-gray-600 text-[12vw] font-extrabold tracking-wide uppercase leading-none"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
        >
          SKILLS
        </motion.h1>
      </div>

      {/* Skills Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 lg:px-32 relative z-10">
        {/* Main Node */}
        <motion.div
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Experience
        </motion.div>

        {/* Branches */}
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {Object.entries(skillsData.TechnicalExperience).map(
            ([category, skills], index) => (
              <motion.div
                key={category}
                className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-md w-72 h-40 overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill, i) => (
                    <motion.li
                      key={skill}
                      className="text-center text-gray-700 dark:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
