import useSWR from "swr";
import ProductCard from "../components/ProductCard";
import styles from "../components/Products.module.css";
import Filter from "../components/Filter";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductList() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Filter data={data} />
      <div className={styles.container}>
        {data.map((p, i) => (
          <ProductCard key={i} products={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
