import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Transaction() {
  const handleTransactionClick = (transaction) => {
    console.log(`Transaction: ${transaction}`);
  };

  return (
    <div className="trans-container">
      <div className="trans-col buy content" onClick={() => handleTransactionClick('buy')}>
        <div className='dollar-icon'>
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <span>Buy BTC</span>
      </div>
      <div className="trans-col sell content" onClick={() => handleTransactionClick('sell')}>
        <div className='dollar-icon'>
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <span>Sell BTC</span>
      </div>
    </div>
  );
}

export default Transaction;
