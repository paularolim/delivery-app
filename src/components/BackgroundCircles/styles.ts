import { View } from 'react-native';
import styled from 'styled-components/native';

const circle1 = 278;
const circle2 = 304;

export const Circles = styled(View)`
  position: absolute;
`;

export const Circle1 = styled(View)`
  width: ${circle1}px;
  height: ${circle1}px;
  background-color: #ffc529;
  opacity: 0.5;
  border-radius: ${circle1 / 2}px;
  left: -50px;
  top: -175px;
`;
export const Circle2 = styled(View)`
  width: ${circle2}px;
  height: ${circle2}px;
  background-color: #fe724c;
  opacity: 0.5;
  border-radius: ${circle2 / 2}px;
  left: -155px;
  top: -330px;
`;
