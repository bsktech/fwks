export const AboutSection = () => {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, var(--g900) 0%, #0a2218 100%)",
        color: "#fff",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "4rem",
          alignItems: "start",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src="/logo.png"
            alt="Fwks logo"
            style={{
              width: "148px",
              height: "148px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 20px rgba(74,222,128,.25))",
            }}
          />
          <div
            style={{
              fontFamily: "var(--pixel)",
              fontSize: "0.5rem",
              color: "var(--g300)",
              letterSpacing: "2px",
            }}
          >
            Fwks
          </div>
          <div
            style={{
              fontFamily: "var(--pixel)",
              fontSize: "0.32rem",
              color: "rgba(255,255,255,.28)",
            }}
          >
            DESDE 2026
          </div>
        </div>

        <div>
          <h2
            style={{
              fontFamily: "var(--sans)",
              fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
              fontWeight: 800,
              color: "var(--g200)",
              marginBottom: "1.2rem",
              lineHeight: 1.3,
              letterSpacing: "-0.3px",
            }}
          >
            Ei, sou o treinador por trás do canal!
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.6)",
              fontSize: "0.97rem",
              lineHeight: 1.9,
              marginBottom: "1rem",
            }}
          >
            A ideia aqui é simples: eu gosto de jogar Pokémon e, já que vou
            jogar de qualquer jeito, resolvi gravar. Pra me divertir jogando e
            pra divertir quem tá do outro lado da tela.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,.6)",
              fontSize: "0.97rem",
              lineHeight: 1.9,
              marginBottom: "1rem",
            }}
          >
            O foco é Nuzlocke e runs desafiadoras, com narração na hora certa.
            Se você curte Pokémon e curte desafio, cola junto.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <button
              style={{
                fontFamily: "var(--pixel)",
                fontSize: "0.37rem",
                padding: "0.7rem 1.1rem",
                borderRadius: "var(--r-md)",
                cursor: "pointer",
                border: "1.5px solid",
                transition: "transform .15s, box-shadow .15s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#dc2626",
                color: "#fff",
                borderColor: "#dc2626",
                boxShadow: "0 3px 0 #991b1b",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              ▶ YouTube
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
