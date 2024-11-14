import Image from "next/image";
import styles from "./page.module.css";
import { Blog } from "@/app/_libs/microcms";

const data: {
  contents: Blog[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      publishedAt: "2024/10/31",
      createdAt: "2024/11/08",
    },
    {
      id: "2",
      title: "こんにちは",
      publishedAt: "2024/10/31",
      createdAt: "2024/11/08",
    },
    {
      id: "1",
      title: "おはよう",
      publishedAt: "2024/10/31",
      createdAt: "2024/11/08",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.blog}>
        <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.date}>
                      <Image
                        src="/no-image.png"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
