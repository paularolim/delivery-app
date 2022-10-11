import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { colors } from '../../../../common/colors';
import { ProductList } from '../../../../components/ProductList';
import { coffees } from '../../mocks';
import { Container, ItemContainer, ItemLabel, Title } from './styles';

const scrollOptions = [
  { id: '1', title: 'Drinks' },
  { id: '2', title: 'Candies' },
];

type AlsoBuyProps = {
  currentIndex: SharedValue<number>;
};

export function AlsoBuy({ currentIndex }: AlsoBuyProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      currentIndex.value,
      colors.map((_, index) => index),
      colors,
    );
    return { backgroundColor };
  });

  const animatedText = useAnimatedStyle(() => {
    const color = interpolateColor(
      currentIndex.value,
      colors.map((_, index) => index),
      ['#000', '#fff', '#fff', '#fff', '#000'],
    );
    return { color };
  });

  const HSeparator = useCallback(() => <View style={{ width: 12 }} />, []);
  const VSeparator = useCallback(() => <View style={{ height: 12 }} />, []);

  const RenderHeader = useCallback(
    () => (
      <>
        <Title>Also Buy</Title>
        <View style={{ paddingBottom: 12 }}>
          <FlatList
            data={scrollOptions}
            renderItem={({ item }) => (
              <ItemContainer style={animatedStyle}>
                <ItemLabel style={animatedText}>{item.title}</ItemLabel>
              </ItemContainer>
            )}
            horizontal
            ItemSeparatorComponent={HSeparator}
          />
        </View>
      </>
    ),
    [],
  );

  return (
    <Container>
      <FlatList
        data={coffees}
        renderItem={({ item }) => <ProductList {...item} />}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
        style={{ flex: 1 }}
        ItemSeparatorComponent={VSeparator}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={RenderHeader}
      />
    </Container>
  );
}
