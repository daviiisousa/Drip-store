import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { DivFotosCarrosel } from "../../DivFotosCarrosel/DivFotosCarrosel";
import "./SectionProdutosDetalhes.css";
import sapatoPadrao from "../../../assets/HomeFotos/Sapatocarrosel.png";
import sapatoBlack from "../../../assets/HomeFotos/black-sneaker.png";
import sapatoBrow from "../../../assets/HomeFotos/brown-sneaker.png";
import sapatoPurple from "../../../assets/HomeFotos/purple-sneaker.png";
import { Navigation, Pagination } from "swiper/modules";
import { BtnWarning } from "../../Buotoes/BtnWarning/BtnWarning";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { ProdutoItem } from "../../ProdutoItem/ProdutoItem";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export const SectionProdutosDetalhes = () => {
  const { produtos } = useContext(ProductContext);
  const produtosLimitados = produtos.slice(0, 4);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = (size) => {
    setSelectedSize(size);
  };

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
              <DivFotosCarrosel
                style={{ display: "none" }}
                className={"teste"}
                fotoCarrosel={sapatoPadrao}
              />
            </SwiperSlide>
            <SwiperSlide className="black">
              <DivFotosCarrosel
                style={{ display: "none" }}
                fotoCarrosel={sapatoBlack}
              />
            </SwiperSlide>
            <SwiperSlide className="brow">
              <DivFotosCarrosel
                style={{ display: "none" }}
                fotoCarrosel={sapatoBrow}
              />
            </SwiperSlide>
            <SwiperSlide className="purple">
              <DivFotosCarrosel
                style={{ display: "none" }}
                fotoCarrosel={sapatoPurple}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="divTextos">
          <div className="textoDetalhes">
            <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <p className="marcaSapato">Casual | Nike | REF:38416711</p>
            <div className="starts">
              <FaStar className="fullStar" />
              <FaStar className="fullStar" />
              <FaStar className="fullStar" />
              <FaStar className="fullStar" />
              <CiStar className="emptyStar" />
            </div>

            <p className="preco">
              R$<span className="precoNumero">219</span>,00
            </p>
            <h2 className="tituloDescricaoProduto">Descrição do produto</h2>
            <p className="descricaoProduto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="divTamanhos">
            <h2>Tamanho</h2>
            <div className="tamanhos">
              {[39, 40, 41, 42, 43].map((size) => (
                <span
                  key={size}
                  onClick={() => handleClick(size)}
                  style={{
                    backgroundColor: selectedSize === size ? "#c92071" : "",
                  }}
                  className="tamanhoNumero"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="divCores">
            <h2>Cores</h2>
            <div className="cores">
              <input className="corInput red" type="radio" name="cor" id="" />
              <input className="corInput black" type="radio" name="cor" id="" />
              <input className="corInput brow" type="radio" name="cor" id="" />
              <input
                className="corInput purple"
                type="radio"
                name="cor"
                id=""
              />
            </div>
          </div>
          <Link to={"/compraDetalhes"} >
            <BtnWarning texto={"Comprar"} />
          </Link>
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
