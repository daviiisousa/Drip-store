import React from 'react';
import './login.css';
// import SapatoLogin from "../../assets/HomeFotos/SapatoLogin.png"
// import SapatoLogin2 from "../../assets/HomeFotos/SapatoLogin2.png"
// import facebook from "../../../public/facebook.png"
// import gmail from "../../assets/Icons/gmail.png"


function Login() {
  return (
    <div className="login-page">
    
      <div className="login-container">
        <h2>Acesse sua conta</h2>
        <p>Novo cliente? Então registre-se <a href="#register">aqui</a>.</p>

        <form className="login-form">
          <label htmlFor="login">Login *</label>
          <input type="text" id="login" placeholder="Insira seu login ou email" required />

          <label htmlFor="senha">Senha *</label>
          <input type="password" id="senha" placeholder="Insira sua senha" required />

          <a href="#forgot-password" className="forgot-password">Esqueci minha senha</a>
          
          <button type="submit" className="login-button">Acessar Conta</button>
          
          <div className="social-login">
            <p className="login-options">Ou faça login com</p>
            <img src="../../../public/gmail.png" alt="Google" />
            <img src="../../../public/facebook.png" alt="Facebook" />
          </div>
        </form>
      </div>

      <div className="image-container">
        <img src="../../../public/SapatoLogin.png" alt="Sapatos" className="shoes-image image1"  />
        <img src="../../../public/SapatoLogin2.png" alt="Sapatos" className="shoes-image image2" />
      </div>
    </div>
  );
}

export default Login;