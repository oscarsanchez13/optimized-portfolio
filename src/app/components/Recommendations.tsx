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
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Recommendations</h2>

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
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <Image
                  src={rec.image}
                  alt={rec.name}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-gray-300 shadow-md"
                />
                <h3 className="text-lg font-semibold mt-4">{rec.name}</h3>
                <p className="text-sm text-gray-600">{rec.role}</p>
                <hr className="w-1/2 my-4 border-gray-300" />
                <p className="text-sm text-gray-600 mt-2 italic text-center">
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
