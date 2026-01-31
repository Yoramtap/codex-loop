# PRD: Modern Food Blog (v1)

## 1. Introduction/Overview
Build a simple, modern-looking food blog website with a warm, rustic, photography-forward feel. This v1 is a static marketing-style blog (no CMS), built with React (Next.js). It will include a home page, blog index, and individual post page with sample content.

## 2. Goals
- Deliver a cohesive visual identity that feels like a modern food blog.
- Publish a small set of sample posts (3) with consistent layout and typography.
- Provide a clear navigation structure across Home, Blog Index, and Post pages.
- Ensure pages are responsive and performant for a typical blog audience.
- Echo the calm, minimal, editorial patterning seen in Jules Acree’s “All” listing layout.

## 3. User Stories

### US-001: Home Page
**Description:** As a visitor, I want a warm, inviting home page so that I immediately understand the blog’s theme and feel motivated to explore posts.

**Acceptance Criteria:**
- [ ] Home page includes hero section with food imagery, blog title, short tagline, and a primary CTA to the blog index.
- [ ] Home page includes a featured posts section (3 cards) with title, excerpt, date, and category.
- [ ] Home page includes a small “say hi” social block with 4–6 image tiles and an Instagram handle link.
- [ ] Home page includes a simple footer with site name and social links (placeholders).
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

### US-002: Blog Index Page
**Description:** As a visitor, I want a blog index page listing posts so that I can browse and choose what to read.

**Acceptance Criteria:**
- [ ] Blog index lists the 3 sample posts with a meta line (category, author, date) above titles, excerpt below, and a thumbnail or image block.
- [ ] Each post card links to its individual post page.
- [ ] Include a non-functional “Older Posts” link at the bottom for visual parity.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

### US-003: Blog Post Page
**Description:** As a reader, I want a clean, readable post page so that I can comfortably read the article.

**Acceptance Criteria:**
- [ ] Post page includes title, author, date, hero image, and article body.
- [ ] Article body supports headings, paragraphs, and a recipe-style list.
- [ ] Provide a “Back to Blog” link.
- [ ] Typecheck passes.
- [ ] Verify in browser using agent-browser skill.

## 4. Functional Requirements
1. Implement three routes/pages: Home, Blog Index, Blog Post.
2. Provide a shared layout with consistent header navigation.
3. Use a warm, rustic visual palette and food photography.
4. Use lowercase navigation labels and small headings for a calm editorial tone.
5. Include a “Explore the site” footer section with a short list of links.
6. Provide 3 sample posts as local data (JSON or static array).
7. Ensure responsive layout for mobile, tablet, and desktop.
8. Use gradient blocks as image placeholders for v1, designed to be swapped for real photos later.

## 5. Non-Goals (Out of Scope)
- CMS integration or admin editing UI.
- User accounts, comments, or likes.
- Search or filtering.
- Analytics or SEO deep customization.

## 6. Design Considerations
- Emphasize food photography with large hero images and generous whitespace.
- Use editorial typography with soft, warm tones and a calm reading rhythm.
- Use a muted, earthy palette (cream/linen background, deep olive/espresso text, muted accent).
- Adopt a “category, author, date” meta line above titles, and show excerpts below titles.
- Use a clean grid of post cards with a small thumbnail or image block.
- Include a “Older Posts” pagination link (non-functional) for visual parity.
- Include an Instagram-style “say hi” social block with small image tiles (placeholders) and a handle link.
- Add a gentle email list CTA near the footer (“join our list”) with a subtle divider.
- Keep labels and small headings in lowercase for a calm, editorial tone.
- Use gradient blocks in place of images throughout (hero, post cards, social tiles) to allow easy future replacement.

## 7. Technical Considerations
- Use Next.js app router or pages router (choose whichever is currently used in repo).
- Images can be local placeholders.
- Consider light performance optimization (lazy images, avoid heavy JS).
- Required: use `web-design-guidelines` skill to review UI compliance after implementation.
- Required: use `agent-browser` skill to verify UI stories in browser.
- Optional: apply `vercel-react-best-practices` skill during React/Next.js implementation for performance patterns.

## 8. Success Metrics
- All pages render without errors and pass typecheck.
- UI is responsive and visually cohesive across pages.
- Users can navigate from Home → Blog Index → Post and back.

## 9. Open Questions
- Which font pairings should be chosen for the rustic/editorial feel?
- Do we want a small “about” blurb in the footer or hero?
