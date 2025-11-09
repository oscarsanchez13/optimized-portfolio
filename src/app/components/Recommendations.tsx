"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const recommendations = [
  {
    name: "Jim Medlock",
    image: "/images/jim-medlock.jpg",
    role: "Founder & CEO of CHINGU",
    message: "An outstanding engineer with a strong work ethic. Highly recommend!",
  },
  {
    name: "Josh Neufeld",
    image: "/images/josh-neufeld.jpg",
    role: "VP of Operations at Brinker Int.",
    message: "A pleasure to work with. Always delivers high-quality results.",
  },
  {
    name: "Ricardo Aguilera",
    image: "/images/ricardo-aguilera.jpg",
    role: "Product Owner",
    message: "Brings great leadership and technical expertise to any team.",
  },
  {
    name: "Roxanne Davis",
    image: "/images/roxanne-davis.jpg",
    role: "Senor Software Engineer",
    message: "Incredibly skilled and passionate about technology.",
  },
  // {
  //   name: "Curtis Goolsby",
  //   image: "/images/curtis-goolsby.jpg",
  //   role: "Site Reliability Engineer",
  //   message: "A true professional who is always willing to go the extra mile.",
  // },
];

const Recommendations = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="section-title text-4xl font-bold mb-12">Recommendations</h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {recommendations.map((rec, index) => (
            <SwiperSlide key={index}>
              <div className="glass-strong border border-emerald-400/30 p-8 rounded-xl shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-300 glow-hover h-full">
                <Image
                  src={rec.image}
                  alt={rec.name}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-emerald-400/50 shadow-lg shadow-emerald-500/20"
                />
                <h3 className="text-xl font-bold mt-6 text-emerald-400">{rec.name}</h3>
                <p className="text-sm text-gray-300 mt-2">{rec.role}</p>
                <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent my-4" />
                <p className="text-sm text-gray-300 mt-2 italic text-center leading-relaxed">
                  &quot;{rec.message}&quot;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recommendations;


// import React from 'react';

// const Recommendations = () => {
//     return (
//         <div className="flex flex-col items-center justify-center h-96 bg-gray-100 border-4 border-yellow-500 text-center p-6 rounded-lg shadow-lg">
//             <div className="text-4xl font-bold text-gray-700">🚧 Recommendations Section Coming Soon 🚧</div>
//             <p className="text-lg text-gray-600 mt-4">This section is currently under reconstruction.</p>
//             <div className="mt-6 w-full h-12 bg-yellow-500 text-black font-bold text-xl flex items-center justify-center">
//                 ⚠️ Construction in Progress ⚠️
//             </div>
//         </div>
//     );
// };

// export default Recommendations;
