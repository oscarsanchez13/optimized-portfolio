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
        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        {/* Horizontal scroll container for certificates */}
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`relative min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] flex flex-col items-center justify-center p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105
                ${
                  cert.date === "Coming Soon"
                    ? "border-gray-600 text-gray-500 bg-gray-800"
                    : "border-gray-400 bg-gray-700"
                }`}
              style={{
                borderWidth: "10px",
                borderStyle: "solid",
                borderColor: cert.date === "Coming Soon" ? "#555" : "#ccc",
                backgroundColor: cert.date === "Coming Soon" ? "#222" : "#fff",
                color: cert.date === "Coming Soon" ? "#777" : "#000",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
              }}
            >
              <div className="w-full flex flex-col items-center p-4">
                <h3 className="text-lg font-bold text-center">{cert.title}</h3>
                <p className="text-sm text-center">{cert.provider}</p>
                <p className="text-xs italic mt-2">{cert.date}</p>
              </div>

              {/* Ribbon for "Coming Soon" badges */}
              {cert.date === "Coming Soon" && (
                <div className="absolute top-2 right-2 bg-gray-600 text-white px-3 py-1 text-xs font-bold rounded-lg">
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

// export default Certifications;

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
