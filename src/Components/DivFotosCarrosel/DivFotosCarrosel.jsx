import './DivFotosCarrosel.css'
import sapatoCarroselReto from '../../assets/HomeFotos/sapatoCarroselReto.png'
import Ornament11 from "../../assets/HomeFotos/Ornament 11.png";

export const DivFotosCarrosel = () => {
    return ( 
        <>
             <div className="divFotosCarrosel">
              <div className="divSapatoCarrosel"><img className="sapatoCarrosel" src={sapatoCarroselReto} alt="sapatp nike" /></div>
              <img src={Ornament11} alt="ornament" />
            </div>
        </>
     );
}