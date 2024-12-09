import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        © 2024 FELGTBI+ – Todos los derechos reservados
      </div>

      <div className="footer-links">
        <ul>
          <li>
            <a href="https://felgtbi.org/politica-privacidad/" target="_blank" rel="noopener noreferrer">
              Política de Privacidad
            </a>
          </li>
          <li>
            <a href="https://felgtbi.org/avisos-legales/" target="_blank" rel="noopener noreferrer">
              Aviso Legal
            </a>
          </li>
          <li>
            <a href="https://felgtbi.org/politica-de-cookies/" target="_blank" rel="noopener noreferrer">
              Accesibilidad
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-icons">
        <a href="https://x.com/FELGTBI" target="_blank" title="Síguenos en Twitter!" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/felgtbi/" target="_blank" title="Síguenos en Instagram!" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/FELGTBI" target="_blank" title="Síguenos en Facebook!" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.youtube.com/channel/UCI1f5B0GhLizU-7jhU-KOYQ" title="Síguenos en YouTube!" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/company/felgtbi/" title="Síguenos en LinkedIn!" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
