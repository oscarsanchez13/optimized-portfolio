"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const recommendations = [
  {
    name: "John Doe",
    image: "/images/john-doe.jpg",
    message: "An outstanding engineer with a strong work ethic. Highly recommend!",
  },
  {
    name: "Jane Smith",
    image: "/images/jane-smith.jpg",
    message: "A pleasure to work with. Always delivers high-quality results.",
  },
  {
    name: "Robert Johnson",
    image: "/images/robert-johnson.jpg",
    message: "Incredibly skilled and passionate about technology.",
  },
  {
    name: "Emily Davis",
    image: "/images/emily-davis.jpg",
    message: "Brings great leadership and technical expertise to any team.",
  },
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {recommendations.map((rec, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
                />
                <h3 className="text-lg font-semibold mt-4">{rec.name}</h3>
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