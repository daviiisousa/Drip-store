import { Link } from "react-router-dom";
import { BtnWarning } from "../../Components/Buotoes/BtnWarning/BtnWarning";
import { Footer } from "../../Components/FooterComponents/Footer/Footer";
import { Header } from "../../Components/HeaderComponets/Header/Header";

import "./ComprarFinalizada.css";

export const ComprarFinalizada = () => {
  return (
    <>
      <body>
        <header>
          <Header />
        </header>
        <main>
          <div className="receipt-container">
            <div className="receipt-card">
              <div className="top">
                <img src="../../../public/emoji.png" alt="emoji1" />
                <h2>
                  Compra Realizada <br />
                  com sucesso!
                </h2>
              </div>

              <hr className="hrCompraFinalizada" />

              <div className="section">
                <h3>Informações Pessoais</h3>
                <p>
                  <strong>Nome:</strong> Francisco Antonio Pereira
                </p>
                <p>
                  <strong>CPF:</strong> 123.456.913-35
                </p>
                <p>
                  <strong>Email:</strong> francisco@gmail.com
                </p>
                <p>
                  <strong>Celular:</strong> (85) 5555-5555
                </p>
              </div>

              <hr className="hrCompraFinalizada" />

              <div className="section">
                <h3>Informações de Entrega</h3>
                <p>
                  <strong>Endereço:</strong> Rua João Pessoa, 333
                </p>
                <p>
                  <strong>Bairro:</strong> Centro
                </p>
                <p>
                  <strong>Cidade:</strong> Fortaleza, Ceará
                </p>
                <p>
                  <strong>CEP:</strong> 433-8800
                </p>
              </div>

              <hr className="hrCompraFinalizada" />

              <div className="section">
                <h3>Informações de Pagamento</h3>
                <p>
                  <strong>Titular do Cartão:</strong> FRANCISCO A P
                </p>
                <p>
                  <strong>Final:</strong> ************2020
                </p>
              </div>

              <hr className="hrCompraFinalizada" />

              <div className="section">
                <h3>Resumo da compra</h3>
                <div className="product">
                  <img src="../../../public/Shoes.png" alt="Shoes" />
                  <p>
                    Tênis Nike Revolution 6 Next Nature <br />
                    Masculino
                  </p>
                </div>
                <div className="total">
                  <h3>Total</h3>
                  <div className="total-price">
                    <p className="total-number">R$ 219,00</p>
                    <small>ou 10x de R$ 21,00 sem juros</small>
                  </div>
                </div>
              </div>

              <hr className="hrCompraFinalizada" />

              <div className="button-container">
                <a className="print-button">Imprimir Recibo</a>
              </div>
            </div>
            <div className="back-home-container">
             <Link style={{width: '39%'}} to={'/'}> 
             <BtnWarning style={{width: '100%'}} >
                Voltar para Home
              </BtnWarning>
             </Link>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};
