import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { RunList } from "./pages/RunList";
import { SeriesDetail } from "./pages/SeriesDetail";
import { SERIES, Run } from "./data/constants";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("home");
  const [activeSeries, setActiveSeries] = useState<(typeof SERIES)[0] | null>(null);
  const [activeRun, setActiveRun] = useState<Run | null>(null);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    if (!scrollTarget) {
      window.scrollTo(0, 0);
    }
  }, [page]);

  const handleNav = (id: string) => {
    if (id === "series" || id === "about") {
      setPage("home");
      setScrollTarget(id);
    } else {
      setScrollTarget(null);
      setPage(id);
    }
  };

  const handleSetActiveSeries = (series: (typeof SERIES)[0]) => {
    setActiveSeries(series);
    setPage("runs");
  };

  return (
    <>
      <Nav page={page} onNavigate={handleNav} />

      {page === "detail" && activeSeries && activeRun ? (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <SeriesDetail seriesId={activeSeries.id} run={activeRun} setPage={setPage} />
          <footer>
            <p>
              <img src="/logo.png" alt="Fwks" style={{ height: "1.2em", verticalAlign: "middle", marginRight: "0.4em", opacity: 0.7 }} />
              Fwks · Feito com <span>♥</span> e muitas mortes de Pokémon
            </p>
            <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
          </footer>
        </div>
      ) : page === "runs" && activeSeries ? (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <RunList
            seriesId={activeSeries.id}
            setPage={setPage}
            setActiveRun={setActiveRun}
            onBack={() => { setPage("home"); setScrollTarget("series"); }}
          />
          <footer>
            <p>
              <img src="/logo.png" alt="Fwks" style={{ height: "1.2em", verticalAlign: "middle", marginRight: "0.4em", opacity: 0.7 }} />
              Fwks · Feito com <span>♥</span> e muitas mortes de Pokémon
            </p>
            <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
          </footer>
        </div>
      ) : (
        <Home
          setPage={setPage}
          setActiveSeries={handleSetActiveSeries}
          scrollTarget={scrollTarget}
          onScrolled={() => setScrollTarget(null)}
        />
      )}
    </>
  );
}

export default App;
