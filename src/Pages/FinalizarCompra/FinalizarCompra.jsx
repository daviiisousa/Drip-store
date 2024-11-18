import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { SectionFinalizarCompra } from "../../Components/Sections/SectionFinalizarCompra/SectionFinalizarCompra";

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
            <SectionFinalizarCompra>
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
                <input
                  placeholder="insira seu celuar"
                  type="text"
                  id="celular"
                />
              </form>
            </SectionFinalizarCompra>

            <SectionFinalizarCompra>
              <h2 className="tituloInformaçoesPessoais">
                Informações de Entrega
              </h2>
              <hr className="h2Informaçoes" />
              <form className="formInformaçoesPessoais" action="">
                <label htmlFor="Endereço">Endereço *</label>
                <input placeholder="insira seu Endereço" type="text" id="Endereço" />
                <label htmlFor="Bairro">Bairro *</label>
                <input placeholder="insira seu Bairro" type="text" id="Bairro" />
                <label htmlFor="Cidade">Cidade *</label>
                <input placeholder="insira seu Cidade" type="text" id="Cidade" />
                <label htmlFor="CEP">CEP *</label>
                <input
                  placeholder="insira seu CEP"
                  type="text"
                  id="CEP"
                />
                <label htmlFor="Complemento">Complemento</label>
                <input
                  placeholder="insira seu Complemento"
                  type="text"
                  id="Complemento"
                />
              </form>
            </SectionFinalizarCompra>
            <SectionFinalizarCompra>
              <h2 className="tituloInformaçoesPessoais">
                Informações de Pagamento
              </h2>
              <hr className="h2Informaçoes" />
                <h2 className="formaDepagamento">Forma de Pagamento</h2>
              <form className="formTipoCartao">
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Cartão de Crédito</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Boleto Bancário</label>
                </div>
              </form>
              <div>
                <h2>Nome do Cartão *</h2>
                <input
                  placeholder="insira seu CEP"
                  type="text"
                  id="CEP"
                />
              </div>
            </SectionFinalizarCompra>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};
