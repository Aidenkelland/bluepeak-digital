# BluePeak Digital — Client Readiness (Phase 4)

Status as of 2026-07-08. This is the business-readiness companion to the Phase 3 technical polish — it covers what's left before you start emailing/calling real businesses, plus the commercial process to run once you do.

---

## 1. Remaining tasks before outreach

Ranked by how much they'd hurt you if a prospect noticed them.

### 🔴 Blocking — fix before sending a single outreach message

1. **Get on a real domain.** The site currently lives at `https://bluepeak-digital-two.vercel.app/` — a free Vercel subdomain. You are pitching yourself as a *premium web design agency*, and showing up in a prospect's inbox with a link to a `.vercel.app` URL undercuts that pitch immediately; it reads as "hasn't shipped their own site yet." Buy `bluepeakdigital.co.za` (or `.com`) and connect it in Vercel's dashboard (Project → Settings → Domains — free, just needs DNS records at your registrar). Budget: ~R150–R300/year for a `.co.za`.
2. **Get a real business email.** The site currently uses your personal Gmail (`1Aidenjasonkelland@gmail.com`) as the contact address everywhere — footer, contact section, structured data, privacy policy. It works, but it's the second-biggest tell that this is a one-person operation without infrastructure yet. Once you own the domain, get `hello@bluepeakdigital.co.za` running via Google Workspace (~R100–R150/user/month) or a free option like Zoho Mail, then swap it back in across the same files (search for `1Aidenjasonkelland@gmail.com`).
3. **Wire up the contact form.** Right now the form posts to a placeholder Formspree endpoint (`YOUR_FORM_ID`) — it will fail every real submission until this is fixed (the JS gracefully falls back to "please email us instead," so you won't silently lose enquiries, but you also won't *get* the form ones). Steps:
   - Go to [formspree.io](https://formspree.io) and create a free account.
   - Create a new form, point its notification email at your real inbox.
   - Copy the endpoint it gives you (`https://formspree.io/f/xxxxxxxx`).
   - In `index.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` on the `<form id="ctaForm">` and replace `YOUR_FORM_ID` with your real ID.
   - Submit a real test enquiry through the live site afterward to confirm it lands in your inbox.
4. **Redeploy.** These fixes only matter once they're live. Commit, push to `origin main` (GitHub → auto-deploys via Vercel if it's connected the standard way), and confirm the live site reflects the changes — check the footer email, the canonical URL in view-source, and submit a real test form entry.

### 🟡 Should do before scaling outreach volume

5. **Decide how you'll handle the "no real client work yet" gap.** Three of the six portfolio pieces are live, working demos; the other three are static concept mockups, and all six are honestly labeled as BluePeak's own concept work, not paid client projects — because you don't have paid client projects yet. That's fine for a first pitch or two, but it's worth having a one-line answer ready when a prospect asks "have you done this for a real business before?" (see the pricing section below for a founding-client angle).
6. **Decide if `bluepeakdigital.co.za`-branded email matters enough to delay outreach**, or if you'd rather start contacting businesses now on Gmail and upgrade once the first deposit lands. Either is defensible — just make it a decision, not a default.
7. **Add a way to collect real testimonials and photos from your first 2–3 clients.** The site is unusually honest about labeling its stats, client logos, and testimonials as illustrative placeholders — good, keeps you honest, but it means the trust-building sections are currently doing very little work. Replacing even one placeholder testimonial with a real one will do more for conversion than any other single change on this site.

### 🟢 Nice-to-have, not blocking

8. Add a proper 1200×630 Open Graph share image (current `hero-abstract.jpg` is 987×650 — usable, and I've now set explicit `og:image:width`/`height` so it renders correctly, but it'll get slightly cropped on platforms that expect the 1.91:1 ratio).
9. Add a PNG `apple-touch-icon` (180×180) alongside the existing SVG favicon — iOS home-screen bookmarks fall back to a generic icon without one. I didn't generate this myself (no image-rasterizing tool available in this environment); a quick export from the existing `favicon.svg` in any design tool or [realfavicongenerator.net](https://realfavicongenerator.net) will do it.
10. Once you have real client results, add `AggregateRating`/`Review` structured data — deliberately *not* added yet, since fake review schema is a Google spam violation.

