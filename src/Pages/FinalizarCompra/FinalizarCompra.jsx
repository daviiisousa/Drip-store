import { BtnWarning } from "../../Components/Buotoes/BtnWarning/BtnWarning";
import { Footer } from "../../Components/FooterComponents/Footer/Footer";
import { Header } from "../../Components/HeaderComponets/Header/Header";
import { SectionFinalizarCompra } from "../../Components/Sections/SectionFinalizarCompra/SectionFinalizarCompra";

import "./FinalizarCompra.css";

import sapatoPadrao from "../../assets/HomeFotos/Sapatocarrosel.png";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input/Input";

export const FinalizarCompra = () => {
  return (
    <>
      <body>
        <header>
          <Header />
        </header>
        <main className="mainFinalizarCompra">
          <section className="sectionFinalizarComprar">
            <h1 className="tituloFinalizarComprar">Finalizar Compra</h1>
            <SectionFinalizarCompra>
              <h2 className="tituloInformaçoesPessoais">
                Informações Pessoais
              </h2>
              <hr className="hrInformaçoes" />
              <form className="formInformaçoesPessoais">
                <label htmlFor="nome">Nome Completo *</label>
                <Input placeholder="insira seu nome" type="texte" id="nome" />

                <label htmlFor="cpf">CPF *</label>
                <Input placeholder="insira seu cpf" type="text" id="cpf" />

                <label htmlFor="email">E-mail *</label>
                <Input placeholder="insira seu email" type="text" id="email" />

                <label htmlFor="celular">Celular *</label>
                <Input
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
              <hr className="hrInformaçoes" />
              <form className="formInformaçoesPessoais" action="">
                <label htmlFor="Endereço">Endereço *</label>
                <Input
                  placeholder="insira seu Endereço"
                  type="text"
                  id="Endereço"
                />
                <label htmlFor="Bairro">Bairro *</label>
                <Input
                  placeholder="insira seu Bairro"
                  type="text"
                  id="Bairro"
                />
                <label htmlFor="Cidade">Cidade *</label>
                <Input
                  placeholder="insira seu Cidade"
                  type="text"
                  id="Cidade"
                />
                <label htmlFor="CEP">CEP *</label>
                <Input placeholder="insira seu CEP" type="text" id="CEP" />
                <label htmlFor="Complemento">Complemento</label>
                <Input
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
              <hr className="hrInformaçoes" />
              <h2 className="formaDepagamento">Forma de Pagamento</h2>
              <form className="formTipoCartao">
                <div className="inputFinalizarPagmento">
                  <input type="radio" name="pagamento" id="Crédito" />
                  <label htmlFor="Crédito">Cartão de Crédito</label>
                </div>
                <div className="inputFinalizarPagmento">
                  <input type="radio" name="pagamento" id="Bancário" />
                  <label htmlFor="Bancário">Boleto Bancário</label>
                </div>
              </form>
              <form>
                <div>
                  <label htmlFor="Cartao" className="labelFinalizarCompra">
                    Nome do Cartão *
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="insira o nome do Cartão"
                    type="text"
                    id="Cartao"
                  />
                </div>
                <div className="divInformaçoesCartao">
                  <div className="divNumeroCartao">
                    <label
                      htmlFor="CartaoNumero"
                      className="labelFinalizarCompra"
                    >
                      Data o Número do Cartão *
                    </label>
                    <Input
                      placeholder="Insira o número do Cartão"
                      type="text"
                      id="CartaoNumero"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="CartaoValidade"
                      className="labelFinalizarCompra"
                    >
                      Data de validade do Cartão *
                    </label>
                    <Input
                      placeholder="Insira a valiade do Cartão"
                      type="text"
                      id="CartaoValidade"
                    />
                  </div>
                </div>
                <div className="divCVV">
                  <label className="labelFinalizarCompra" htmlFor="CVV">
                    CVV *
                  </label>
                  <Input
                    style={{ width: "40%" }}
                    placeholder="Insira a valiade do Cartão"
                    type="text"
                    id="CVV"
                  />
                </div>
              </form>
            </SectionFinalizarCompra>
            <SectionFinalizarCompra>
              <div>
                <h2 className="tituloFinalizarCompra">Finalizar Compra</h2>
                <hr className="hrInformaçoes" />
                <div className="divTotalPreco">
                  <h2 className="tituloTotal">Total</h2>
                  <span className="precoResumo">R$ 219,00</span>
                </div>
                <p className="paragrafoPreco">
                  ou 10x de R$ 21,00 sem juros
                </p>
                <Link to={'/comprarFinalizada'}>
                  <BtnWarning style={{width: '100%', marginTop: '20px'}}>
                    Finalizar Pagamento
                  </BtnWarning>
                </Link>
              </div>
            </SectionFinalizarCompra>
          </section>
          <section className="sectionResumo">
            <SectionFinalizarCompra style={{ width: "100%" }}>
              <div className="divResumo">
                <h2 className="tituloResumo">RESUMO</h2>
                <hr className="hrInformaçoes" />
                <div className="divResumoItem">
                  <div className="divImgResumo">
                    <img className="imgResumo" src={sapatoPadrao} alt="" />
                  </div>
                  <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                </div>
              </div>
              <hr className="hrInformaçoes" />
              <div className="divDetalhesCompra">
                <h2 className="h2DetalhesCompra">
                  <span className="spanDetalhe">Subtotal:</span> R$ 219,00
                </h2>
                <h2 className="h2DetalhesCompra">
                  <span className="spanDetalhe">Frete:</span> R$ 0,00
                </h2>
                <h2 className="h2DetalhesCompra">
                  <span className="spanDetalhe">Desconto:</span> R$ 30,00
                </h2>
              </div>
              <div className="divPrecoTotal">
                <div className="PrecoTotal">
                  <h2>Total</h2>
                  <span className="spanPrecoTotal">R$ 219,00</span>
                </div>
                <p className="paragrafoPreco">ou 10x de R$ 21,00 sem juros</p>
              </div>
              <Link to={'/comprarFinalizada'}>
                <BtnWarning style={{width: '100%'}}>
                  Finalizar Pagamento
                </BtnWarning>
              </Link>
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
