import Link from "next/link";
import styles from "@/app/page.module.css";

import wingspan from "@/assets/Wingspan.webp";
import tfm from "@/assets/TerraformingMars.webp";
import scythe from "@/assets/Scythe.webp";
import Image from "next/image";

export default function GamesPage() {
  return (
    <main className={styles.main}>
      <h1>My games!</h1>
      <ul>
        <li>
          <Link className={styles.link} href={"/games/wingspan"}>
            Wingspan
            <Image
              src={wingspan}
              alt="Wingspan box artwork"
              className={styles.gameIcon}
            />
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/games/terraforming-mars"}>
            Terraforming mars
            <Image
              src={tfm}
              alt="Terraforming Mars box artwork"
              className={styles.gameIcon}
            />
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/games/scythe"}>
            Scythe
            <Image
              src={scythe}
              alt="Scythe box artwork"
              className={styles.gameIcon}
            />
          </Link>
        </li>
      </ul>
    </main>
  );
}
