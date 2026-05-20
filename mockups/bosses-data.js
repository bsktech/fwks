// Shared boss data for mockups A/B/C. Inline in each standalone HTML.
window.BOSSES = (function () {
  // rival starter map (always super effective vs player)
  const RIVAL = { bulba: 'Charmander', char: 'Squirtle', squir: 'Bulbasaur' };

  // pokémon helper: [name, lvl, types]
  const p = (n, l, t) => ({ n, l, t });

  // build rival team variants
  function rivalTeam(common, byStarter) {
    return {
      bulba: [...common, ...(byStarter.bulba || [])],
      char: [...common, ...(byStarter.char || [])],
      squir: [...common, ...(byStarter.squir || [])],
    };
  }

  return [
    {
      n: 1, cat: 'rival', name: 'Rival — Lab. Prof. Carvalho',
      loc: 'Pallet Town', cap: 5, reward: 175,
      note: 'Primeira luta. Starter do rival é sempre vantajoso ao seu.',
      teams: {
        bulba: [p('Charmander', 5, ['Fire'])],
        char: [p('Squirtle', 5, ['Water'])],
        squir: [p('Bulbasaur', 5, ['Grass', 'Poison'])],
      },
    },
    {
      n: 2, cat: 'rival', name: 'Rival 2 — Route 22',
      loc: 'Route 22', cap: 9, reward: 280,
      note: 'Adicionou Pidgey. Squirtle do rival aprende Bubble (cuidado se você for Charmander).',
      teams: {
        bulba: [p('Pidgey', 9, ['Normal', 'Flying']), p('Charmander', 8, ['Fire'])],
        char: [p('Pidgey', 9, ['Normal', 'Flying']), p('Squirtle', 8, ['Water'])],
        squir: [p('Pidgey', 9, ['Normal', 'Flying']), p('Bulbasaur', 8, ['Grass', 'Poison'])],
      },
    },
    {
      n: 3, cat: 'gym', badge: 'Boulder', name: 'Brock — Ginásio Pewter',
      loc: 'Pewter City', cap: 14, reward: 1386,
      note: 'Geodude e Onix. Grass/Water arrasam. Bide do Onix devolve dano em dobro.',
      teams: {
        all: [p('Geodude', 12, ['Rock', 'Ground']), p('Onix', 14, ['Rock', 'Ground'])],
      },
    },
    {
      n: 4, cat: 'rival', name: 'Rival 3 — Cerulean City',
      loc: 'Cerulean City', cap: 18, reward: 595,
      note: 'Pidgeotto, Abra e Rattata. Starter agora tem move STAB.',
      teams: {
        bulba: [
          p('Pidgeotto', 18, ['Normal', 'Flying']),
          p('Abra', 15, ['Psychic']),
          p('Rattata', 15, ['Normal']),
          p('Charmander', 17, ['Fire']),
        ],
        char: [
          p('Pidgeotto', 18, ['Normal', 'Flying']),
          p('Abra', 15, ['Psychic']),
          p('Rattata', 15, ['Normal']),
          p('Squirtle', 17, ['Water']),
        ],
        squir: [
          p('Pidgeotto', 18, ['Normal', 'Flying']),
          p('Abra', 15, ['Psychic']),
          p('Rattata', 15, ['Normal']),
          p('Bulbasaur', 17, ['Grass', 'Poison']),
        ],
      },
    },
    {
      n: 5, cat: 'gym', badge: 'Cascade', name: 'Misty — Ginásio Cerulean',
      loc: 'Cerulean City', cap: 21, reward: 2079,
      note: 'Starmie usa BubbleBeam — pode reduzir Speed. Electric/Grass = win.',
      teams: {
        all: [p('Staryu', 18, ['Water']), p('Starmie', 21, ['Water', 'Psychic'])],
      },
    },
    {
      n: 6, cat: 'rival', name: 'Rival 4 — S.S. Anne',
      loc: 'S.S. Anne', cap: 20, reward: 1330,
      note: 'Abra evoluiu pra Kadabra. Rattata → Raticate (Hyper Fang dói).',
      teams: {
        bulba: [
          p('Pidgeotto', 19, ['Normal', 'Flying']),
          p('Raticate', 16, ['Normal']),
          p('Kadabra', 18, ['Psychic']),
          p('Charmeleon', 20, ['Fire']),
        ],
        char: [
          p('Pidgeotto', 19, ['Normal', 'Flying']),
          p('Raticate', 16, ['Normal']),
          p('Kadabra', 18, ['Psychic']),
          p('Wartortle', 20, ['Water']),
        ],
        squir: [
          p('Pidgeotto', 19, ['Normal', 'Flying']),
          p('Raticate', 16, ['Normal']),
          p('Kadabra', 18, ['Psychic']),
          p('Ivysaur', 20, ['Grass', 'Poison']),
        ],
      },
    },
    {
      n: 7, cat: 'gym', badge: 'Thunder', name: 'Lt. Surge — Ginásio Vermilion',
      loc: 'Vermilion City', cap: 24, reward: 2376,
      note: 'Raichu com Thunderbolt. Voltorb pode usar Selfdestruct em sims.',
      teams: {
        all: [
          p('Voltorb', 21, ['Electric']),
          p('Pikachu', 18, ['Electric']),
          p('Raichu', 24, ['Electric']),
        ],
      },
    },
    {
      n: 8, cat: 'gym', badge: 'Rainbow', name: 'Erika — Ginásio Celadon',
      loc: 'Celadon City', cap: 29, reward: 2871,
      note: 'Sleep Powder no Victreebel e Vileplume. Cuidado com status.',
      teams: {
        all: [
          p('Victreebel', 29, ['Grass', 'Poison']),
          p('Tangela', 24, ['Grass']),
          p('Vileplume', 29, ['Grass', 'Poison']),
        ],
      },
    },
    {
      n: 9, cat: 'villain', name: 'Giovanni — Rocket Hideout',
      loc: 'Celadon City', cap: 29, reward: 2871,
      note: 'Rage no Onix e Kangaskhan: cada hit aumenta Attack deles.',
      teams: {
        all: [
          p('Onix', 25, ['Rock', 'Ground']),
          p('Rhyhorn', 24, ['Ground', 'Rock']),
          p('Kangaskhan', 29, ['Normal']),
        ],
      },
    },
    {
      n: 10, cat: 'rival', name: 'Rival 5 — Pokémon Tower',
      loc: 'Lavender Town', cap: 25, reward: 1625,
      note: 'Equipe ganha cobertura: Grass + Fire + Water + Psychic.',
      teams: {
        bulba: [
          p('Pidgeotto', 25, ['Normal', 'Flying']),
          p('Exeggcute', 23, ['Grass', 'Psychic']),
          p('Gyarados', 22, ['Water', 'Flying']),
          p('Kadabra', 20, ['Psychic']),
          p('Charmeleon', 25, ['Fire']),
        ],
        char: [
          p('Pidgeotto', 25, ['Normal', 'Flying']),
          p('Growlithe', 23, ['Fire']),
          p('Exeggcute', 22, ['Grass', 'Psychic']),
          p('Kadabra', 20, ['Psychic']),
          p('Wartortle', 25, ['Water']),
        ],
        squir: [
          p('Pidgeotto', 25, ['Normal', 'Flying']),
          p('Gyarados', 23, ['Water', 'Flying']),
          p('Growlithe', 22, ['Fire']),
          p('Kadabra', 20, ['Psychic']),
          p('Ivysaur', 25, ['Grass', 'Poison']),
        ],
      },
    },
    {
      n: 11, cat: 'rival', name: 'Rival 6 — Silph Co.',
      loc: 'Saffron City', cap: 40, reward: 2600,
      note: 'Kadabra → Alakazam (Recover!). Starter na 3ª evolução.',
      teams: {
        bulba: [
          p('Pidgeot', 37, ['Normal', 'Flying']),
          p('Exeggcute', 38, ['Grass', 'Psychic']),
          p('Gyarados', 35, ['Water', 'Flying']),
          p('Alakazam', 35, ['Psychic']),
          p('Charizard', 40, ['Fire', 'Flying']),
        ],
        char: [
          p('Pidgeot', 37, ['Normal', 'Flying']),
          p('Growlithe', 38, ['Fire']),
          p('Exeggcute', 35, ['Grass', 'Psychic']),
          p('Alakazam', 35, ['Psychic']),
          p('Blastoise', 40, ['Water']),
        ],
        squir: [
          p('Pidgeot', 37, ['Normal', 'Flying']),
          p('Gyarados', 38, ['Water', 'Flying']),
          p('Growlithe', 35, ['Fire']),
          p('Alakazam', 35, ['Psychic']),
          p('Venusaur', 40, ['Grass', 'Poison']),
        ],
      },
    },
    {
      n: 12, cat: 'villain', name: 'Giovanni — Silph Co.',
      loc: 'Saffron City', cap: 41, reward: 4059,
      note: 'Ground attacks (Dig/Earthquake) detonam 3 dos 4. Fighting vs Kangaskhan.',
      teams: {
        all: [
          p('Nidorino', 37, ['Poison']),
          p('Kangaskhan', 35, ['Normal']),
          p('Rhyhorn', 37, ['Ground', 'Rock']),
          p('Nidoqueen', 41, ['Poison', 'Ground']),
        ],
      },
    },
    {
      n: 13, cat: 'gym', badge: 'Marsh', name: 'Sabrina — Ginásio Saffron',
      loc: 'Saffron City', cap: 43, reward: 4257,
      note: 'Time Psychic puro. Bug é melhor mas raro — Dark não existe na 1ª gen.',
      teams: {
        all: [
          p('Kadabra', 38, ['Psychic']),
          p('Mr. Mime', 37, ['Psychic']),
          p('Venomoth', 38, ['Bug', 'Poison']),
          p('Alakazam', 43, ['Psychic']),
        ],
      },
    },
    {
      n: 14, cat: 'gym', badge: 'Soul', name: 'Koga — Ginásio Fuchsia',
      loc: 'Fuchsia City', cap: 43, reward: 4257,
      note: 'Weezing tem Selfdestruct + Toxic. Psychic destrói Poison.',
      teams: {
        all: [
          p('Koffing', 37, ['Poison']),
          p('Muk', 39, ['Poison']),
          p('Koffing', 37, ['Poison']),
          p('Weezing', 43, ['Poison']),
        ],
      },
    },
    {
      n: 15, cat: 'gym', badge: 'Volcano', name: 'Blaine — Ginásio Cinnabar',
      loc: 'Cinnabar Island', cap: 47, reward: 4653,
      note: 'Arcanine com Fire Blast e Take Down. Rock/Water dominam.',
      teams: {
        all: [
          p('Growlithe', 42, ['Fire']),
          p('Ponyta', 40, ['Fire']),
          p('Rapidash', 42, ['Fire']),
          p('Arcanine', 47, ['Fire']),
        ],
      },
    },
    {
      n: 16, cat: 'gym', badge: 'Earth', name: 'Giovanni — Ginásio Viridian',
      loc: 'Viridian City', cap: 50, reward: 4950,
      note: 'Rhydon com Horn Drill (OHKO). Water/Grass + Ice contra Nidoking.',
      teams: {
        all: [
          p('Rhyhorn', 45, ['Ground', 'Rock']),
          p('Dugtrio', 42, ['Ground']),
          p('Nidoqueen', 44, ['Poison', 'Ground']),
          p('Nidoking', 45, ['Poison', 'Ground']),
          p('Rhydon', 50, ['Ground', 'Rock']),
        ],
      },
    },
    {
      n: 17, cat: 'rival', name: 'Rival 7 — Route 22',
      loc: 'Route 22', cap: 53, reward: 3445,
      note: 'Última luta antes da E4. Alakazam com Reflect + Recover.',
      teams: {
        bulba: [
          p('Pidgeot', 47, ['Normal', 'Flying']),
          p('Rhyhorn', 45, ['Ground', 'Rock']),
          p('Exeggcute', 45, ['Grass', 'Psychic']),
          p('Gyarados', 47, ['Water', 'Flying']),
          p('Alakazam', 50, ['Psychic']),
          p('Charizard', 53, ['Fire', 'Flying']),
        ],
        char: [
          p('Pidgeot', 47, ['Normal', 'Flying']),
          p('Rhyhorn', 45, ['Ground', 'Rock']),
          p('Growlithe', 45, ['Fire']),
          p('Exeggcute', 47, ['Grass', 'Psychic']),
          p('Alakazam', 50, ['Psychic']),
          p('Blastoise', 53, ['Water']),
        ],
        squir: [
          p('Pidgeot', 47, ['Normal', 'Flying']),
          p('Rhyhorn', 45, ['Ground', 'Rock']),
          p('Gyarados', 45, ['Water', 'Flying']),
          p('Growlithe', 47, ['Fire']),
          p('Alakazam', 50, ['Psychic']),
          p('Venusaur', 53, ['Grass', 'Poison']),
        ],
      },
    },
    {
      n: 18, cat: 'e4', name: 'Lorelei — Elite 4',
      loc: 'Indigo Plateau', cap: 56, reward: 5544,
      note: 'Ice/Water. Electric arrasa metade — Jolteon/Raichu MVP.',
      teams: {
        all: [
          p('Dewgong', 54, ['Water', 'Ice']),
          p('Cloyster', 53, ['Water', 'Ice']),
          p('Slowbro', 54, ['Water', 'Psychic']),
          p('Jynx', 56, ['Ice', 'Psychic']),
          p('Lapras', 56, ['Water', 'Ice']),
        ],
      },
    },
    {
      n: 19, cat: 'e4', name: 'Bruno — Elite 4',
      loc: 'Indigo Plateau', cap: 58, reward: 5742,
      note: '2 Onix + 3 Fighting. Slowbro/Starmie cobrem tudo.',
      teams: {
        all: [
          p('Onix', 53, ['Rock', 'Ground']),
          p('Hitmonchan', 55, ['Fighting']),
          p('Hitmonlee', 55, ['Fighting']),
          p('Onix', 56, ['Rock', 'Ground']),
          p('Machamp', 58, ['Fighting']),
        ],
      },
    },
    {
      n: 20, cat: 'e4', name: 'Agatha — Elite 4',
      loc: 'Indigo Plateau', cap: 60, reward: 5940,
      note: 'Ghost/Poison. Psychic e Ground dominam (bug: Ghost ↔ Normal não funciona na gen 1).',
      teams: {
        all: [
          p('Gengar', 56, ['Ghost', 'Poison']),
          p('Golbat', 56, ['Poison', 'Flying']),
          p('Haunter', 55, ['Ghost', 'Poison']),
          p('Arbok', 58, ['Poison']),
          p('Gengar', 60, ['Ghost', 'Poison']),
        ],
      },
    },
    {
      n: 21, cat: 'e4', name: 'Lance — Elite 4',
      loc: 'Indigo Plateau', cap: 62, reward: 6138,
      note: 'Só Gyarados e Aerodactyl são "dragões" no nome. Ice Beam = MVP.',
      teams: {
        all: [
          p('Gyarados', 58, ['Water', 'Flying']),
          p('Dragonair', 56, ['Dragon']),
          p('Dragonair', 56, ['Dragon']),
          p('Aerodactyl', 60, ['Rock', 'Flying']),
          p('Dragonite', 62, ['Dragon', 'Flying']),
        ],
      },
    },
    {
      n: 22, cat: 'champ', name: 'Campeão Blue — Indigo Plateau',
      loc: 'Indigo Plateau', cap: 65, reward: 6435,
      note: 'Pidgeot + Alakazam + Rhydon fixos. Resto depende do starter dele.',
      teams: {
        bulba: [
          p('Pidgeot', 61, ['Normal', 'Flying']),
          p('Alakazam', 59, ['Psychic']),
          p('Rhydon', 61, ['Ground', 'Rock']),
          p('Exeggutor', 61, ['Grass', 'Psychic']),
          p('Gyarados', 63, ['Water', 'Flying']),
          p('Charizard', 65, ['Fire', 'Flying']),
        ],
        char: [
          p('Pidgeot', 61, ['Normal', 'Flying']),
          p('Alakazam', 59, ['Psychic']),
          p('Rhydon', 61, ['Ground', 'Rock']),
          p('Arcanine', 61, ['Fire']),
          p('Exeggutor', 63, ['Grass', 'Psychic']),
          p('Blastoise', 65, ['Water']),
        ],
        squir: [
          p('Pidgeot', 61, ['Normal', 'Flying']),
          p('Alakazam', 59, ['Psychic']),
          p('Rhydon', 61, ['Ground', 'Rock']),
          p('Gyarados', 61, ['Water', 'Flying']),
          p('Arcanine', 63, ['Fire']),
          p('Venusaur', 65, ['Grass', 'Poison']),
        ],
      },
    },
  ];
})();

window.TYPE_COLORS = {
  Normal: '#A8A878', Fire: '#F08030', Water: '#6890F0', Electric: '#F8D030',
  Grass: '#78C850', Ice: '#98D8D8', Fighting: '#C03028', Poison: '#A040A0',
  Ground: '#E0C068', Flying: '#A890F0', Psychic: '#F85888', Bug: '#A8B820',
  Rock: '#B8A038', Ghost: '#705898', Dragon: '#7038F8', Dark: '#705848',
  Steel: '#B8B8D0', Fairy: '#EE99AC',
};

window.CAT_META = {
  rival: { label: 'Rival', color: '#dc2626', bg: '#fee2e2', icon: '⚔️' },
  gym: { label: 'Líder de Ginásio', color: '#15803d', bg: '#dcfce7', icon: '🏅' },
  villain: { label: 'Team Rocket', color: '#581c87', bg: '#f3e8ff', icon: '🦹' },
  e4: { label: 'Elite dos Quatro', color: '#b45309', bg: '#fef3c7', icon: '👑' },
  champ: { label: 'Campeão', color: '#d97706', bg: '#fef3c7', icon: '🏆' },
};
