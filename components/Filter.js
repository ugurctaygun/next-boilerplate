import Link from "next/link";
import styles from "./Filter.module.css";

const Filter = ({ data }) => (
  <div className={styles.filter}>
    <ul>
      {data.map((p, i) => (
        <li key={i}>{p.mass}</li>
      ))}
    </ul>
  </div>
);

export default Filter;
