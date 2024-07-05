import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page!</h1>
      <ul>
        <li>
          <Link className={styles.link} href={"/games"}>
            My games
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/games/suggestion"}>
            Make a game suggestion
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/about"}>
            About me
          </Link>
        </li>
      </ul>
    </main>
  );
}
