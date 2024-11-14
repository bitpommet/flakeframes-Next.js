import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/">ホーム</a>
          </li>
          <li className={styles.item}>
            <a href="/blog">ブログ</a>
          </li>
          <li className={styles.item}>
            <a href="/flakes">ひとひら</a>
          </li>
          <li className={styles.item}>
            <a href="/about">Flakeframesについて</a>
          </li>
        </ul>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/contact">お問い合わせ</a>
          </li>
          <li className={styles.item}>
            <a href="/privacy-policy">プライバシーポリシー</a>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© 2024 Flakeframes</p>
    </footer>
  );
}
