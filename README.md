# TracePace

A simracing fuel & strategy calculator. Works as a PWA — install it to your home screen for quick access during race prep.

## Features

- **Sprint & Endurance modes** — single-stint fuel or full pit strategy
- **Timed or fixed-lap races** — enter duration (h:mm) or lap count
- **Extra lap at finish** — toggle for timed races where the leader completes one more lap after the timer expires (on by default)
- **Pit stop time loss** — endurance timed races account for time spent in the pits when estimating lap count (laps ↔ stops solved iteratively)
- **Fuel per stop** — endurance results show how much to add at each pit stop
- **Litres or gallons** — unit toggle; values convert in place and the preference is remembered
- **Safety margin** — adds extra laps of fuel for formation lap, safety car, or early pit
- **Tank warning in Sprint** — optionally enter tank capacity to be warned when the fuel needed won't fit
- **Stint breakdown** — visual bar showing fuel per stint and minimum pit stops
- **Car / Track / Game selector** — searchable dropdowns with a built-in list, plus add your own (deletions persist)
- **Save combos** — saves your inputs and results per car/track/game combo, auto-fills when you pick that combo again
- **Copy summary** — one tap copies a plain-text strategy summary for pasting into Discord
- **Export / Import** — back up and restore saved combos and custom lists as JSON
- **Fully offline** — self-hosted fonts, no third-party requests; the service worker fetches app updates when online

## Usage

Serve the folder with any static web server:

```
npx serve .
```

Opening `index.html` directly from disk also works (the service worker and PWA install require HTTP).

No build step, no dependencies.

## Files

```
index.html            — app (single file)
manifest.json         — PWA manifest
sw.js                 — service worker (offline support, network-first app shell)
data/cars-tracks.json — default car and track lists
fonts/                — self-hosted DM Sans + DM Mono (woff2)
favicon/              — icons for browser tabs and home screen
icons/                — PWA icons
V1/                   — backup of the original release
```

## PWA Install

Visit the hosted URL in Chrome or Safari and use **Add to Home Screen** to install as a standalone app.

## Releasing updates

The service worker serves `index.html` network-first, so app changes reach installed users on their next online launch. When adding or renaming static assets (fonts, icons, data), also bump the `CACHE` version in `sw.js`.
