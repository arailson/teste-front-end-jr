import monitorIcon from "../../assets/monitorar-tablet-e-smartohone 1.svg";
import superMercadoIcon from "../../assets/supermercados 1.svg";
import whiskeyIcon from "../../assets/whiskey.svg";
import ferramentasIcon from "../../assets/ferramentas 1.svg";
import saudeIcon from "../../assets/cuidados-de-saude 1.svg";
import esportesIcon from "../../assets/corrida 1.svg";
import modaIcon from "../../assets/moda 1.svg";

import styles from "./styles.module.scss";

const Categorias = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.container_categoria__selecionada}>
          <div>
            <img src={monitorIcon} alt="icon monitor" />
          </div>
          <h4>
            {" "}
            <span>Tecnologia</span>
          </h4>
        </div>
        <div className={styles.container_categoria}>
          <div>
            <img src={superMercadoIcon} alt="icon supermercado" />
          </div>
          <h4>
            {" "}
            <span>Supermercado</span>
          </h4>
        </div>
        <div className={styles.container_categoria}>
          <div>
            <img src={whiskeyIcon} alt="icon bebidas" />
          </div>
          <h4>
            {" "}
            <span>Bebidas</span>
          </h4>
        </div>
        <div className={styles.container_categoria}>
          <div>
            <img src={ferramentasIcon} alt="icon ferramentas" />
          </div>
          <h4>
            {" "}
            <span>Ferramentas</span>
          </h4>
        </div>
        <div className={styles.container_categoria}>
          <div>
            <img src={saudeIcon} alt="icon saude" />
          </div>
          <h4>
            {" "}
            <span>Saúde</span>
          </h4>
        </div>
        <div className={styles.container_categoria}>
          <div>
            <img src={esportesIcon} alt="icon esporte" />
          </div>
          <h4>
            {" "}
            <span>Esportes e Fitness</span>
          </h4>
        </div>
        <div className={styles.container_categoria}>
          <div>
            <img src={modaIcon} alt="icon moda" />
          </div>
          <h4>
            {" "}
            <span>Saúde</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
