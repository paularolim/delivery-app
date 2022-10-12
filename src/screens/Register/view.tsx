import React from 'react';

import { BackgroundCircles } from '../../components/BackgroundCircles';
import { Button } from '../../components/Button';
import { GroupLabelFooter } from '../../components/GroupLabelFooter';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { TitlePage } from '../../components/TitlePage';

import { Container } from './styles';

export function RegisterView() {
  return (
    <Container>
      <BackgroundCircles />
      <Logo />

      <TitlePage title="Sign up" />

      <Input title="Name" placeholder="Name Lastname" />
      <Input title="Email" placeholder="email@mail.com" />
      <Input title="Password" placeholder="*********" />
      <Input title="Phone" placeholder="(00) 00000-0000" />

      <Button>Sign up</Button>

      <GroupLabelFooter
        label="Already have account?"
        linkLabel="Login"
        onPress={() => {}}
      />
    </Container>
  );
}
