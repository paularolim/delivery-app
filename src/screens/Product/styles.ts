import {Dimensions, View} from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');
export const pageSize = width * 0.5;

export const Container = styled(View)`
  flex: 1;
  background-color: #ffffff;
`;

export const CircleContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
  position: absolute;
`;

export const List = styled(Animated.FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: width / 2 - pageSize / 2,
  },
})``;
