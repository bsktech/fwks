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
    coverImg: "/red-plus-plus.jpg",
    desc: "Nuzlocke em Red++, uma rom hack que atualiza o Red original com correções, novos locais e mecânicas modernas, mantendo a história clássica de Kanto.",
    activeRunId: "run-1",
    runs: [] as Run[], // preenchido abaixo para evitar referência circular com os tipos
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// RUN TYPES
// ─────────────────────────────────────────────────────────────────────────────
export type TimelineEvent = {
  id: number;
  emoji: string;
  location: string;
  ep: string;
  title: string;
  desc: string;
  catches: string[];
  deaths: string[];
  badge: { emoji: string; name: string } | null;
  nodeColor: string;
};

export type RunTeamMember = {
  name: string;
  species: string;
  level: number;
  emoji: string;
  location: string;
  dead: boolean;
};

export type Run = {
  id: string;
  label: string;
  status: "active" | "dead" | "complete";
  deathNote?: string;
  episodeCount: number;
  progress: string;
  badges: { name: string; emoji: string; earned: boolean }[];
  videos: { title: string; ep: string; emoji: string }[];
  timeline: TimelineEvent[];
  locations: KantoLocation[];
  routes: [string, string][];
  team: RunTeamMember[];
};

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
  // {
  //   id: 2,
  //   emoji: "🌿",
  //   location: "ROTA 1",
  //   ep: "EP.01",
  //   title: "Primeiro Encontro",
  //   desc: "Encontrei um Pidgey na Rota 1. Primeira captura da run!",
  //   catches: ["Pidgey (Asa)"],
  //   deaths: [],
  //   badge: null,
  //   nodeColor: "#16a34a",
  // },
  // {
  //   id: 3,
  //   emoji: "🌲",
  //   location: "FLORESTA VIRIDIAN",
  //   ep: "EP.02",
  //   title: "Fundo da Floresta",
  //   desc: "Um Caterpie apareceu primeiro. Não é animador, mas cada membro do time importa.",
  //   catches: ["Caterpie (Fio)"],
  //   deaths: [],
  //   badge: null,
  //   nodeColor: "#16a34a",
  // },
  // {
  //   id: 4,
  //   emoji: "🪨",
  //   location: "CIDADE PEWTER",
  //   ep: "EP.03",
  //   title: "Insígnia Pedra!",
  //   desc: "Os tipos Pedra do Brock não tiveram chance. Primeira insígnia no bolso!",
  //   catches: [],
  //   deaths: [],
  //   badge: { emoji: "🪨", name: "Pedra" },
  //   nodeColor: "#d97706",
  // },
  // {
  //   id: 5,
  //   emoji: "💀",
  //   location: "MT. MOON",
  //   ep: "EP.04",
  //   title: "Primeira Perda",
  //   desc: "Asa o Pidgey caiu com um golpe crítico de um Geodude selvagem. Descanse em paz, Asa.",
  //   catches: [],
  //   deaths: ["Pidgey (Asa) — Nv.12"],
  //   badge: null,
  //   nodeColor: "#dc2626",
  // },
  // {
  //   id: 6,
  //   emoji: "💧",
  //   location: "CIDADE CERULEAN",
  //   ep: "EP.06",
  //   title: "Insígnia Cascata!",
  //   desc: "O Starmie da Misty foi um pesadelo, mas Fio (agora Butterfree) salvou com Pó do Sono!",
  //   catches: [],
  //   deaths: [],
  //   badge: { emoji: "💧", name: "Cascata" },
  //   nodeColor: "#d97706",
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
// KANTO MAP — locations with x/y (% of viewBox) and captured Pokémon
// ─────────────────────────────────────────────────────────────────────────────
export type KantoLocation = {
  id: string;
  name: string;
  type: "town" | "city" | "route" | "cave" | "forest";
  gym?: boolean;
  x: number;
  y: number;
  visited: boolean;
  caught: { species: string; name: string; emoji: string; dead?: boolean }[];
};

