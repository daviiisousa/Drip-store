import "./SectionCarrosel.css";
import { DivFotosCarrosel } from "../DivFotosCarrosel/DivFotosCarrosel";

import sapatoPadrao from "../../assets/HomeFotos/Sapatocarrosel.png";
import sapatoBlack from "../../assets/HomeFotos/black-sneaker.png";
import sapatoBrow from "../../assets/HomeFotos/brown-sneaker.png";
import sapatoPurple from "../../assets/HomeFotos/purple-sneaker.png";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TextosCarrosel } from "../TextosCarrosel/TextosCarrosel";

export const SectionCarrosel = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <section className="sectionCarrosel">
            <TextosCarrosel />

            <DivFotosCarrosel fotoCarrosel={sapatoPadrao} />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <TextosCarrosel />

            <DivFotosCarrosel fotoCarrosel={sapatoBrow} />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <TextosCarrosel />

            <DivFotosCarrosel fotoCarrosel={sapatoBlack} />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <TextosCarrosel />

            <DivFotosCarrosel fotoCarrosel={sapatoPurple} />
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
