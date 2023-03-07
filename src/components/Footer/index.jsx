import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram3.svg";
import youtube from "../../assets/Youtube.svg";
import visa from "../../assets/Visa.svg";
import elo from "../../assets/elo.svg";
import alelo from "../../assets/alelo.svg";
import dinners from "../../assets/dinners.svg";
import ifood from "../../assets/ifood.svg";
import mastercard from "../../assets/mastercard.svg";
import pix from "../../assets/pix.svg";
import american from "../../assets/amex.svg";
import ticket from "../../assets/ticket.svg";
import sodexo from "../../assets/sodexo.svg";
import vtex from "../../assets/Group 35.svg"
import econverse from "../../assets/Grupo 1999.svg"
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <>
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
                <img src={dinners} alt="diners" />
                <img src={ifood} alt="ifood" />
                <img src={mastercard} alt="mastercard" />
              </div>
              <div className={styles.imagens__cards}>
                <img src={pix} alt="pix" />
                <img src={american} alt="amex" />
                <img src={ticket} alt="ticket" />
              </div>
              <div className={styles.imagens__cards}>
                <img src={sodexo} alt="sodexo" />
              </div>
            </div>
          </div>

          <div className={styles.cadastre}>
            <h5>CADASTRE-SE E RECEBA NOSSAS</h5>
            <h2>NOVIDADES E PROMOÇÕES</h2>
            <div className={styles.paragrafo}>
              <p>
                Excepteur sint occaecat cudatat non ent, sunt in culpa qui
                officia lorem ipsum
              </p>
            </div>
            <div className={styles.button__ok}>
              <input type="text" placeholder="SEU E-MAIL" />
              <button>OK</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body2}>
        <div className={styles.fim__footer}>
          <div className={styles.fim__div}>
            <p>
              Copyright © 2019. Todos os direitos reservados. Todas as marcas e
              suas imagens são de propriedade de seus respectivos donos. É
              vedada a reprodução, total ou parcial, de qualquer conteúdo sem
              expressa autorização
            </p>
          </div>
          <div>
            <img src={econverse} alt="" />
            <img style={{ marginLeft: "32px" }} src={vtex} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
