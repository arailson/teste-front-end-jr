import styles from "./styles.module.scss";

const ProdutosRelacionados = () => {
  return (
    <div className={styles.body}>
      <div className={styles.produtos}>
        <div className={styles.produtos_relacionados}>
          <div className={styles.line}></div>
          <h2>Produtos relacionados</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.verTodos}>
          <h3>Ver todos</h3>
        </div>
      </div>
    </div>
  );
};

export default ProdutosRelacionados;
