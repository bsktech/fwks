import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Hero } from "../components/Hero";
import { NuzlockeSection } from "../components/NuzlockeSection";
import { SeriesSection } from "../components/SeriesSection";
import { AboutSection } from "../components/AboutSection";
import { SERIES } from "../data/constants";

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.hash]);

  const handleSetActiveSeries = (series: (typeof SERIES)[0]) => {
    navigate(`/series/${series.id}`);
  };

  return (
    <>
      <Hero />
      <NuzlockeSection />
      <div id="series">
        <SeriesSection setActiveSeries={handleSetActiveSeries} />
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
