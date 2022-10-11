import React from 'react';
import { Extrapolate, interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Container, Info, Price, ProductImage, squareSize, Title, Wrapper } from './styles';
import { PageProps } from './types';

const image = require('../../../../assets/images/coffee-cup.png');

export function Page({ index, id, title, price, translateX }: PageProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * squareSize, index * squareSize, (index + 1) * squareSize],
      [0.7, 1, 0.7],
      Extrapolate.CLAMP,
    );

    return { transform: [{ scale: withSpring(scale) }] };
  });

  const infoStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [(index - 1) * squareSize, index * squareSize, (index + 1) * squareSize],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return { opacity: withSpring(opacity) };
  });

  return (
    <Container key={id}>
      <Wrapper style={animatedStyle}>
        <ProductImage source={image} />
        <Info style={infoStyle}>
          <Title>{title}</Title>
          <Price>{price}</Price>
        </Info>
      </Wrapper>
    </Container>
  );
}
