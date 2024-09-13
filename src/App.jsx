import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Fmdavid</h1>
        <nav>
          <ul>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="about-section">
        <h2>Sobre mí</h2>
        <p>Hola, soy David y este es mi portfolio de prueba.</p>
      </section>

      <section id="projects" className="projects-section">
        <h2>Proyectos</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Proyecto 1</h3>
            <p>Proyecto de Prueba.</p>
          </div>
          <div className="project-card">
            <h3>Proyecto 2</h3>
            <p>Proyecto de Prueba.</p>
          </div>
          <div className="project-card">
            <h3>Proyecto 3</h3>
            <p>Proyecto de Prueba.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contacto</h2>
        <p>Puedes contactarme en mi correo: davidfrontera@correo.com</p>
      </section>

      <footer>
        <p>&copy; 2024 Mi Portafolio</p>
      </footer>
    </div>
  );
}

export default App;
