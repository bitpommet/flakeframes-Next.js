import Image from "next/image";
import styles from "./index.module.css";
import { Blog } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
  blog: Blog[];
};

export default function BlogList({ blog }: Props) {
  if (blog.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {blog.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/blog/${article.id}`} className={styles.link}>
            {article.eyecatch ? (
              <Image
                src={article.eyecatch.url}
                alt=""
                className={styles.image}
                width={article.eyecatch.width}
                height={article.eyecatch.height}
              />
            ) : (
              <Image
                src="/no-image.png"
                alt="No Image"
                className={styles.image}
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <span className={styles.tag}>{article.tags.name}</span>
                <span className={styles.date}>
                  <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    priority
                  />
                  {article.publishedAt}
                </span>
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
