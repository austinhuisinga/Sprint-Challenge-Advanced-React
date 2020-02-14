import React from 'react';
import { 
  CardDiv,
  CardData,
  ContainerDiv
 } from '../stylez';

const PlayaCard = props => {
  return (
    <ContainerDiv>
      <CardDiv className='card-container'>
        <CardData className='user-data'>
          <h1>{props.card.name}</h1>
          <h4>{props.card.country}</h4>
        </CardData>
      </CardDiv>
    </ContainerDiv>
  )
}

export default PlayaCard;