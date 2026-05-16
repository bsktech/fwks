import { useEffect } from "react";
import { SERIES, Run } from "../data/constants";

interface RunListProps {
  seriesId: string;
  setPage: (page: string) => void;
  setActiveRun: (run: Run) => void;
  onBack: () => void;
}

export const RunList = ({ seriesId, setPage, setActiveRun, onBack }: RunListProps) => {
  const series = SERIES.find((s) => s.id === seriesId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!series) return null;

  return (
    <div style={{ paddingTop: "58px", flex: 1 }}>
      {/* Header — capa como fundo desfocado */}
      <div style={{ position: "relative", minHeight: "260px", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        {/* fundo desfocado */}
        {(series as any).coverImg && (
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${(series as any).coverImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px) brightness(.4)",
            transform: "scale(1.06)",
          }} />
        )}
        {/* overlay gradiente */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(13,43,20,.98) 0%, rgba(13,43,20,.55) 55%, rgba(0,0,0,.25) 100%)",
        }} />

        {/* botão voltar */}
        <button
          style={{
            position: "absolute",
            top: "1.5rem",
            left: "2.5rem",
            fontFamily: "var(--pixel)",
            fontSize: "0.42rem",
            color: "rgba(255,255,255,.65)",
            background: "rgba(0,0,0,.3)",
            border: "1px solid rgba(255,255,255,.18)",
            borderRadius: "var(--r-sm)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.5rem 0.9rem",
            transition: "color .2s, border-color .2s",
            letterSpacing: "1px",
            zIndex: 1,
          }}
          onClick={onBack}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--g300)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--g300)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.65)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.18)";
          }}
        >
          ← Séries
        </button>

        {/* conteúdo do header */}
        <div style={{ position: "relative", zIndex: 1, padding: "2.5rem", maxWidth: "860px", width: "100%", margin: "0 auto", display: "flex", alignItems: "flex-end", gap: "2rem" }}>
          {(series as any).coverImg && (
            <img
              src={(series as any).coverImg}
              alt={series.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "var(--r-md)",
                border: "2px solid rgba(74,222,128,.3)",
                flexShrink: 0,
                boxShadow: "0 4px 24px rgba(0,0,0,.6)",
              }}
            />
          )}
          <div>
            <h1 style={{ fontFamily: "var(--sans)", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", marginBottom: "0.5rem", textShadow: "0 2px 12px rgba(0,0,0,.5)" }}>
              {series.title.replace("Nuzlocke", "").trim()}{" "}
              <em style={{ fontStyle: "normal", color: "var(--g300)" }}>Nuzlocke</em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: "rgba(255,255,255,.65)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--g400)", display: "inline-block", boxShadow: "0 0 6px var(--g400)" }} />
              <span>{series.runs.length} {series.runs.length === 1 ? "temporada" : "temporadas"}</span>
              <span>·</span>
              <span>{series.runs.filter((r) => r.status === "active").length > 0 ? "Em andamento" : "Encerrada"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Run cards */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {series.runs.map((run) => {
            const isActive = run.status === "active";
            const isDead = run.status === "dead";

            return (
              <div
                key={run.id}
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--r-xl)",
                  border: isActive
                    ? "1.5px solid var(--g400)"
                    : isDead
                      ? "1.5px solid #fca5a5"
                      : "1.5px solid var(--rule)",
                  overflow: "hidden",
                  boxShadow: isActive ? "var(--shadow-green)" : "var(--shadow-sm)",
                  cursor: "pointer",
                  transition: "transform .2s, box-shadow .2s",
                }}
                onClick={() => {
                  setActiveRun(run);
                  setPage("detail");
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = isActive
                    ? "var(--shadow-green-lg)"
                    : "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = isActive
                    ? "var(--shadow-green)"
                    : "var(--shadow-sm)";
                }}
              >
                <div
                  style={{
                    height: "4px",
                    background: isActive
                      ? "linear-gradient(90deg, var(--g500), var(--g300))"
                      : isDead
                        ? "linear-gradient(90deg, #dc2626, #f87171)"
                        : "linear-gradient(90deg, #3b82f6, #93c5fd)",
                  }}
                />

                <div style={{ padding: "1.75rem" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--pixel)",
                        fontSize: "0.55rem",
                        color: "var(--ink)",
                        letterSpacing: "1px",
                        display: "block",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {run.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--pixel)",
                        fontSize: "0.45rem",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "100px",
                        border: "1px solid",
                        color: isActive ? "#15803d" : isDead ? "#dc2626" : "#1d4ed8",
                        background: isActive ? "#dcfce7" : isDead ? "#fee2e2" : "#dbeafe",
                        borderColor: isActive ? "#86efac" : isDead ? "#fca5a5" : "#93c5fd",
                      }}
                    >
                      {isActive ? "▶ EM ANDAMENTO" : isDead ? "💀 ENCERRADA" : "✓ COMPLETA"}
                    </span>
                  </div>

                  {isDead && run.deathNote && (
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "#dc2626",
                        marginBottom: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {run.deathNote}
                    </p>
                  )}

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--ink3)",
                      marginBottom: "1.1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {run.progress}
                  </p>

                  <span
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.45rem",
                      background: "var(--ink)",
                      color: "var(--g300)",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "100px",
                    }}
                  >
                    {run.episodeCount} {run.episodeCount === 1 ? "EP" : "EPS"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