---

## 2. What I changed in this session vs. what I left alone

**Changed** (all were genuine fixes, not redesigns):
- Replaced the placeholder domain (`bluepeakdigital.example`) with your real interim Vercel URL across `index.html`, `privacy.html`, `robots.txt`, and `sitemap.xml` — canonical tags, Open Graph, Twitter Card, and JSON-LD now all point somewhere real.
- Replaced the non-existent `hello@bluepeakdigital.co.za` with your real Gmail everywhere it appeared (contact section, footer, privacy policy, structured data, `llms.txt`, and the form's error-fallback message) — this was a live bug: any real business that tried to email that address would have bounced silently.
- Shortened the `<title>` tag from 81 to 55 characters so it stops truncating in Google search results (was: *"BluePeak Digital — Websites That Grow Businesses Worldwide, Built in South Africa"*, now: *"BluePeak Digital — Websites That Convert | South Africa"*).
- Added `theme-color` meta tags to `index.html`/`privacy.html` (portfolio demo pages already had this) and explicit `og:image:width`/`height` for correct social-preview rendering.

**Left alone** (already solid — Phase 3 covered these, and re-touching them would be scope creep):
- Portfolio demos, mobile nav, FAQ accordion, scroll reveal, dark/light theme, responsive layout, color-contrast fixes (there's a code comment documenting a prior WCAG AA fix on the light-theme link color — still correct).
- The honeypot spam field, graceful form-failure handling, and the disclosed/labeled placeholder stats, testimonials, and client-logo marquee — all already handled correctly and honestly.
- `robots.txt`'s AI-crawler allowlist and the `noindex` handling on portfolio demo pages — correct as-is.

---

## 3. Honest trust audit — reading this as a skeptical SA business owner

If I were a café or barbershop owner getting a cold email from BluePeak Digital today, here's what would give me pause, roughly in order:

1. **"Who actually built this for someone before me?"** All six case studies are BluePeak's own concept work, clearly labeled as such. That's honest, but it means I have zero evidence you've delivered for a paying client. New agencies all face this — the fix isn't hiding it, it's having a ready answer ("you'd be one of our first clients, and here's what that gets you" — see founding-client pricing idea below).
2. **The stats strip (120+ projects, 99% satisfaction, 4.9/5 rating) is directly under the hero, above the fold, in large friendly numbers — and it's fake.** It *is* honestly disclosed one line below ("Illustrative example figures"), but the disclosure is small and easy to skim past, while the numbers themselves are big and confident. A sharp buyer who notices the fine print after being impressed by the headline numbers may feel mildly misled rather than reassured by the honesty. I didn't touch this — removing it is a legitimate design call, but it's yours to make, not mine to make silently.
3. **Domain and email, until you complete items 1–2 above.** Already covered — this is the single biggest lever you have right now.
4. **No company registration number or physical address**, only "South Africa." For a R4,000–R7,500 job most small business owners won't ask, but if you ever pitch a larger or more risk-averse client, having a CIPC registration number (even as a sole proprietor / registered business name) ready to share on request will matter.
5. **What works in your favor:** the pricing is transparent and in local currency, WhatsApp is offered as a zero-friction contact path (very well suited to SA small-business buying habits), the privacy policy is specific and non-boilerplate (correctly names Formspree, POPIA, and GDPR), and the copy is confident without being oversold. This doesn't read like a template — it reads like someone who thought about the buyer.

**Bottom line:** the site's design, code quality, and UX are already ahead of what most businesses in this price bracket would build. The gap between "impressive demo" and "ready to be contacted" is almost entirely the three blocking items in Section 1 — not craft, not content, not design.

---

## 4. Recommended pricing packages

The existing three tiers on the site are sound and don't need restructuring. One addition worth considering:

| Package | Price (existing) | Notes |
|---|---|---|
| Basecamp | From R4,000 | Good entry point — keep as-is. |
| Ascent | From R7,500 | Correctly flagged "Most popular" — this should be your default recommendation in conversation. |
| Summit | Custom quote | Correct to leave open-ended for e-commerce/web apps. |

**Consider adding, verbally or as a limited-time line on the site, a "Founding Client" offer** — e.g. 15–20% off Basecamp or Ascent for your first 3–5 real clients, in exchange for a testimonial, a case study writeup, and permission to use their site (with real screenshots, real results) as a portfolio piece. This directly solves the "no real client work" trust gap in Section 3, and gives early prospects a concrete reason to say yes now rather than "once you have a track record."

---

## 5. Client onboarding checklist

Use this once someone says yes:

- [ ] Confirm scope and package in writing (email is fine) — pages, features, timeline, price, payment terms.
- [ ] Collect a 50% deposit before starting (standard practice; protects your time on scope changes).
- [ ] Get brand assets: logo (or confirm you're designing one), brand colors if they have them, any existing copy/content, photos.
- [ ] Get access needs sorted early: domain registrar login or DNS access, existing hosting if migrating, any existing CMS/social accounts they want linked.
- [ ] Set a weekly check-in cadence (matches the "reviewed weekly" promise already on the site under Process → Ascent).
- [ ] Agree on the number of revision rounds included, and the cost of rounds beyond that, before design starts — avoids scope creep disputes later.
- [ ] Confirm the post-launch support window length (site currently promises 30 days on the Ascent tier — make sure that's consistent with what you actually offer verbally).
- [ ] Send a short "what to expect" email after kickoff so the client knows the four stages (Basecamp → Ascent → Summit → Beyond) map to real milestones, not just marketing copy.

## 6. Proposal process

A lightweight process that matches the site's "no slides, no sales script" positioning:

1. **Initial contact** (form, WhatsApp, or email) → reply within the promised 24 hours, even if just to schedule a call.
2. **15–20 min discovery call**: their business, current site (if any), what "success" looks like for them, rough budget comfort.
3. **Same-week written quote**: package tier, price, timeline, what's included/excluded, payment terms. Keep it to one page — long proposals slow down small-business buyers.
4. **Deposit + kickoff**: once accepted, send the onboarding checklist above as a simple follow-up email.
5. **Weekly async update** (even a two-line WhatsApp message) during the build — small businesses value being kept in the loop over formal reports.
6. **Pre-launch QA pass**: cross-browser/device check, working contact form, working links, real copy (no lorem ipsum), real contact details — use Section 7 below as the checklist.
7. **Launch + handover**: confirm DNS/hosting is stable, walk them through anything they need to self-manage (if CMS included), start the post-launch support window clock.

## 7. Launch checklist (for every future client site, and for BluePeak's own site)

- [ ] Real domain connected, HTTPS working.
- [ ] Real business email connected and tested (send + receive).
- [ ] Contact form tested end-to-end with a real submission landing in the right inbox.
- [ ] All placeholder/lorem ipsum content replaced.
- [ ] Meta title/description reviewed for length and accuracy on every page.
- [ ] Open Graph image renders correctly when the URL is shared (test in a real chat app, not just a validator).
- [ ] `sitemap.xml` and `robots.txt` point at the real production domain.
- [ ] Structured data (`JSON-LD`) reflects real contact details.
- [ ] Mobile nav, forms, and all interactive elements tested on an actual phone, not just a resized browser window.
- [ ] Privacy policy reflects the actual tools in use (analytics, form processor, etc.) — don't let it drift from reality as tooling changes.

---

## Is BluePeak Digital ready to start contacting real businesses?

**Not yet — but it's three concrete tasks away, not weeks of work.** The design, code, copy, and UX are already ahead of the price bracket you're competing in. The only things standing between this and a credible first outreach email are: (1) a real domain, (2) a real business email, (3) a working contact form. All three are config/account tasks, not further development — realistically a few hours plus DNS propagation time. Do those, redeploy, send yourself a test enquiry through the live form, and you're ready to start pitching.
