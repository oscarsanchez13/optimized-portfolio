"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { recommendations } from "@/data/profile";


const Recommendations = () => {
  return (
    <section id="recommendations" className="py-20 bg-black text-white">
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
