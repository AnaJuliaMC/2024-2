import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/Layout";
import { SemEstado } from "./pages/estado/SemEstado";
import { ComEstado } from "./pages/estado/ComEstado";
import { CampoTexto } from "./pages/estado/CampoTexto";
import { Contador } from "./pages/estado/Contador";
import { ComunicacaoDireta } from "./pages/Comunicacao/ComunicacaoDireta";
import { ComunicacaoIndireta } from "./pages/Comunicacao/ComunicacaoIndireta";
import { UseRef } from "./pages/hooks-basico/UseRef";
import { UseEffect } from "./pages/hooks-basico/UseEffect";


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="semEstado" element={<SemEstado/>} />
      <Route path="comEstado" element={<ComEstado/>} />
      <Route path="campoTexto" element={<CampoTexto/>} />
      <Route path="contador" element={<Contador/>} />
      <Route path="ComunicaçãoDireta" element={<ComunicacaoDireta/>} />
      <Route path="ComunicaçãoIndireta" element={<ComunicacaoIndireta/>} />
      <Route path="UseRef" element={<UseRef/>} />
      <Route path="UseEffect" element={<UseEffect/>} />
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
