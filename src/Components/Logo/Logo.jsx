import { Link } from "react-router-dom";
import logo from "../../assets/HomeFotos/LogoDg.png"

import './Logo.css'

export const Logo = () => {
  return (
    <>
      <Link className="linkLogin" to={"/"}>
        <img src={logo} alt="Logo" className="imgLogo" />
        <span className="logo">Digital Store</span>
      </Link>
    </>
  );
};
