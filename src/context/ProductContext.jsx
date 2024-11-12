import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("http://localhost:3000/users/");
        const data = await response.json();
        console.log(data);
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  const valor = {
    produtos,
  };

  return (
    <ProductContext.Provider value={valor}>
      {children}
    </ProductContext.Provider>
  );
};
