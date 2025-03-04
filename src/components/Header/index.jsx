import icon1 from "../../assets/ShieldCheck.svg";
import icon2 from "../../assets/Truck.svg";
import icon3 from "../../assets/CreditCard.svg";
import caixaComSeta from "../../assets/CaixaComSeta.svg";
import coracao from "../../assets/Coracao.svg";
import userCircle from "../../assets/UserCircle.svg";
import shoppingCart from "../../assets/ShoppingCart.svg";
import vtexLogo from "../../assets/vtexLogo.svg";
import lupa from "../../assets/MagnifyingGlass.svg";
import coroa from "../../assets/Coroa.svg";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container__header1}>
        <div className={styles.container__header2}>
          <div className={styles.info}>
            <img alt="icone visto" src={icon1} />
            <h4>
              Compra <span>100% segura</span>
            </h4>
          </div>
          <div className={styles.info}>
            <img alt="icone trunk" src={icon2} />
            <h4>
              <span>Frete grátis</span> acima de R$ 200
            </h4>
          </div>
          <div className={styles.info}>
            <img alt="icone credit card" src={icon3} />
            <h4>
              <span>Parcele</span> suas compras
            </h4>
          </div>
        </div>
        <div className={styles.pesquisaProduto}>
          <img src={vtexLogo} alt="Vtex logo" />
          <div className={styles.input_container}>
            <input type="text" placeholder="O que você está procurando?" />
            <img src={lupa} alt="icone lupa" />
          </div>
          <div className={styles.icons}>
            <img src={caixaComSeta} alt="icon caixa com seta" />
            <img src={coracao} alt="icon coração" />
            <img src={userCircle} alt="icon userCircle" />
            <img src={shoppingCart} alt="icon shoppingCart" />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.buttons_page}>
          <h3>Todas categorias</h3>
          <h3>Supermercado</h3>
          <h3>Livros</h3>
          <h3>Moda</h3>
          <h3>Lançamentos</h3>
          <h3>
            <span>Ofertas do dia</span>
          </h3>
          <div style={{ display: "flex" }}>
            <img
              style={{ marginRight: "13.5px" }}
              src={coroa}
              alt="icon coroa"
            />
            <h3>Assinatura</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
