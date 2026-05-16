interface SeriesHeaderProps {
  coverImg?: string;
  title: string;
  meta: string;
  description?: string;
  backLabel: string;
  onBack: () => void;
}

export const SeriesHeader = ({ coverImg, title, meta, description, backLabel, onBack }: SeriesHeaderProps) => {
  const [base, highlight] = title.includes("Nuzlocke")
    ? [title.replace("Nuzlocke", "").trim(), "Nuzlocke"]
    : [title, null];

  return (
    <div style={{ position: "relative", minHeight: "260px", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
      {/* fundo desfocado */}
      {coverImg && (
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${coverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px) brightness(.4)",
          transform: "scale(1.06)",
        }} />
      )}
      {/* overlay */}
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
        ← {backLabel}
      </button>

      {/* conteúdo */}
      <div style={{ position: "relative", zIndex: 1, padding: "2.5rem", maxWidth: "1080px", width: "100%", margin: "0 auto", display: "flex", alignItems: "flex-end", gap: "2rem" }}>
        {coverImg && (
          <img
            src={coverImg}
            alt={title}
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
            {highlight ? (
              <>{base} <em style={{ fontStyle: "normal", color: "var(--g300)" }}>{highlight}</em></>
            ) : title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: "rgba(255,255,255,.65)", flexWrap: "wrap" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--g400)", display: "inline-block", boxShadow: "0 0 6px var(--g400)", flexShrink: 0 }} />
            <span>{meta}</span>
          </div>
          {description && (
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "520px", marginTop: "0.75rem" }}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
