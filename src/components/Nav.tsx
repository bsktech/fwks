import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const handleNav = (id: string) => {
    if (id === "home") {
      navigate("/");
    } else if (id === "series" || id === "about") {
      if (isHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/#${id}`);
      }
    }
    setMenuOpen(false);
  };

  const isActive = (id: string) => {
    if (id === "home") return isHome && !location.hash;
    return isHome && location.hash === `#${id}`;
  };

  const navItems = [
    { id: "home", label: "INÍCIO" },
    { id: "series", label: "SÉRIES" },
    { id: "about", label: "SOBRE" },
  ];

  return (
    <nav>
      <div className="nav-logo" onClick={() => handleNav("home")}>
        <img src="/logo.png" alt="FWKS" className="nav-logo-img" />
        FWKS
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href="#"
              className={isActive(id) ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleNav(id);
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
