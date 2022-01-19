import ProductDetail from "../../components/ProductDetail";
import styles from "../../components/Products.module.css";

function ProductDetailPage() {
  return (
    <div className={styles.container}>
      <ProductDetail />
    </div>
  );
}

export default ProductDetailPage;
