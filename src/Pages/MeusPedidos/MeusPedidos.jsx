import { Footer } from "../../Components/FooterComponents/Footer/Footer";
import { Header } from "../../Components/HeaderComponets/Header/Header";

export const MeusPedidos = () => {
  return (
    <>
      <body>
        <header>
          <Header />
        </header>

        <main className="mainMeusPedidos">
         <div>
			<h2>Meu Perfil</h2>
		  <h2>Meus Pedidos</h2>
		  <h2>Minhas Informações</h2>
		  <h2>Métodos de Pagamento</h2>
		 </div>
		 <div>
			
		 </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};
