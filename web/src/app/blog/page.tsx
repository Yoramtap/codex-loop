import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "./posts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function BlogIndexPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>build notes</p>
          <h1>All notes, gentle and steady.</h1>
          <p className={styles.subtitle}>
            Recent build logs to warm the week, each with a small change and a calm,
            considered rhythm.
          </p>
        </div>
        <Link className={styles.backLink} href="/">
          back to home
        </Link>
      </header>

      <section className={styles.grid}>
        {[...posts].reverse().map((post) => (
          <Link key={post.title} className={styles.card} href={`/blog/${post.slug}`}>
            <div className={styles.thumbnail}>
              <Image src={`${basePath}${post.image}`} alt="" width={240} height={240} />
            </div>
            <p className={styles.meta}>
              <span>{post.category}</span>
              <span>{post.author}</span>
              <span>{post.date}</span>
            </p>
            <h2>{post.title}</h2>
            <p className={styles.excerpt}>{post.summary}</p>
            <span className={styles.cardLink}>read the note</span>
          </Link>
        ))}
      </section>

      <div className={styles.pagination}>
        <a href="#" aria-disabled="true">
          older notes
        </a>
      </div>
    </div>
  );
}
