import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

import './CriarConta.css'

export const CriarConta = () => {
    return ( 
        <>
            <body>
                <header>
                    <Header />
                </header>
                <main className="mainCriarConta">
                    <h1>Criar Conta</h1>
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </>
     );
}