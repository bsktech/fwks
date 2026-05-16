import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { RunList } from "./pages/RunList";
import { SeriesDetail } from "./pages/SeriesDetail";
import "./styles/global.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series/:seriesId" element={<RunListPage />} />
        <Route path="/series/:seriesId/runs/:runId" element={<SeriesDetailPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

function RunListPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <RunList />
      <SiteFooter />
    </div>
  );
}

function SeriesDetailPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SeriesDetail />
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer>
      <p>
        <img src="/logo.png" alt="Fwks" style={{ height: "1.2em", verticalAlign: "middle", marginRight: "0.4em", opacity: 0.7 }} />
        Fwks · Feito com <span>♥</span> e muitas mortes de Pokémon
      </p>
      <p>Pokémon © Nintendo / Game Freak · Conteúdo de fã, não afiliado</p>
    </footer>
  );
}

export default App;
