import React, { useState } from 'react';
import { usePatriotMode } from '../hooks/enablePatriotMode';
import patriot from '../TrumpPatriot.png';
import { 
  CardData,
  HeaderDiv,
  EnactButton
} from '../stylez';

const Header = () => {
  const [patriotMode, setPatriotMode] = usePatriotMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setPatriotMode(!patriotMode);
  };

  return (
    <div>
      <HeaderDiv>
        <h1>Playas</h1>
      </HeaderDiv>
      <div className="patriot-mode__toggle">
        <EnactButton
          onClick={toggleMode}
          className={patriotMode ? 'toggle toggled' : 'toggle'}
          data-testid='patriotModeButton'
        >
          Patriot Mode
        </EnactButton>
      </div>
    </div>
  );
};

export default Header;