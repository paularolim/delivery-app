import React, { useCallback } from 'react';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { ListRenderItemInfo } from 'react-native';
import { coffees, DataProduct } from './mocks';
import { Page } from './components/Page';
import { CircleBackground } from './components/CircleBackground';
import { CircleContainer, Container, List, pageSize } from './styles';
import { AlsoBuy } from './components/AlsoBuy';

export function ProductView() {
  const currentIndex = useSharedValue(0);
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
    currentIndex.value = event.contentOffset.x / pageSize;
  });

  const RenderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<DataProduct>) => (
      <Page
        index={index}
        id={item.id}
        title={item.title}
        price={item.price}
        translateX={translateX}
      />
    ),
    [translateX],
  );

  return (
    <Container>
      <CircleContainer>
        <CircleBackground currentIndex={currentIndex} />
      </CircleContainer>

      <List
        data={coffees}
        renderItem={RenderItem}
        snapToInterval={pageSize}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={64}
      />

      <AlsoBuy currentIndex={currentIndex} />
    </Container>
  );
}
