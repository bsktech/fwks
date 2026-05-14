export const NuzlockeSection = () => {
  const cards = [
    {
      icon: "💀",
      bar: "linear-gradient(90deg,#dc2626,#f87171)",
      label: "REGRA 01",
      title: "Morte Permanente",
      text: "Se um Pokémon desmaiar na batalha, ele está morto para sempre. Sem reviver, sem segunda chance. Você precisa soltá-lo e se despedir. Sim, você vai chorar.",
      tag: "REGRA MAIS CRUEL",
    },
    {
      icon: "🎲",
      bar: "linear-gradient(90deg,#16a34a,#4ade80)",
      label: "REGRA 02",
      title: "Primeiro Encontro",
      text: "Em cada nova rota, você só pode capturar o primeiro Pokémon que encontrar. Se ele desmaiar antes de você capturar... azar. Siga em frente.",
      tag: "SEM SEGUNDA CHANCE",
    },
    {
      icon: "❤️",
      bar: "linear-gradient(90deg,#9333ea,#c084fc)",
      label: "OPCIONAL",
      title: "Dar Apelidos",
      text: "A maioria dos jogadores dá apelidos. Isso os torna reais — e faz suas inevitáveis mortes serem 10x mais devastadoras. Altamente recomendado.",
      tag: "MAS ESSENCIAL",
    },
    {
      icon: "🏆",
      bar: "linear-gradient(90deg,#d97706,#fbbf24)",
      label: "OBJETIVO",
      title: "Vencer o Jogo",
      text: "Vencer os 8 Líderes de Ginásio e a Elite dos Quatro sem perder todo o time. Simples na teoria. De partir a alma na prática. A alegria está na jornada.",
      tag: "CONDIÇÃO DE VITÓRIA",
    },
  ];

  return (
    <section className="section nuz-section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">
        <span className="section-eyebrow">REGRAS DO JOGO</span>
        <div className="section-divider" />
        <h2 className="section-title">
          O que é um <em>Nuzlocke</em>?
        </h2>
        <p className="section-lead">
          Nunca ouviu falar? Sem problema. É basicamente Pokémon no modo pesadelo
          — regras autoimposta que fazem cada batalha ser genuinamente
          aterrorizante.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {cards.map((c) => (
            <div
              key={c.label}
              style={{
                background: "var(--card)",
                borderRadius: "var(--r-xl)",
                border: "1.5px solid var(--rule)",
                padding: "2rem 1.75rem",
                position: "relative",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                transition: "transform .25s, box-shadow .25s, border-color .25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "var(--shadow-green)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--g200)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "var(--shadow-sm)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--rule)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: c.bar,
                }}
              />
              <span style={{ fontSize: "2rem", marginBottom: "1.2rem", display: "block" }}>
                {c.icon}
              </span>
              <span
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.33rem",
                  letterSpacing: "2px",
                  color: "var(--ink3)",
                  marginBottom: "0.5rem",
                  display: "block",
                }}
              >
                {c.label}
              </span>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ink)", marginBottom: "0.7rem", lineHeight: 1.35 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--ink3)", lineHeight: 1.75 }}>
                {c.text}
              </p>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--pixel)",
                  fontSize: "0.3rem",
                  padding: "0.35rem 0.65rem",
                  borderRadius: "100px",
                  marginTop: "1rem",
                  background: "var(--g100)",
                  color: "var(--g700)",
                  border: "1px solid var(--g200)",
                }}
              >
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
