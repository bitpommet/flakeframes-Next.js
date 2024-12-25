import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/">ホーム</Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">Flakeframesについて</Link>
          </li>
        </ul>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
          <li className={styles.item}>
            <Link href="/privacy-policy">プライバシーポリシー</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© 2024 Flakeframes</p>
    </footer>
  );
}
