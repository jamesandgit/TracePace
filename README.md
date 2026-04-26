# TracePace

A simracing fuel & strategy calculator. Works as a PWA — install it to your home screen for quick access during race prep.

## Features

- **Sprint & Endurance modes** — single-stint fuel or full pit strategy
- **Timed or fixed-lap races** — enter duration (h:mm) or lap count
- **Safety margin** — adds extra laps of fuel for formation lap, safety car, or early pit
- **Stint breakdown** — visual bar showing fuel per stint and minimum pit stops
- **Car / Track / Game selector** — searchable dropdowns with a built-in list, plus add your own
- **Save combos** — saves your inputs and results per car/track/game combo, auto-fills next time
- **Export / Import** — back up and restore saved combos as JSON

## Usage

Open `index.html` in a browser, or serve the folder with any static web server.

```
npx serve .
```

No build step, no dependencies.

## Files

```
index.html          — app (single file)
manifest.json       — PWA manifest
sw.js               — service worker (offline support)
data/cars-tracks.json — default car and track lists
favicon/            — icons for browser tabs and home screen
icons/              — PWA icons
```

## PWA Install

Visit the hosted URL in Chrome or Safari and use **Add to Home Screen** to install as a standalone app.
