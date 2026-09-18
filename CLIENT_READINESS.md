# BluePeak Digital — Client Readiness

Status as of 2026-09-18. This supersedes the original Phase 4 snapshot below — a lot has shipped since then, including all three items that were originally blocking outreach. Kept the original structure so this stays a useful log, not a rewrite that erases the history.

---

## 1. Status: the original blocking items are resolved

The Phase 4 version of this doc listed three tasks as blocking before any outreach. All three are done and verified live on production:

1. ✅ **Real domain.** Live at `https://bluepeakdigitalhq.com` (migrated off the interim `bluepeak-digital-two.vercel.app`), HTTPS working.
2. ✅ **Real business email.** `hello@bluepeakdigitalhq.com` is used consistently across the contact section, footer, structured data, and privacy policy — no more personal Gmail address anywhere on the site.
3. ✅ **Contact form wired up.** The form posts to a real Formspree endpoint (`f/mrewvwdj`), not the old `YOUR_FORM_ID` placeholder.
4. ✅ **Redeployed and reverified multiple times since**, most recently today — production is confirmed serving current content.

**Bottom line: there's no longer a config/infrastructure reason to hold off on outreach.** The open items below are about trust-building and polish, not blockers.

---

## 2. Remaining open items

### 🟡 Should do before scaling outreach volume

- **Still no real paid client work.** All six portfolio pieces remain BluePeak's own concept/demo work, honestly labeled as such (reconfirmed today — see changelog). Have a ready one-line answer for "have you done this for a real business before?"
- **Still no real testimonials or client photos.** The trust-building sections have nothing real to point to yet. Replacing even one placeholder with a real testimonial after client #1 will do more for conversion than any further site polish.
- **No founding-client offer on the site yet.** Worth considering (verbally, or as a limited-time line) to turn "no track record yet" into a reason to say yes now — see Section 4.

### 🟢 Nice-to-have, not blocking

- Apple touch icon (180×180 PNG) still not added — iOS home-screen bookmarks fall back to a generic icon without one.
- Open Graph image is still 987×650, not the ideal 1200×630 — explicit `og:image:width`/`height` are set so it renders correctly, just slightly cropped on platforms that expect the strict 1.91:1 ratio.
- `AggregateRating`/`Review` structured data still correctly withheld until there's real client data — adding it now would be fake review schema, a Google spam violation.

---

## 3. Session changelog (most recent first)

