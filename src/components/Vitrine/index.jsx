import React, { useState, useEffect } from "react";
import setaEsquerda from "../../assets/SetaEsquerda.svg";
import setaDireita from "../../assets/SetaDireita.svg";
import styles from "./styles.module.scss";
import { vitrine } from "./vitrine";
import Modal from "./Modal";

const Vitrine = () => {
  const [produtosExibidos, setProdutosExibidos] = useState([]);
  const [indiceInicial, setIndiceInicial] = useState(0);
  const [modalAberta, setModalAberta] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    const novoArray = vitrine.products.slice(indiceInicial, indiceInicial + 4);
    setProdutosExibidos(novoArray);
    console.log(novoArray);
  }, [indiceInicial]);

  const handleClick = (direcao) => {
    const novoIndiceInicial =
      direcao === "direita" ? indiceInicial + 4 : indiceInicial - 4;

    setIndiceInicial(novoIndiceInicial);
  };

  const handleProdutoSelecionado = (produto) => {
    setProdutoSelecionado(produto);
    setModalAberta(true);
  };

  return (
    <div className={styles.body}>
      <div className={styles.atualizar__produto}>
        <img
          onClick={() => handleClick("esquerda")}
          src={setaEsquerda}
          alt="icon seta esquerda"
        />
      </div>
      <div className={styles.container_vitrine}>
        {produtosExibidos.map((product) => (
          <div
            onClick={() => handleProdutoSelecionado(product)}
            className={styles.vitrine_detalhes}
            key={product.productName}
          >
            <img src={product.photo} alt="afsa" />
            <p>{product.productName}</p>
            <h3>R$ 30,90</h3>
            <h4>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h4>

            <h5>ou 2x de R$ 49,95 sem juros</h5>
            <h5 style={{ marginTop: "7px", marginBottom: "12px" }}>
              <span>Frete grátis</span>
            </h5>
            <div className={styles.button}>
              <button>COMPRAR</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.atualizar__produto}>
        <img
          onClick={() => handleClick("direita")}
          src={setaDireita}
          alt="icon seta direita"
        />
      </div>
      {modalAberta && produtoSelecionado && (
        <Modal
          produto={produtoSelecionado}
          fecharModal={() => setModalAberta(false)}
        />
      )}
    </div>
  );
};

export default Vitrine;
