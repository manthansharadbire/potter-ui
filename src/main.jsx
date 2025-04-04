import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./views/Homepage.jsx";
import Characters from "./views/Characters.jsx";
import Spells from "./views/Spells.jsx";
import Houses from "./views/Houses.jsx";
import Books from "./views/Books.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={Homepage} />
      <Route path="/characters" element={Characters} />
      <Route path="/spells" element={Spells} />
      <Route path="/houses" element={Houses} />
      <Route path="/books" element={Books} />
    </Routes>
  </BrowserRouter>
);
