import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { DivFotosCarrosel } from "../../DivFotosCarrosel/DivFotosCarrosel";
import './SectionProdutosDetalhes.css'
import sapatoPadrao from "../../../assets/HomeFotos/Sapatocarrosel.png";
import sapatoBlack from "../../../assets/HomeFotos/black-sneaker.png";
import sapatoBrow from "../../../assets/HomeFotos/brown-sneaker.png";
import sapatoPurple from "../../../assets/HomeFotos/purple-sneaker.png";
import { Navigation, Pagination } from "swiper/modules";

export const SectionProdutosDetalhes = () => {
  return (
    <>
      <section className="sectionDetails">
          <div className="carroselDetails">
            <Swiper
               slidesPerView={1}
               spaceBetween={30}
               loop={true}
               pagination={{
                 clickable: true,
               }}
               navigation={true}
               modules={[Pagination, Navigation]}
               className="mySwiper"
            >
              <SwiperSlide>
                <DivFotosCarrosel style={{display: "none"}} className={"teste"}  fotoCarrosel={sapatoPadrao} />
              </SwiperSlide>
              <SwiperSlide>
                <DivFotosCarrosel style={{display: "none"}} fotoCarrosel={sapatoBlack} />
              </SwiperSlide>
              <SwiperSlide>
                <DivFotosCarrosel style={{display: "none"}} fotoCarrosel={sapatoBrow} />
              </SwiperSlide>
              <SwiperSlide>
                <DivFotosCarrosel style={{display: "none"}} fotoCarrosel={sapatoPurple} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="textoDetalhes">
               <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
               <p>Casual | Nike | REF:38416711</p>
               <p>R$219,00</p>
               <h2>Descrição do produto</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div className="tamanhos"></div>
          <div className="cores"></div>
          <div className="btn-container"></div>
      </section>
    </>
  );
};
