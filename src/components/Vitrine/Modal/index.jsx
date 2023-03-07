import styles from "./styles.module.scss";

const Modal = ({ produto, fecharModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.fecharModal} onClick={fecharModal}>
          &times;
        </span>
        <img src={produto.photo} alt="produto" />
        <div className={styles.info}>
          <h2>{produto.productName}</h2>
          <h3>
            {produto.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <p>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <h6>Veja mais detalhes do produto &gt;</h6>
        </div>
      </div>
    </div>
  );
};

export default Modal;
