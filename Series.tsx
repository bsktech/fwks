import { useEffect } from "react";
import { SeriesSection } from "../components/SeriesSection";
import { SERIES } from "../data/constants";

interface SeriesPageProps {
  setPage: (page: string) => void;
  setActiveSeries: (series: (typeof SERIES)[0]) => void;
}

export const Series = ({ setPage, setActiveSeries }: SeriesPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ paddingTop: "58px" }}>
        <SeriesSection setPage={setPage} setActiveSeries={setActiveSeries} />
      </div>
      <footer>
        <p>
          ⚡ FWKS · Feito com <span>♥</span> e muitas mortes de Pokémon
        </p>
        <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
      </footer>
    </>
  );
};
