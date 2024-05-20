import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEllipsisVertical, faColumns, faSquare, faUpload, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="left col">
          <div className="arrow-icon">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </div>
        <div className="middle col">
          <h1 className="title">Bitcoin Wallet</h1>
        </div>
        <div className="right col">
        <div
            className={`menu-icon ${menuOpen ? 'rotate' : ''}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
      {menuOpen && (
        <>
          <div className="menu">
            <div className="menu-item">
              <span className="menu-text">Edit</span>
              <FontAwesomeIcon icon={faColumns} className="menu-icon-item" />
            </div>
            <FontAwesomeIcon icon="fa-light fa-rectangle" />
            <hr />
            <div className="menu-item">
              <span className="menu-text">Courier info</span>
              <FontAwesomeIcon icon={faSquare} className="menu-icon-item" />
            </div>
            <hr />
            <div className="menu-item">
              <span className="menu-text">Share</span>
              <FontAwesomeIcon icon={faUpload} className="menu-icon-item" />
            </div>
            <hr />
            <div className="menu-item">
              <span className="menu-text">Remove</span>
              <FontAwesomeIcon icon={faMinusCircle} className="menu-icon-item" />
            </div>
          </div>
        <div className="overlay" onClick={toggleMenu}></div>
        </>
      )}
    </header>
  );
};

export default Header;
