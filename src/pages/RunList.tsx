import { useEffect } from "react";
import { SERIES, Run } from "../data/constants";

interface RunListProps {
  seriesId: string;
  setPage: (page: string) => void;
  setActiveRun: (run: Run) => void;
}

export const RunList = ({ seriesId, setPage, setActiveRun }: RunListProps) => {
  const series = SERIES.find((s) => s.id === seriesId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!series) return null;

  return (
    <div>
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
              fontSize: "0.32rem",
              color: "rgba(255,255,255,.38)",
              background: "none",
              border: "none",
              cursor: "pointer",
              marginBottom: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: 0,
              transition: "color .2s, transform .15s",
              letterSpacing: "1px",
            }}
            onClick={() => setPage("home")}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--g300)";
              (e.currentTarget as HTMLElement).style.transform = "translateX(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.38)";
              (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
            }}
          >
            ← Séries
          </button>
          <h1
            style={{
              fontFamily: "var(--sans)",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "0.5rem",
              letterSpacing: "-0.5px",
            }}
          >
            {series.emoji}{" "}
            <em style={{ fontStyle: "normal", color: "var(--g300)" }}>
              {series.title}
            </em>
          </h1>
          <p style={{ color: "rgba(255,255,255,.45)", fontSize: "0.9rem" }}>
            {series.runs.length} {series.runs.length === 1 ? "run" : "runs"} •{" "}
            {series.runs.filter((r) => r.status === "active").length > 0
              ? "Em andamento"
              : "Encerrada"}
          </p>
        </div>
      </div>

      {/* Run cards */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {series.runs.map((run) => {
            const isActive = run.status === "active";
            const isDead = run.status === "dead";
            const earnedBadges = run.badges.filter((b) => b.earned);

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
                {/* Top bar */}
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--pixel)",
                        fontSize: "0.42rem",
                        color: "var(--ink)",
                        letterSpacing: "1px",
                      }}
                    >
                      {run.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--pixel)",
                        fontSize: "0.28rem",
                        padding: "0.3rem 0.65rem",
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

                  <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "var(--pixel)",
                        fontSize: "0.28rem",
                        background: "var(--ink)",
                        color: "var(--g300)",
                        padding: "0.3rem 0.65rem",
                        borderRadius: "100px",
                      }}
                    >
                      {run.episodeCount} EP
                    </span>
                    {earnedBadges.length > 0 && (
                      <span
                        style={{
                          fontFamily: "var(--pixel)",
                          fontSize: "0.28rem",
                          color: "#92400e",
                          background: "#fef9c3",
                          border: "1px solid #fde047",
                          padding: "0.3rem 0.65rem",
                          borderRadius: "100px",
                        }}
                      >
                        {earnedBadges.map((b) => b.emoji).join(" ")}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
