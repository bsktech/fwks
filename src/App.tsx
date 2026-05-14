import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Series } from "./pages/Series";
import { About } from "./pages/About";
import { SeriesDetail } from "./pages/SeriesDetail";
import { SERIES } from "./data/constants";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("home");
  const [activeSeries, setActiveSeries] = useState<(typeof SERIES)[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Nav page={page} setPage={setPage} />

      {page === "detail" && activeSeries ? (
        <>
          <SeriesDetail seriesId={activeSeries.id} setPage={setPage} />
          <footer>
            <p>
              ⚡ FWKS · Feito com <span>♥</span> e muitas mortes de Pokémon
            </p>
            <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
          </footer>
        </>
      ) : page === "series" ? (
        <Series setPage={setPage} setActiveSeries={setActiveSeries} />
      ) : page === "about" ? (
        <About />
      ) : (
        <Home setPage={setPage} setActiveSeries={setActiveSeries} />
      )}
    </>
  );
}

export default App;
