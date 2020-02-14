import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  width: 30%;
  // opacity: 0.2;
  background: rgba(255,255,255,0.5);
`;

const CardData = styled.div`
  
`

const CardImg = styled.img`
  width: 50%;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HeaderImg = styled.img`
  width: 40%;
`;

const HeaderDiv = styled.div`
  // display: flex;
  // align-items: center;
  // text-align: center;
`

const EnactButton = styled.button`
  background: #ba0000;
  padding: 3% 1.5%;
  border: 1px solid black;
  border-radius: 10%;
  margin-bottom: 5px;
  &:hover {
    background: blue;
  }
`

export {
  CardDiv,
  CardImg,
  ContainerDiv,
  HeaderImg,
  HeaderDiv,
  CardData,
  EnactButton
};