import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { posts } from "../posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type Params = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Params) {
  const post = posts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.backLink} href="/blog">
          back to blog
        </Link>
        <p className={styles.meta}>
          <span>{post.category}</span>
          <span>{post.author}</span>
          <span>{post.date}</span>
        </p>
        <h1>{post.title}</h1>
      </header>

      <div className={styles.hero}>
        <Image src={post.image} alt="" width={520} height={360} />
      </div>

      <section className={styles.body}>
        <h2>What shipped</h2>
        <p>{post.whatShipped}</p>

        <h3>Files touched</h3>
        <ul>
          {post.files.map((file) => (
            <li key={file}>{file}</li>
          ))}
        </ul>

        <h3>Learnings</h3>
        <ul>
          {post.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
