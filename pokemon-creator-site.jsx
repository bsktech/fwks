import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// GLOBAL STYLES — Green Forest Theme
// ─────────────────────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600;700;800;900&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --g900: #0d2b14;
      --g800: #14532d;
      --g700: #166534;
      --g600: #15803d;
      --g500: #16a34a;
      --g400: #22c55e;
      --g300: #4ade80;
      --g200: #bbf7d0;
      --g100: #dcfce7;
      --g50:  #f0fdf4;
      --ink:   #111827;
      --ink2:  #374151;
      --ink3:  #6b7280;
      --rule:  #e5e7eb;
      --surface: #ffffff;
      --bg:    #f8faf8;
      --card:  #ffffff;
      --ember: #dc2626;
      --gold:  #d97706;
      --gold2: #fbbf24;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
      --shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05);
      --shadow-lg: 0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06);
      --shadow-green: 0 4px 24px rgba(22,163,74,0.18);
      --shadow-green-lg: 0 8px 40px rgba(22,163,74,0.22);
      --pixel: 'Press Start 2P', monospace;
      --sans:  'Inter', system-ui, sans-serif;
      --r-sm: 8px; --r-md: 14px; --r-lg: 20px; --r-xl: 28px;
    }

    html { scroll-behavior: smooth; }
    body { font-family: var(--sans); background: var(--bg); color: var(--ink); overflow-x: hidden; -webkit-font-smoothing: antialiased; }

    .grass-bg {
      background-color: var(--bg);
      background-image:
        radial-gradient(ellipse at 20% 80%, rgba(34,197,94,0.06) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(22,163,74,0.04) 0%, transparent 60%),
        linear-gradient(rgba(22,163,74,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(22,163,74,0.025) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 28px 28px, 28px 28px;
    }
    .pixel-grid {
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 24px 24px;
    }

    /* NAV */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(13,43,20,0.97); backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--g800);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 2.5rem; height: 58px;
    }
    .nav-logo {
      font-family: var(--pixel); font-size: 0.72rem; color: var(--g300);
      cursor: pointer; display: flex; align-items: center; gap: .55rem;
      text-shadow: 0 0 20px rgba(74,222,128,0.35); letter-spacing: 2px;
    }
    .nav-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--g400); box-shadow: 0 0 8px var(--g400);
      animation: blink 2s infinite;
    }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.25} }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; }
    .nav-links a {
      font-family: var(--pixel); font-size: 0.45rem; letter-spacing: 1px;
      color: rgba(255,255,255,.45); text-decoration: none; transition: color .2s;
    }
    .nav-links a:hover { color: var(--g300); }
    .nav-links a.active { color: var(--g300); text-shadow: 0 0 12px rgba(74,222,128,.4); }
    .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
    .nav-hamburger span { display: block; width: 22px; height: 2px; background: rgba(255,255,255,.6); margin: 5px 0; border-radius: 2px; transition: .3s; }

    /* HERO */
    .hero {
      min-height: 100vh; padding-top: 58px;
      background: linear-gradient(160deg, var(--g900) 0%, #0a2218 45%, #091a0c 100%);
      display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
    }
    .hero-grass {
      position: absolute; bottom: 0; left: 0; right: 0;
      height: 130px; pointer-events: none;
      display: flex; align-items: flex-end; gap: 2px; overflow: hidden;
    }
    .grass-blade {
      flex-shrink: 0; border-radius: 40% 40% 0 0;
      background: linear-gradient(to top, var(--g800), var(--g500));
      transform-origin: bottom center;
      animation: sway 3s ease-in-out infinite alternate;
    }
    @keyframes sway { from { transform: rotate(-4deg) scaleX(.95); } to { transform: rotate(4deg) scaleX(1.05); } }
    .firefly {
      position: absolute; border-radius: 50%;
      background: var(--g300); filter: blur(1px);
      animation: ff 8s ease-in-out infinite;
    }
    @keyframes ff { 0%,100%{opacity:0;transform:translateY(0) scale(1)} 30%{opacity:.7} 60%{opacity:.35;transform:translateY(-40px) scale(1.4)} }
    .hero-content {
      text-align: center; z-index: 2; padding: 2rem 1.5rem;
      max-width: 740px; position: relative;
    }
    .hero-eyebrow {
      display: inline-flex; align-items: center; gap: .6rem;
      font-family: var(--pixel); font-size: 0.38rem; color: var(--g300);
      letter-spacing: 2px; background: rgba(34,197,94,.1);
      border: 1px solid rgba(74,222,128,.25); padding: .5rem 1rem;
      border-radius: 100px; margin-bottom: 1.75rem;
      animation: glow-p 3s infinite;
    }
    @keyframes glow-p { 0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,0)} 50%{box-shadow:0 0 0 6px rgba(74,222,128,.07)} }
    .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--g400); animation: blink 1.5s infinite; }
    .hero-name {
      font-family: var(--pixel); font-size: clamp(.6rem,1.8vw,.9rem);
      color: var(--g400); letter-spacing: 5px; margin-bottom: .9rem; display: block;
      text-shadow: 0 0 28px rgba(74,222,128,.35);
    }
    .hero-title {
      font-family: var(--sans); font-size: clamp(2.2rem, 6vw, 3.8rem);
      font-weight: 900; color: #fff; line-height: 1.15;
      margin-bottom: 1.5rem; letter-spacing: -1.5px;
    }
    .hero-title em {
      font-style: normal;
      background: linear-gradient(135deg, var(--g300), var(--g400));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .hero-sub {
      font-size: 1.05rem; color: rgba(255,255,255,.58); font-weight: 500;
      line-height: 1.85; margin-bottom: 2.5rem; max-width: 520px;
      margin-left: auto; margin-right: auto;
    }
    .hero-sub strong { color: var(--g200); font-weight: 700; }
    .hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn-primary {
      display: inline-flex; align-items: center; gap: .5rem;
      font-family: var(--pixel); font-size: 0.48rem;
      background: var(--g500); color: #fff; border: none;
      padding: 1rem 1.75rem; cursor: pointer; border-radius: var(--r-md);
      letter-spacing: 1px; transition: all .2s;
      box-shadow: 0 4px 0 var(--g700), var(--shadow-green);
    }
    .btn-primary:hover { background: var(--g400); transform: translateY(-2px); box-shadow: 0 6px 0 var(--g700), var(--shadow-green-lg); }
    .btn-primary:active { transform: translateY(1px); box-shadow: 0 2px 0 var(--g700); }
    .btn-ghost {
      display: inline-flex; align-items: center; gap: .5rem;
      font-family: var(--pixel); font-size: 0.48rem;
      background: transparent; color: rgba(255,255,255,.65);
      border: 1.5px solid rgba(255,255,255,.18);
      padding: 1rem 1.75rem; cursor: pointer; border-radius: var(--r-md);
      letter-spacing: 1px; transition: all .2s;
    }
    .btn-ghost:hover { border-color: var(--g300); color: var(--g300); background: rgba(74,222,128,.07); }
    .hero-scroll {
      position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: .4rem;
      animation: bounce-y 2.5s ease-in-out infinite;
    }
    @keyframes bounce-y { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
    .hero-scroll span { font-family: var(--pixel); font-size: 0.3rem; color: rgba(255,255,255,.2); letter-spacing: 2px; }
    .scroll-arrow { width: 18px; height: 18px; border-right: 2px solid rgba(74,222,128,.35); border-bottom: 2px solid rgba(74,222,128,.35); transform: rotate(45deg); }

    /* SECTION BASE */
    .section { padding: 6rem 2rem; }
    .section-inner { max-width: 1080px; margin: 0 auto; }
    .section-eyebrow {
      display: inline-flex; align-items: center; gap: .5rem;
      font-family: var(--pixel); font-size: 0.37rem; letter-spacing: 2px;
      color: var(--g600); margin-bottom: .9rem;
    }
    .section-eyebrow::before { content:''; display:block; width:16px; height:2px; background:var(--g400); border-radius:1px; }
    .section-divider { width: 44px; height: 3px; border-radius: 2px; background: linear-gradient(90deg, var(--g400), var(--g200)); margin-bottom: 1rem; }
    .section-title { font-family: var(--sans); font-size: clamp(1.55rem, 3.5vw, 2.3rem); font-weight: 800; line-height: 1.2; margin-bottom: 1rem; color: var(--ink); letter-spacing: -.5px; }
    .section-title em { font-style: normal; color: var(--g600); }
    .section-lead { font-size: 1.02rem; color: var(--ink3); max-width: 580px; line-height: 1.8; margin-bottom: 3.5rem; font-weight: 500; }

    /* NUZLOCKE */
    .nuz-section { background: var(--surface); }
    .nuz-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; }
    .nuz-card {
      background: var(--card); border-radius: var(--r-xl); border: 1.5px solid var(--rule);
      padding: 2rem 1.75rem; position: relative; overflow: hidden;
      box-shadow: var(--shadow-sm); transition: transform .25s, box-shadow .25s, border-color .25s;
    }
    .nuz-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-green); border-color: var(--g200); }
    .nuz-card-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; }
    .nuz-card-icon { font-size: 2rem; margin-bottom: 1.2rem; display: block; }
    .nuz-card-label { font-family: var(--pixel); font-size: 0.33rem; letter-spacing: 2px; color: var(--ink3); margin-bottom: .5rem; display: block; }
    .nuz-card h3 { font-size: 1.05rem; font-weight: 800; color: var(--ink); margin-bottom: .7rem; line-height: 1.35; }
    .nuz-card p { font-size: .88rem; color: var(--ink3); line-height: 1.75; }
    .nuz-card-tag { display: inline-block; font-family: var(--pixel); font-size: 0.3rem; padding: .35rem .65rem; border-radius: 100px; margin-top: 1rem; background: var(--g100); color: var(--g700); border: 1px solid var(--g200); }

    /* ROM HACKS */
    .rom-section { background: linear-gradient(180deg, var(--bg) 0%, var(--g50) 100%); }
    .rom-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .rom-text p { font-size: .98rem; color: var(--ink2); line-height: 1.85; margin-bottom: 1.1rem; }
    .rom-text p strong { color: var(--ink); }
    .rom-terminal { background: var(--g900); border-radius: var(--r-xl); padding: 2rem; border: 1.5px solid var(--g700); position: relative; overflow: hidden; }
    .rom-bar { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,.07); }
    .rom-bar-dot { width: 10px; height: 10px; border-radius: 50%; }
    .rom-bar-title { font-family: var(--pixel); font-size: 0.35rem; color: rgba(255,255,255,.28); margin-left: auto; letter-spacing: 1px; }
    .rom-scanline { position: absolute; inset: 0; pointer-events: none; border-radius: var(--r-xl); background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.04) 3px, rgba(0,0,0,.04) 4px); }
    .rom-feature { display: flex; align-items: flex-start; gap: 1rem; padding: .85rem 1rem; border-radius: var(--r-md); background: rgba(255,255,255,.04); margin-bottom: .6rem; border-left: 2px solid var(--g500); transition: background .2s; }
    .rom-feature:hover { background: rgba(255,255,255,.08); }
    .rom-feature-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: .05rem; }
    .rom-feature-label { font-family: var(--pixel); font-size: 0.36rem; color: var(--g300); margin-bottom: .3rem; line-height: 1.8; }
    .rom-feature-desc { font-size: .8rem; color: rgba(255,255,255,.42); line-height: 1.6; }

    /* SERIES */
    .series-section { background: var(--surface); }
    .series-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 1.5rem; }
    .series-card { background: var(--card); border-radius: var(--r-xl); border: 1.5px solid var(--rule); overflow: hidden; box-shadow: var(--shadow-sm); transition: transform .25s, box-shadow .25s, border-color .25s; cursor: pointer; }
    .series-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-green-lg); border-color: var(--g200); }
    .series-thumb { width: 100%; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
    .series-thumb-emoji { font-size: 3.5rem; position: relative; z-index: 1; transition: transform .3s; }
    .series-card:hover .series-thumb-emoji { transform: scale(1.12); }
    .series-thumb-overlay { position: absolute; inset: 0; background: rgba(0,0,0,.18); display: flex; align-items: center; justify-content: center; transition: background .2s; }
    .series-card:hover .series-thumb-overlay { background: rgba(0,0,0,.3); }
    .series-play { width: 46px; height: 46px; border-radius: 50%; background: rgba(255,255,255,.92); display: flex; align-items: center; justify-content: center; font-size: 1rem; opacity: 0; transform: scale(.8); transition: opacity .2s, transform .2s; box-shadow: 0 2px 12px rgba(0,0,0,.2); }
    .series-card:hover .series-play { opacity: 1; transform: scale(1); }
    .series-body { padding: 1.6rem; }
    .series-chip { display: inline-block; font-family: var(--pixel); font-size: 0.3rem; padding: .3rem .7rem; border-radius: 100px; margin-bottom: .8rem; letter-spacing: 1px; border: 1px solid; }
    .series-body h3 { font-size: 1.08rem; font-weight: 800; color: var(--ink); margin-bottom: .6rem; line-height: 1.35; }
    .series-body p { font-size: .87rem; color: var(--ink3); line-height: 1.7; margin-bottom: 1.2rem; }
    .series-meta { display: flex; gap: .6rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.25rem; }
    .series-ep { font-family: var(--pixel); font-size: 0.3rem; background: var(--ink); color: var(--g300); padding: .3rem .65rem; border-radius: 100px; }
    .series-status { font-family: var(--pixel); font-size: 0.3rem; padding: .3rem .65rem; border-radius: 100px; border: 1px solid; }
    .btn-series { display: block; width: 100%; font-family: var(--pixel); font-size: 0.4rem; background: var(--g500); color: #fff; border: none; padding: .9rem 1rem; cursor: pointer; border-radius: var(--r-md); letter-spacing: 1px; transition: all .2s; box-shadow: 0 3px 0 var(--g700); text-align: center; }
    .btn-series:hover { background: var(--g400); transform: translateY(-1px); box-shadow: 0 4px 0 var(--g700); }
    .btn-series:active { transform: translateY(1px); box-shadow: 0 1px 0 var(--g700); }

    /* DETAIL PAGE */
    .detail-page { padding-top: 58px; min-height: 100vh; background: var(--bg); }
    .detail-hero { padding: 3.5rem 2rem 3rem; background: linear-gradient(160deg, var(--g900) 0%, #0a2218 100%); position: relative; overflow: hidden; }
    .detail-hero::after { content:''; position:absolute; bottom:0; left:0; right:0; height:50px; background:linear-gradient(to bottom, transparent, var(--bg)); }
    .detail-inner { max-width: 1080px; margin: 0 auto; }
    .detail-back { font-family: var(--pixel); font-size: 0.38rem; color: var(--g300); background: rgba(74,222,128,.1); border: 1px solid rgba(74,222,128,.22); cursor: pointer; margin-bottom: 2rem; display: inline-flex; align-items: center; gap: .5rem; padding: .5rem 1rem; border-radius: 100px; transition: background .2s, transform .15s; }
    .detail-back:hover { background: rgba(74,222,128,.18); transform: translateX(-3px); }
    .detail-hero h1 { font-family: var(--sans); font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: .8rem; letter-spacing: -.5px; }
    .detail-hero h1 em { font-style: normal; color: var(--g300); }
    .detail-hero p { color: rgba(255,255,255,.58); font-size: .98rem; line-height: 1.8; max-width: 560px; }

    .detail-tabs-wrap { background: var(--surface); border-bottom: 1.5px solid var(--rule); position: sticky; top: 58px; z-index: 50; }
    .detail-tabs { max-width: 1080px; margin: 0 auto; padding: 0 2rem; display: flex; overflow-x: auto; scrollbar-width: none; }
    .detail-tab { font-family: var(--pixel); font-size: 0.38rem; padding: 1.1rem 1.4rem; border: none; background: none; cursor: pointer; color: var(--ink3); white-space: nowrap; border-bottom: 2.5px solid transparent; margin-bottom: -1.5px; transition: color .2s; }
    .detail-tab:hover { color: var(--g600); }
    .detail-tab.active { color: var(--g600); border-bottom-color: var(--g500); }
    .detail-content { max-width: 1080px; margin: 0 auto; padding: 3rem 2rem; }

    /* Badges strip */
    .badges-strip { display: flex; gap: .75rem; flex-wrap: wrap; background: var(--surface); border-radius: var(--r-xl); padding: 1.5rem 2rem; border: 1.5px solid var(--rule); margin-bottom: 2.5rem; box-shadow: var(--shadow-sm); }
    .badge-pill { display: flex; flex-direction: column; align-items: center; gap: .35rem; padding: .75rem 1rem; border-radius: var(--r-md); min-width: 64px; transition: transform .2s; cursor: default; }
    .badge-pill:hover { transform: scale(1.08); }
    .badge-pill.earned { background: #fef9c3; border: 1.5px solid #fde047; }
    .badge-pill.locked { background: #f9fafb; border: 1.5px solid var(--rule); opacity: .45; filter: grayscale(.6); }
    .badge-pill span:first-child { font-size: 1.5rem; }
    .badge-pill-name { font-family: var(--pixel); font-size: 0.26rem; color: var(--ink2); text-align: center; line-height: 1.4; }

    /* Video tab */
    .video-main { background: #090909; border-radius: var(--r-xl); overflow: hidden; aspect-ratio: 16/9; width: 100%; display: flex; align-items: center; justify-content: center; border: 1.5px solid #1c1c1c; margin-bottom: 1.5rem; }
    .video-placeholder { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 2rem; text-align: center; }
    .video-placeholder-icon { font-size: 3.5rem; opacity: .55; }
    .video-placeholder p { font-family: var(--pixel); font-size: 0.36rem; color: rgba(255,255,255,.28); line-height: 2.2; max-width: 380px; }
    .video-playlist { display: flex; flex-direction: column; gap: .75rem; }
    .playlist-item { display: flex; gap: 1rem; align-items: center; background: var(--surface); border-radius: var(--r-md); padding: .9rem 1.1rem; cursor: pointer; border: 1.5px solid var(--rule); transition: border-color .2s, box-shadow .2s, background .2s; }
    .playlist-item:hover { border-color: var(--g300); box-shadow: var(--shadow-green); }
    .playlist-item.active { border-color: var(--g400); background: var(--g50); box-shadow: var(--shadow-green); }
    .playlist-num { font-family: var(--pixel); font-size: 0.38rem; min-width: 28px; color: var(--ink3); text-align: center; }
    .playlist-item.active .playlist-num { color: var(--g600); }
    .playlist-thumb { width: 76px; height: 43px; border-radius: var(--r-sm); background: var(--ink); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
    .playlist-info h4 { font-size: .9rem; font-weight: 700; color: var(--ink); margin-bottom: .2rem; }
    .playlist-info span { font-family: var(--pixel); font-size: 0.3rem; color: var(--ink3); }

    /* Timeline */
    .tl-heading { font-family: var(--pixel); font-size: 0.42rem; color: var(--ink2); margin-bottom: 2rem; display: flex; align-items: center; gap: .7rem; }
    .tl-heading::after { content:''; flex:1; height:1.5px; background:var(--rule); border-radius:1px; }
    .timeline { position: relative; padding-left: 3rem; }
    .timeline::before { content:''; position:absolute; left:1rem; top:.5rem; bottom:0; width:2px; background:linear-gradient(to bottom, var(--g400), var(--g200), transparent); border-radius:1px; }
    .tl-item { position: relative; margin-bottom: 2.25rem; }
    .tl-node { position: absolute; left: -2.35rem; top: .4rem; width: 22px; height: 22px; border-radius: 50%; border: 2.5px solid var(--surface); z-index: 1; display: flex; align-items: center; justify-content: center; font-size: .65rem; }
    .tl-card { background: var(--surface); border-radius: var(--r-lg); padding: 1.4rem 1.6rem; border: 1.5px solid var(--rule); box-shadow: var(--shadow-sm); transition: box-shadow .2s; }
    .tl-card:hover { box-shadow: var(--shadow-md); }
    .tl-meta { display: flex; gap: .6rem; align-items: center; margin-bottom: .7rem; flex-wrap: wrap; }
    .tl-loc { font-family: var(--pixel); font-size: 0.3rem; background: var(--ink); color: var(--g300); padding: .28rem .6rem; border-radius: 100px; }
    .tl-ep { font-family: var(--pixel); font-size: 0.3rem; color: var(--ink3); }
    .tl-card h4 { font-weight: 800; font-size: .97rem; color: var(--ink); margin-bottom: .45rem; }
    .tl-card p { font-size: .86rem; color: var(--ink3); line-height: 1.75; }
    .tl-tags { display: flex; gap: .5rem; flex-wrap: wrap; margin-top: .9rem; }
    .tl-catch { font-family: var(--pixel); font-size: 0.28rem; background: var(--g100); color: var(--g700); padding: .3rem .65rem; border-radius: 100px; border: 1px solid var(--g200); }
    .tl-death { font-family: var(--pixel); font-size: 0.28rem; background: #fee2e2; color: var(--ember); padding: .3rem .65rem; border-radius: 100px; border: 1px solid #fca5a5; }
    .tl-gym { display: flex; flex-direction: column; align-items: center; gap: .3rem; padding: .55rem .85rem; background: #fef9c3; border-radius: var(--r-md); border: 1.5px solid #fde047; min-width: 62px; }
    .tl-gym span:first-child { font-size: 1.25rem; }
    .tl-gym span:last-child { font-family: var(--pixel); font-size: 0.26rem; color: var(--ink2); text-align: center; }

    /* Map */
    .kanto-map { background: var(--g900); border-radius: var(--r-xl); padding: 2rem; border: 1.5px solid var(--g700); overflow: hidden; }
    .map-title { font-family: var(--pixel); font-size: 0.42rem; color: var(--g300); letter-spacing: 3px; text-align: center; margin-bottom: 1.75rem; }
    .map-grid { display: grid; gap: .5rem; grid-template-columns: repeat(8, 1fr); }
    .map-cell { aspect-ratio: 1; border-radius: var(--r-sm); position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: .2rem; min-height: 56px; transition: all .2s; cursor: default; }
    .map-cell.empty { background: transparent; }
    .map-cell.route { background: rgba(34,197,94,.1); border: 1px solid rgba(74,222,128,.25); cursor: pointer; }
    .map-cell.route:hover { background: rgba(34,197,94,.22); transform: scale(1.08); z-index: 2; box-shadow: 0 0 20px rgba(74,222,128,.2); }
    .map-cell.gym-city { background: rgba(251,191,36,.12); border: 1px solid rgba(251,191,36,.35); cursor: pointer; }
    .map-cell.gym-city:hover { background: rgba(251,191,36,.25); transform: scale(1.08); z-index: 2; box-shadow: 0 0 20px rgba(251,191,36,.18); }
    .map-cell.unvisited { opacity: .45; }
    .map-cell-icon { font-size: .8rem; margin-bottom: .1rem; line-height: 1; }
    .map-cell-label { font-family: var(--pixel); font-size: 0.22rem; color: rgba(255,255,255,.58); text-align: center; line-height: 1.5; }
    .map-tip { position: absolute; bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%); background: #152b15; border: 1.5px solid var(--g600); border-radius: var(--r-md); padding: .9rem 1.1rem; min-width: 170px; z-index: 20; pointer-events: none; box-shadow: 0 4px 20px rgba(0,0,0,.4); }
    .map-tip::after { content:''; position:absolute; top:100%; left:50%; transform:translateX(-50%); border:7px solid transparent; border-top-color:var(--g600); }
    .map-tip h5 { font-family: var(--pixel); font-size: 0.32rem; color: var(--g300); margin-bottom: .5rem; line-height: 1.6; }
    .map-tip p { font-size: .74rem; color: rgba(255,255,255,.65); line-height: 1.6; }
    .map-chips { display: flex; gap: .4rem; flex-wrap: wrap; margin-top: .5rem; }
    .map-chip { font-family: var(--pixel); font-size: 0.25rem; background: rgba(74,222,128,.12); color: var(--g300); padding: .25rem .5rem; border-radius: 4px; border: 1px solid rgba(74,222,128,.22); }
    .map-legend { display: flex; gap: 1.5rem; margin-top: 1.5rem; flex-wrap: wrap; justify-content: center; }
    .map-legend-item { display: flex; align-items: center; gap: .5rem; }
    .map-legend-swatch { width: 12px; height: 12px; border-radius: 3px; }
    .map-legend-label { font-family: var(--pixel); font-size: 0.28rem; color: rgba(255,255,255,.38); }
    .map-hint { font-family: var(--pixel); font-size: 0.26rem; color: rgba(255,255,255,.22); text-align: center; margin-top: 1rem; }

    /* Team */
    .team-heading { font-family: var(--pixel); font-size: 0.42rem; color: var(--ink2); margin-bottom: 1.25rem; display: flex; align-items: center; gap: .7rem; }
    .team-heading::after { content:''; flex:1; height:1.5px; background:var(--rule); border-radius:1px; }
    .team-grid { display: flex; gap: 1rem; flex-wrap: wrap; }
    .poke-card { background: var(--surface); border-radius: var(--r-lg); padding: 1.25rem 1rem; border: 1.5px solid var(--rule); min-width: 112px; text-align: center; box-shadow: var(--shadow-sm); transition: transform .2s, box-shadow .2s; }
    .poke-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-green); }
    .poke-card.dead { opacity: .5; filter: grayscale(.75); }
    .poke-emoji { font-size: 2.2rem; display: block; margin-bottom: .5rem; }
    .poke-name { font-family: var(--pixel); font-size: 0.33rem; color: var(--ink); display: block; margin-bottom: .3rem; }
    .poke-species { font-size: .78rem; color: var(--ink3); font-weight: 500; }
    .poke-fallen { font-family: var(--pixel); font-size: 0.26rem; background: var(--ember); color: #fff; padding: .25rem .5rem; border-radius: 4px; display: inline-block; margin-top: .5rem; }

    /* ABOUT */
    .about-section { background: linear-gradient(160deg, var(--g900) 0%, #0a2218 100%); color: #fff; padding: 6rem 2rem; position: relative; overflow: hidden; }
    .about-section::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px); background-size:32px 32px; }
    .about-inner { max-width: 860px; margin: 0 auto; display: grid; grid-template-columns: auto 1fr; gap: 4rem; align-items: start; position: relative; }
    .about-left { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
    .about-avatar { width: 148px; height: 148px; border-radius: 50%; background: linear-gradient(135deg, var(--g700), var(--g500)); display: flex; align-items: center; justify-content: center; font-size: 3.5rem; border: 3px solid var(--g400); box-shadow: 0 0 0 6px rgba(74,222,128,.1), 0 0 40px rgba(74,222,128,.15); }
    .about-name { font-family: var(--pixel); font-size: 0.5rem; color: var(--g300); letter-spacing: 2px; }
    .about-since { font-family: var(--pixel); font-size: 0.32rem; color: rgba(255,255,255,.28); }
    .about-text h2 { font-family: var(--sans); font-size: clamp(1.35rem, 2.5vw, 1.85rem); font-weight: 800; color: var(--g200); margin-bottom: 1.2rem; line-height: 1.3; letter-spacing: -.3px; }
    .about-text p { color: rgba(255,255,255,.6); font-size: .97rem; line-height: 1.9; margin-bottom: 1rem; }
    .social-row { display: flex; gap: .75rem; flex-wrap: wrap; margin-top: 2rem; }
    .social-btn { font-family: var(--pixel); font-size: 0.37rem; padding: .7rem 1.1rem; border-radius: var(--r-md); cursor: pointer; border: 1.5px solid; transition: transform .15s, box-shadow .15s; display: inline-flex; align-items: center; gap: .4rem; }
    .social-btn:hover { transform: translateY(-2px); }
    .s-yt { background: #dc2626; color: #fff; border-color: #dc2626; box-shadow: 0 3px 0 #991b1b; }
    .s-tw { background: transparent; color: var(--g300); border-color: rgba(74,222,128,.32); }
    .s-tw:hover { background: rgba(74,222,128,.07); }
    .s-dc { background: transparent; color: #93a8f4; border-color: rgba(147,168,244,.32); }
    .s-dc:hover { background: rgba(147,168,244,.07); }

    /* FOOTER */
    footer { background: var(--g900); padding: 2.5rem 2rem; text-align: center; border-top: 2px solid var(--g800); }
    footer p { font-family: var(--pixel); font-size: 0.3rem; color: rgba(255,255,255,.2); line-height: 2.4; }
    footer span { color: var(--g400); }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .rom-layout { grid-template-columns: 1fr; gap: 2.5rem; }
      .about-inner { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
      .about-left { margin: 0 auto; }
      .nav-links { display: none; flex-direction: column; position: fixed; top: 58px; left: 0; right: 0; background: rgba(13,43,20,.98); padding: 1.5rem 2rem; gap: 1.5rem; border-bottom: 1.5px solid var(--g800); }
      .nav-links.open { display: flex; }
      .nav-hamburger { display: block; }
      .map-grid { grid-template-columns: repeat(5, 1fr); }
      .social-row { justify-content: center; }
      .about-text h2 { text-align: center; }
    }
    @media (max-width: 480px) {
      nav { padding: 0 1.25rem; }
      .section { padding: 4rem 1.25rem; }
      .detail-content { padding: 2rem 1.25rem; }
      .nuz-grid { grid-template-columns: 1fr; }
      .map-grid { grid-template-columns: repeat(4, 1fr); }
    }
  `}</style>
);

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const SERIES = [
  {
    id: "kanto-nuzlocke",
    title: "Nuzlocke Kanto",
    emoji: "🔴",
    type: "NUZLOCKE",
    typeColor: "#dc2626", typeBg: "#fee2e2", typeBorder: "#fca5a5",
    thumb: "linear-gradient(135deg, #0d2b14 0%, #15803d 100%)",
    desc: "O desafio clássico. Consigo vencer Red/Blue sem perder todo o time? Cada passo por Kanto é uma aposta.",
    episodes: 24, status: "EM ANDAMENTO",
    statusColor: "#15803d", statusBg: "#dcfce7", statusBorder: "#86efac",
  },
  {
    id: "radical-red",
    title: "Radical Red Nuzlocke",
    emoji: "🔥",
    type: "ROM HACK",
    typeColor: "#d97706", typeBg: "#fef3c7", typeBorder: "#fcd34d",
    thumb: "linear-gradient(135deg, #1c1003 0%, #854d0e 100%)",
    desc: "Radical Red eleva a dificuldade ao máximo. Novos Pokémon, IA brutal e regras Nuzlocke. Isso é sofrimento puro.",
    episodes: 18, status: "EM ANDAMENTO",
    statusColor: "#15803d", statusBg: "#dcfce7", statusBorder: "#86efac",
  },
  {
    id: "crystal-clear",
    title: "Crystal Clear Aventura",
    emoji: "💎",
    type: "ROM HACK",
    typeColor: "#1d4ed8", typeBg: "#dbeafe", typeBorder: "#93c5fd",
    thumb: "linear-gradient(135deg, #071b2f 0%, #1e40af 100%)",
    desc: "Johto em mundo aberto com liberdade de começar em qualquer lugar. Uma aventura tranquila com reviravolta surpreendente.",
    episodes: 32, status: "CONCLUÍDA",
    statusColor: "#1d4ed8", statusBg: "#dbeafe", statusBorder: "#93c5fd",
  },
];

const TIMELINE_EVENTS = [
  { id:1, emoji:"🌟", location:"CIDADE PALLET",   ep:"EP.01", title:"A Jornada Começa",       desc:"Escolhi Charmander como inicial. O batizei de 'Brasa'. A aventura começa!",                                      catches:["Charmander (Brasa)"],   deaths:[], badge:null,                    nodeColor:"#d97706" },
  { id:2, emoji:"🌿", location:"ROTA 1",           ep:"EP.01", title:"Primeiro Encontro",      desc:"Encontrei um Pidgey na Rota 1. Primeira captura da run!",                                                          catches:["Pidgey (Asa)"],          deaths:[], badge:null,                    nodeColor:"#16a34a" },
  { id:3, emoji:"🌲", location:"FLORESTA VIRIDIAN",ep:"EP.02", title:"Fundo da Floresta",      desc:"Um Caterpie apareceu primeiro. Não é animador, mas cada membro do time importa.",                                  catches:["Caterpie (Fio)"],        deaths:[], badge:null,                    nodeColor:"#16a34a" },
  { id:4, emoji:"🪨", location:"CIDADE PEWTER",    ep:"EP.03", title:"Insígnia Pedra!",        desc:"Os tipos Pedra do Brock não tiveram chance. Primeira insígnia no bolso!",                                          catches:[], deaths:[],             badge:{ emoji:"🪨", name:"Pedra" },    nodeColor:"#d97706" },
  { id:5, emoji:"💀", location:"MT. MOON",         ep:"EP.04", title:"Primeira Perda",         desc:"Asa o Pidgey caiu com um golpe crítico de um Geodude selvagem. Descanse em paz, Asa.",                             catches:[], deaths:["Pidgey (Asa) — Nv.12"], badge:null,                nodeColor:"#dc2626" },
  { id:6, emoji:"💧", location:"CIDADE CERULEAN",  ep:"EP.06", title:"Insígnia Cascata!",      desc:"O Starmie da Misty foi um pesadelo, mas Fio (agora Butterfree) salvou com Pó do Sono!",                           catches:[], deaths:[],             badge:{ emoji:"💧", name:"Cascata" },  nodeColor:"#d97706" },
];

const KANTO_GRID = [
  [null,null,null,"CIDADE\nPALLET","ROTA 1","FLORESTA\nVIRIDIAN","CIDADE\nPEWTER",null],
  [null,null,null,null,null,null,"MT. MOON","CIDADE\nCERULEAN"],
  [null,null,"ROTA 6","CIDADE\nVERMILION",null,null,"ROTA 9",null],
  [null,null,null,null,null,"CIDADE\nLAVENDER",null,null],
  [null,"CIDADE\nCELADON",null,null,null,null,null,null],
  [null,"ROTA 16",null,null,"CIDADE\nFUCHSIA",null,null,null],
];

const MAP_DATA = {
  "CIDADE\nPALLET":    { caught:["Charmander (Brasa)"], gym:false, visited:true  },
  "ROTA 1":            { caught:["Pidgey (Asa ✝)"],      gym:false, visited:true  },
  "FLORESTA\nVIRIDIAN":{ caught:["Caterpie (Fio)"],      gym:false, visited:true  },
  "CIDADE\nPEWTER":    { caught:[], gym:true,  badge:"🪨 Insígnia Pedra",     visited:true  },
  "MT. MOON":          { caught:["Clefairy (Luna)"],     gym:false, visited:true  },
  "CIDADE\nCERULEAN":  { caught:[], gym:true,  badge:"💧 Insígnia Cascata",   visited:true  },
  "ROTA 6":            { caught:["Drowzee (Névoa)"],     gym:false, visited:true  },
  "CIDADE\nVERMILION": { caught:[], gym:true,  badge:"⚡ Insígnia Trovão",    visited:false },
  "CIDADE\nLAVENDER":  { caught:[], gym:false, visited:false },
  "CIDADE\nCELADON":   { caught:[], gym:true,  badge:"🌈 Insígnia Arco-Íris", visited:false },
};

const CURRENT_TEAM = [
  { name:"Brasa", species:"Charizard",  level:38, emoji:"🔥", dead:false },
  { name:"Fio",   species:"Butterfree", level:34, emoji:"🦋", dead:false },
  { name:"Luna",  species:"Clefairy",   level:28, emoji:"🌙", dead:false },
  { name:"Névoa", species:"Hypno",      level:30, emoji:"😴", dead:false },
  { name:"Asa",   species:"Pidgey",     level:12, emoji:"🐦", dead:true  },
];

const BADGES = [
  { name:"Pedra",     emoji:"🪨", earned:true  },
  { name:"Cascata",   emoji:"💧", earned:true  },
  { name:"Trovão",    emoji:"⚡", earned:false },
  { name:"Arco-Íris", emoji:"🌈", earned:false },
  { name:"Alma",      emoji:"💗", earned:false },
  { name:"Pântano",   emoji:"🧠", earned:false },
  { name:"Vulcão",    emoji:"🌋", earned:false },
  { name:"Terra",     emoji:"🌍", earned:false },
];

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
const GrassBackground = () => {
  const blades = Array.from({ length: 80 }, (_, i) => ({
    id: i, w: Math.random() * 8 + 5, h: Math.random() * 60 + 35,
    delay: Math.random() * 2, dur: Math.random() * 1.5 + 2,
  }));
  const flies = Array.from({ length: 10 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 75 + 10,
    size: Math.random() * 3 + 2, delay: Math.random() * 6, dur: Math.random() * 4 + 6,
  }));
  return (
    <>
      <div className="hero-grass">
        {blades.map(b => (
          <div key={b.id} className="grass-blade" style={{ width: b.w, height: b.h, animationDelay: `${b.delay}s`, animationDuration: `${b.dur}s` }} />
        ))}
      </div>
      {flies.map(f => (
        <div key={f.id} className="firefly" style={{ left:`${f.x}%`, top:`${f.y}%`, width:f.size, height:f.size, animationDelay:`${f.delay}s`, animationDuration:`${f.dur}s` }} />
      ))}
    </>
  );
};

const Nav = ({ page, setPage, menuOpen, setMenuOpen }) => (
  <nav>
    <div className="nav-logo" onClick={() => setPage("home")}>
      <div className="nav-dot" /> FWKS
    </div>
    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      {[["home","INÍCIO"],["series","SÉRIES"],["about","SOBRE"]].map(([id, label]) => (
        <li key={id}>
          <a href="#" className={page === id ? "active" : ""}
            onClick={e => { e.preventDefault(); setPage(id); setMenuOpen(false); }}>
            {label}
          </a>
        </li>
      ))}
    </ul>
    <button className="nav-hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
      <span /><span /><span />
    </button>
  </nav>
);

const Hero = ({ setPage }) => (
  <section className="hero pixel-grid">
    <GrassBackground />
    <div className="hero-content">
      <div className="hero-eyebrow">
        <div className="eyebrow-dot" />
        AO VIVO: NUZLOCKE KANTO EP.24
      </div>
      <span className="hero-name">FWKS</span>
      <h1 className="hero-title">
        Cada Run É<br />Uma <em>História</em>
      </h1>
      <p className="hero-sub">
        Fala, treinador! Sou criador de conteúdo de Pokémon obcecado com{" "}
        <strong>desafios Nuzlocke</strong> e <strong>ROM hacks</strong>.{" "}
        Cada Pokémon tem um nome. Cada morte dói de verdade.
      </p>
      <div className="hero-btns">
        <button className="btn-primary" onClick={() => setPage("series")}>▶ Ver Séries</button>
        <button className="btn-ghost"   onClick={() => setPage("about")}>Sobre Mim</button>
      </div>
    </div>
    <div className="hero-scroll">
      <span>ROLAR</span>
      <div className="scroll-arrow" />
    </div>
  </section>
);

const NuzlockeSection = () => (
  <section className="section nuz-section">
    <div className="section-inner">
      <span className="section-eyebrow">REGRAS DO JOGO</span>
      <div className="section-divider" />
      <h2 className="section-title">O que é um <em>Nuzlocke</em>?</h2>
      <p className="section-lead">Nunca ouviu falar? Sem problema. É basicamente Pokémon no modo pesadelo — regras autoimposta que fazem cada batalha ser genuinamente aterrorizante.</p>
      <div className="nuz-grid">
        {[
          { icon:"💀", bar:"linear-gradient(90deg,#dc2626,#f87171)", label:"REGRA 01", title:"Morte Permanente",   text:"Se um Pokémon desmaiar na batalha, ele está morto para sempre. Sem reviver, sem segunda chance. Você precisa soltá-lo e se despedir. Sim, você vai chorar.",      tag:"REGRA MAIS CRUEL"     },
          { icon:"🎲", bar:"linear-gradient(90deg,#16a34a,#4ade80)", label:"REGRA 02", title:"Primeiro Encontro",  text:"Em cada nova rota, você só pode capturar o primeiro Pokémon que encontrar. Se ele desmaiar antes de você capturar... azar. Siga em frente.",                  tag:"SEM SEGUNDA CHANCE"   },
          { icon:"❤️", bar:"linear-gradient(90deg,#9333ea,#c084fc)", label:"OPCIONAL", title:"Dar Apelidos",       text:"A maioria dos jogadores dá apelidos. Isso os torna reais — e faz suas inevitáveis mortes serem 10x mais devastadoras. Altamente recomendado.",             tag:"MAS ESSENCIAL"        },
          { icon:"🏆", bar:"linear-gradient(90deg,#d97706,#fbbf24)", label:"OBJETIVO",  title:"Vencer o Jogo",     text:"Vencer os 8 Líderes de Ginásio e a Elite dos Quatro sem perder todo o time. Simples na teoria. De partir a alma na prática. A alegria está na jornada.", tag:"CONDIÇÃO DE VITÓRIA"  },
        ].map(c => (
          <div key={c.label} className="nuz-card">
            <div className="nuz-card-bar" style={{ background: c.bar }} />
            <span className="nuz-card-icon">{c.icon}</span>
            <span className="nuz-card-label">{c.label}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <span className="nuz-card-tag">{c.tag}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RomSection = () => (
  <section className="section rom-section">
    <div className="section-inner">
      <div className="rom-layout">
        <div className="rom-text">
          <span className="section-eyebrow">JOGOS MODIFICADOS</span>
          <div className="section-divider" />
          <h2 className="section-title">O que são <em>ROM Hacks</em>?</h2>
          <p>ROM hacks são <strong>modificações feitas por fãs</strong> de jogos Pokémon existentes. Usando o jogo original como base, fãs reconstroem e reimaginam a experiência do zero.</p>
          <p>Alguns são simples rebalanceamentos. Outros são <strong>jogos completamente novos</strong> com histórias, personagens e regiões originais. A comunidade faz isso há mais de 20 anos.</p>
          <p>São gratuitos, feitos com carinho, e frequentemente <strong>mais difíceis que os jogos oficiais</strong> — perfeitos para runs Nuzlocke.</p>
        </div>
        <div className="rom-terminal">
          <div className="rom-scanline" />
          <div className="rom-bar">
            <div className="rom-bar-dot" style={{ background:"#dc2626" }} />
            <div className="rom-bar-dot" style={{ background:"#d97706" }} />
            <div className="rom-bar-dot" style={{ background:"#16a34a" }} />
            <span className="rom-bar-title">O QUE PODEM INCLUIR</span>
          </div>
          {[
            ["✨","NOVOS POKÉMON",        "Fakemon, formas regionais, ou Pokémon de gerações futuras"],
            ["⚔️","NOVAS MECÂNICAS",      "Mega Evoluções, movimentos customizados, stats rebalanceados"],
            ["🔥","DIFICULDADE ELEVADA",  "IA inteligente, limite de nível, itens restritos"],
            ["🗺️","NOVAS REGIÕES",        "Mapas, cidades e histórias completamente inéditos"],
            ["🎨","REFORMULAÇÃO VISUAL",  "Novos sprites, tiles, músicas — às vezes irreconhecível"],
          ].map(([icon, label, desc]) => (
            <div key={label} className="rom-feature">
              <span className="rom-feature-icon">{icon}</span>
              <div>
                <div className="rom-feature-label">{label}</div>
                <div className="rom-feature-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SeriesSection = ({ setPage, setActiveSeries }) => (
  <section className="section series-section">
    <div className="section-inner">
      <span className="section-eyebrow">PLAYTHROUGHS ATIVOS</span>
      <div className="section-divider" />
      <h2 className="section-title">As <em>Séries</em></h2>
      <p className="section-lead">Cada série é um playthrough completo — documentado, registrado e vivido. Escolha uma e acompanhe a aventura do início ao (torçamos) fim.</p>
      <div className="series-grid">
        {SERIES.map(s => (
          <div key={s.id} className="series-card" onClick={() => { setActiveSeries(s); setPage("detail"); }}>
            <div className="series-thumb" style={{ background: s.thumb }}>
              <span className="series-thumb-emoji">{s.emoji}</span>
              <div className="series-thumb-overlay">
                <div className="series-play">▶</div>
              </div>
            </div>
            <div className="series-body">
              <span className="series-chip" style={{ color:s.typeColor, background:s.typeBg, borderColor:s.typeBorder }}>{s.type}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="series-meta">
                <span className="series-ep">{s.episodes} EP</span>
                <span className="series-status" style={{ color:s.statusColor, background:s.statusBg, borderColor:s.statusBorder }}>{s.status}</span>
              </div>
              <button className="btn-series">▶ Ver Série</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MapCell = ({ name }) => {
  const [hover, setHover] = useState(false);
  const data = name ? MAP_DATA[name] : null;
  if (!name) return <div className="map-cell empty" />;
  const cls = `map-cell ${data ? (data.gym ? "gym-city" : "route") : ""} ${data && !data.visited ? "unvisited" : ""}`;
  return (
    <div className={cls} onMouseEnter={() => data && setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="map-cell-icon">{data?.gym ? "🏟️" : data ? "🌿" : "🌫️"}</div>
      <div className="map-cell-label">{name}</div>
      {hover && data && (
        <div className="map-tip">
          <h5>{name.replace("\n", " ")}</h5>
          {data.gym && <p>🏆 {data.badge}</p>}
          {data.caught?.length > 0 && (
            <>
              <p style={{ marginTop:".4rem" }}>Capturado aqui:</p>
              <div className="map-chips">
                {data.caught.map(p => <span key={p} className="map-chip">{p}</span>)}
              </div>
            </>
          )}
          {!data.visited && <p style={{ fontFamily:"var(--pixel)", fontSize:".28rem", color:"rgba(255,255,255,.3)", marginTop:".3rem" }}>Não visitado ainda</p>}
        </div>
      )}
    </div>
  );
};

const SeriesDetail = ({ series, setPage }) => {
  const [tab, setTab] = useState("videos");
  const [activeVid, setActiveVid] = useState(0);

  const videos = [
    { title:"Ep. 1 — A Jornada Começa",               ep:"EP.01", emoji:"🌟" },
    { title:"Ep. 2 — Pesadelos na Floresta Viridian",  ep:"EP.02", emoji:"🌲" },
    { title:"Ep. 3 — Brock Levou um Troco",            ep:"EP.03", emoji:"🪨" },
    { title:"Ep. 4 — DEX Asa (Não Estou Chorando)",   ep:"EP.04", emoji:"💀" },
    { title:"Ep. 5 — Grind na Rota 4",                 ep:"EP.05", emoji:"⚔️" },
    { title:"Ep. 6 — A Misty É Assustadora Pra Valer", ep:"EP.06", emoji:"💧" },
  ];

  return (
    <div className="detail-page">
      <div className="detail-hero pixel-grid">
        <div className="detail-inner">
          <button className="detail-back" onClick={() => setPage("home")}>← Voltar</button>
          <h1>{series.emoji} <em>{series.title}</em></h1>
          <p>{series.desc}</p>
        </div>
      </div>

      <div className="detail-tabs-wrap">
        <div className="detail-tabs">
          {[["videos","▶ Vídeos"],["timeline","📜 Diário"],["map","🗺️ Mapa"],["team","⚡ Time"]].map(([id, label]) => (
            <button key={id} className={`detail-tab ${tab === id ? "active" : ""}`} onClick={() => setTab(id)}>{label}</button>
          ))}
        </div>
      </div>

      <div className="detail-content">
        {/* Badges */}
        <div className="badges-strip">
          {BADGES.map(b => (
            <div key={b.name} className={`badge-pill ${b.earned ? "earned" : "locked"}`}>
              <span>{b.emoji}</span>
              <span className="badge-pill-name">{b.name}</span>
            </div>
          ))}
        </div>

        {/* Videos */}
        {tab === "videos" && (
          <div>
            <div className="video-main">
              <div className="video-placeholder">
                <div className="video-placeholder-icon">🎮</div>
                <p>
                  {videos[activeVid].ep} — {videos[activeVid].title}{"\n\n"}
                  Adicione o embed do YouTube aqui:{"\n"}
                  &lt;iframe src="https://youtube.com/embed/ID" /&gt;
                </p>
              </div>
            </div>
            <div className="video-playlist">
              {videos.map((v, i) => (
                <div key={i} className={`playlist-item ${activeVid === i ? "active" : ""}`} onClick={() => setActiveVid(i)}>
                  <div className="playlist-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="playlist-thumb">{v.emoji}</div>
                  <div className="playlist-info">
                    <h4>{v.title}</h4>
                    <span>{v.ep}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline */}
        {tab === "timeline" && (
          <div>
            <div className="tl-heading">DIÁRIO DE AVENTURA — NUZLOCKE KANTO</div>
            <div className="timeline">
              {TIMELINE_EVENTS.map(ev => (
                <div key={ev.id} className="tl-item">
                  <div className="tl-node" style={{ background: ev.nodeColor, boxShadow: `0 0 0 2px ${ev.nodeColor}40` }}>
                    {ev.emoji}
                  </div>
                  <div className="tl-card">
                    <div className="tl-meta">
                      <span className="tl-loc">{ev.location}</span>
                      <span className="tl-ep">{ev.ep}</span>
                    </div>
                    <h4>{ev.title}</h4>
                    <p>{ev.desc}</p>
                    {(ev.catches.length > 0 || ev.deaths.length > 0 || ev.badge) && (
                      <div className="tl-tags">
                        {ev.catches.map(c => <span key={c} className="tl-catch">✅ {c}</span>)}
                        {ev.deaths.map(d => <span key={d} className="tl-death">✝ {d}</span>)}
                        {ev.badge && (
                          <div className="tl-gym">
                            <span>{ev.badge.emoji}</span>
                            <span>Insígnia {ev.badge.name}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map */}
        {tab === "map" && (
          <div className="kanto-map">
            <div className="map-title">◆ MAPA DE KANTO ◆</div>
            <div className="map-grid">
              {KANTO_GRID.flat().map((cell, i) => <MapCell key={i} name={cell} />)}
            </div>
            <div className="map-legend">
              <div className="map-legend-item">
                <div className="map-legend-swatch" style={{ background:"rgba(34,197,94,.3)", border:"1px solid rgba(74,222,128,.4)" }} />
                <span className="map-legend-label">ROTA VISITADA</span>
              </div>
              <div className="map-legend-item">
                <div className="map-legend-swatch" style={{ background:"rgba(251,191,36,.25)", border:"1px solid rgba(251,191,36,.4)" }} />
                <span className="map-legend-label">CIDADE COM GINÁSIO</span>
              </div>
              <div className="map-legend-item">
                <div className="map-legend-swatch" style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)" }} />
                <span className="map-legend-label">NÃO VISITADO</span>
              </div>
            </div>
            <p className="map-hint">PASSE O MOUSE PARA VER OS POKÉMON CAPTURADOS</p>
          </div>
        )}

        {/* Team */}
        {tab === "team" && (
          <div>
            <div className="team-heading">TIME ATUAL — EP.24</div>
            <div className="team-grid">
              {CURRENT_TEAM.filter(p => !p.dead).map(p => (
                <div key={p.name} className="poke-card">
                  <span className="poke-emoji">{p.emoji}</span>
                  <span className="poke-name">{p.name}</span>
                  <span className="poke-species">{p.species} · Nv.{p.level}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop:"2.5rem" }}>
              <div className="team-heading" style={{ color:"#dc2626" }}>MEMORIAL 💀</div>
              <div className="team-grid">
                {CURRENT_TEAM.filter(p => p.dead).map(p => (
                  <div key={p.name} className="poke-card dead">
                    <span className="poke-emoji">{p.emoji}</span>
                    <span className="poke-name">{p.name}</span>
                    <span className="poke-species">{p.species} · Nv.{p.level}</span>
                    <span className="poke-fallen">CAÍDO</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AboutSection = () => (
  <section className="about-section" id="about">
    <div className="about-inner">
      <div className="about-left">
        <div className="about-avatar">🎮</div>
        <div className="about-name">FWKS</div>
        <div className="about-since">DESDE 2019</div>
      </div>
      <div className="about-text">
        <h2>Ei, sou o treinador por trás do canal!</h2>
        <p>Jogo Pokémon desde os 8 anos e, honestamente, nunca parei. O que começou como uma obsessão de infância virou um canal no YouTube sobre sobreviver a Nuzlockes e mergulhar fundo no mundo dos ROM hacks.</p>
        <p>Faço upload com consistência, narro tudo como se minha vida dependesse disso (às vezes depende — no sentido Nuzlocke), e genuinamente choro quando meus Pokémon morrem na tela. Você foi avisado.</p>
        <p>Se você está aqui pela nostalgia, pelos desafios, ou só pra me ver sofrer no Radical Red — bem-vindo, treinador.</p>
        <div className="social-row">
          <button className="social-btn s-yt">▶ YouTube</button>
          <button className="social-btn s-tw">𝕏 Twitter/X</button>
          <button className="social-btn s-dc">Discord</button>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [activeSeries, setActiveSeries] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <>
      <GlobalStyles />
      <Nav page={page} setPage={setPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {page === "detail" && activeSeries ? (
        <>
          <SeriesDetail series={activeSeries} setPage={setPage} />
          <footer>
            <p>⚡ FWKS · Feito com <span>♥</span> e muitas mortes de Pokémon</p>
            <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
          </footer>
        </>
      ) : (
        <>
          <Hero setPage={setPage} />
          <NuzlockeSection />
          <RomSection />
          <SeriesSection setPage={setPage} setActiveSeries={setActiveSeries} />
          <AboutSection />
          <footer>
            <p>⚡ FWKS · Feito com <span>♥</span> e muitas mortes de Pokémon</p>
            <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
          </footer>
        </>
      )}
    </>
  );
}
