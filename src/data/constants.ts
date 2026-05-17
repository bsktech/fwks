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

export type RunRule = {
  emoji: string;
  title: string;
  desc: string;
};

export type RunTeamMember = {
  name: string;
  species: string;
  level: number;
  emoji: string;
  image?: string;
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
  badges: { id?: string; name: string; emoji: string; earned: boolean }[];
  rulesetName: string;
  rulesetTagline: string;
  rules: RunRule[];
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
  {
    id: 2,
    emoji: "💀",
    location: "CIDADE PALLET",
    ep: "EP.01",
    title: "Brasa Cai para Gary",
    desc: "Na primeira batalha com Gary, o Squirtle dele derrotou meu Charmander. Brasa não resistiu.",
    catches: [],
    deaths: ["Charmander (Brasa) — Nv.5"],
    badge: null,
    nodeColor: "#dc2626",
  },
  {
    id: 3,
    emoji: "🪦",
    location: "CIDADE PALLET",
    ep: "EP.01",
    title: "Temporada Finalizada — Wipe",
    desc: "Com Brasa caído, o time inteiro se foi. Pela regra, time inteiro morto = run acabada. Sem segunda chance, sem reload. Até a próxima temporada.",
    catches: [],
    deaths: [],
    badge: null,
    nodeColor: "#0d2b14",
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
  { id: "route22", name: "Rota 22", type: "route", x: 18, y: 66, visited: false, caught: [] },
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
  ["viridian", "route22"],
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
  { name: "Brasa", species: "Charmander", level: 5, emoji: "🔥", image: "/charmander.png", location: "Cidade Pallet", dead: true },
];

// ─────────────────────────────────────────────────────────────────────────────
// RUNS — populated after all data is defined
// ─────────────────────────────────────────────────────────────────────────────
const RUN_1: Run = {
  id: "run-1",
  label: "Temporada 1",
  status: "dead",
  deathNote: "Wipe contra o Gary na primeira batalha em Pallet.",
  episodeCount: 1,
  progress: "Encerrada em Pallet",
  badges: [
    { id: "boulder", name: "Pedra", emoji: "🪨", earned: false },
    { id: "cascade", name: "Cascata", emoji: "💧", earned: false },
    { id: "thunder", name: "Trovão", emoji: "⚡", earned: false },
    { id: "rainbow", name: "Arco-Íris", emoji: "🌈", earned: false },
    { id: "soul", name: "Alma", emoji: "💗", earned: false },
    { id: "marsh", name: "Pântano", emoji: "🧠", earned: false },
    { id: "volcano", name: "Vulcão", emoji: "🌋", earned: false },
    { id: "earth", name: "Terra", emoji: "🌍", earned: false },
  ],
  rulesetName: "Hardcore Nuzlocke",
  rulesetTagline: "Regras tradicionais da comunidade. Sem itens, sem segunda chance.",
  rules: [
    {
      emoji: "🎯",
      title: "Primeiro encontro por área",
      desc: "Só posso capturar o primeiro Pokémon que aparecer em cada rota, caverna ou cidade. Se ele desmaiar antes da pokébola, perdi o encontro daquela área.",
    },
    {
      emoji: "🚫",
      title: "Sem itens em batalha",
      desc: "Nada de Poção, Revive, Full Heal ou X-Attack durante o combate. Itens equipados (held items) são permitidos.",
    },
    {
      emoji: "♻️",
      title: "Dupes clause",
      desc: "Só posso ter uma de cada espécie. Se o primeiro encontro de uma área for uma espécie que já capturei, re-rolo até aparecer uma diferente.",
    },
    {
      emoji: "⚔️",
      title: "Set mode",
      desc: "Jogo no modo Set: nada de prompt avisando qual Pokémon o adversário vai trocar, e sem trocar de Pokémon de graça depois de um KO.",
    },
    {
      emoji: "💀",
      title: "Desmaiou, morreu",
      desc: "Pokémon que cai em batalha é considerado morto e vai pro box permanente — não pode ser usado nunca mais, nem como HM-slave.",
    },
    {
      emoji: "🪦",
      title: "Wipe acaba a run",
      desc: "Se o time inteiro cair (todos os 6 Pokémon mortos), a temporada acaba ali. Não tem reload nem segunda chance — começo uma nova run do zero.",
    },
    {
      emoji: "⚖️",
      title: "Level cap por boss",
      desc: "Nenhum Pokémon do time pode passar do nível do Pokémon mais forte do próximo líder de ginásio / boss (ex.: Gary). Time precisa estar managed, sem overlevel.",
    },
    {
      emoji: "🔢",
      title: "Team cap por boss",
      desc: "Não posso levar mais Pokémon pra batalha do que o próprio boss. Se o líder usa 2 Pokémon, eu também só posso usar 2. Se usa 6, posso levar até 6.",
    },
  ],
  videos: [
    { title: "Ep. 1 — A Jornada Começa", ep: "EP.01", emoji: "🌟" },
  ],
  timeline: TIMELINE_EVENTS,
  locations: KANTO_LOCATIONS,
  routes: KANTO_ROUTES,
  team: CURRENT_TEAM,
};

const RUN_2_TIMELINE: TimelineEvent[] = [
  {
    id: 1,
    emoji: "🌟",
    location: "CIDADE PALLET",
    ep: "EP.01",
    title: "A Jornada Começa",
    desc: "Depois do wipe da Temporada 1, decidi mudar a estratégia. Escolhi Squirtle como inicial e o batizei de 'Filipinas'. Tema dessa run: nomes de países. Hora de tentar de novo!",
    catches: ["Squirtle (Filipinas)"],
    deaths: [],
    badge: null,
    nodeColor: "#d97706",
  },
  {
    id: 2,
    emoji: "🇨🇦",
    location: "ROTA 1",
    ep: "EP.01",
    title: "Primeiro Encontro",
    desc: "Apareceu um Zigzagoon na grama da Rota 1. Capturado e batizado de Canadá.",
    catches: ["Zigzagoon (Canadá)"],
    deaths: [],
    badge: null,
    nodeColor: "#16a34a",
  },
  {
    id: 3,
    emoji: "🇲🇨",
    location: "ROTA 22",
    ep: "EP.02",
    title: "Desvio pela Rota 22",
    desc: "Antes de seguir para o norte, dei uma passada na Rota 22. Encontrei um Meowth e o adicionei ao time como Mônaco.",
    catches: ["Meowth (Mônaco)"],
    deaths: [],
    badge: null,
    nodeColor: "#16a34a",
  },
  {
    id: 4,
    emoji: "🇳🇴",
    location: "ROTA 2",
    ep: "EP.02",
    title: "Voador no Caminho",
    desc: "Subindo pela Rota 2, um Pidgey apareceu na grama. Captura tranquila — bem-vindo, Noruega.",
    catches: ["Pidgey (Noruega)"],
    deaths: [],
    badge: null,
    nodeColor: "#16a34a",
  },
  {
    id: 5,
    emoji: "🇨🇷",
    location: "FLORESTA VIRIDIAN",
    ep: "EP.02",
    title: "Pelo Coração da Floresta",
    desc: "Na Floresta Viridian, o primeiro encontro foi um Caterpie. Não é o mais animador, mas vai virar um Butterfree decente. Apelidei de Costa Rica.",
    catches: ["Caterpie (Costa Rica)"],
    deaths: [],
    badge: null,
    nodeColor: "#16a34a",
  },
];

const RUN_2_TEAM: RunTeamMember[] = [
  {
    name: "Filipinas",
    species: "Squirtle",
    level: 5,
    emoji: "💧",
    image: "/squirtle.png",
    location: "Cidade Pallet",
    dead: false,
  },
  {
    name: "Canadá",
    species: "Zigzagoon",
    level: 3,
    emoji: "🦝",
    image: "/zigzagoon.png",
    location: "Rota 1",
    dead: false,
  },
  {
    name: "Mônaco",
    species: "Meowth",
    level: 4,
    emoji: "🐱",
    image: "/meowth.png",
    location: "Rota 22",
    dead: false,
  },
  {
    name: "Noruega",
    species: "Pidgey",
    level: 4,
    emoji: "🐦",
    image: "/pidgey.png",
    location: "Rota 2",
    dead: false,
  },
  {
    name: "Costa Rica",
    species: "Caterpie",
    level: 4,
    emoji: "🐛",
    image: "/caterpie.png",
    location: "Floresta Viridian",
    dead: false,
  },
];

const RUN_2_CAPTURES: Record<string, KantoLocation["caught"]> = {
  pallet: [{ species: "Squirtle", name: "Filipinas", emoji: "💧" }],
  route1: [{ species: "Zigzagoon", name: "Canadá", emoji: "🦝" }],
  route22: [{ species: "Meowth", name: "Mônaco", emoji: "🐱" }],
  route2: [{ species: "Pidgey", name: "Noruega", emoji: "🐦" }],
  "viridian-forest": [{ species: "Caterpie", name: "Costa Rica", emoji: "🐛" }],
};

const RUN_2_VISITED = new Set([
  "pallet",
  "route1",
  "viridian",
  "route22",
  "route2",
  "viridian-forest",
]);

const RUN_2_LOCATIONS: KantoLocation[] = KANTO_LOCATIONS.map((loc) => ({
  ...loc,
  visited: RUN_2_VISITED.has(loc.id),
  caught: RUN_2_CAPTURES[loc.id] ?? [],
}));

const RUN_2: Run = {
  id: "run-2",
  label: "Temporada 2",
  status: "active",
  episodeCount: 2,
  progress: "Floresta Viridian",
  badges: [
    { id: "boulder", name: "Pedra", emoji: "🪨", earned: false },
    { id: "cascade", name: "Cascata", emoji: "💧", earned: false },
    { id: "thunder", name: "Trovão", emoji: "⚡", earned: false },
    { id: "rainbow", name: "Arco-Íris", emoji: "🌈", earned: false },
    { id: "soul", name: "Alma", emoji: "💗", earned: false },
    { id: "marsh", name: "Pântano", emoji: "🧠", earned: false },
    { id: "volcano", name: "Vulcão", emoji: "🌋", earned: false },
    { id: "earth", name: "Terra", emoji: "🌍", earned: false },
  ],
  rulesetName: RUN_1.rulesetName,
  rulesetTagline: RUN_1.rulesetTagline,
  rules: RUN_1.rules,
  videos: [{ title: "Ep. 1 — A Jornada Começa", ep: "EP.01", emoji: "🌟" }],
  timeline: RUN_2_TIMELINE,
  locations: RUN_2_LOCATIONS,
  routes: KANTO_ROUTES,
  team: RUN_2_TEAM,
};

SERIES[0].runs = [RUN_1, RUN_2];
SERIES[0].activeRunId = RUN_2.id;

export const BADGES = RUN_1.badges;
