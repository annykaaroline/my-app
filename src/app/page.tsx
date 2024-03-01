import Image from "next/image";
import Link from "next/link"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> problema delaass!!!!!!!!!</h1>
      <h2>UM BRINDE AS QUE DEPENDE</h2>
      <h3>let's go Babyy</h3>
      <Link href={"/sobre"}>Sobre</Link>
    </main>
  );
}
