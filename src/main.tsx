import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ⬇️ 1. Uvozimo LanguageProvider iz našeg globalnog konteksta
//    Ovo omogućava da ceo sajt zna koji jezik je izabran.
import { LanguageProvider } from "./Context/LanguageContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 
      ⬇️ 2. Omotavamo celu aplikaciju u LanguageProvider 
         - Time svaki deo aplikacije (Navbar, Home, Usluge, Tim, bio stranice...)
           može čitati i menjati izabrani jezik.
         - Jezik se menja globalno, a ne lokalno samo u Navbar-u.
    */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
