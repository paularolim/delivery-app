import React from 'react';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import { IconProps } from './types';

export function IconView({ name, color = '#000000', size = 24 }: IconProps) {
  return <VectorIcon name={name} size={size} color={color} />;
}
