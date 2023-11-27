// About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header>
        <h1>Despre Noi</h1>
        <p>Bine ați venit la Adventure Explorers - locul unde călătoriile devin povești!</p>
      </header>

      <section className="about-section">
        <div className="about-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/ikNehUqWkJ0"
            title="Adventure Explorers - Misiunea Noastră"
            allowFullScreen
          ></iframe>
        </div>
        <div className="about-text">
          <h2>Misiunea Noastră</h2>
          <p>
            Ne-am propus să inspirăm și să facilităm aventurile de neuitat pentru călătoriile tale. Fie că ești în căutarea
            unui concediu relaxant sau a unei experiențe extreme, suntem aici pentru a transforma visele tale în realitate.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/QJu0zS-OlMI" 
            title="Adventure Explorers - Experiențe Unice"
            allowFullScreen
          ></iframe>
        </div>
        <div className="about-text">
          <h2>Experiențe Unice</h2>
          <p>
            Descoperă lumea alături de noi și experimentează aventuri unice. Oferim itinerarii personalizate și explorări în
            destinații fascinante din întreaga lume.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-video">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/eSV87c75Hyo"
            title="Adventure Explorers - Alătură-te Aventurii"
            allowFullScreen
          ></iframe>
        </div>
        <div className="about-text">
          <h2>Alătură-te Aventurii!</h2>
          <p>
            Te invităm să faci parte din călătoria noastră și să descoperi lumea alături de Adventure Explorers. Fiecare
            călătorie este o oportunitate de a crea amintiri de neuitat.
          </p>
        </div>
      </section>

      {/* Social Media Icons */}
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </div>
    </div>
  );
};

export default About;
