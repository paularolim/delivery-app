import React from 'react';
import { Container, Info, Picture, Price, Title } from './styles';

const image = require('../../assets/images/coffee-cup.png');

type ProductListProps = {
  title: string;
  price: string;
};

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
