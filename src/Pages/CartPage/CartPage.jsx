import React, { useContext, useState } from "react";
import "./CartPage.css";
import { Header } from "../../Components/HeaderComponets/Header/Header";
import InputGroup from "../../Components/imput/imput/Input";
import { Link } from "react-router-dom";
import { BtnWarning } from "../../Components/Buotoes/BtnWarning/BtnWarning";
import { ProductContext } from "../../context/ProductContext";
import { ProdutoItem } from "../../Components/ProdutoItem/ProdutoItem";


function CartPage() {

  const { produtos } = useContext(ProductContext);

  const produtosFiltrado = produtos.slice(0, 4)

  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [cep, setCep] = useState("");
  const [discount, setDiscount] = useState(30.0);
  const [shipping, setShipping] = useState(10.0);

  const price = 219.0;
  const subtotal = price * quantity;
  const total = subtotal - discount + shipping;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const applyCoupon = () => {
    if (coupon === "PROMO10") {
      setDiscount(40.0); // Aplicar desconto maior
      alert("Cupom aplicado com sucesso!");
    } else {
      alert("Cupom inválido!");
    }
  };

  const calculateShipping = () => {
    if (cep.length === 8) {
      setShipping(5.0); // Simular novo valor de frete
      alert("Frete calculado com sucesso!");
    } else {
      alert("CEP inválido! Insira um CEP com 8 dígitos.");
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="content">
          <section className="sectioncart">
            <div className="titulos">
              <h3>MEU CARRINHO</h3>
              <div className="valores">
                <h3>QUANTIDADE</h3>
                <h3>UNITÁRIO</h3>
                <h3>TOTAL</h3>
              </div>
            </div>
            <div className="tbody">
              <div className="product">
                <img src="https://picsum.photos/130/104" alt="Produto" />
                <div className="info">
                  <div className="titulo">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </div>
                  <div className="cor">Cor: Azul</div>
                  <div className="tamanho">Tamanho: 42</div>
                </div>
              </div>
              <div className="productValores">
                <div className="qtd">
                  <button onClick={decrementQuantity}>-</button>
                  <span>{quantity}</span>
                  <button onClick={incrementQuantity}>+</button>
                </div>
                <div>R$ {price.toFixed(2)}</div>
                <div>R$ {subtotal.toFixed(2)}</div>
              </div>
            </div>
            <div className="extras">
              <div>
                <label className="tituloExtra">Cupom de desconto</label>
                <InputGroup
                  placeholder="Insira seu código"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  buttonText="OK"
                  onClick={applyCoupon}
                />
              </div>
              <div className="frete">
                <label className="tituloExtra">Calcular frete</label>
                <InputGroup
                  placeholder="Insira seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  buttonText="OK"
                  onClick={calculateShipping}
                />
              </div>
            </div>
          </section>
          <aside className="asideCartPage">
            <h2>Resumo das Compras</h2>
            <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
            <p>Frete: R$ {shipping.toFixed(2)}</p>
            <p>Desconto: R$ {discount.toFixed(2)}</p>
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <Link to={'/finalizarCompra'} style={{width: '100%'}}>
              <BtnWarning style={{width: '100%'}}>Continuar</BtnWarning>
            </Link>
          </aside>
        </div>
        <div className="produtos">
        {produtosFiltrado.map((produto) => (
          <ProdutoItem
            key={produto.id}
            nome={produto.nome}
            categoria={produto.categoria}
            precoAntigo={produto.precoAntigo}
            precoNovo={produto.precoNovo}
            desconto={produto.desconto}
            imagem={produto.imagem}
          />
        ))}
      </div>
      </main>
    </>
  );
}

export default CartPage;
