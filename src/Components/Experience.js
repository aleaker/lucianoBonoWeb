import React from "react";

const Experience = ({ setDisplay }) => (
  <div className="textComponentContainer slideUp">
    <div>
      <h1 className="title textComponentTitle">Experiencia</h1>
      <p>Descarga una copia de mi CV.</p>
      <div className="downloadContainer">
        <a  target="_blank" rel="noopener noreferrer" href="https://www.docdroid.net/13exJ1z/luciano-bono-cv-pdf">Descargar CV </a>
        <svg
          stroke="rgb(26, 160, 203)"
          fill="rgb(26, 160, 203)"
          stroke-width="0"
          viewBox="0 0 384 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path>
        </svg>
      </div>
    </div>
    <div className="textContainer">
      {/* <div className="expContainer">
        <p className="expTitle">Realiza subtitulado de series para TV.</p>
        <p className="expDate">2020 - Actualidad</p>
        <p className="expText">
 Serie anime “Death Parade” (Funimation).
 Serie anime “Free, Eternal Summer” (Funimation).
        </p>
      </div> */}
      <div className="expContainer">
        <p className="expTitle">Traductor/Adaptador freelance</p>
        <p className="expDate">2016 - Actualidad</p>
        <p className="expText">
          Trabajo freelance de traducción y adaptacion para doblaje de series de TV para distintas empresas, entre ellas: Netflix, Discovery Kids, Canal 13, Canal Encuentro y Fundación Japón. 
        </p>
      </div>
      <div className="expContainer">
        <p className="expTitle">Empleado administrativo en Untref</p>
        <p className="expDate">2016 - 2018</p>
        <p className="expText">
        A cargo de la secretaría del Instituto de Ciencias de la Salud, del Departamento de Salud y Seguridad Social, de la Universidad Nacional de Tres de Febrero (Untref).
        </p>
        <div className="expContainer">
          <p className="expTitle">Auxiliar administrativo en Grupo del Oeste</p>
          <p className="expDate">2013 - 2016</p>
          <p className="expText">
          Asociación civil dedicada a la salud mental. A cargo de recepción de pacientes, asignación de turnos y orientación telefónica. Cadete. Traslado de documentación, trámites bancarios y otros.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
