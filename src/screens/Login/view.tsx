import React from 'react';

import { BackgroundCircles } from '../../components/BackgroundCircles';
import { Button } from '../../components/Button';
import { GroupLabelFooter } from '../../components/GroupLabelFooter';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { TitlePage } from '../../components/TitlePage';

import { Container } from './styles';

export function LoginView() {
  return (
    <Container>
      <BackgroundCircles />
      <Logo />
      <TitlePage title="Login" />

      <Input title="Email" placeholder="email@mail.com" />

      <Input
        title="password"
        placeholder="password"
        linkLabel="Forgot password?"
      />

      <Button>Login</Button>

      <GroupLabelFooter
        label="Don't have an account?"
        linkLabel="Sign up"
        onPress={() => {}}
      />
    </Container>
  );
}
