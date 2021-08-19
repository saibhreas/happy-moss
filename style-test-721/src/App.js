//Front end only imports
import React from 'react';
import Header from './components/Header'
import Homepage from './pages/Homepage'

import './default.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
        <h3>this is not on the home page </h3>
      </div> 
    </div>
  );
}

export default App;
