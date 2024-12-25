import { ReactNode } from "react";
import Link from "next/link";
import type { TagLink } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
}

export default function TagLink({ href, children }: Props) {
  return (
    <Link href={href} className={styles.taglink}>
      {children}
    </Link>
  );
}