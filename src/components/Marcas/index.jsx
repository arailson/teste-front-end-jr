import marcas from "../../assets/Marcas.svg";
import setaDireita from "../../assets/SetaDireita2.svg";
import styles from "./styles.module.scss";

const Marcas = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container__marcas}>
        <div className={styles.text__marcas}>
          <h2>Navegue por marcas</h2>
        </div>
        <div className={styles.container__info}>
          <div className={styles.info__marcas}>
            <img src={marcas} alt="logo" />
          </div>
          <div className={styles.info__marcas}>
            <img src={marcas} alt="logo" />
          </div>
          <div className={styles.info__marcas}>
            <img src={marcas} alt="logo" />
          </div>
          <div className={styles.info__marcas}>
            <img src={marcas} alt="logo" />
          </div>
          <div className={styles.ultimaInfo}>
            <img src={marcas} alt="logo" />
            <div className={styles.button}>
                <img src={setaDireita} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marcas;
