import React from 'react';

import { BackgroundCircles } from '../../components/BackgroundCircles';
import { Button } from '../../components/Button';
import { GroupLabelFooter } from '../../components/GroupLabelFooter';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { TitlePage } from '../../components/TitlePage';

import { Container, InputGroup } from './styles';
import { ScreenProps } from './types';
import { useLoginViewModel } from './view.model';

export function LoginView({ navigation, route }: ScreenProps) {
  // eslint-disable-next-line max-len
  const { handleLogin, handleSignUp, setEmail, setPassword, showPassword, toggleSecure } = useLoginViewModel({
    navigation,
    route,
  });

  return (
    <Container>
      <BackgroundCircles />

      <Logo />

      <TitlePage title="Login" />

      <InputGroup>
        <Input.Label>E-mail</Input.Label>
        <Input.Root>
          <Input.Field
            placeholder="email@mail.com"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Input.Root>
      </InputGroup>

      <InputGroup>
        <Input.Label>Password</Input.Label>
        <Input.Root>
          <Input.Field
            placeholder="********"
            onChangeText={setPassword}
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry={showPassword}
          />
          <Input.Icon onPress={toggleSecure}>
            <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#666" />
          </Input.Icon>
        </Input.Root>
      </InputGroup>

      <Button onPress={handleLogin}>Login</Button>

      <GroupLabelFooter label="Don't have an account?" linkLabel="Sign up" onPress={handleSignUp} />
    </Container>
  );
}
