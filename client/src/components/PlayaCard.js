import React from 'react';
import { 
  CardDiv,
  ContainerDiv
 } from '../stylez';

const PlayaCard = props => {
  return (
    <ContainerDiv>
      <CardDiv className='card-container'>
        <div className='user-data'>
          <h1>{props.card.name}</h1>
          <h4>{props.card.country}</h4>
        </div>
      </CardDiv>
    </ContainerDiv>
  )
}

export default PlayaCard;