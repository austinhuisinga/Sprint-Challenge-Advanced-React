import React from 'react';
import PlayaCard from './PlayaCard';


const PlayaList = props => {
  return (
    <div>
      {props.playaData.map(card => (
        <PlayaCard key={card.id} card={card} />
      ))}
    </div>
  )
}

export default PlayaList;