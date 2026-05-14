export const RomSection = () => {
  const features = [
    ["✨", "NOVOS POKÉMON", "Fakemon, formas regionais, ou Pokémon de gerações futuras"],
    ["⚔️", "NOVAS MECÂNICAS", "Mega Evoluções, movimentos customizados, stats rebalanceados"],
    ["🔥", "DIFICULDADE ELEVADA", "IA inteligente, limite de nível, itens restritos"],
    ["🗺️", "NOVAS REGIÕES", "Mapas, cidades e histórias completamente inéditos"],
    ["🎨", "REFORMULAÇÃO VISUAL", "Novos sprites, tiles, músicas — às vezes irreconhecível"],
  ];

  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, var(--g50) 100%)",
      }}
    >
      <div className="section-inner">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <span className="section-eyebrow">JOGOS MODIFICADOS</span>
            <div className="section-divider" />
            <h2 className="section-title">
              O que são <em>ROM Hacks</em>?
            </h2>
            <p style={{ fontSize: "0.98rem", color: "var(--ink2)", lineHeight: 1.85, marginBottom: "1.1rem" }}>
              ROM hacks são <strong>modificações feitas por fãs</strong> de jogos
              Pokémon existentes. Usando o jogo original como base, fãs
              reconstroem e reimaginam a experiência do zero.
            </p>
            <p style={{ fontSize: "0.98rem", color: "var(--ink2)", lineHeight: 1.85, marginBottom: "1.1rem" }}>
              Alguns são simples rebalanceamentos. Outros são{" "}
              <strong>jogos completamente novos</strong> com histórias,
              personagens e regiões originais. A comunidade faz isso há mais de 20
              anos.
            </p>
            <p style={{ fontSize: "0.98rem", color: "var(--ink2)", lineHeight: 1.85, marginBottom: "1.1rem" }}>
              São gratuitos, feitos com carinho, e frequentemente{" "}
              <strong>mais difíceis que os jogos oficiais</strong> — perfeitos
              para runs Nuzlocke.
            </p>
          </div>

          <div
            style={{
              background: "var(--g900)",
              borderRadius: "var(--r-xl)",
              padding: "2rem",
              border: "1.5px solid var(--g700)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                borderRadius: "var(--r-xl)",
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.04) 3px, rgba(0,0,0,.04) 4px)",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.5rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#dc2626",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#d97706",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#16a34a",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.35rem",
                  color: "rgba(255,255,255,.28)",
                  marginLeft: "auto",
                  letterSpacing: "1px",
                }}
              >
                O QUE PODEM INCLUIR
              </span>
            </div>

            {features.map(([icon, label, desc]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "var(--r-md)",
                  background: "rgba(255,255,255,.04)",
                  marginBottom: "0.6rem",
                  borderLeft: "2px solid var(--g500)",
                  transition: "background .2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,.04)";
                }}
              >
                <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: "0.05rem" }}>
                  {icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.36rem",
                      color: "var(--g300)",
                      marginBottom: "0.3rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,.42)",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
