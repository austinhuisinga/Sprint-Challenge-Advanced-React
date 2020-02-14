import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  width: 30%;
`;

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
  display: flex;
  align-items: center;
`

export {
  CardDiv,
  CardImg,
  ContainerDiv,
  HeaderImg,
  HeaderDiv
};