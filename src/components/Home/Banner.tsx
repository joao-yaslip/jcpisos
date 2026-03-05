"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import BlurText from "../BlurText/BlurText";
import CircularText from "../CircularText/CircularText";

export default function Banner() {
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
        >
        <SwiperSlide>
          <div className="slide-item banner-1">
            <div className="texto">
                <CircularText
                    text="QUALIDADE*GARANTIDA*"
                    onHover="speedUp"
                    spinDuration={15}
                    className="custom-class"
                />
                <BlurText
                    text="JC Pisos Intertravados"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-2xl mb-8"
                />
                <p>Há mais de 10 anos no mercado de Instalação de Pisos Intertravados, oferecendo qualidade, durabilidade e excelência em cada projeto.</p>
                <Link href="/sobre-nos">Saiba Mais</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
