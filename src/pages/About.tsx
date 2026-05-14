import { useEffect } from "react";
import { AboutSection } from "../components/AboutSection";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
