import "./SectionCarrosel.css";
import SapatoCarrosel from "../../assets/HomeFotos/Sapatocarrosel.png";
import Ornament11 from '../../assets/HomeFotos/Ornament 11.png'
import { BtnPrimary } from "../../Components/Buotoes/BtnPrimary/BtnPrimary";

export const SectionCarrosel = () => {
  return (
    <>
      <section className="sectionCarrosel">
        <div>
          <p className="carroselOferta">Melhores ofertas personalizadas</p>
          <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
          <p className="descricaoCarrosel">
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <div className='divBtnCarrosel'>
              <BtnPrimary  texto={"Ver Ofertas"} />
          </div>
        </div>
        <div className="divFotosCarrosel"> 
          <img src={SapatoCarrosel} alt="" />
          <div><img src={Ornament11} alt="" /></div>
        </div>
      </section>
    </>
  );
};