export const KANTO_LOCATIONS: KantoLocation[] = [
  // South-west corridor (Pallet → Viridian → Pewter)
  { id: "pallet", name: "Pallet Town", type: "town", x: 28, y: 86, visited: true, caught: [{ species: "Charmander", name: "Brasa", emoji: "🔥" }] },
  { id: "route1", name: "Rota 1", type: "route", x: 28, y: 76, visited: true, caught: [{ species: "Pidgey", name: "Asa", emoji: "🐦", dead: true }] },
  { id: "viridian", name: "Viridian City", type: "city", gym: true, x: 28, y: 66, visited: true, caught: [] },
  { id: "route2", name: "Rota 2", type: "route", x: 28, y: 56, visited: true, caught: [] },
  { id: "viridian-forest", name: "Floresta Viridian", type: "forest", x: 28, y: 46, visited: true, caught: [{ species: "Caterpie", name: "Fio", emoji: "🐛" }] },
  { id: "pewter", name: "Pewter City", type: "city", gym: true, x: 28, y: 36, visited: true, caught: [] },
  // East from Pewter
  { id: "route3", name: "Rota 3", type: "route", x: 38, y: 36, visited: true, caught: [] },
  { id: "mtmoon", name: "Mt. Moon", type: "cave", x: 47, y: 36, visited: true, caught: [{ species: "Clefairy", name: "Luna", emoji: "🌙" }] },
  { id: "route4", name: "Rota 4", type: "route", x: 56, y: 36, visited: true, caught: [] },
  { id: "cerulean", name: "Cerulean City", type: "city", gym: true, x: 65, y: 36, visited: true, caught: [] },
  // South from Cerulean
  { id: "route5", name: "Rota 5", type: "route", x: 65, y: 46, visited: false, caught: [] },
  { id: "saffron", name: "Saffron City", type: "city", gym: true, x: 65, y: 54, visited: false, caught: [] },
  { id: "route6", name: "Rota 6", type: "route", x: 65, y: 62, visited: true, caught: [{ species: "Drowzee", name: "Névoa", emoji: "😴" }] },
  { id: "vermilion", name: "Vermilion City", type: "city", gym: true, x: 65, y: 70, visited: false, caught: [] },
  // East from Saffron / Vermilion
  { id: "route7", name: "Rota 7", type: "route", x: 57, y: 54, visited: false, caught: [] },
  { id: "celadon", name: "Celadon City", type: "city", gym: true, x: 49, y: 54, visited: false, caught: [] },
  { id: "route8", name: "Rota 8", type: "route", x: 75, y: 54, visited: false, caught: [] },
  { id: "lavender", name: "Lavender Town", type: "town", x: 84, y: 54, visited: false, caught: [] },
  // South route (Fuchsia/Cinnabar)
  { id: "route18", name: "Rota 18", type: "route", x: 49, y: 80, visited: false, caught: [] },
  { id: "fuchsia", name: "Fuchsia City", type: "city", gym: true, x: 58, y: 80, visited: false, caught: [] },
  { id: "route19", name: "Rota 19", type: "route", x: 58, y: 88, visited: false, caught: [] },
  { id: "cinnabar", name: "Cinnabar Island", type: "town", gym: true, x: 22, y: 92, visited: false, caught: [] },
];

export const KANTO_ROUTES: [string, string][] = [
  ["pallet", "route1"],
  ["route1", "viridian"],
  ["viridian", "route2"],
  ["route2", "viridian-forest"],
  ["viridian-forest", "pewter"],
  ["pewter", "route3"],
  ["route3", "mtmoon"],
  ["mtmoon", "route4"],
  ["route4", "cerulean"],
  ["cerulean", "route5"],
  ["route5", "saffron"],
  ["saffron", "route6"],
  ["route6", "vermilion"],
  ["saffron", "route7"],
  ["route7", "celadon"],
  ["saffron", "route8"],
  ["route8", "lavender"],
  ["celadon", "route18"],
  ["route18", "fuchsia"],
  ["fuchsia", "route19"],
  ["route19", "cinnabar"],
];

// ─────────────────────────────────────────────────────────────────────────────
// TEAM — ordered by capture, dead Pokémon included
// ─────────────────────────────────────────────────────────────────────────────
export const CURRENT_TEAM = [
  { name: "Brasa", species: "Charizard", level: 38, emoji: "🔥", location: "Pallet Town", dead: false },
  { name: "Asa", species: "Pidgey", level: 12, emoji: "🐦", location: "Rota 1", dead: true },
  { name: "Fio", species: "Butterfree", level: 34, emoji: "🦋", location: "Floresta Viridian", dead: false },
  { name: "Luna", species: "Clefairy", level: 28, emoji: "🌙", location: "Mt. Moon", dead: false },
  { name: "Névoa", species: "Hypno", level: 30, emoji: "😴", location: "Rota 6", dead: false },
];

// ─────────────────────────────────────────────────────────────────────────────
// RUNS — populated after all data is defined
// ─────────────────────────────────────────────────────────────────────────────
const RUN_1: Run = {
  id: "run-1",
  label: "Run 1",
  status: "active",
  episodeCount: 1,
  progress: "Início de Kanto",
  badges: [
    { name: "Pedra", emoji: "🪨", earned: true },
    { name: "Cascata", emoji: "💧", earned: true },
    { name: "Trovão", emoji: "⚡", earned: false },
    { name: "Arco-Íris", emoji: "🌈", earned: false },
    { name: "Alma", emoji: "💗", earned: false },
    { name: "Pântano", emoji: "🧠", earned: false },
    { name: "Vulcão", emoji: "🌋", earned: false },
    { name: "Terra", emoji: "🌍", earned: false },
  ],
  videos: [
    { title: "Ep. 1 — A Jornada Começa", ep: "EP.01", emoji: "🌟" },
  ],
  timeline: TIMELINE_EVENTS,
  locations: KANTO_LOCATIONS,
  routes: KANTO_ROUTES,
  team: CURRENT_TEAM,
};

SERIES[0].runs = [RUN_1];

export const BADGES = RUN_1.badges;
