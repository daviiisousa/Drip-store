import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

import './FinalizarCompra.css'

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
                            <h2>Informações Pessoais</h2>
                            <hr />
                            <form action="">
                                <div>
                                    <label htmlFor="">Nome Completo *</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">CPF *</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">E-mail *</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Celular *</label>
                                    <input type="text" />
                                </div>
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
}