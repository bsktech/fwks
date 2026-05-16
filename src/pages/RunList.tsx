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
      {/* Header */}
      <div
        style={{
          padding: "3.5rem 2rem 3rem",
          background: "linear-gradient(160deg, var(--g900) 0%, #0a2218 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50px",
            background: "linear-gradient(to bottom, transparent, var(--bg))",
          }}
        />
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <button
            style={{
              fontFamily: "var(--pixel)",
              fontSize: "0.5rem",
              color: "var(--g300)",
              background: "none",
              border: "1px solid rgba(74,222,128,.25)",
              borderRadius: "var(--r-sm)",
              cursor: "pointer",
              marginBottom: "2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1rem",
              transition: "color .2s, border-color .2s, transform .15s",
              letterSpacing: "1px",
            }}
            onClick={onBack}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--g300)";
              (e.currentTarget as HTMLElement).style.transform = "translateX(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,.25)";
              (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
            }}
          >
            ← Séries
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {(series as any).coverImg && (
              <img
                src={(series as any).coverImg}
                alt={series.title}
                style={{
                  width: "72px",
                  height: "72px",
                  objectFit: "cover",
                  borderRadius: "var(--r-md)",
                  border: "2px solid rgba(74,222,128,.2)",
                  flexShrink: 0,
                }}
              />
            )}
            <div>
              <h1
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                }}
              >
                <em style={{ fontStyle: "normal", color: "var(--g300)" }}>
                  {series.title}
                </em>
              </h1>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: "0.9rem", marginTop: "0.75rem" }}>
                {series.runs.length} {series.runs.length === 1 ? "temporada" : "temporadas"} •{" "}
                {series.runs.filter((r) => r.status === "active").length > 0
                  ? "Em andamento"
                  : "Encerrada"}
              </p>
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
