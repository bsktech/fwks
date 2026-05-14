import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { NuzlockeSection } from "../components/NuzlockeSection";
import { RomSection } from "../components/RomSection";
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
      <RomSection />
      <SeriesSection setPage={setPage} setActiveSeries={setActiveSeries} />
      <AboutSection />
      <footer>
        <p>
          ⚡ FWKS · Feito com <span>♥</span> e muitas mortes de Pokémon
        </p>
        <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
      </footer>
    </>
  );
};
