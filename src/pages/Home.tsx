import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { NuzlockeSection } from "../components/NuzlockeSection";
import { SeriesSection } from "../components/SeriesSection";
import { AboutSection } from "../components/AboutSection";
import { SERIES } from "../data/constants";

interface HomeProps {
  setPage: (page: string) => void;
  setActiveSeries: (series: (typeof SERIES)[0]) => void;
  scrollTarget?: string | null;
  onScrolled?: () => void;
}

export const Home = ({ setPage, setActiveSeries, scrollTarget, onScrolled }: HomeProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!scrollTarget) return;
    const el = document.getElementById(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onScrolled?.();
  }, [scrollTarget]);

  return (
    <>
      <Hero setPage={setPage} />
      <NuzlockeSection />
      <div id="series">
        <SeriesSection setPage={setPage} setActiveSeries={setActiveSeries} />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <footer>
        <p>
          <img src="/logo.png" alt="Fwks" style={{ height: "1.2em", verticalAlign: "middle", marginRight: "0.4em", opacity: 0.7 }} />
          Fwks · Feito com <span>♥</span> e muitas mortes de Pokémon
        </p>
        <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
      </footer>
    </>
  );
};
