import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

export const MeusPedidos = () => {
  return (
    <>
      <body>
        <header>
          <Header />
        </header>

        <main className="mainMeusPedidos">
          <h1>meus pedidos</h1>
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};
