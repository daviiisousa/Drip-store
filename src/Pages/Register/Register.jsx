import React from "react";
import "./Register.css";
import { Footer } from "../../Components/FooterComponents/Footer/Footer";
import logo from "../../assets/HomeFotos/LogoDg.png";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input/Input";
import { BtnPrimary } from "../../Components/Buotoes/BtnPrimary/BtnPrimary";

const Register = () => {
  return (
    <body>
      <header className="headerLogin">
        <Link className="linkLogin" to={"/"}>
          <img src={logo} alt="Logo" className="imgLogo" />
          <span className="logo">Digital Store</span>
        </Link>
      </header>
      <main>
        <div className="container">
          <h1 className="page-title">Criar Conta</h1>
          <div className="create-account">
            <form className="account-form">
              <section>
                <h2 className="titlle">Informações Pessoais</h2>
                <hr />
                <div className="form-group">
                  <label htmlFor="Nome-completo">Nome Completo *</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="Nome-completo"
                    type="text"
                    placeholder="Insira seu nome"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="CPF">CPF *</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="CPF"
                    type="text"
                    placeholder="Insira seu CPF"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mail">E-mail *</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="mail"
                    type="email"
                    placeholder="Insira seu email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Celular">Celular *</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="Celular"
                    type="tel"
                    placeholder="Insira seu celular"
                    required
                  />
                </div>
              </section>

              <section>
                <h2 className="titlle2">Informações de Entrega</h2>
                <hr />
                <div className="form-group">
                  <label htmlFor="Endereço">Endereço *</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="Endereço"
                    type="text"
                    placeholder="Insira seu endereço"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Bairro">Bairro *</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="Bairro"
                    type="text"
                    placeholder="Insira seu bairro"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Cidade">Cidade *</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="Cidade"
                    type="text"
                    placeholder="Insira sua cidade"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="CEP">CEP *</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="CEP"
                    type="text"
                    placeholder="Insira seu CEP"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Complemento">Complemento</label>
                  <Input
                    style={{ width: "100%", marginBottom: "0px" }}
                    id="Complemento"
                    type="text"
                    placeholder="Insira complemento"
                  />
                </div>
              </section>

              <div className="form-group-checkbox">
                <input className="recevi" type="checkbox" id="newsletter" />
                <label htmlFor="newsletter">
                  Quero receber por email ofertas e novidades das lojas da
                  Digital Store. A frequência de envios pode variar de acordo
                  com a interação do cliente.
                </label>
              </div>

              <BtnPrimary style={{width: '100%', marginTop:'20px'}}>Criar Conta</BtnPrimary>
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
