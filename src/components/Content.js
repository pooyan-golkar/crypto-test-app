import React, { useState } from 'react';
import Filter from './Filter';
import Transaction from './Transaction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBtc } from '@fortawesome/free-brands-svg-icons';
import '../styles/styles.scss';
const dwIcon = require('../assets/images/down-arrow.png');

function Content() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="container">
      <div className={`crypto content ${expanded ? 'expanded' : ''}`}>
        <div className='row-intro'>
          <div className='lt-crypto col'>
            <div className='crypto-icon'>
              <FontAwesomeIcon icon={faBtc} />
            </div>
            <div className='crypto-name'>
              <span>Bitcoin</span>
            </div>
          </div>
          <div className='rt-crypto col'>
            <span>BTC</span>
          </div>
        </div>
        <div className='row-amount'>
          <span className="crypto-amount">3.529020 BTC</span>
        </div>
        <div className='row-prc'>
          <div className='lt-crypto-prc'>
            <div className="crypto-price">$19.153 USD</div>
          </div>
          <div className='rt-crypto-prc'>
              <span className='crypto-percent'>- 2.32%</span>
            </div>
        </div>
        <div className='row-footer'>
          <div className='btn-down'  onClick={toggleExpand}>
            <img className={expanded ? 'img-dw-icon-collapse' : 'img-dw-icon'} src={dwIcon} alt="Icon" />
          </div>
        </div>
      </div>
      <Filter />
      <Transaction />
    </div>
  );
}

export default Content;
