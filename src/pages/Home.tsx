import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { NuzlockeSection } from "../components/NuzlockeSection";
import { SeriesSection } from "../components/SeriesSection";
import { AboutSection } from "../components/AboutSection";
import { SERIES } from "../data/constants";

interface HomeProps {
  setPage: (page: string) => void;
  setActiveSeries: (series: (typeof SERIES)[0]) => void;
}

export const Home = ({ setPage, setActiveSeries }: HomeProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero setPage={setPage} />
      <NuzlockeSection />
      <SeriesSection setPage={setPage} setActiveSeries={setActiveSeries} />
      <AboutSection />
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
