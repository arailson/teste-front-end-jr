import planoDeFundoPareceiro from "../../assets/planoDeFundoParceiro.svg";
import styles from "./styles.module.scss";

const Pareceiros = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container_planoFundo}>
        <div className={styles.parceiro}>
          <img src={planoDeFundoPareceiro} alt="plano de fundo" />
          <div className={styles.parceiro__detalhes}>
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </div>
        <div className={styles.parceiro}>
          <img src={planoDeFundoPareceiro} alt="plano de fundo" />
          <div className={styles.parceiro__detalhes}>
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pareceiros;
