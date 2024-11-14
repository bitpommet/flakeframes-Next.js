import Image from "next/image";
import styles from "./index.module.css";

export default function Header()  {
  return (
    <header className={styles.header}>
      <h1 className={styles.logoh1}>
        <a href="/" className={styles.logoLink}>
          <Image
            src="/logo.svg"
            alt="Flakeframes"
            className={styles.logo}
            width={149}
            height={32}
            priority
          />
        </a>
      </h1>      
    </header>
  );
}