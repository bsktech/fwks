import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERIES } from "../data/constants";
import { SeriesHeader } from "../components/SeriesHeader";

export const RunList = () => {
  const { seriesId } = useParams<{ seriesId: string }>();
  const navigate = useNavigate();
  const series = SERIES.find((s) => s.id === seriesId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!series) return null;

  const onBack = () => navigate("/#series");

  return (
    <div style={{ paddingTop: "58px", flex: 1 }}>
      <SeriesHeader
        coverImg={(series as any).coverImg}
        title={series.title}
        meta={`${series.runs.length} ${series.runs.length === 1 ? "temporada" : "temporadas"} · ${series.runs.filter((r) => r.status === "active").length > 0 ? "Em andamento" : "Encerrada"}`}
        backLabel="Séries"
        onBack={onBack}
      />

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
                  navigate(`/series/${series.id}/runs/${run.id}`);
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
