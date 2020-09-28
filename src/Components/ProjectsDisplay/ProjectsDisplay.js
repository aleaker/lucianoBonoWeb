import React from "react";
import LegoPiece from "./LegoDisplay";
import SpotifyDisplay from "./SpotifyDisplay";
import AvioneroDisplay from "./AvioneroDisplay";
import LacajaDisplay from "./LacajaDisplay";

const ProjectsDisplay = ({ setProject }) => (
  <div>
    <div className="titleContainer slideUp">
      <h1 className="title">Proyectos</h1>
    </div>

    <div className="projectsContainer">
      <div
        className="singleProjectContainer"
        onClick={() => setProject("LEGO")}
      >
        <LegoPiece />
        <p className="projectTitle">LEGO - Publicidad para revista</p>
      </div>
      <div
        className="singleProjectContainer"
        onClick={() => setProject("SPOTIFY")}
      >
        <SpotifyDisplay />
        <p className="projectTitle">SPOTIFY - Activación</p>
      </div>
      <div
        className="singleProjectContainer"
        onClick={() => setProject("AVIONERO")}
      >
        <AvioneroDisplay />
        <p className="projectTitle">AVIONERO - Gráfica para vía publica</p>
      </div>
      <div
        className="singleProjectContainer"
        onClick={() => setProject("LA CAJA")}
      >
        <LacajaDisplay />
        <p className="projectTitle">LA CAJA - Gráfica para vía publica</p>
      </div>
    </div>
  </div>
);

export default ProjectsDisplay;
