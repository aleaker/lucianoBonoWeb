import React from "react";

const Navbar = ({ setDisplay, display }) => (
  <nav className="navbarContainer">
    <div onClick={() => setDisplay("landing")} className="logoImg">
      <p className="isotypo">LB</p>
    </div>
    <ul className="navbarMenuContainer">
      <li onClick={() => setDisplay("projects")}>
        <p className={display === "projects" ? "selected" : undefined}>
          Proyectos
        </p>
      </li>
      <li onClick={() => setDisplay("about")}>
        <p className={display === "about" ? "selected" : undefined}>Bio</p>
      </li>
      <li onClick={() => setDisplay("contact")}>
        <p className={display === "contact" ? "selected" : undefined}>
          Contacto
        </p>
      </li>
      <li onClick={() => setDisplay("experience")}>
        <p className={display === "experience" ? "selected" : undefined}>
          Experiencia
        </p>
      </li>
      <li>
        <a
          href="https://www.behance.net/alansergio3ef8/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            stroke="rgb(251, 251, 251)"
            fill="rgb(251, 251, 251)"
            strokeWidth="0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/luciano-bono-1580351b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="linkedinIcon"
            stroke="rgb(251, 251, 251)"
            fill="rgb(251, 251, 251)"
            strokeWidth="0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </li>

      <div className="line"></div>
    </ul>
  </nav>
);

export default Navbar;
