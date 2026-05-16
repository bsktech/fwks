import { GrassBackground } from "./GrassBackground";

interface HeroProps {
  setPage: (page: string) => void;
}

export const Hero = ({ setPage }: HeroProps) => {
  return (
    <section className="hero pixel-grid">
      <GrassBackground />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <div className="eyebrow-dot" />
          AO VIVO: NUZLOCKE KANTO EP.24
        </div>
        <span className="hero-name">Fwks</span>
        <h1 className="hero-title">
          Cada Run É<br />
          Uma <em>História</em>
        </h1>
        <p className="hero-sub">
          Pokémon fica melhor com desafio. Aqui você encontra{" "}
          <strong>Nuzlockes</strong>, jogos difíceis e conteúdo feito pra quem
          sabe que a jornada é tão boa quanto o destino.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => setPage("series")}>
            ▶ Ver Séries
          </button>
          <button className="btn-ghost" onClick={() => setPage("about")}>
            Sobre Mim
          </button>
        </div>
      </div>
      <div className="hero-scroll">
        <span>ROLAR</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
};
