import React from 'react';

import { BackgroundCircles } from '../../components/BackgroundCircles';
import { Button } from '../../components/Button';
import { GroupLabelFooter } from '../../components/GroupLabelFooter';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { TitlePage } from '../../components/TitlePage';

import { Container } from './styles';
import { ScreenProps } from './types';
import { useLoginViewModel } from './view.model';

export function LoginView({ navigation, route }: ScreenProps) {
  const { handleLogin, handleSignUp, setEmail, setPassword } = useLoginViewModel({
    navigation,
    route,
  });

  return (
    <Container>
      <BackgroundCircles />

      <Logo />

      <TitlePage title="Login" />

      <Input
        title="Email"
        placeholder="email@mail.com"
        onChangeText={setEmail}
        keyboardType="default"
        autoCapitalize="none"
      />

      <Input
        title="password"
        placeholder="*****"
        linkLabel="Forgot password?"
        onChangeText={setPassword}
        keyboardType="default"
        autoCapitalize="none"
      />

      <Button onPress={handleLogin}>Login</Button>

      <GroupLabelFooter label="Don't have an account?" linkLabel="Sign up" onPress={handleSignUp} />
    </Container>
  );
}
