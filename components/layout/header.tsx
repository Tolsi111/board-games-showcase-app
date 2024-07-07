import Link from "next/link";
import styles from "./layout.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>Board games</Link>
      <nav>
        <ul className={styles.navList}>
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
      </nav>
    </header>
  );
}
