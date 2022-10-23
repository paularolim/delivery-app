import React from 'react';
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

export function DrawerMenu() {
  return (
    <>
      <HeaderContainer>
        <Icon name="user" size={40} color="#000000" />
        <Info>
          <Name>Username</Name>
          <Profile>View profile</Profile>
        </Info>
        <Icon name="chevron-right" size={20} color="#cccccc" />
      </HeaderContainer>

      <List>
        <ItemContainer>
          <Icon name="home" size={30} color="#000000" />
          <ItemLabel>Home</ItemLabel>
        </ItemContainer>
      </List>

      <FooterContainer>
        <ItemContainer>
          <Icon name="sign-out" size={30} color="#000000" />
          <ItemLabel>Sair</ItemLabel>
        </ItemContainer>
      </FooterContainer>
    </>
  );
}
