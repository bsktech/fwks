import { SERIES } from "../data/constants";

interface SeriesSectionProps {
  setPage: (page: string) => void;
  setActiveSeries: (series: (typeof SERIES)[0]) => void;
}

export const SeriesSection = ({ setPage, setActiveSeries }: SeriesSectionProps) => {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">
        <span className="section-eyebrow">PLAYTHROUGHS ATIVOS</span>
        <div className="section-divider" />
        <h2 className="section-title">
          As <em>Séries</em>
        </h2>
        <p className="section-lead">
          Cada série é um playthrough completo — documentado, registrado e
          vivido. Escolha uma e acompanhe a aventura do início ao (torçamos)
          fim.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERIES.map((s) => (
            <div
              key={s.id}
              style={{
                background: "var(--card)",
                borderRadius: "var(--r-xl)",
                border: "1.5px solid var(--rule)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                transition: "transform .25s, box-shadow .25s, border-color .25s",
                cursor: "pointer",
              }}
              onClick={() => {
                setActiveSeries(s);
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "var(--shadow-green-lg)";
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
                  width: "100%",
                  aspectRatio: "16/9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  background: s.thumb,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background .2s",
                  }}
                  className="series-thumb-overlay"
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.92)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      opacity: 0,
                      transform: "scale(.8)",
                      transition: "opacity .2s, transform .2s",
                      boxShadow: "0 2px 12px rgba(0,0,0,.2)",
                    }}
                    className="series-play"
                  >
                    ▶
                  </div>
                </div>
              </div>
              <div style={{ padding: "1.6rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--pixel)",
                    fontSize: "0.3rem",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "100px",
                    marginBottom: "0.8rem",
                    letterSpacing: "1px",
                    border: "1px solid",
                    color: s.typeColor,
                    background: s.typeBg,
                    borderColor: s.typeBorder,
                  }}
                >
                  {s.type}
                </span>
                <h3
                  style={{
                    fontSize: "1.08rem",
                    fontWeight: 800,
                    color: "var(--ink)",
                    marginBottom: "0.6rem",
                    lineHeight: 1.35,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.87rem",
                    color: "var(--ink3)",
                    lineHeight: 1.7,
                    marginBottom: "1.2rem",
                  }}
                >
                  {s.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.3rem",
                      background: "var(--ink)",
                      color: "var(--g300)",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "100px",
                    }}
                  >
                    {s.runs.length} {s.runs.length === 1 ? "RUN" : "RUNS"}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.3rem",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "100px",
                      border: "1px solid",
                      color: "#15803d",
                      background: "#dcfce7",
                      borderColor: "#86efac",
                    }}
                  >
                    {s.runs.find((r) => r.id === s.activeRunId)?.status === "active" ? "EM ANDAMENTO" : "ENCERRADA"}
                  </span>
                </div>
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    fontFamily: "var(--pixel)",
                    fontSize: "0.4rem",
                    background: "var(--g500)",
                    color: "#fff",
                    border: "none",
                    padding: "0.9rem 1rem",
                    cursor: "pointer",
                    borderRadius: "var(--r-md)",
                    letterSpacing: "1px",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--g400)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--g500)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  ▶ Ver Série
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
