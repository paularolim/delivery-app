import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FooterContainer,
  HeaderContainer,
  Info,
  ItemContainer,
  ItemLabel,
  List,
  Name,
  Profile,
} from './styles';
import { DrawerMenuProps } from './types';

export function DrawerMenu({
  isLoggedIn,
  onPressLogin,
  onPressProfile,
  onPressLogout,
}: DrawerMenuProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderContainer onPress={isLoggedIn ? onPressProfile : onPressLogin}>
        <Icon name="user" size={40} color="#000000" />
        {isLoggedIn ? (
          <Info>
            <Name>Username</Name>
            <Profile>View profile</Profile>
          </Info>
        ) : (
          <Info>
            <Name>Did you like?</Name>
            <Profile>Login</Profile>
          </Info>
        )}
        <Icon name="chevron-right" size={20} color="#cccccc" />
      </HeaderContainer>

      <List>
        <ItemContainer>
          <Icon name="home" size={30} color="#000000" />
          <ItemLabel>Home</ItemLabel>
        </ItemContainer>
      </List>

      {isLoggedIn && (
        <FooterContainer>
          <ItemContainer onPress={onPressLogout}>
            <Icon name="sign-out" size={30} color="#000000" />
            <ItemLabel>Sair</ItemLabel>
          </ItemContainer>
        </FooterContainer>
      )}
    </SafeAreaView>
  );
}
