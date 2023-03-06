import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram3.svg";
import youtube from "../../assets/Youtube.svg";
import visa from "../../assets/Visa.svg";
import elo from "../../assets/elo.svg";
import alelo from "../../assets/alelo.svg";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container_footer}>
        <div className={styles.info}>
          <div style={{ marginRight: "93px" }} className={styles.detalhes}>
            <h4>Sobre nós</h4>
            <p>CONHEÇA</p>
            <p>COMO COMPRAR</p>
            <p style={{ marginBottom: "60px" }}>INDICAÇÃO E DESCONTO</p>
            <div className={styles.icons}>
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "43px" }} className={styles.detalhes}>
            <h4>Informações úteis</h4>
            <p>FALE CONOSCO</p>
            <p>DÚVIDAS</p>
            <p>PRAZOS DE ENTREGA</p>
            <p>FORMA DE PAGAMENTO</p>
            <p>POLÍTICA DE PRIVACIDADE</p>
            <p>TROCAS E DEVOLUÇÕES</p>
          </div>
          <div className={styles.cards}>
            <h4>Formas de pagamento</h4>
            <div className={styles.imagens__cards}>
              <img src={visa} alt="visa" />
              <img src={elo} alt="elo" />
              <img src={alelo} alt="alelo" />
            </div>
            <div className={styles.imagens__cards}>
              <img src={visa} alt="visa" />
              <img src={elo} alt="elo" />
              <img src={alelo} alt="alelo" />
            </div>
            <div className={styles.imagens__cards}>
              <img src={visa} alt="visa" />
              <img src={elo} alt="elo" />
              <img src={alelo} alt="alelo" />
            </div>
            <div className={styles.imagens__cards}>
              <img src={visa} alt="visa" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
