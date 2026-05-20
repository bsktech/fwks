import { useState } from "react";
import {
  BOSSES,
  CAT_META,
  REGION_GROUPS,
  TYPE_COLORS,
  imgName,
  type Boss,
  type Starter,
} from "../data/bosses";

const STARTER_OPTIONS: { id: Starter; label: string }[] = [
  { id: "bulba", label: "🌱 Bulbasaur" },
  { id: "char", label: "🔥 Charmander" },
  { id: "squir", label: "💧 Squirtle" },
];

function teamFor(boss: Boss, starter: Starter) {
  return boss.teams.all ?? boss.teams[starter] ?? [];
}

export const BossesTab = () => {
  const [starter, setStarter] = useState<Starter>("char");
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());

  const toggle = (n: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  };

  return (
    <div>
      <div className="bosses-starter-bar">
        <span>Starter:</span>
        {STARTER_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`bosses-starter-btn${starter === opt.id ? " active" : ""}`}
            onClick={() => setStarter(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="bosses-trail">
        {REGION_GROUPS.map((region) => (
          <div key={region.label}>
            <div className="bosses-region">{region.label}</div>
            {BOSSES.filter((b) => b.n >= region.range[0] && b.n <= region.range[1]).map((b) => {
              const meta = CAT_META[b.cat];
              const team = teamFor(b, starter);
              const isOpen = openIds.has(b.n);
              return (
                <div key={b.n} className="bosses-node" data-cat={b.cat}>
                  <div className={`bosses-card${isOpen ? " open" : ""}`}>
                    <div
                      className="bosses-card-head"
                      onClick={() => toggle(b.n)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggle(b.n);
                        }
                      }}
                    >
                      <div className="bosses-num">#{String(b.n).padStart(2, "0")}</div>
                      <div className="bosses-head-main">
                        <div>
                          <span
                            className="bosses-tag"
                            style={{ background: meta.bg, color: meta.color }}
                          >
                            {meta.icon} {meta.label}
                            {b.badge ? ` · ${b.badge}` : ""}
                          </span>
                        </div>
                        <div className="bosses-title">{b.name}</div>
                        <div className="bosses-loc">📍 {b.loc}</div>
                      </div>
                      <div className="bosses-cap">Lv {b.cap}</div>
                      <div className="bosses-chev">▸</div>
                    </div>
                    <div className="bosses-body">
                      <div className="bosses-team">
                        {team.map((m, idx) => (
                          <div key={`${b.n}-${idx}-${m.name}`} className="bosses-mon">
                            <img
                              className="bosses-mon-img"
                              src={`/${imgName(m.name)}.png`}
                              alt={m.name}
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                              }}
                            />
                            <div className="bosses-mon-name">{m.name}</div>
                            <span className="bosses-mon-lvl">Lv {m.level}</span>
                            <div className="bosses-types">
                              {m.types.map((t) => (
                                <span
                                  key={t}
                                  className="bosses-type"
                                  style={{ background: TYPE_COLORS[t] ?? "#888" }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
