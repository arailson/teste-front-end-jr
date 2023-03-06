import desconto from "../../assets/Desconto50.svg";
import Categorias from "../../components/Categorias";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Marcas from "../../components/Marcas";
import Pareceiros from "../../components/Parceiros";
import ProdutosRelacionados from "../../components/ProdutosRelacionados";
import Vitrine from "../../components/Vitrine";
import styles from "./styles.module.scss";

const OfertasDoDia = () => {
  return (
    <div>
      <Header />
      <div className={styles.banner}>
        <img src={desconto} alt="desconto plano de fundo" />
        <div className={styles.banner_details}>
          <h2>Venha conhecer nossas promoções</h2>
          <h2>
            <span>50% Off nos produtos</span>
          </h2>
          <button>Ver produto</button>
        </div>
      </div>
      <Categorias />
      <div className={styles.container_produtos}>
        <div className={styles.produtos_relacionados}>
          <div className={styles.line}></div>
          <h2>Produtos relacionados</h2>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.body_categoria}>
        <div className={styles.container_categoria__produtos}>
          <div>
            <h4>
              <span>Celular</span>
            </h4>
          </div>
          <div>
            <h4>acessórios</h4>
          </div>
          <div>
            <h4>tablets</h4>
          </div>
          <div>
            <h4>NOTEBOOKS</h4>
          </div>
          <div>
            <h4>TVs</h4>
          </div>
          <div>
            <h4>Ver todos</h4>
          </div>
        </div>
      </div>
      <Vitrine />
      <Pareceiros />
      <ProdutosRelacionados />
      <Vitrine />
      <Pareceiros />
      <Marcas />
      <ProdutosRelacionados />
      <Vitrine />
      <Footer />
    </div>
  );
};

export default OfertasDoDia;
