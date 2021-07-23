import React from 'react';
import Header from './components/Header'
import './default.scss';


function App() {
  return (
    <div className="App">
      <h2>I happen first</h2>
      <Header>
        <h3>I happen second</h3>
      </Header> 
      <h3>this should be below the header </h3>
    </div>
  );
}

export default App;
