import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

import "./FinalizarCompra.css";

export const FinalizarCompra = () => {
  return (
    <>
      <body>
        <header>
          <Header />
        </header>
        <main>
          <section className="sectionFinalizarComprar">
            <h1 className="tituloFinalizarComprar">Finalizar Compra</h1>
            <div className="divForm">
              <h2 className="tituloInformaçoesPessoais">
                Informações Pessoais
              </h2>
              <hr className="h2Informaçoes" />
              <form className="formInformaçoesPessoais" action="">
                <label htmlFor="nome">Nome Completo *</label>
                <input placeholder="insira seu nome" type="text" id="nome" />

                <label htmlFor="cpf">CPF *</label>
                <input placeholder="insira seu cpf" type="text" id="cpf" />

                <label htmlFor="email">E-mail *</label>
                <input placeholder="insira seu email" type="text" id="email" />

                <label htmlFor="celular">Celular *</label>
                <input placeholder="insira seu celuar" type="text" id="celular" />
              </form>
            </div>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};
