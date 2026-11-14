"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import { recommendations } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Recommendations() {
  const [autoplay, setAutoplay] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  useEffect(() => {
    setAutoplay(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section id="recommendations" className="bg-black py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="05 / In their words" title="Recommendations" />
        <div className="relative md:px-14">
        <Swiper
          onSwiper={setSwiper}
          key={autoplay ? "auto" : "still"}
          modules={[Pagination, Autoplay, A11y]}
          // Phones: one card plus a peek of the next, so it's obviously swipeable.
          slidesPerView={1.12}
          spaceBetween={12}
          rewind
          grabCursor
          pagination={{ clickable: true }}
          autoplay={autoplay ? { delay: 4500, disableOnInteraction: true, pauseOnMouseEnter: true } : false}
          breakpoints={{
            640: { slidesPerView: 1.6, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="recs-swiper"
        >
          {recommendations.map((rec) => (
            <SwiperSlide key={rec.name}>
              <article className="glass-strong flex h-full flex-col items-center rounded-xl border border-emerald-400/30 p-6 text-center shadow-xl sm:p-8">
                <Image
                  src={rec.image}
                  alt=""
                  width={96}
                  height={96}
                  sizes="96px"
                  className="h-20 w-20 rounded-full border-4 border-emerald-400/50 object-cover shadow-lg shadow-emerald-500/20 sm:h-24 sm:w-24"
                />
                <h3 className="mt-5 text-lg font-bold text-emerald-400 sm:text-xl">{rec.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{rec.role}</p>
                <div className="my-4 h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" aria-hidden />
                <blockquote className="text-sm italic leading-relaxed text-gray-300 sm:text-base">&ldquo;{rec.message}&rdquo;</blockquote>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
          {/* Arrows live in the gutter on tablet/desktop; phones swipe (pagination shows position) */}
          {[
            { label: "Previous recommendation", icon: <FiChevronLeft />, onClick: () => swiper?.slidePrev(), side: "left-0" },
            { label: "Next recommendation", icon: <FiChevronRight />, onClick: () => swiper?.slideNext(), side: "right-0" },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              aria-label={b.label}
              onClick={b.onClick}
              className={`absolute ${b.side} top-[calc(50%-1.375rem)] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-400/40 text-2xl text-emerald-400 transition-colors hover:bg-emerald-400/10 md:flex`}
            >
              {b.icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
