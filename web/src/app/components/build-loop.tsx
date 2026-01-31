"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./build-loop.module.css";

const steps = [
  { title: "Code", detail: "shape the work" },
  { title: "Commit", detail: "lock it in" },
  { title: "Test", detail: "prove it" },
  { title: "Write note", detail: "capture the change" },
  { title: "Ship", detail: "share the loop" },
];

export default function BuildLoop() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.header}>
        <p className={styles.kicker}>build loop</p>
        <h2>Code. Commit. Test. Note. Ship.</h2>
      </div>
      <div className={styles.loop} aria-label="Build loop steps">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={styles.step}
            style={{
              animationDelay: `${index * 0.15}s`,
              ["--pulse-delay" as string]: `${index * 0.15 + 0.2}s`,
            }}
          >
            <div className={styles.icon} aria-hidden="true">
              <span />
            </div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
