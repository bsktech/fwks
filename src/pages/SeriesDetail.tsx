import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERIES } from "../data/constants";
import { SeriesHeader } from "../components/SeriesHeader";

export const SeriesDetail = () => {
  const { seriesId, runId } = useParams<{ seriesId: string; runId: string }>();
  const navigate = useNavigate();
  const [tab, setTab] = useState("videos");
  const [activeVid, setActiveVid] = useState(0);
  const [hoverLoc, setHoverLoc] = useState<string | null>(null);

  const series = SERIES.find((s) => s.id === seriesId);
  const run = series?.runs.find((r) => r.id === runId);
  if (!series || !run) return null;

  const videos = run.videos;
  const locById = Object.fromEntries(run.locations.map((l) => [l.id, l]));

  return (
    <div style={{ paddingTop: "58px", flex: 1 }}>
      <SeriesHeader
        coverImg={(series as any).coverImg}
        title={series.title}
        meta={run.label}
        description={series.desc}
        backLabel={series.title}
        onBack={() => navigate(`/series/${series.id}`)}
      />

      <div
        style={{
          background: "var(--surface)",
          borderBottom: "1.5px solid var(--rule)",
          position: "sticky",
          top: "58px",
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            padding: "1rem 2rem",
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {[
            ["videos", "▶", "Vídeos"],
            ["timeline", "📜", "Diário"],
            ["team", "⚡", "Time"],
            ["rules", "📋", "Regras"],
          ].map(([id, icon, label]) => {
            const isActive = tab === id;
            return (
              <button
                key={id}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  padding: "0.7rem 1.3rem",
                  borderRadius: "100px",
                  border: "1.5px solid transparent",
                  background: isActive ? "var(--g500)" : "transparent",
                  color: isActive ? "#fff" : "var(--ink3)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  whiteSpace: "nowrap",
                  boxShadow: isActive ? "0 2px 8px rgba(22,163,74,.3)" : "none",
                  transition: "background .2s, color .2s, box-shadow .2s",
                }}
                onClick={() => setTab(id)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background = "var(--g50)";
                    (e.currentTarget as HTMLElement).style.color = "var(--g600)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink3)";
                  }
                }}
              >
                <span style={{ fontSize: "1rem" }}>{icon}</span>
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "3rem 2rem" }}>
        {/* Videos Tab */}
        {tab === "videos" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) 320px",
              gap: "1.5rem",
              alignItems: "start",
            }}
          >
            {/* Player */}
            <div
              style={{
                background: "#090909",
                borderRadius: "var(--r-xl)",
                overflow: "hidden",
                aspectRatio: "16/9",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #1c1c1c",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3.5rem", opacity: 0.55 }}>🎮</div>
                <p
                  style={{
                    fontFamily: "var(--pixel)",
                    fontSize: "0.36rem",
                    color: "rgba(255,255,255,.28)",
                    lineHeight: 2.2,
                    maxWidth: "380px",
                  }}
                >
                  {videos[activeVid].ep} — {videos[activeVid].title}
                  {"\n\n"}
                  Adicione o embed do YouTube aqui:{"\n"}
                  &lt;iframe src="https://youtube.com/embed/ID" /&gt;
                </p>
              </div>
            </div>

            {/* Lista lateral */}
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "var(--r-lg)",
                border: "1.5px solid var(--rule)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  padding: "0.9rem 1.1rem",
                  borderBottom: "1.5px solid var(--rule)",
                  fontFamily: "var(--pixel)",
                  fontSize: "0.42rem",
                  color: "var(--g600)",
                  letterSpacing: "2px",
                  background: "var(--g50)",
                }}
              >
                EPISÓDIOS
              </div>
              <div>
                {videos.map((v, i) => {
                  const isActive = activeVid === i;
                  return (
                    <div
                      key={i}
                      onClick={() => setActiveVid(i)}
                      style={{
                        display: "flex",
                        gap: "0.85rem",
                        alignItems: "center",
                        padding: "0.8rem 1rem",
                        paddingLeft: isActive ? "calc(1rem - 3px)" : "1rem",
                        borderLeft: isActive ? "3px solid var(--g400)" : "3px solid transparent",
                        borderBottom: i < videos.length - 1 ? "1px solid #f3f4f6" : "none",
                        background: isActive ? "linear-gradient(90deg, #dcfce7, #f0fdf4)" : "transparent",
                        cursor: "pointer",
                        transition: "background .15s",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) (e.currentTarget as HTMLElement).style.background = "var(--g50)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "38px",
                          borderRadius: "var(--r-sm)",
                          background: "var(--ink)",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.1rem",
                          position: "relative",
                        }}
                      >
                        {v.emoji}
                        <span
                          style={{
                            position: "absolute",
                            right: "3px",
                            bottom: "2px",
                            color: "#fff",
                            fontSize: "0.45rem",
                            background: isActive ? "var(--g500)" : "rgba(0,0,0,.7)",
                            padding: "1px 4px",
                            borderRadius: "3px",
                          }}
                        >
                          ▶
                        </span>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h4
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "var(--ink)",
                            marginBottom: "0.15rem",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {v.title}
                        </h4>
                        <span
                          style={{
                            fontFamily: "var(--pixel)",
                            fontSize: "0.3rem",
                            color: "var(--ink3)",
                          }}
                        >
                          {v.ep}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {tab === "timeline" && (
          <div>
            {/* Badges strip */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                background: "var(--surface)",
                borderRadius: "var(--r-xl)",
                padding: "1.5rem 2rem",
                border: "1.5px solid var(--rule)",
                marginBottom: "2.5rem",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {run.badges.map((b) => (
                <div
                  key={b.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.85rem 0.9rem",
                    borderRadius: "var(--r-md)",
                    minWidth: "84px",
                    transition: "transform .2s",
                    cursor: "default",
                    background: b.earned ? "#fef9c3" : "var(--surface)",
                    border: b.earned ? "1.5px solid #fde047" : "1.5px solid var(--rule)",
                    opacity: b.earned ? 1 : 0.45,
                    filter: b.earned ? "none" : "grayscale(1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  {b.id ? (
                    <img
                      src={`/badges/${b.id}.png`}
                      alt={b.name}
                      title={b.name}
                      style={{ width: "56px", height: "56px", objectFit: "contain" }}
                    />
                  ) : (
                    <span style={{ fontSize: "1.5rem" }}>{b.emoji}</span>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.3rem",
                      color: "var(--ink2)",
                      textAlign: "center",
                      lineHeight: 1.4,
                      letterSpacing: "1px",
                    }}
                  >
                    {b.name}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                fontFamily: "var(--pixel)",
                fontSize: "0.42rem",
                color: "var(--ink2)",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
              }}
            >
              DIÁRIO DE AVENTURA — POKÉMON RED ++ NUZLOCKE TEMPORADA 1
              <div
                style={{
                  flex: 1,
                  height: "1.5px",
                  background: "var(--rule)",
                  borderRadius: "1px",
                }}
              />
            </div>
            <div style={{ position: "relative", paddingLeft: "3rem" }}>
              <div
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "0.5rem",
                  bottom: 0,
                  width: "2px",
                  background: "linear-gradient(to bottom, var(--g400), var(--g200), transparent)",
                  borderRadius: "1px",
                }}
              />
              {run.timeline.map((ev) => (
                <div key={ev.id} style={{ position: "relative", marginBottom: "2.25rem" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "-2.35rem",
                      top: "0.4rem",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      border: "2.5px solid var(--surface)",
                      zIndex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.65rem",
                      background: ev.nodeColor,
                      boxShadow: `0 0 0 2px ${ev.nodeColor}40`,
                    }}
                  >
                    {ev.emoji}
                  </div>
                  <div
                    style={{
                      background: "var(--surface)",
                      borderRadius: "var(--r-lg)",
                      padding: "1.4rem 1.6rem",
                      border: "1.5px solid var(--rule)",
                      boxShadow: "var(--shadow-sm)",
                      transition: "box-shadow .2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "center",
                        marginBottom: "0.7rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--pixel)",
                          fontSize: "0.3rem",
                          background: "var(--ink)",
                          color: "var(--g300)",
                          padding: "0.28rem 0.6rem",
                          borderRadius: "100px",
                        }}
                      >
                        {ev.location}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--pixel)",
                          fontSize: "0.3rem",
                          color: "var(--ink3)",
                        }}
                      >
                        {ev.ep}
                      </span>
                    </div>
                    <h4 style={{ fontWeight: 800, fontSize: "0.97rem", color: "var(--ink)", marginBottom: "0.45rem" }}>
                      {ev.title}
                    </h4>
                    <p style={{ fontSize: "0.86rem", color: "var(--ink3)", lineHeight: 1.75 }}>
                      {ev.desc}
                    </p>
                    {ev.battle && (
                      <div
                        style={{
                          marginTop: "1.1rem",
                          background: ev.battle.result === "win" ? "var(--g50)" : "#fef2f2",
                          border: `1.5px solid ${ev.battle.result === "win" ? "var(--g300)" : "#fca5a5"}`,
                          borderRadius: "var(--r-md)",
                          padding: "0.95rem 1rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.7rem",
                            marginBottom: "0.85rem",
                          }}
                        >
                          {ev.battle.trainerImage && (
                            <div
                              style={{
                                width: "44px",
                                height: "44px",
                                borderRadius: "50%",
                                background: "var(--surface)",
                                border: `1.5px solid ${ev.battle.result === "win" ? "var(--g400)" : "#fca5a5"}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                flexShrink: 0,
                              }}
                            >
                              <img
                                src={ev.battle.trainerImage}
                                alt={ev.battle.trainerName}
                                style={{
                                  width: "120%",
                                  height: "120%",
                                  objectFit: "contain",
                                  imageRendering: "pixelated",
                                }}
                              />
                            </div>
                          )}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                fontFamily: "var(--pixel)",
                                fontSize: "0.32rem",
                                color: "var(--ink3)",
                                letterSpacing: "1.5px",
                                marginBottom: "0.2rem",
                              }}
                            >
                              BATALHA vs
                            </div>
                            <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--ink)" }}>
                              {ev.battle.trainerName}
                            </div>
                          </div>
                          <span
                            style={{
                              fontFamily: "var(--pixel)",
                              fontSize: "0.34rem",
                              letterSpacing: "1.5px",
                              padding: "0.4rem 0.7rem",
                              borderRadius: "100px",
                              background: ev.battle.result === "win" ? "var(--g600)" : "#dc2626",
                              color: "#fff",
                            }}
                          >
                            {ev.battle.result === "win" ? "✓ VITÓRIA" : "✗ DERROTA"}
                          </span>
                        </div>

                        {(["opponent", "mine"] as const).map((side) => {
                          const list = ev.battle![side];
                          if (list.length === 0) return null;
                          const isOpp = side === "opponent";
                          return (
                            <div
                              key={side}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                                padding: "0.5rem 0",
                                borderTop: "1px dashed var(--rule)",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "var(--pixel)",
                                  fontSize: "0.3rem",
                                  color: isOpp ? "var(--ink2)" : "var(--g700)",
                                  letterSpacing: "1.5px",
                                  minWidth: "84px",
                                }}
                              >
                                {isOpp ? "OPONENTE" : "EU USEI"}
                              </span>
                              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                                {list.map((p, i) => (
                                  <div
                                    key={`${p.species}-${i}`}
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: "0.35rem",
                                      background: "var(--surface)",
                                      border: "1.5px solid var(--rule)",
                                      borderRadius: "100px",
                                      padding: "0.2rem 0.65rem 0.2rem 0.25rem",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "26px",
                                        height: "26px",
                                        borderRadius: "50%",
                                        background: "var(--g50)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        flexShrink: 0,
                                      }}
                                    >
                                      {p.image ? (
                                        <img
                                          src={p.image}
                                          alt={p.species}
                                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                        />
                                      ) : (
                                        <span style={{ fontSize: "0.9rem" }}>{p.emoji}</span>
                                      )}
                                    </div>
                                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--ink)" }}>
                                      {p.species}
                                    </span>
                                    <span
                                      style={{
                                        fontFamily: "var(--pixel)",
                                        fontSize: "0.3rem",
                                        color: "var(--ink3)",
                                        letterSpacing: "0.5px",
                                      }}
                                    >
                                      Nv {p.level}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {(ev.catches.length > 0 || ev.deaths.length > 0 || ev.badge) && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "1.1rem" }}>
                        {ev.catches.length > 0 && (
                          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                            <span style={{ fontFamily: "var(--pixel)", fontSize: "0.3rem", color: "var(--g600)", minWidth: "80px" }}>
                              CAPTURA
                            </span>
                            {ev.catches.map((c) => (
                              <span
                                key={c}
                                style={{
                                  fontSize: "0.88rem",
                                  fontWeight: 600,
                                  background: "var(--g100)",
                                  color: "var(--g700)",
                                  padding: "0.35rem 0.8rem",
                                  borderRadius: "100px",
                                  border: "1.5px solid var(--g300)",
                                }}
                              >
                                🟢 {c}
                              </span>
                            ))}
                          </div>
                        )}
                        {ev.deaths.length > 0 && (
                          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                            <span style={{ fontFamily: "var(--pixel)", fontSize: "0.3rem", color: "#dc2626", minWidth: "80px" }}>
                              CAÍDO
                            </span>
                            {ev.deaths.map((d) => (
                              <span
                                key={d}
                                style={{
                                  fontSize: "0.88rem",
                                  fontWeight: 600,
                                  background: "#fee2e2",
                                  color: "#dc2626",
                                  padding: "0.35rem 0.8rem",
                                  borderRadius: "100px",
                                  border: "1.5px solid #fca5a5",
                                }}
                              >
                                💀 {d}
                              </span>
                            ))}
                          </div>
                        )}
                        {ev.badge && (
                          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                            <span style={{ fontFamily: "var(--pixel)", fontSize: "0.3rem", color: "#b45309", minWidth: "80px" }}>
                              INSÍGNIA
                            </span>
                            <span
                              style={{
                                fontSize: "0.88rem",
                                fontWeight: 600,
                                background: "#fef9c3",
                                color: "#92400e",
                                padding: "0.35rem 0.8rem",
                                borderRadius: "100px",
                                border: "1.5px solid #fde047",
                              }}
                            >
                              {ev.badge.emoji} Insígnia {ev.badge.name}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map Tab */}
        {tab === "map" && (
          <div>
            <div
              style={{
                background: "linear-gradient(180deg, #1e3a8a 0%, #1e40af 100%)",
                borderRadius: "var(--r-xl)",
                padding: "2rem",
                border: "1.5px solid var(--g700)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.42rem",
                  color: "#fff",
                  letterSpacing: "3px",
                  textAlign: "center",
                  marginBottom: "1.5rem",
                }}
              >
                ◆ MAPA DE KANTO ◆
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "100 / 100",
                  borderRadius: "var(--r-lg)",
                  overflow: "hidden",
                  background: "#3b82f6",
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                  preserveAspectRatio="none"
                >
                  {/* Land mass */}
                  <path
                    d="M 18 28 L 78 28 L 92 32 L 94 50 L 92 62 L 86 70 L 76 78 L 68 86 L 30 92 L 18 86 L 14 70 L 14 50 L 12 38 Z"
                    fill="#65a30d"
                    stroke="#3f6212"
                    strokeWidth="0.4"
                  />
                  <path
                    d="M 14 90 L 30 96 L 14 96 Z"
                    fill="#65a30d"
                    stroke="#3f6212"
                    strokeWidth="0.4"
                  />
                  {/* Routes (lines connecting locations) */}
                  {run.routes.map(([a, b], i) => {
                    const la = locById[a];
                    const lb = locById[b];
                    if (!la || !lb) return null;
                    const visited = la.visited && lb.visited;
                    return (
                      <line
                        key={i}
                        x1={la.x}
                        y1={la.y}
                        x2={lb.x}
                        y2={lb.y}
                        stroke={visited ? "#facc15" : "rgba(255,255,255,.45)"}
                        strokeWidth="0.6"
                        strokeDasharray={visited ? "0" : "1 1"}
                        strokeLinecap="round"
                      />
                    );
                  })}
                </svg>

                {/* Location pins */}
                {run.locations.map((loc) => {
                  const isCity = loc.type === "city" || loc.type === "town";
                  const size = isCity ? 24 : 18;
                  return (
                    <div
                      key={loc.id}
                      style={{
                        position: "absolute",
                        left: `${loc.x}%`,
                        top: `${loc.y}%`,
                        transform: "translate(-50%, -50%)",
                        zIndex: hoverLoc === loc.id ? 10 : 1,
                      }}
                      onMouseEnter={() => setHoverLoc(loc.id)}
                      onMouseLeave={() => setHoverLoc(null)}
                    >
                      <div
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          borderRadius: isCity ? "50%" : "4px",
                          background: loc.visited
                            ? isCity
                              ? loc.gym
                                ? "#fbbf24"
                                : "#fff"
                              : "rgba(255,255,255,.85)"
                            : isCity
                              ? "rgba(255,255,255,.35)"
                              : "rgba(255,255,255,.2)",
                          border: `2px solid ${loc.visited ? "#1e293b" : "rgba(30,41,59,.5)"}`,
                          boxShadow: loc.visited ? "0 2px 6px rgba(0,0,0,.3)" : "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.7rem",
                          transition: "transform .15s",
                          transform: hoverLoc === loc.id ? "scale(1.25)" : "scale(1)",
                        }}
                      >
                        {loc.gym && loc.visited && "🏟️"}
                      </div>

                      {/* Captured pokemon icons floating around the pin */}
                      {loc.caught.length > 0 && (
                        <div
                          style={{
                            position: "absolute",
                            top: `-${size / 2 + 14}px`,
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            gap: "2px",
                          }}
                        >
                          {loc.caught.map((p) => (
                            <span
                              key={p.species}
                              title={`${p.name} (${p.species})${p.dead ? " — Caído" : ""}`}
                              style={{
                                fontSize: "0.95rem",
                                lineHeight: 1,
                                filter: p.dead ? "grayscale(1) opacity(.5)" : "none",
                                background: "rgba(255,255,255,.92)",
                                borderRadius: "50%",
                                width: "22px",
                                height: "22px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1.5px solid #1e293b",
                                boxShadow: "0 1px 3px rgba(0,0,0,.3)",
                              }}
                            >
                              {p.emoji}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Tooltip on hover */}
                      {hoverLoc === loc.id && (
                        <div
                          style={{
                            position: "absolute",
                            top: `${size + 8}px`,
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "#152b15",
                            border: "1.5px solid var(--g600)",
                            borderRadius: "var(--r-md)",
                            padding: "0.7rem 0.9rem",
                            minWidth: "150px",
                            pointerEvents: "none",
                            boxShadow: "0 4px 20px rgba(0,0,0,.5)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <h5
                            style={{
                              fontFamily: "var(--pixel)",
                              fontSize: "0.32rem",
                              color: "var(--g300)",
                              marginBottom: "0.4rem",
                            }}
                          >
                            {loc.name}
                          </h5>
                          {loc.caught.length > 0 ? (
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                              {loc.caught.map((p) => (
                                <span
                                  key={p.species}
                                  style={{
                                    fontSize: "0.72rem",
                                    color: p.dead ? "#fca5a5" : "rgba(255,255,255,.85)",
                                  }}
                                >
                                  {p.emoji} {p.name} ({p.species}){p.dead && " ✝"}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,.5)" }}>
                              {loc.visited ? "Sem capturas" : "Não visitado"}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginTop: "1.25rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#fff", border: "2px solid #1e293b" }} />
                  <span style={{ fontFamily: "var(--pixel)", fontSize: "0.28rem", color: "rgba(255,255,255,.7)" }}>
                    CIDADE
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgba(255,255,255,.85)", border: "2px solid #1e293b" }} />
                  <span style={{ fontFamily: "var(--pixel)", fontSize: "0.28rem", color: "rgba(255,255,255,.7)" }}>
                    ROTA
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "16px", height: "3px", background: "#facc15" }} />
                  <span style={{ fontFamily: "var(--pixel)", fontSize: "0.28rem", color: "rgba(255,255,255,.7)" }}>
                    CAMINHO PERCORRIDO
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {tab === "team" && (
          <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {run.team.map((p) => (
              <div
                key={p.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr auto",
                  alignItems: "center",
                  gap: "1.1rem",
                  background: "var(--surface)",
                  border: p.dead ? "1.5px solid #fca5a5" : "1.5px solid var(--rule)",
                  borderRadius: "var(--r-md)",
                  padding: "0.85rem 1.1rem",
                  boxShadow: "var(--shadow-sm)",
                  opacity: p.dead ? 0.55 : 1,
                  filter: p.dead ? "grayscale(.8)" : "none",
                  transition: "transform .15s, box-shadow .15s, border-color .15s",
                }}
                onMouseEnter={(e) => {
                  if (!p.dead) {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--g300)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = p.dead ? "#fca5a5" : "var(--rule)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 50% 60%, var(--g100), var(--g50))",
                    border: "1.5px solid var(--g200)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.species}
                      style={{
                        width: "80%",
                        height: "80%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 2px 4px rgba(22,163,74,.25))",
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: "2rem" }}>{p.emoji}</span>
                  )}
                </div>

                <div style={{ minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.5rem",
                      color: "var(--g700)",
                      letterSpacing: "1.5px",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {p.name.toUpperCase()}
                  </span>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)" }}>
                      {p.species}
                    </span>
                    {p.dead && (
                      <span
                        style={{
                          fontFamily: "var(--pixel)",
                          fontSize: "0.3rem",
                          background: "#fee2e2",
                          color: "#dc2626",
                          border: "1px solid #fca5a5",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "4px",
                          letterSpacing: "1px",
                        }}
                      >
                        💀 CAÍDO
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ textAlign: "right", fontSize: "0.78rem", color: "var(--ink3)", whiteSpace: "nowrap" }}>
                  📍 {p.location}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rules Tab */}
        {tab === "rules" && (
          <div>
            <div
              style={{
                background: "linear-gradient(135deg, var(--g800), var(--g600))",
                color: "#fff",
                borderRadius: "var(--r-xl)",
                padding: "2.25rem",
                marginBottom: "1.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.4rem",
                  color: "var(--g300)",
                  letterSpacing: "2.5px",
                  marginBottom: "0.9rem",
                }}
              >
                ◆ REGRAS DA TEMPORADA ◆
              </div>
              <h1
                style={{
                  fontSize: "1.85rem",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  marginBottom: "0.7rem",
                  lineHeight: 1.2,
                }}
              >
                Estou jogando como{" "}
                <span style={{ color: "var(--g300)" }}>{run.rulesetName}</span>
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,.78)",
                  lineHeight: 1.7,
                  maxWidth: "620px",
                }}
              >
                {run.rulesetTagline}
              </p>
            </div>

            <div
              style={{
                fontFamily: "var(--pixel)",
                fontSize: "0.42rem",
                color: "var(--g700)",
                letterSpacing: "2px",
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                margin: "2rem 0 1rem",
              }}
            >
              AS REGRAS
              <div
                style={{
                  flex: 1,
                  height: "1.5px",
                  background: "var(--rule)",
                  borderRadius: "1px",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {run.rules.map((r, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--surface)",
                    border: "1.5px solid var(--rule)",
                    borderRadius: "var(--r-lg)",
                    padding: "1.15rem 1.3rem",
                    display: "flex",
                    gap: "1.1rem",
                    alignItems: "flex-start",
                    boxShadow: "var(--shadow-sm)",
                    transition: "box-shadow .2s, transform .2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      flexShrink: 0,
                      borderRadius: "50%",
                      background: "var(--g100)",
                      color: "var(--g700)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--pixel)",
                      fontSize: "0.55rem",
                      letterSpacing: "1px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: "0.35rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "1.15rem" }}>{r.emoji}</span>
                      {r.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--ink3)", lineHeight: 1.7 }}>
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
