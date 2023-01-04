import React from "react";
import APropos from "./components/APropos";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";
import TechnologiesEtOutils from "./components/TechnologiesEtOutils";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <APropos />
      <Projets />
      <TechnologiesEtOutils />
      <Contact />
    </main>
  );
}
