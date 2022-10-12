import React from 'react';
import { Container, Info, Picture, Price, Title } from './styles';
import { ProductListProps } from './types';

const image = require('../../assets/images/coffee-cup.png');

export function ProductList({ title, price }: ProductListProps) {
  return (
    <Container>
      <Picture source={image} />
      <Info>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </Info>
    </Container>
  );
}
