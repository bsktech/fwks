import { GrassBackground } from "./GrassBackground";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

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
          NOVO EP: POKÉMON RED ++ · NUZLOCKE · TEMPORADA 1 · EP 1
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
          <button className="btn-primary" onClick={() => scrollTo("series")}>
            ▶ Ver Séries
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("about")}>
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
