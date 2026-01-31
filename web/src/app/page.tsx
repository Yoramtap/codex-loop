import Image from "next/image";
import styles from "./page.module.css";
import { posts } from "./blog/posts";

const socialTiles = [
  "/images/tile-1.svg",
  "/images/tile-2.svg",
  "/images/tile-3.svg",
  "/images/tile-4.svg",
  "/images/tile-5.svg",
  "/images/tile-6.svg",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>the build notes kitchen</p>
            <h1>Ship, note, repeat.</h1>
            <p className={styles.tagline}>
              We&apos;re writing about the craft behind this space — the small decisions,
              the quiet iterations, and the gentle rhythm of building the blog in
              public.
            </p>
            <div className={styles.heroCtas}>
              <a className={styles.primaryCta} href="/blog">
                Explore the blog
              </a>
              <a className={styles.secondaryCta} href="#featured">
                Today&apos;s featured notes
              </a>
            </div>
            <div className={styles.heroMeta}>
              <span>new posts every build</span>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/images/hero-food.svg"
              alt="Rustic table with bread, herbs, and seasonal produce"
              width={560}
              height={620}
              priority
            />
          </div>
        </section>

        <section className={styles.featured} id="featured">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionKicker}>build notes</p>
              <h2>Fresh from the build log</h2>
            </div>
            <a className={styles.sectionLink} href="/blog">
              View all notes
            </a>
          </div>
          <div className={styles.cards}>
            {posts.slice(-3).reverse().map((post) => (
              <article key={post.title} className={styles.card}>
                <p className={styles.cardMeta}>
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </p>
                <h3>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.summary}</p>
                <a className={styles.cardLink} href={`/blog/${post.slug}`}>
                  Read the note
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sayHi}>
          <div className={styles.sayHiText}>
            <p className={styles.sectionKicker}>say hi</p>
            <h2>Behind the scenes & quick bites</h2>
            <p>
              Follow the kitchen notes, test shoots, and the soft morning light over
              at Instagram.
            </p>
            <a className={styles.primaryCta} href="https://instagram.com">
              @rustedspoonstudio
            </a>
          </div>
          <div className={styles.socialGrid}>
            {socialTiles.map((tile, index) => (
              <div key={tile} className={styles.socialTile}>
                <Image
                  src={tile}
                  alt={`Food photo tile ${index + 1}`}
                  width={140}
                  height={140}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          <p className={styles.footerTitle}>The Build Notes Kitchen</p>
        </div>
      </footer>
    </div>
  );
}
