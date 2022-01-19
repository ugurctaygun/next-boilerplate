import Link from "next/link";
import styles from "./Products.module.css";

export default function ProductCard({ products }) {
  return (
    <div className={styles.card}>
      <Link href="/product/[id]" as={`/product/${products.id}`}>
        <a>{products.name}</a>
      </Link>
      <p>{products.mass}</p>
    </div>
  );
}
