# Judo / Jiujitsu Study

Personal mobile-friendly study app for Judo and Jiu-Jitsu, built with Next.js and TypeScript.

Live site: [https://judo-lyart.vercel.app](https://judo-lyart.vercel.app)

## What it is

This app is a personal study tool focused on:

- move library
- notes and export
- flow and decision structure
- memory study / quiz
- progress tracking

It is intentionally moving away from isolated move cards and toward:

- position
- opponent reaction
- action potential
- resulting position

## Current stack

- Next.js 15
- React 19
- TypeScript
- local browser persistence for favorites, studied state, and class notes

## Main app areas

- `/library`: filtered move library with practice/category/difficulty/situation/training filters
- `/flows`: shared flow clusters for Judo and BJJ decision chains
- `/quiz`: study quiz modes for names, directions, and flows
- `/media`: media coverage audit for images and videos
- `/progress`: progress summary using local browser state
- `/guide`: lightweight orientation page

## Data model notes

- `data/moves.ts` is the core move library.
- `data/flows.ts` stores the shared flow clusters and edges.
- Judo generally follows Kodokan structure when possible.
- BJJ generally follows an IBJJF-style positional baseline plus practical move inventory coverage.
- Some moves now support crossover usage across both arts through `alsoPracticedIn`.
- Some moves now support `fromPositionIds` so a move can be its own entry while still being attached to one or more parent positions.

## Notable product goals

- keep the UI useful on mobile
- improve BJJ media coverage, especially direct per-move video coverage
- improve representative imagery without making the app feel visually noisy
- deepen position-first browsing and flow-aware study
- let the same data power library, flows, and more advanced quizzes

## Major milestones so far

- Added clickable Flow Lanes in the library that filter into real move subsets.
- Added stronger flow badges on move cards.
- Added position-first browsing in the library.
- Added a `/media` audit page for missing images, missing videos, and reference-only coverage.
- Added position-based fallback imagery so BJJ entries do not appear visually empty while real art is still being gathered.
- Filled direct video links for the closed-guard core.
- Added side-control subclusters including Super Chill / Cross Side Control, Paper Cutter Choke, Cross Side Crucifix, and Cross Side Wrist Lock.
- Split `Cross Grip Mount Control` out from generic `Mount` so mount stays broad and the variation stays explicit.
- Added `fromPositionIds` support on move pages.
- Added crossover-position support so moves like `Kesa Gatame` and `North-South` can belong to both Judo and Jiu-Jitsu study.

## Current content themes

- Judo emphasizes kuzushi directionality and Kodokan-backed structure.
- BJJ emphasizes positional hierarchy, reaction chains, and top/bottom decision routes.
- Top-control work is expanding from generic side control into branches like mount, north-south, scarf-hold pressure, and cross-side attack families.

## Notes on media

- Judo media coverage is stronger and often uses Kodokan-backed sources.
- BJJ media coverage is still thinner.
- Representative/fallback imagery exists for position families, but the long-term goal is cleaner dedicated images and better per-move visuals.
- The `/media` page is the working checklist for content gaps.

## Local development

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

## Important source file

Research and staging notes live in:

- `research/technique-staging.md`
- `research/image-backlog.md`

Those files capture positional hierarchy work, action-potential modeling, Judo directionality notes, BJJ structural notes, media assumptions, and image backlog priorities used to guide the library.

## Good next steps

- continue systematic media coverage, especially BJJ videos and dedicated images
- deepen crossover position coverage and position-first browsing
- expand richer connection data so move pages show cleaner chains and fewer redundant links
- build more advanced quiz modes off the same flow and position graph
