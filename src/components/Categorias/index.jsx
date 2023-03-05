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
        <div>
          <img src={monitorIcon} alt="icon monitor" />
        </div>
        <div>
          <img src={superMercadoIcon} alt="icon supermercado" />
        </div>
        <div>
          <img src={whiskeyIcon} alt="icon bebidas" />
        </div>
        <div>
          <img src={ferramentasIcon} alt="icon ferramentas" />
        </div>
        <div>
          <img src={saudeIcon} alt="icon saude" />
        </div>
        <div>
          <img src={esportesIcon} alt="icon esporte" />
        </div>
        <div>
          <img src={modaIcon} alt="icon moda" />
        </div>
      </div>
    </div>
  );
};

export default Categorias;
