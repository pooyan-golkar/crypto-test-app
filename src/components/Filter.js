import React, { useState } from 'react';
import ContentTest from './ContentTest';

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState('day');
  const filters = ['day', 'week', 'month', 'year'];
  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
  };

  return (
    <div className="container">
      <div className="filter-section">
        <div className="filter-container">
          {filters.map((filter) => (
            <div
              key={filter}
              className={`filter-option ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter)}
            >
              <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="filter content">
        <div className='row-intro'>
          <div className="lr-prc-sec col">
            <p className="lr-prc">Lower: $4.895</p>
          </div>
          <div className="hr-prc-sec col">
            <p className="hr-prc">Higher: $6.857</p>
          </div>
        </div>
        <div className='row-chart'>
          <ContentTest filter={activeFilter} />
        </div>
        <div className='row-scale'>
          <p className="scale-prc">1 BTC = $5.483</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
