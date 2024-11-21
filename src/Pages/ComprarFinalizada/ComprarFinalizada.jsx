import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

import './ComprarFinalizada.css';

export const ComprarFinalizada = () => {
    return (
        <>
            <div>
                <header className="Header">
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
                        </div>

                        <hr />

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

                        <hr />

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

                        <hr />

                        <div className="section">
                            <h3>Informações de Pagamento</h3>
                            <p>
                                <strong>Titular do Cartão:</strong> FRANCISCO A P
                            </p>
                            <p>
                                <strong>Final:</strong> ************2020
                            </p>
                        </div>

                        <hr />

                        <div className="section">
                            <h3>Resumo da compra</h3>
                            <div className="product">
                                <div className="productBoxImage">
                                    <img
                                        src="../../../public/Shoes.png"
                                        alt="Shoes"
                                    />
                                </div>
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

                        <hr />

                        <div className="button-container">
                            <a className="print-button" href="#!">Imprimir Recibo</a>
                        </div>
                        <div className="back-home-container">
                            <button className="back-button">Voltar para Home</button>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};