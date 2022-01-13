import useSWR from "swr";
import ProductDetail from "../components/ProductDetail";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductList() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((p, i) => (
        <ProductDetail key={i} products={p} />
      ))}
    </ul>
  );
}

export default ProductList;
