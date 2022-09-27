import Animated from 'react-native-reanimated';

export interface PageProps {
  index: number;
  id: string;
  title: string;
  price: string;
  translateX: Animated.SharedValue<number>;
}
