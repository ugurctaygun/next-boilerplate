import Link from "next/link";

export default function ProductDetail({ products }) {
  return (
    <li>
      <Link href="/product/[id]" as={`/product/${products.id}`}>
        <a>{products.name}</a>
      </Link>
    </li>
  );
}
