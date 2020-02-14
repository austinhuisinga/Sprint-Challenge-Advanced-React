import React from 'react';
import PlayaCard from './PlayaCard';
import tank from '../TRUMPTANK.png';
import patriot from '../TrumpPatriot.png';
import { 
  HeaderImg,
  HeaderDiv
} from '../stylez';

const PlayaList = props => {
  return (
    <div>
      <HeaderDiv>
        <HeaderImg src={patriot} />
        <h1>Playas</h1>
        <HeaderImg src={tank} />
      </HeaderDiv>
      {props.playaData.map(card => (
        <PlayaCard key={card.id} card={card} />
      ))}
    </div>
  )
}

export default PlayaList;