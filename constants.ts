// ─────────────────────────────────────────────────────────────────────────────
// SERIES DATA
// ─────────────────────────────────────────────────────────────────────────────
export const SERIES = [
  {
    id: "kanto-nuzlocke",
    title: "Nuzlocke Kanto",
    emoji: "🔴",
    type: "NUZLOCKE",
    typeColor: "#dc2626",
    typeBg: "#fee2e2",
    typeBorder: "#fca5a5",
    thumb: "linear-gradient(135deg, #0d2b14 0%, #15803d 100%)",
    desc: "O desafio clássico. Consigo vencer Red/Blue sem perder todo o time? Cada passo por Kanto é uma aposta.",
    episodes: 24,
    status: "EM ANDAMENTO",
    statusColor: "#15803d",
    statusBg: "#dcfce7",
    statusBorder: "#86efac",
  },
  {
    id: "radical-red",
    title: "Radical Red Nuzlocke",
    emoji: "🔥",
    type: "ROM HACK",
    typeColor: "#d97706",
    typeBg: "#fef3c7",
    typeBorder: "#fcd34d",
    thumb: "linear-gradient(135deg, #1c1003 0%, #854d0e 100%)",
    desc: "Radical Red eleva a dificuldade ao máximo. Novos Pokémon, IA brutal e regras Nuzlocke. Isso é sofrimento puro.",
    episodes: 18,
    status: "EM ANDAMENTO",
    statusColor: "#15803d",
    statusBg: "#dcfce7",
    statusBorder: "#86efac",
  },
  {
    id: "crystal-clear",
    title: "Crystal Clear Aventura",
    emoji: "💎",
    type: "ROM HACK",
    typeColor: "#1d4ed8",
    typeBg: "#dbeafe",
    typeBorder: "#93c5fd",
    thumb: "linear-gradient(135deg, #071b2f 0%, #1e40af 100%)",
    desc: "Johto em mundo aberto com liberdade de começar em qualquer lugar. Uma aventura tranquila com reviravolta surpreendente.",
    episodes: 32,
    status: "CONCLUÍDA",
    statusColor: "#1d4ed8",
    statusBg: "#dbeafe",
    statusBorder: "#93c5fd",
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
export const MAP_DATA: Record<string, any> = {
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