**2026-09-18 — final QA/conversion/credibility pass:**
- **CTA consolidated to one family across the whole site.** Nav button, hero, portfolio, process, "Why choose BluePeak," and the Enterprise pricing card all now read "Book a Free Discovery Call" (or lowercase "Book a free discovery call" for inline sentence-style links). The nav short label changed from "Free Call" to "Free Discovery Call." The actual form submit button stays "Request My Free Discovery Call" since that's literally what it does (a request via form, not an instant calendar booking) — legal pages already referenced this correctly, no change needed there.
- **Removed the standalone "Claim your free website audit" CTA.** There's no distinct audit deliverable separate from the discovery call in the current process, so this was promising something that wasn't actually a separate offer — folded into the standard discovery-call CTA.
- **Performance claims made internally consistent and defensible.** The stack ticker and Engineering Framework section previously claimed "100/100 Lighthouse Target" and "<100ms Response Targets" while the actual Performance Commitment (footer of the final CTA section, and Terms section 5) only guarantees 90+ mobile Lighthouse. Changed the ticker and framework cards to lead with "90+ Mobile Lighthouse Standard" (100/100 now framed as "pursued wherever production conditions allow," not promised) and dropped the unverified sub-100ms response-time claim entirely — replaced with an honest "Static-First Delivery" framing (no frameworks/page builders, lean DOM) that doesn't need a number to back it up.
- **Proof section rewritten to stop being a dead end.** It previously routed "See what's included → View pricing," which skipped past the actual proof. Now it explicitly invites visitors to self-verify (view source, test on their phone, run their own Lighthouse check on the demo builds) and links to `#work` instead of `#pricing`. No fabricated stats added — the honesty about not having a public client portfolio yet was already correct and is preserved.
- **Portfolio "Expected outcome" → "Design objective"** across all six case-study cards — these are goals BluePeak designed toward, not measured client outcomes, and the old label could read as a claimed result.
- **Hero status-pill and locale-badge reworded.** "All Systems Operational • Core Web Vitals Optimized" (sounds like a SaaS uptime monitor that isn't actually running) → "Hand-Coded • Mobile-First • Conversion-Focused." "Global Web Infrastructure — Building High-Performance Digital Assets Worldwide" (jargon-heavy, vague) → "Based in South Africa — building for clients worldwide" (accurate, plain).
- **"Hyper-optimized digital infrastructure" replaced** in the Engineering Framework intro with "websites engineered for speed, not just styled to look fast" — same claim, buyer-facing language instead of agency-to-agency jargon.
- Verified every `#anchor` link on the homepage resolves to a real section id — no dead internal links. No dead CSS/JS or debug artifacts found (`console.log`, `TODO`/`FIXME`) in any HTML/CSS/JS file.
- **Not changed, and why:** pricing/service-promise line items (daily backups, security monitoring, etc.) — verifying these have a real operational process behind them is a business-knowledge question only the founder can answer, not something derivable from the code. Portfolio composition (no new construction/trade demo added) — the advisor explicitly said not to invent one under outreach time pressure; the existing Current & Co. Electrical concept preview stays as the trade-market placeholder. Apple touch icon and a strict 1200×630 OG image remain open nice-to-haves (unchanged from the prior status). No live multi-viewport browser testing or repeated real Lighthouse runs were performed this session — this was a static code/copy audit, not a browser QA pass; see the note below if that's wanted next.

**2026-09-16 — credibility & consistency patch:**
- Portfolio intro/CTAs reworded so the three interactive demo builds (barbershop, cafe, gym) aren't described as "live builds" when each linked page self-labels as a concept demo — now "three interactive demo builds you can explore in full" / "Explore demo" CTAs.
- "WCAG 2.1 Accessible" softened to "WCAG 2.1 Best Practices" — no formal conformance audit has actually been run.
- Legal pages (`privacy.html`, `terms.html`, `cookie-settings.html`) synced to the current live nav CTA ("Free Call") and contact form name ("Request My Free Discovery Call") — both had drifted from the homepage copy.
- `terms.html`: standardized on "commitment" instead of mixing it with "guarantee" in the Performance Commitment section.
- Verified live on `bluepeakdigitalhq.com`; confirmed the three portfolio demo pages still load correctly and pass a manual mobile check.

**Since Phase 4, before today (chronological):**
- Domain migrated from the interim Vercel subdomain to `bluepeakdigitalhq.com`.
- Contact email switched from personal Gmail to `hello@bluepeakdigitalhq.com` everywhere it appears.
- Formspree wired to a real form ID, replacing the placeholder.
- Removed the fake stats strip (120+ projects / 99% satisfaction / 4.9/5 rating) and the sample testimonial/logo placeholders entirely, rather than just disclosing them as illustrative.
- Removed a mismatched "Call us" phone CTA that sat beside email links without a real matching phone contact flow.
- Pricing repositioned for international clients: renamed tiers, priced in USD/GBP instead of ZAR — see Section 4 for current numbers.
- Hero copy reworked to lead with the lead-gen outcome.
- Portfolio demo pages added to `sitemap.xml`.
- A general "reduce overclaiming, tighten credibility" polish pass across the homepage.

**Phase 4 (2026-07-08, original version of this doc):** interim-domain fix, Gmail cleanup, title-tag length fix, OG image dimension fix. See git history (`759ab7b` and earlier) for detail — superseded by the domain/email work above.

---

## 4. Current pricing (replaces the old ZAR table — this changed since Phase 4)

Pricing is now positioned internationally, in USD/GBP, with a one-time build plus an optional monthly Care Partnership:

| Tier | One-time build | Monthly Care Partnership | Notes |
|---|---|---|---|
| Foundation Build | $1,500 USD / £1,200 GBP | $99 USD / £79 GBP / mo | Entry tier — startups, landing pages, small businesses |
| Business Growth Engine | $3,000 USD / £2,400 GBP | $199 USD / £159 GBP / mo | Flagged "Most popular" — default recommendation in conversation |
| Enterprise | From $5,000 USD / £4,000 GBP | From $399 USD / £319 GBP / mo | Open-ended — e-commerce, large builds, custom platforms |

Every new build includes the first month of Care free. The 7-step process shown on the site (Discover → Audit → Strategy → Design → Develop → Launch → Support) is tier-agnostic — it's not the old "Basecamp → Ascent → Summit → Beyond" naming from Phase 4, which no longer exists on the site.

The founding-client discount idea from Phase 4 was never implemented. Still worth considering — e.g. a percentage off Foundation Build or Business Growth Engine for your first 3–5 real clients, in exchange for a testimonial, a case study writeup, and permission to use their real site as a portfolio piece.

---

## 5. Client onboarding checklist

Use this once someone says yes:

- [ ] Confirm scope and package in writing (email is fine) — pages, features, timeline, price, payment terms.
- [ ] Collect a deposit before starting (protects your time on scope changes) — confirm the percentage verbally, it isn't published on the site.
- [ ] Get brand assets: logo (or confirm you're designing one), brand colors if they have them, any existing copy/content, photos.
- [ ] Get access needs sorted early: domain registrar login or DNS access, existing hosting if migrating, any existing CMS/social accounts they want linked.
- [ ] Set a check-in cadence and agree on it explicitly — the site no longer publishes a specific "reviewed weekly" promise, so don't imply one you haven't confirmed you'll keep.
- [ ] Agree on the number of revision rounds included, and the cost of rounds beyond that, before design starts — avoids scope creep disputes later.
- [ ] Confirm any post-launch support window verbally before promising one — the site currently only commits to the 30-day Lighthouse performance fix (Section 5 of the Terms), not a general post-launch support period.
- [ ] Send a short "what to expect" email after kickoff mapping the 7 process stages (Discover → Audit → Strategy → Design → Develop → Launch → Support) to real milestones.

## 6. Proposal process

A lightweight process that matches the site's "no slides, no sales script" positioning:

1. **Initial contact** (form, WhatsApp, or email) → reply promptly. The site no longer publishes a specific response-time promise, so don't quote "within 24 hours" unless you intend to hold yourself to it.
2. **15–20 min discovery call**: their business, current site (if any), what "success" looks like for them, rough budget comfort.
3. **Same-week written quote**: tier, price, timeline, what's included/excluded, payment terms. Keep it to one page — long proposals slow down small-business buyers.
4. **Deposit + kickoff**: once accepted, send the onboarding checklist above as a simple follow-up email.
5. **Regular async update** during the build — small businesses value being kept in the loop over formal reports.
6. **Pre-launch QA pass**: cross-browser/device check, working contact form, working links, real copy (no lorem ipsum), real contact details — use Section 7 below as the checklist.
7. **Launch + handover**: confirm DNS/hosting is stable, walk them through anything they need to self-manage, start the Care Partnership clock.

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
- [ ] Privacy policy reflects the actual tools in use (analytics, form processor, etc.) — don't let it drift from reality as tooling changes. (This drifted once already — see the 2026-09-16 changelog entry above — worth a periodic recheck.)

---

## Is BluePeak Digital ready to start contacting real businesses?

**Yes.** The three original blockers (domain, email, contact form) are resolved and verified live. Nothing left on this list is stopping outreach — the honest remaining gap is client #1 and real proof, which no further site work can manufacture. The nice-to-have polish items (apple-touch-icon, a proper 1200×630 OG image, `AggregateRating` once it's earned) can happen anytime without slowing anything down.
