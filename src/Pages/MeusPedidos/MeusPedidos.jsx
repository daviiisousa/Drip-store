import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";

import "./MeusPedidos.css";

export const MeusPedidos = () => {
  return (
    <>
      <body>
        <header>
          <Header/>
        </header>
		
        <main className="mainMeusPedidos">
          <div className="divContainer">
            <div>
              <h2 class="Meu-Perfil">Meu Perfil</h2>
			  <br/>
              <h2 class="titulo-dois">Meus Pedidos</h2>
			  <br/>
              <h2 class="titulo-especial">Minhas Informações</h2>
			  <br/>
              <h2 class="titulo-um">Métodos de Pagamento</h2>
			  <br/>
            </div>

            <div className="mainInformações">
              <h2 class="Mnhas-inf">Minhas Informações</h2>
			  <br/>
              <h2 class="Infor-Pess">Informações Pessoais</h2>
			  <br/>
              <h2 class="Nome">Nome</h2>
			  <br/>
              <h2 class="CPF">CPF</h2>
			  <br/>
              <h2 class="Email">Email</h2>
			  <br/>
              <h2 class="Celular">Celular</h2>
			  <br/>
              <h2 class="Infor-Entr">Informações de Entrega</h2>
			  <br/>
              <h2 class="Endereço">Endereço</h2>
			  <br/>
              <h2 class="Bairro">Bairro</h2>
			  <br/>
              <h2 class="Cidade">Cidade</h2>
			  <br/>
              <h2 class="CEP">CEP</h2>
			  <br/>
            </div>
          </div>
        </main>

        <footer>
          <Footer/>
        </footer>
      </body>
    </>
  );
};
