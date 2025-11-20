import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
  ScrollToTop komponenta:
  - svaki put kada se promeni lokacija (ruta), poziva window.scrollTo(0,0)
  - stavi ovu komponentu unutar BrowserRouter (npr. u App.tsx) da radi globalno
*/
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // instant scroll to top; ako želiš glatko, koristi behavior: 'smooth'
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
