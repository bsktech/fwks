import { useState } from "react";
import { SERIES, BADGES, TIMELINE_EVENTS, KANTO_GRID, MAP_DATA, CURRENT_TEAM } from "../data/constants";

interface SeriesDetailProps {
  seriesId: string;
  setPage: (page: string) => void;
}

export const SeriesDetail = ({ seriesId, setPage }: SeriesDetailProps) => {
  const [tab, setTab] = useState("videos");
  const [activeVid, setActiveVid] = useState(0);

  const series = SERIES.find((s) => s.id === seriesId);
  if (!series) return null;

  const videos = [
    { title: "Ep. 1 — A Jornada Começa", ep: "EP.01", emoji: "🌟" },
    { title: "Ep. 2 — Pesadelos na Floresta Viridian", ep: "EP.02", emoji: "🌲" },
    { title: "Ep. 3 — Brock Levou um Troco", ep: "EP.03", emoji: "🪨" },
    { title: "Ep. 4 — DEX Asa (Não Estou Chorando)", ep: "EP.04", emoji: "💀" },
    { title: "Ep. 5 — Grind na Rota 4", ep: "EP.05", emoji: "⚔️" },
    { title: "Ep. 6 — A Misty É Assustadora Pra Valer", ep: "EP.06", emoji: "💧" },
  ];

  const MapCell = ({ name }: { name: string | null }) => {
    const [hover, setHover] = useState(false);
    const data = name ? MAP_DATA[name] : null;

    if (!name)
      return (
        <div
          style={{
            aspectRatio: "1",
            borderRadius: "var(--r-sm)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.2rem",
            minHeight: "56px",
            transition: "all .2s",
            cursor: "default",
            background: "transparent",
          }}
        />
      );

    const cls = data
      ? data.gym
        ? "gym-city"
        : "route"
      : "";

    return (
      <div
        style={{
          aspectRatio: "1",
          borderRadius: "var(--r-sm)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.2rem",
          minHeight: "56px",
          transition: "all .2s",
          cursor: "default",
          background:
            cls === "gym-city"
              ? "rgba(251,191,36,.12)"
              : cls === "route"
                ? "rgba(34,197,94,.1)"
                : "transparent",
          border:
            cls === "gym-city"
              ? "1px solid rgba(251,191,36,.35)"
              : cls === "route"
                ? "1px solid rgba(74,222,128,.25)"
                : "none",
          opacity: data && !data.visited ? 0.45 : 1,
        }}
        onMouseEnter={() => data && setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={{ fontSize: "0.8rem", marginBottom: "0.1rem", lineHeight: 1 }}>
          {data?.gym ? "🏟️" : data ? "🌿" : "🌫️"}
        </div>
        <div
          style={{
            fontFamily: "var(--pixel)",
            fontSize: "0.22rem",
            color: "rgba(255,255,255,.58)",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {name}
        </div>
        {hover && data && (
          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + 10px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#152b15",
              border: "1.5px solid var(--g600)",
              borderRadius: "var(--r-md)",
              padding: "0.9rem 1.1rem",
              minWidth: "170px",
              zIndex: 20,
              pointerEvents: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,.4)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderTop: "7px solid var(--g600)",
              }}
            />
            <h5
              style={{
                fontFamily: "var(--pixel)",
                fontSize: "0.32rem",
                color: "var(--g300)",
                marginBottom: "0.5rem",
                lineHeight: 1.6,
              }}
            >
              {name.replace("\n", " ")}
            </h5>
            {data.gym && (
              <p style={{ fontSize: "0.74rem", color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}>
                🏆 {data.badge}
              </p>
            )}
            {data.caught?.length > 0 && (
              <>
                <p
                  style={{
                    marginTop: "0.4rem",
                    fontSize: "0.74rem",
                    color: "rgba(255,255,255,.65)",
                    lineHeight: 1.6,
                  }}
                >
                  Capturado aqui:
                </p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  {data.caught.map((p) => (
                    <span
                      key={p}
                      style={{
                        fontFamily: "var(--pixel)",
                        fontSize: "0.25rem",
                        background: "rgba(74,222,128,.12)",
                        color: "var(--g300)",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        border: "1px solid rgba(74,222,128,.22)",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </>
            )}
            {!data.visited && (
              <p
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.28rem",
                  color: "rgba(255,255,255,.3)",
                  marginTop: "0.3rem",
                }}
              >
                Não visitado ainda
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
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
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <button
            style={{
              fontFamily: "var(--pixel)",
              fontSize: "0.38rem",
              color: "var(--g300)",
              background: "rgba(74,222,128,.1)",
              border: "1px solid rgba(74,222,128,.22)",
              cursor: "pointer",
              marginBottom: "2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "100px",
              transition: "background .2s, transform .15s",
            }}
            onClick={() => setPage("home")}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(74,222,128,.18)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateX(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(74,222,128,.1)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateX(0)";
            }}
          >
            ← Voltar
          </button>
          <h1
            style={{
              fontFamily: "var(--sans)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "0.8rem",
              letterSpacing: "-0.5px",
            }}
          >
            {series.emoji} <em style={{ fontStyle: "normal", color: "var(--g300)" }}>{series.title}</em>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.58)",
              fontSize: "0.98rem",
              lineHeight: 1.8,
              maxWidth: "560px",
            }}
          >
            {series.desc}
          </p>
        </div>
      </div>

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
            padding: "0 2rem",
            display: "flex",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {[
            ["videos", "▶ Vídeos"],
            ["timeline", "📜 Diário"],
            ["map", "🗺️ Mapa"],
            ["team", "⚡ Time"],
          ].map(([id, label]) => (
            <button
              key={id}
              style={{
                fontFamily: "var(--pixel)",
                fontSize: "0.38rem",
                padding: "1.1rem 1.4rem",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: tab === id ? "var(--g600)" : "var(--ink3)",
                whiteSpace: "nowrap",
                borderBottom: tab === id ? "2.5px solid var(--g500)" : "2.5px solid transparent",
                marginBottom: "-1.5px",
                transition: "color .2s",
              }}
              onClick={() => setTab(id)}
              onMouseEnter={(e) => {
                if (tab !== id) (e.currentTarget as HTMLElement).style.color = "var(--g600)";
              }}
              onMouseLeave={(e) => {
                if (tab !== id) (e.currentTarget as HTMLElement).style.color = "var(--ink3)";
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "3rem 2rem" }}>
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
          {BADGES.map((b) => (
            <div
              key={b.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.75rem 1rem",
                borderRadius: "var(--r-md)",
                minWidth: "64px",
                transition: "transform .2s",
                cursor: "default",
                background: b.earned ? "#fef9c3" : "#f9fafb",
                border: b.earned ? "1.5px solid #fde047" : "1.5px solid var(--rule)",
                opacity: b.earned ? 1 : 0.45,
                filter: b.earned ? "none" : "grayscale(.6)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{b.emoji}</span>
              <span
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.26rem",
                  color: "var(--ink2)",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {b.name}
              </span>
            </div>
          ))}
        </div>

        {/* Videos Tab */}
        {tab === "videos" && (
          <div>
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
                marginBottom: "1.5rem",
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
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {videos.map((v, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    background: "var(--surface)",
                    borderRadius: "var(--r-md)",
                    padding: "0.9rem 1.1rem",
                    cursor: "pointer",
                    border: activeVid === i ? "1.5px solid var(--g400)" : "1.5px solid var(--rule)",
                    transition: "border-color .2s, box-shadow .2s, background .2s",
                    background: activeVid === i ? "var(--g50)" : "var(--surface)",
                    boxShadow: activeVid === i ? "var(--shadow-green)" : "none",
                  }}
                  onClick={() => setActiveVid(i)}
                  onMouseEnter={(e) => {
                    if (activeVid !== i) {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--g300)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-green)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeVid !== i) {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--rule)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.38rem",
                      minWidth: "28px",
                      color: activeVid === i ? "var(--g600)" : "var(--ink3)",
                      textAlign: "center",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      width: "76px",
                      height: "43px",
                      borderRadius: "var(--r-sm)",
                      background: "var(--ink)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {v.emoji}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.2rem" }}>
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
              ))}
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {tab === "timeline" && (
          <div>
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
              DIÁRIO DE AVENTURA — NUZLOCKE KANTO
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
              {TIMELINE_EVENTS.map((ev) => (
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
                    {(ev.catches.length > 0 || ev.deaths.length > 0 || ev.badge) && (
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.9rem" }}>
                        {ev.catches.map((c) => (
                          <span
                            key={c}
                            style={{
                              fontFamily: "var(--pixel)",
                              fontSize: "0.28rem",
                              background: "var(--g100)",
                              color: "var(--g700)",
                              padding: "0.3rem 0.65rem",
                              borderRadius: "100px",
                              border: "1px solid var(--g200)",
                            }}
                          >
                            ✅ {c}
                          </span>
                        ))}
                        {ev.deaths.map((d) => (
                          <span
                            key={d}
                            style={{
                              fontFamily: "var(--pixel)",
                              fontSize: "0.28rem",
                              background: "#fee2e2",
                              color: "var(--ember)",
                              padding: "0.3rem 0.65rem",
                              borderRadius: "100px",
                              border: "1px solid #fca5a5",
                            }}
                          >
                            ✝ {d}
                          </span>
                        ))}
                        {ev.badge && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "0.3rem",
                              padding: "0.55rem 0.85rem",
                              background: "#fef9c3",
                              borderRadius: "var(--r-md)",
                              border: "1.5px solid #fde047",
                              minWidth: "62px",
                            }}
                          >
                            <span style={{ fontSize: "1.25rem" }}>{ev.badge.emoji}</span>
                            <span
                              style={{
                                fontFamily: "var(--pixel)",
                                fontSize: "0.26rem",
                                color: "var(--ink2)",
                                textAlign: "center",
                              }}
                            >
                              Insígnia {ev.badge.name}
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
                background: "var(--g900)",
                borderRadius: "var(--r-xl)",
                padding: "2rem",
                border: "1.5px solid var(--g700)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.42rem",
                  color: "var(--g300)",
                  letterSpacing: "3px",
                  textAlign: "center",
                  marginBottom: "1.75rem",
                }}
              >
                ◆ MAPA DE KANTO ◆
              </div>
              <div
                style={{
                  display: "grid",
                  gap: "0.5rem",
                  gridTemplateColumns: "repeat(8, 1fr)",
                }}
              >
                {KANTO_GRID.flat().map((cell, i) => (
                  <MapCell key={i} name={cell} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "rgba(34,197,94,.3)",
                      border: "1px solid rgba(74,222,128,.4)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.28rem",
                      color: "rgba(255,255,255,.38)",
                    }}
                  >
                    ROTA VISITADA
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "3px",
                      background: "rgba(251,191,36,.25)",
                      border: "1px solid rgba(251,191,36,.4)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.28rem",
                      color: "rgba(255,255,255,.38)",
                    }}
                  >
                    CIDADE COM GINÁSIO
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.26rem",
                  color: "rgba(255,255,255,.22)",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                PASSE O MOUSE PARA VER OS POKÉMON CAPTURADOS
              </p>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {tab === "team" && (
          <div>
            <div
              style={{
                fontFamily: "var(--pixel)",
                fontSize: "0.42rem",
                color: "var(--ink2)",
                marginBottom: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
              }}
            >
              TIME ATUAL — EP.24
              <div
                style={{
                  flex: 1,
                  height: "1.5px",
                  background: "var(--rule)",
                  borderRadius: "1px",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {CURRENT_TEAM.filter((p) => !p.dead).map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: "var(--surface)",
                    borderRadius: "var(--r-lg)",
                    padding: "1.25rem 1rem",
                    border: "1.5px solid var(--rule)",
                    minWidth: "112px",
                    textAlign: "center",
                    boxShadow: "var(--shadow-sm)",
                    transition: "transform .2s, box-shadow .2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-green)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <span style={{ fontSize: "2.2rem", display: "block", marginBottom: "0.5rem" }}>
                    {p.emoji}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--pixel)",
                      fontSize: "0.33rem",
                      color: "var(--ink)",
                      display: "block",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {p.name}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "var(--ink3)", fontWeight: 500 }}>
                    {p.species} · Nv.{p.level}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <div
                style={{
                  fontFamily: "var(--pixel)",
                  fontSize: "0.42rem",
                  color: "#dc2626",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                }}
              >
                MEMORIAL 💀
                <div
                  style={{
                    flex: 1,
                    height: "1.5px",
                    background: "var(--rule)",
                    borderRadius: "1px",
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {CURRENT_TEAM.filter((p) => p.dead).map((p) => (
                  <div
                    key={p.name}
                    style={{
                      background: "var(--surface)",
                      borderRadius: "var(--r-lg)",
                      padding: "1.25rem 1rem",
                      border: "1.5px solid var(--rule)",
                      minWidth: "112px",
                      textAlign: "center",
                      boxShadow: "var(--shadow-sm)",
                      opacity: 0.5,
                      filter: "grayscale(.75)",
                    }}
                  >
                    <span style={{ fontSize: "2.2rem", display: "block", marginBottom: "0.5rem" }}>
                      {p.emoji}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--pixel)",
                        fontSize: "0.33rem",
                        color: "var(--ink)",
                        display: "block",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {p.name}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--ink3)", fontWeight: 500 }}>
                      {p.species} · Nv.{p.level}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--pixel)",
                        fontSize: "0.26rem",
                        background: "var(--ember)",
                        color: "#fff",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        display: "inline-block",
                        marginTop: "0.5rem",
                      }}
                    >
                      CAÍDO
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
