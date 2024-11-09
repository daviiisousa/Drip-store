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
import { BtnWarning } from "../../Buotoes/BtnWarning/BtnWarning";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { ProdutoItem } from "../../ProdutoItem/ProdutoItem";

export const SectionProdutosDetalhes = () => {

    const {produtos} = useContext(ProductContext)
    const produtosLimitados = produtos.slice(0, 4)

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
              <SwiperSlide className="red">
                <DivFotosCarrosel style={{display: "none"}} className={"teste"}  fotoCarrosel={sapatoPadrao} />
              </SwiperSlide>
              <SwiperSlide className="black">
                <DivFotosCarrosel style={{display: "none"}} fotoCarrosel={sapatoBlack} />
              </SwiperSlide>
              <SwiperSlide className="brow">
                <DivFotosCarrosel style={{display: "none"}} fotoCarrosel={sapatoBrow} />
              </SwiperSlide>
              <SwiperSlide className="purple">
                <DivFotosCarrosel style={{display: "none"}} fotoCarrosel={sapatoPurple} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="divTextos">
              <div className="textoDetalhes">
                   <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                   <p>Casual | Nike | REF:38416711</p>
                   <p>R$219,00</p>
                   <h2>Descrição do produto</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
              <div className="tamanhos"></div>
              <div className="cores"></div>
              <div className="btn-container">
                <BtnWarning texto={"Comprar"}/>
              </div>
          </div>
      </section>
      <div className="produtos-em-alta-header">
        <h2>Produtos em alta</h2>
        <Link to={"/produtos"} className="ver-todos">
          Ver todos →
        </Link>
      </div>
      <div className="produtos">
        {produtosLimitados.map((produto) => (
          <ProdutoItem
            key={produto.id}
            nome={produto.nome}
            categoria={produto.categoria}
            precoAntigo={produto.precoAntigo}
            precoNovo={produto.precoNovo}
            desconto={produto.desconto}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </>
  );
};
