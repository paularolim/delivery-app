import Icon from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

export interface IconProps {
  name: keyof typeof Icon;
  size?: number;
  color?: string;
}
