import "./SectionCarrosel.css";
import { DivFotosCarrosel } from "../DivFotosCarrosel/DivFotosCarrosel";
import { BtnPrimary } from "../../Components/Buotoes/BtnPrimary/BtnPrimary";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


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
            <div className="divTextosCarrosel">
              <p className="carroselOferta">Melhores ofertas personalizadas</p>
              <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <div className="divBtnCarrosel">
                <BtnPrimary texto={"Ver Ofertas"} />
              </div>
            </div>

            <DivFotosCarrosel />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <div className="divTextosCarrosel">
              <p className="carroselOferta">Melhores ofertas personalizadas</p>
              <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <div className="divBtnCarrosel">
                <BtnPrimary texto={"Ver Ofertas"} />
              </div>
            </div>

            <DivFotosCarrosel />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <div className="divTextosCarrosel">
              <p className="carroselOferta">Melhores ofertas personalizadas</p>
              <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <div className="divBtnCarrosel">
                <BtnPrimary texto={"Ver Ofertas"} />
              </div>
            </div>

            <DivFotosCarrosel />
            </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="sectionCarrosel">
            <div className="divTextosCarrosel">
              <p className="carroselOferta">Melhores ofertas personalizadas</p>
              <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
              <p className="descricaoCarrosel">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <div className="divBtnCarrosel">
                <BtnPrimary texto={"Ver Ofertas"} />
              </div>
            </div>

           <DivFotosCarrosel />
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
