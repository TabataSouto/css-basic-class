import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Search from './components/search/Search';
import Champions from './components/champions/Champions';

function App() {
  return (
    <section className="App">
      <Header />
      <div className="container">
        <Search />
        <Champions /> 
      </div>
    </section>
  );
}

export default App;
