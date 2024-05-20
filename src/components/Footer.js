import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-button">
          <FontAwesomeIcon icon={faWallet} />
        </div>
        <div className="footer-button">
          <FontAwesomeIcon icon={faBandcamp} />
        </div>
        <div className="footer-button">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="footer-button">
          <FontAwesomeIcon icon={faCog} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;