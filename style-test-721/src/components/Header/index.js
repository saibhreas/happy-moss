import React from 'react';
import './styles.scss';

import Logo from './../../assets/SabLogo.png'

const Header = props => {
  return (
   <header className="header">
     <div className="wrap">
       <div className="logo">
        <img src={Logo} alt="Saibhreas Logo" />
       </div>
     </div>
   </header>
  );
};

export default Header;
