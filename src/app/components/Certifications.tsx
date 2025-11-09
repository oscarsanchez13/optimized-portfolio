"use client";
import React from "react";

const certifications = [
  {
    title: "Full-Stack Software Engineer",
    provider: "Thinkful",
    date: "Issued 2023",
  },
  {
    title: "Full-Stack Engineering",
    provider: "Udemy",
    date: "Issued 2022",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    provider: "Linux Foundation",
    date: "Coming Soon",
  },
  {
    title: "HashiCorp Terraform Associate",
    provider: "HashiCorp",
    date: "Coming Soon",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    provider: "AWS",
    date: "Coming Soon",
  },
  {
    title: "GitHub Actions for DevOps",
    provider: "GitHub",
    date: "Coming Soon",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    provider: "Microsoft",
    date: "Coming Soon",
  },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        {/* Grid layout for certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`glass-strong border-2 rounded-xl p-8 transition-all duration-300 hover:scale-105 glow-hover relative ${
                cert.date === "Coming Soon"
                  ? "border-gray-500/30 opacity-70"
                  : "border-emerald-400/50"
              }`}
            >
              {/* Certificate Content */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`text-4xl mb-2 ${cert.date === "Coming Soon" ? "grayscale opacity-50" : ""}`}>
                  🎓
                </div>
                <h3 className={`text-xl font-bold ${cert.date === "Coming Soon" ? "text-gray-400" : "text-emerald-400"}`}>
                  {cert.title}
                </h3>
                <p className={`text-sm ${cert.date === "Coming Soon" ? "text-gray-500" : "text-gray-300"}`}>
                  {cert.provider}
                </p>
                <p className={`text-xs italic ${cert.date === "Coming Soon" ? "text-gray-600" : "text-emerald-300"}`}>
                  {cert.date}
                </p>
              </div>

              {/* Coming Soon Badge */}
              {cert.date === "Coming Soon" && (
                <div className="absolute top-3 right-3 glass border border-emerald-400/30 px-3 py-1 text-xs font-bold rounded-lg text-emerald-400">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

// import React from 'react';

// const certificates = [
//   {
//     title: 'Full-Stack Software Engineer',
//     imageUrl: '/path-to-your-image/fullstack-software-engineer.png',
//   },
//   {
//     title: 'Full-Stack Engineering',
//     imageUrl: '/path-to-your-image/fullstack-engineering.png',
//   },
//   // Add more certificates as needed
// ];

// const Certifications = () => {
//   return (
//     <section className="py-20 bg-gray-100 text-gray-900">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certificates.map((cert, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <img
//                 src={cert.imageUrl}
//                 alt={cert.title}
//                 className="w-full h-auto shadow-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold text-center">{cert.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;