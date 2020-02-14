import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import tank from '../TRUMPTANK.png';
import patriot from '../TrumpPatriot.png';
import { 
  HeaderImg,
  HeaderDiv
} from '../stylez';

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <HeaderDiv>
        <HeaderImg src={patriot} />
        <h1>Playas</h1>
        <HeaderImg src={tank} />
      </HeaderDiv>
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >
          Dark
        </button>
      </div>
    </div>
  );
};

export default Header;