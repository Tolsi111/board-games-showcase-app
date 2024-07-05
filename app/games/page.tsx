import Link from "next/link";
import styles from "@/app/page.module.css";

export default function GamesPage() {
  return (
    <main className={styles.main}>
      <h1>My games!</h1>
      <ul>
        <li>
          <Link className={styles.link} href={"/games/wingspan"}>
            Wingspan
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/games/terraforming-mars"}>
            Terraforming mars
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/games/scythe"}>
            Scythe
          </Link>
        </li>
      </ul>
    </main>
  );
}
