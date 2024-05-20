import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles/styles.scss';

function App() {
  return (
    <div className="main wrapper crypto-app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
