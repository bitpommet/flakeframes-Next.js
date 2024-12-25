import Image from "next/image";
import styles from "./page.module.css";
import { getBlogList } from "@/app/_libs/microcms";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import BlogList from "./_components/BlogList";


export default async function Home() {
  const data = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });

  return (
    <>
      <section className={styles.top}></section>
      <section className={styles.blog}>
        <h2 className={styles.blogTitle}>Blog</h2>
        <BlogList blog={data.contents} />
      </section>
    </>
  );
}
