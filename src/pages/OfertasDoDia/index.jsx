import desconto from "../../assets/Desconto50.svg";
import Categorias from "../../components/Categorias";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

const OfertasDoDia = () => {
  return (
    <div>
      <Header />
      <div className={styles.banner}>
        <img src={desconto} alt="desconto plano de fundo" />
        <div className={styles.banner_details}>
          <h2>Venha conhecer nossas promoções</h2>
          <h2><span>50% Off nos produtos</span></h2>
          <button>Ver produto</button>
        </div>
      </div>
      <Categorias />
    </div>
  );
};

export default OfertasDoDia;
