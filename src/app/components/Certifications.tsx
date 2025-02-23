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
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center p-6 border-4 shadow-lg rounded-xl transform transition-transform hover:scale-105
                ${
                  cert.date === "Coming Soon"
                    ? "border-gray-600 text-gray-500 bg-gray-800"
                    : "border-yellow-500 bg-gray-700"
                }`}
            >
              <h3 className="text-xl font-semibold text-center">{cert.title}</h3>
              <p className="text-sm text-center">{cert.provider}</p>
              <p className="text-xs italic mt-2">{cert.date}</p>

              {/* Optional Ribbon for Upcoming Certifications */}
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

export default Certifications;