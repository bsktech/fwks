import { useState } from "react";

interface NavProps {
  page: string;
  setPage: (page: string) => void;
}

export const Nav = ({ page, setPage }: NavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "INÍCIO" },
    { id: "series", label: "SÉRIES" },
    { id: "about", label: "SOBRE" },
  ];

  return (
    <nav>
      <div className="nav-logo" onClick={() => setPage("home")}>
        <img src="/logo.png" alt="FWKS" className="nav-logo-img" />
        FWKS
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href="#"
              className={page === id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setPage(id);
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};
