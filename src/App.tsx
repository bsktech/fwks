import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Series } from "./pages/Series";
import { About } from "./pages/About";
import { RunList } from "./pages/RunList";
import { SeriesDetail } from "./pages/SeriesDetail";
import { SERIES, Run } from "./data/constants";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("home");
  const [activeSeries, setActiveSeries] = useState<(typeof SERIES)[0] | null>(null);
  const [activeRun, setActiveRun] = useState<Run | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleSetActiveSeries = (series: (typeof SERIES)[0]) => {
    setActiveSeries(series);
    setPage("runs");
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />

      {page === "detail" && activeSeries && activeRun ? (
        <>
          <SeriesDetail seriesId={activeSeries.id} run={activeRun} setPage={setPage} />
          <footer>
            <p>
              <img src="/logo.png" alt="Fwks" style={{ height: "1.2em", verticalAlign: "middle", marginRight: "0.4em", opacity: 0.7 }} />
              Fwks · Feito com <span>♥</span> e muitas mortes de Pokémon
            </p>
            <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
          </footer>
        </>
      ) : page === "runs" && activeSeries ? (
        <>
          <RunList seriesId={activeSeries.id} setPage={setPage} setActiveRun={setActiveRun} />
          <footer>
            <p>
              <img src="/logo.png" alt="Fwks" style={{ height: "1.2em", verticalAlign: "middle", marginRight: "0.4em", opacity: 0.7 }} />
              Fwks · Feito com <span>♥</span> e muitas mortes de Pokémon
            </p>
            <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
          </footer>
        </>
      ) : page === "series" ? (
        <Series setPage={setPage} setActiveSeries={handleSetActiveSeries} />
      ) : page === "about" ? (
        <About />
      ) : (
        <Home setPage={setPage} setActiveSeries={handleSetActiveSeries} />
      )}
    </>
  );
}

export default App;
