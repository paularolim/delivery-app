import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled(TouchableOpacity)`
  margin: 0px 24px;
  padding: 24px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

export const Info = styled(View)`
  flex: 1;
  padding: 0px 0px 0px 24px;
`;

export const Name = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

export const Profile = styled(Text)`
  font-size: 15px;
  color: #cccccc;
`;

export const List = styled(View)`
  padding: 12px 24px;
  padding-top: 48px;
  flex: 1;
`;

export const ItemContainer = styled(TouchableOpacity)`
  padding: 12px 0px;
  flex-direction: row;
  align-items: center;
`;

export const ItemLabel = styled(Text)`
  margin-left: 24px;
  font-size: 20px;
  color: #000000;
`;

export const FooterContainer = styled(View)`
  margin: 0px 24px;
  padding: 24px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: #cccccc;
`;
