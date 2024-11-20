import React from "react";
import "./Register.css";
import { Footer } from "../../Components/Footer/Footer";
import logo from "../../assets/HomeFotos/LogoDg.png"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <body>
    <header className="headerLogin">
      <Link className="linkLogin" to={'/'}>
      <img src={logo} alt="Logo" className="imgLogo" />
      <span className="logo">Digital Store</span>
      </Link>
    </header>
    <main>
    <div className="container">
      <h1 className="page-title">Criar Conta</h1>
      <div className="create-account">
        <form className="account-form" >
          <section>
            <h2 className="titlle">Informações Pessoais</h2>
            <hr />
            <div className="form-group">
              <label>Nome Completo *</label>
              <input type="text" placeholder="Insira seu nome" required />
            </div>
            <div className="form-group">
              <label>CPF *</label>
              <input type="text" placeholder="Insira seu CPF" required />
            </div>
            <div className="form-group">
              <label>E-mail *</label>
              <input type="email" placeholder="Insira seu email" required />
            </div>
            <div className="form-group">
              <label>Celular *</label>
              <input type="tel" placeholder="Insira seu celular" required />
            </div>
          </section>

          <section>
            <h2 className="titlle2">Informações de Entrega</h2>
            <hr />
            <div className="form-group">
              <label>Endereço *</label>
              <input type="text" placeholder="Insira seu endereço" required />
            </div>
            <div className="form-group">
              <label>Bairro *</label>
              <input type="text" placeholder="Insira seu bairro" required />
            </div>
            <div className="form-group">
              <label>Cidade *</label>
              <input type="text" placeholder="Insira sua cidade" required />
            </div>
            <div className="form-group">
              <label>CEP *</label>
              <input type="text" placeholder="Insira seu CEP" required />
            </div>
            <div className="form-group">
              <label>Complemento</label>
              <input type="text" placeholder="Insira complemento" />
            </div>
          </section>

          <div className="form-group-checkbox">
            <input className="recevi" type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
            </label>
          </div>

          <button type="submit" className="submit-button">
            Criar Conta
          </button>
        </form>
      </div>
    </div>
    </main>
        <footer>
          <Footer />
        </footer>
      </body>
  );
};

export default Register;
