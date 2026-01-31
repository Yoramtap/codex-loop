import Image from "next/image";
import styles from "./page.module.css";
import { posts } from "./posts";

export default function BlogIndexPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>build notes</p>
          <h1>All notes, gentle and steady.</h1>
          <p className={styles.subtitle}>
            Three recent build logs to warm the week, each with a small change and a
            calm, considered rhythm.
          </p>
        </div>
        <a className={styles.backLink} href="/">
          back to home
        </a>
      </header>

      <section className={styles.grid}>
        {[...posts].reverse().map((post) => (
          <article key={post.title} className={styles.card}>
            <div className={styles.thumbnail}>
              <Image src={post.image} alt="" width={240} height={240} />
            </div>
            <p className={styles.meta}>
              <span>{post.category}</span>
              <span>{post.author}</span>
              <span>{post.date}</span>
            </p>
            <h2>{post.title}</h2>
            <p className={styles.excerpt}>{post.summary}</p>
            <a className={styles.cardLink} href={`/blog/${post.slug}`}>
              read the note
            </a>
          </article>
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
