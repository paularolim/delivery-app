import React from 'react';
import {Container, Info, Picture, Price, Title} from './styles';

type ProductListProps = {
  title: string;
  price: string;
};

export function ProductList({title, price}: ProductListProps) {
  return (
    <Container>
      <Picture source={require('../../assets/images/coffee-cup.png')} />
      <Info>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </Info>
    </Container>
  );
}
