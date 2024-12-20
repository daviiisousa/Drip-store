import React from "react";
import "./login.css";
import { Footer } from "../../Components/FooterComponents/Footer/Footer";
import { Logo } from "../../Components/Logo/Logo";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
      <body>
        <header className="headerLogin">
          <Logo />
        </header>
        <main>
          <div className="login-page">
            <div className="login-container">
              <h2>Acesse sua conta</h2>
              <p className="paragrafoLogin">
                Novo cliente? Então registre-se <Link to={'/register'}>aqui</Link>.
              </p>
              <form className="login-form">
                <label className="labelLogin" htmlFor="login">
                  Login *
                </label>
                <input
                  className="inputLogin"
                  type="text"
                  id="login"
                  placeholder="Insira seu login ou email"
                  required
                />
                <label className="labelLogin" htmlFor="senha">
                  Senha *
                </label>
                <input
                  className="inputLogin"
                  type="password"
                  id="senha"
                  placeholder="Insira sua senha"
                  required
                />
                <a href="#forgot-password" className="forgot-password">
                  Esqueci minha senha
                </a>
                <button type="submit" className="login-button">
                  Acessar Conta
                </button>
                <div className="social-login">
                  <p className="login-options">Ou faça login com</p>
                  <img className= "social-login2" src="../../../public/gmail.png" alt="Google" />
                  <img  className= "social-login2" src="../../../public/facebook.png" alt="Facebook" />
                </div>
              </form>
            </div>
            <div className="image-container">
              <img
                src="../../../public/SapatoLogin.png"
                alt="Sapatos"
                className="shoes-image image1"
              />
              <img
                src="../../../public/SapatoLogin2.png"
                alt="Sapatos"
                className="shoes-image image2"
              />
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default Login;
