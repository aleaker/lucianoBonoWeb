import React from "react";

const About = ({ setDisplay }) => (
  <div className="textComponentContainer slideUp">
    <div>
      <h1 className="title textComponentTitle">Bio</h1>
    </div>
    <div className="textContainer">
      <p>
        Soy Luciano Bono, director de arte publicitario, formado como licenciado
        en la Universidad Argentina de la Empresa (UADE).
      </p>

      <p>
        Me gusta ver la publicidad como arte gráfico y audiovisual, pensando
        siempre en cómo lograr la mejor imagen posible, y así generar mayor
        impacto. Mi fuente de inspiración son el cine y la historieta,
        realizando comics, storyboards y animatics en mi tiempo libre.
      </p>
      <p>
        En mis trabajos, constantemente trato de buscar nuevos caminos que no se
        hayan explorado aún hasta hallar un insight con el cual empiezo a
        diagramar un concepto fuerte y, eventualmente, las piezas.
      </p>
      <p>
        Mi objetivo es en todo momento seguir pensando, seguir en movimiento y
        seguir empujando el lápiz.
      </p>
    </div>
  </div>
);

export default About;
