// ─────────────────────────────────────────────────────────────────────────────
// SERIES DATA
// ─────────────────────────────────────────────────────────────────────────────
export const SERIES = [
  {
    id: "red-plus-plus-nuzlocke",
    title: "Pokémon Red++ Nuzlocke",
    emoji: "🔴",
    type: "ROM HACK",
    typeColor: "#d97706",
    typeBg: "#fef3c7",
    typeBorder: "#fcd34d",
    thumb: "url('/red-plus-plus.jpg') center/cover no-repeat",
    desc: "Nuzlocke em Red++, uma rom hack que reimagina o Kanto clássico com novos Pokémon, mecânicas modernas e dificuldade ajustada.",
    episodes: 1,
    status: "EM ANDAMENTO",
    statusColor: "#15803d",
    statusBg: "#dcfce7",
    statusBorder: "#86efac",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE EVENTS
// ─────────────────────────────────────────────────────────────────────────────
export const TIMELINE_EVENTS = [
  {
    id: 1,
    emoji: "🌟",
    location: "CIDADE PALLET",
    ep: "EP.01",
    title: "A Jornada Começa",
    desc: "Escolhi Charmander como inicial. O batizei de 'Brasa'. A aventura começa!",
    catches: ["Charmander (Brasa)"],
    deaths: [],
    badge: null,
    nodeColor: "#d97706",
  },
  {
    id: 2,
    emoji: "🌿",
    location: "ROTA 1",
    ep: "EP.01",
    title: "Primeiro Encontro",
    desc: "Encontrei um Pidgey na Rota 1. Primeira captura da run!",
    catches: ["Pidgey (Asa)"],
    deaths: [],
    badge: null,
    nodeColor: "#16a34a",
  },
  {
    id: 3,
    emoji: "🌲",
    location: "FLORESTA VIRIDIAN",
    ep: "EP.02",
    title: "Fundo da Floresta",
    desc: "Um Caterpie apareceu primeiro. Não é animador, mas cada membro do time importa.",
    catches: ["Caterpie (Fio)"],
    deaths: [],
    badge: null,
    nodeColor: "#16a34a",
  },
  {
    id: 4,
    emoji: "🪨",
    location: "CIDADE PEWTER",
    ep: "EP.03",
    title: "Insígnia Pedra!",
    desc: "Os tipos Pedra do Brock não tiveram chance. Primeira insígnia no bolso!",
    catches: [],
    deaths: [],
    badge: { emoji: "🪨", name: "Pedra" },
    nodeColor: "#d97706",
  },
  {
    id: 5,
    emoji: "💀",
    location: "MT. MOON",
    ep: "EP.04",
    title: "Primeira Perda",
    desc: "Asa o Pidgey caiu com um golpe crítico de um Geodude selvagem. Descanse em paz, Asa.",
    catches: [],
    deaths: ["Pidgey (Asa) — Nv.12"],
    badge: null,
    nodeColor: "#dc2626",
  },
  {
    id: 6,
    emoji: "💧",
    location: "CIDADE CERULEAN",
    ep: "EP.06",
    title: "Insígnia Cascata!",
    desc: "O Starmie da Misty foi um pesadelo, mas Fio (agora Butterfree) salvou com Pó do Sono!",
    catches: [],
    deaths: [],
    badge: { emoji: "💧", name: "Cascata" },
    nodeColor: "#d97706",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// KANTO MAP GRID
// ─────────────────────────────────────────────────────────────────────────────
export const KANTO_GRID = [
  [null, null, null, "CIDADE\nPALLET", "ROTA 1", "FLORESTA\nVIRIDIAN", "CIDADE\nPEWTER", null],
  [null, null, null, null, null, null, "MT. MOON", "CIDADE\nCERULEAN"],
  [null, null, "ROTA 6", "CIDADE\nVERMILION", null, null, "ROTA 9", null],
  [null, null, null, null, null, "CIDADE\nLAVENDER", null, null],
  [null, "CIDADE\nCELADON", null, null, null, null, null, null],
  [null, "ROTA 16", null, null, "CIDADE\nFUCHSIA", null, null, null],
];

// ─────────────────────────────────────────────────────────────────────────────
// MAP DATA
// ─────────────────────────────────────────────────────────────────────────────
export const MAP_DATA: Record<string, { caught: string[]; gym: boolean; badge?: string; visited: boolean }> = {
  "CIDADE\nPALLET": { caught: ["Charmander (Brasa)"], gym: false, visited: true },
  "ROTA 1": { caught: ["Pidgey (Asa ✝)"], gym: false, visited: true },
  "FLORESTA\nVIRIDIAN": { caught: ["Caterpie (Fio)"], gym: false, visited: true },
  "CIDADE\nPEWTER": { caught: [], gym: true, badge: "🪨 Insígnia Pedra", visited: true },
  "MT. MOON": { caught: ["Clefairy (Luna)"], gym: false, visited: true },
  "CIDADE\nCERULEAN": { caught: [], gym: true, badge: "💧 Insígnia Cascata", visited: true },
  "ROTA 6": { caught: ["Drowzee (Névoa)"], gym: false, visited: true },
  "CIDADE\nVERMILION": { caught: [], gym: true, badge: "⚡ Insígnia Trovão", visited: false },
  "CIDADE\nLAVENDER": { caught: [], gym: false, visited: false },
  "CIDADE\nCELADON": { caught: [], gym: true, badge: "🌈 Insígnia Arco-Íris", visited: false },
};

// ─────────────────────────────────────────────────────────────────────────────
// CURRENT TEAM
// ─────────────────────────────────────────────────────────────────────────────
export const CURRENT_TEAM = [
  { name: "Brasa", species: "Charizard", level: 38, emoji: "🔥", dead: false },
  { name: "Fio", species: "Butterfree", level: 34, emoji: "🦋", dead: false },
  { name: "Luna", species: "Clefairy", level: 28, emoji: "🌙", dead: false },
  { name: "Névoa", species: "Hypno", level: 30, emoji: "😴", dead: false },
  { name: "Asa", species: "Pidgey", level: 12, emoji: "🐦", dead: true },
];

// ─────────────────────────────────────────────────────────────────────────────
// BADGES
// ─────────────────────────────────────────────────────────────────────────────
export const BADGES = [
  { name: "Pedra", emoji: "🪨", earned: true },
  { name: "Cascata", emoji: "💧", earned: true },
  { name: "Trovão", emoji: "⚡", earned: false },
  { name: "Arco-Íris", emoji: "🌈", earned: false },
  { name: "Alma", emoji: "💗", earned: false },
  { name: "Pântano", emoji: "🧠", earned: false },
  { name: "Vulcão", emoji: "🌋", earned: false },
  { name: "Terra", emoji: "🌍", earned: false },
];
