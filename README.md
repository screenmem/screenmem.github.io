# ScreenMem

Research website for **ScreenMem: Benchmarking Proactive Memory Maintenance over Long-Horizon Computer-Use Streams**.

A static HTML/CSS/JavaScript website with no package installation, build step, backend, or external runtime dependencies.

## Website structure

```text
.
├── index.html          # Overview, PC/mobile media, construction walkthrough
├── benchmark.html      # Benchmark construction, capabilities, and protocol
├── leaderboard.html    # Searchable and filterable benchmark results
├── styles.css
├── script.js
├── media-config.js     # Media sources and external video collection URL
├── assets/             # Website images and favicon
├── .nojekyll           # Serve static files directly through GitHub Pages
└── .gitignore
```

The navigation contains Overview, Benchmark, More videos, and Leaderboard. **More videos** points to an external video collection once configured; it is not a separate website page. All local links are relative so the site works under the `/screenmem/` project path.

## Local preview

Open `index.html` in a browser, or run this from the repository root:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Visit <http://127.0.0.1:8080/>.

## Media and the More videos link

The Overview contains three review placeholders:

- **PC:** a short interaction excerpt from a reconstructed desktop application.
- **Mobile:** a short interaction excerpt from a reconstructed mobile application, displayed beside PC.
- **Construction:** a walkthrough of application reconstruction, interaction replay, and temporal composition.

The website previews need not contain complete user days. Each placeholder explains its intended content inside the media surface. It disappears once the corresponding media loads.

Configure the sources in `media-config.js`. Paths are relative to `index.html`; direct HTTPS media URLs also work. Use `type: 'video'` for MP4/WebM and `type: 'image'` for GIF/animated WebP. `poster` is optional for videos.

```js
window.SCREENMEM_MEDIA = {
  pc: {
    type: 'video',
    src: 'assets/pc-excerpt.mp4',
    poster: '',
    label: 'PC interaction example',
  },
  mobile: {
    type: 'image',
    src: 'assets/mobile-excerpt.gif',
    poster: '',
    label: 'Mobile interaction example',
  },
  construction: {
    type: 'video',
    src: 'assets/construction.mp4',
    poster: '',
    label: 'Trace-grounded construction of ScreenMem',
  },
  moreVideosUrl: '', // Set to the actual external video collection URL.
};
```

These media filenames are examples, not bundled assets. Empty sources retain the placeholders without requesting missing files. `moreVideosUrl` configures the header, footer, and **View more videos** link on the Overview together. It can point to a dedicated video page or the eventual Hugging Face dataset page. Empty or invalid URLs leave those links disabled and labeled through their accessible descriptions/tooltips.

Videos play automatically, muted, inline, and on a loop. Playback pauses off-screen and when the page is hidden. A reduced-motion preference pauses autoplay and enables native controls; native controls are also enabled if the browser blocks playback. Media is fitted without cropping.

## Leaderboard

The leaderboard contains all 15 memory systems and two optional retrieval-only baselines. It supports search, memory-paradigm filtering, ranking by PC/mobile/overall accuracy, and CSV export of the 15 memory systems. Scores are defined in `SYSTEMS` and `RETRIEVAL` in `script.js`.

## GitHub Pages

The intended repository is <https://github.com/screenmem/screenmem>.

After pushing the files to `main`, enable Pages in **Settings → Pages**:

1. Source: **Deploy from a branch**.
2. Branch: **main**.
3. Folder: **/(root)**.
4. Save.

The expected default project-site URL is <https://screenmem.github.io/screenmem/> once GitHub Pages finishes publishing. No custom workflow is required for this buildless site. Configuration reference: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Research content

Figures and scores are based on the supplied ScreenMem manuscript:

- Figure 1: memory formulations (page 2).
- Figure 2: trace-grounded user-day stream construction (page 5).
- Table 2: benchmark statistics (page 7).
- Table 3: overall benchmark accuracy (page 8).

The four capabilities follow the paper: Facts & States, State Evolution, Activities & Transient Events, and Behavioral Patterns. The home illustration and conceptual memory figure are schematic; the construction and memory-formulation figures are cropped from the manuscript.

Public paper/code release links, media assets, the external video collection URL, and author/affiliation information remain to be supplied. The repository contains only website assets, not benchmark recordings or the full manuscript.
