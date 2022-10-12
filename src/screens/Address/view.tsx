import React from 'react';
import { Dimensions, ScrollView } from 'react-native';

import { BackgroundCircles } from '../../components/BackgroundCircles';
import { Button } from '../../components/Button';
import { GroupLabelFooter } from '../../components/GroupLabelFooter';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { TitlePage } from '../../components/TitlePage';
import { Container, Label, ButtonArea } from './styles';

export function AddressView() {
  return (
    <ScrollView style={{ height: Dimensions.get('window').height }}>
      <Container>
        <BackgroundCircles />
        <Logo />

        <TitlePage title="Address" />
        <Label>Tell us where to shipp your shopping.</Label>
        <Label>You can add other addresses later.</Label>

        <Input title="Nickname" placeholder="Ex. Home" />
        <Input title="Zipcode" placeholder="00000-000" />
        <Input title="State" placeholder="State" />
        <Input title="City" placeholder="City" />
        <Input title="Street name" placeholder="Street name" />
        <Input title="Neighbourhood" placeholder="Neighbourhood" />
        <Input title="Number" placeholder="Number" />
        <Input title="Complement" placeholder="Complement" />

        <ButtonArea>
          <Button>Send</Button>
        </ButtonArea>
        <GroupLabelFooter linkLabel="Send later" />
      </Container>
    </ScrollView>
  );
}
