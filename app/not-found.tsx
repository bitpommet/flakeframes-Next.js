import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした</dt>
        <dd className={styles.text}>
          お探しのページは存在しません。
          <br />
          URLが変更、または削除された可能性があります。
        </dd>
      </dl>
    </div>
  );
}
