export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  image: string;
  whatShipped: string;
  implemented: string;
  files: string[];
  learnings: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "us-001-home-page",
    title: "Home page",
    summary:
      "Replaced the default Next.js home page with a rustic hero, featured posts, a social block, and footer.",
    excerpt:
      "Replaced the default Next.js home page with a rustic hero, featured posts, a social block, and footer.",
    date: "Jan 31, 2026",
    category: "dev log",
    author: "Ralph",
    image: "/images/tile-1.svg",
    whatShipped:
      "Replaced the default Next.js home page with a rustic, modern build-log hero, featured posts, a social “say hi” block, and footer.",
    implemented:
      "Replaced the default Next.js home page with a rustic, modern build-log hero, featured posts, a social “say hi” block, and footer.",
    files: [
      "web/src/app/page.tsx",
      "web/src/app/page.module.css",
      "web/src/app/layout.tsx",
      "web/src/app/globals.css",
      "web/public/images/hero-food.svg",
      "web/public/images/tile-1.svg",
      "web/public/images/tile-2.svg",
      "web/public/images/tile-3.svg",
      "web/public/images/tile-4.svg",
      "web/public/images/tile-5.svg",
      "web/public/images/tile-6.svg",
      "prd.json",
    ],
    learnings: [
      "Layout uses CSS modules per page and global tokens in globals.css.",
      "Placeholder imagery should use gradient SVGs in web/public/images for easy swap later.",
      "Manual browser verification needed (agent-browser not run here).",
    ],
  },
  {
    slug: "us-002-blog-index",
    title: "Blog index page",
    summary:
      "Added the blog index page with post cards, meta line, gradient thumbnails, and an “older posts” link.",
    excerpt:
      "Added the blog index page with post cards, meta line, gradient thumbnails, and an “older posts” link.",
    date: "Jan 31, 2026",
    category: "dev log",
    author: "Ralph",
    image: "/images/tile-2.svg",
    whatShipped:
      "Added the blog index page with post cards, meta line, gradient thumbnails, and an “older posts” link.",
    implemented:
      "Added the blog index page with post cards, meta line, gradient thumbnails, and an “older posts” link.",
    files: [
      "web/src/app/blog/page.tsx",
      "web/src/app/blog/page.module.css",
      "prd.json",
    ],
    learnings: [
      "Blog pages use local data arrays and CSS modules under web/src/app/blog.",
      "Use lowercase labels and muted palettes to match the editorial tone.",
      "Manual browser verification needed (agent-browser not run here).",
    ],
  },
  {
    slug: "us-003-blog-post",
    title: "Blog post page",
    summary:
      "Added blog post pages that render per-entry content with hero image, structured sections, and a back-to-blog link.",
    excerpt:
      "Added blog post pages that render per-entry content with hero image, structured sections, and a back-to-blog link.",
    date: "Jan 31, 2026",
    category: "dev log",
    author: "Ralph",
    image: "/images/tile-4.svg",
    whatShipped:
      "Added blog post pages that render per-entry content with hero image, headings, paragraphs, and list sections, plus a back-to-blog link.",
    implemented:
      "Added blog post pages that render per-entry content with hero image, headings, paragraphs, and list sections, plus a back-to-blog link.",
    files: [
      "web/src/app/blog/[slug]/page.tsx",
      "web/src/app/blog/[slug]/page.module.css",
      "web/src/app/blog/posts.ts",
      "web/src/app/blog/page.tsx",
      "prd.json",
    ],
    learnings: [
      "Use shared blog data in web/src/app/blog/posts.ts for both index and post pages.",
      "Blog post pages should include hero image and structured sections to keep the editorial rhythm.",
      "Manual browser verification needed (agent-browser not run here).",
    ],
  },
  {
    slug: "build-notes-data-model",
    title: "Build notes data model",
    summary:
      "Added build-note specific fields to the post model and removed recipe wording from sample entries.",
    excerpt:
      "Added build-note specific fields to the post model and removed recipe wording from sample entries.",
    date: "Jan 31, 2026",
    category: "build notes",
    author: "Ralph",
    image: "/images/tile-5.svg",
    whatShipped:
      "Added build-note specific fields (summary/what shipped) to the post model and removed recipe language from sample entries.",
    implemented:
      "Added build-note specific fields (summary/what shipped) to the post model and removed recipe language from sample entries.",
    files: ["web/src/app/blog/posts.ts", "prd.json"],
    learnings: [
      "Keep backward-compatible fields during data model transitions to avoid breaking UI.",
      "Centralize build-note fields in posts.ts for consistency across pages.",
      "Manual browser verification needed (agent-browser not run here).",
    ],
  },
  {
    slug: "build-notes-ui-content",
    title: "Build notes in UI",
    summary:
      "Updated home, index, and post pages to use build-note fields and consistent build-log labels.",
    excerpt:
      "Updated home, index, and post pages to use build-note fields and consistent build-log labels.",
    date: "Jan 31, 2026",
    category: "build notes",
    author: "Ralph",
    image: "/images/tile-6.svg",
    whatShipped:
      "Updated home, blog index, and blog post pages to read from build-note fields and to use consistent build-log labels.",
    implemented:
      "Updated home, blog index, and blog post pages to read from build-note fields and to use consistent build-log labels.",
    files: [
      "web/src/app/page.tsx",
      "web/src/app/blog/page.tsx",
      "web/src/app/blog/[slug]/page.tsx",
      "prd.json",
    ],
    learnings: [
      "UI copy should read directly from build-note fields like summary and whatShipped.",
      "Keep list and CTA labels consistent across home and index for clarity.",
      "Manual browser verification needed (agent-browser not run here).",
    ],
  },
  {
    slug: "build-notes-copy-pass",
    title: "Build notes copy pass",
    summary:
      "Removed lingering recipe language and aligned metadata with build-log terminology.",
    excerpt:
      "Removed lingering recipe language and aligned metadata with build-log terminology.",
    date: "Jan 31, 2026",
    category: "build notes",
    author: "Ralph",
    image: "/images/tile-4.svg",
    whatShipped:
      "Updated remaining copy and metadata to consistently reference build notes and removed recipe mentions.",
    implemented:
      "Updated remaining copy and metadata to consistently reference build notes and removed recipe mentions.",
    files: ["web/src/app/page.tsx", "web/src/app/layout.tsx", "prd.json"],
    learnings: [
      "Search copy across layout metadata as well as page content.",
      "Use consistent build-log terminology in headers, CTAs, and descriptions.",
      "Manual browser verification needed (agent-browser not run here).",
    ],
  },
  {
    slug: "build-notes-links-fix",
    title: "Build notes links fix",
    summary:
      "Resolved 404s on note pages by awaiting dynamic route params in the blog post page.",
    excerpt:
      "Resolved 404s on note pages by awaiting dynamic route params in the blog post page.",
    date: "Jan 31, 2026",
    category: "build notes",
    author: "Ralph",
    image: "/images/tile-3.svg",
    whatShipped:
      "Updated the blog post route to await params before looking up the note slug, fixing 404s on direct and linked note pages.",
    implemented:
      "Updated the blog post route to await params before looking up the note slug, fixing 404s on direct and linked note pages.",
    files: ["web/src/app/blog/[slug]/page.tsx"],
    learnings: [
      "In Next.js app router, route params can be async and must be awaited.",
      "A runtime error in a dynamic route can surface as a 404 in dev.",
      "Verify with a real click-through after route changes.",
    ],
  },
  {
    slug: "build-notes-card-clicks",
    title: "Build notes card clicks",
    summary:
      "Made the full cards clickable on the home and blog index views instead of just the tiny text link.",
    excerpt:
      "Made the full cards clickable on the home and blog index views instead of just the tiny text link.",
    date: "Jan 31, 2026",
    category: "build notes",
    author: "Ralph",
    image: "/images/tile-1.svg",
    whatShipped:
      "Added overlay links to the cards and adjusted layering so the entire card surface is clickable.",
    implemented:
      "Added overlay links to the cards and adjusted layering so the entire card surface is clickable.",
    files: [
      "web/src/app/page.tsx",
      "web/src/app/blog/page.tsx",
      "web/src/app/page.module.css",
      "web/src/app/blog/page.module.css",
    ],
    learnings: [
      "Full-card links improve usability when cards already hover like buttons.",
      "Use overlay links plus z-index to keep text readable and clickable.",
      "Keep hover styles on the card, not just the link.",
    ],
  },
];
