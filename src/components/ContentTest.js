import React, { useEffect, useState, useCallback } from 'react';
import { LineChart, Line, ResponsiveContainer, Area } from 'recharts';

const fetchData = async (filter) => {
  let url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  const now = new Date();
  let startDate;

  switch (filter) {
    case 'day':
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      break;
    case 'week':
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
      break;
    case 'month':
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      break;
    case 'year':
      startDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
      break;
    default:
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30);
  }

  url += `?start=${startDate.toISOString().split('T')[0]}&end=${now.toISOString().split('T')[0]}`;

  const response = await fetch(url);
  const data = await response.json();
  return Object.keys(data.bpi).map(date => ({
    date,
    price: data.bpi[date]
  }));
};

const prepareData = (data) => {
  return data.map((item, index, arr) => {
    if (index === 0) {
      return { ...item, trend: 'neutral' };
    }
    return { ...item, trend: item.price > arr[index - 1].price ? 'up' : 'down' };
  });
};

const renderCustomDot = (props) => {
  const { cx, cy, index, data } = props;
  if (index === data.length - 1) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={8}
        fill="url(#customGradient)"
        stroke="url(#customGradient)"
        strokeWidth={4}
      />
    );
  }
  return null;
};

const ContentTest = ({ filter }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchAndPrepareData = useCallback(async () => {
    setLoading(true);
    const rawData = await fetchData(filter);
    console.log('Raw Data:', rawData);
    const preparedData = prepareData(rawData);
    console.log('Prepared Data:', preparedData);
    setData(preparedData);
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    fetchAndPrepareData();
  }, [fetchAndPrepareData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={130}>
      
      <LineChart data={data}>
        <defs>
          <linearGradient id="customGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff8f17" />
            <stop offset="80%" stopColor="#ffc843" />
          </linearGradient>
          
        </defs>
        <Area
          type="monotone"
          dataKey="price"
          stroke="none"
          fill="#000"
          isAnimationActive={false} 
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="url(#customGradient)"
          strokeWidth={4}
          dot={(props) => renderCustomDot({ ...props, data })}
        />

      </LineChart>

    </ResponsiveContainer>
  );
};

export default ContentTest;
