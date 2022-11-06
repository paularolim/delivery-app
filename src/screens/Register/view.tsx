import React from 'react';
import { Dimensions, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { BackgroundCircles } from '../../components/BackgroundCircles';
import { Button } from '../../components/Button';
import { GroupLabelFooter } from '../../components/GroupLabelFooter';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { TitlePage } from '../../components/TitlePage';
import { InputGroup } from './styles';
import { ScreenProps } from './types';
import { useRegisterViewModel } from './view.model';

const { height } = Dimensions.get('window');

export function RegisterView({ navigation, route }: ScreenProps) {
  // prettier-ignore
  const {
    handleLogin,
    handleSignUp,
    setEmail,
    setName,
    setPassword,
    setPhone,
    secureMode,
    toggleSecure,
  } = useRegisterViewModel({ navigation, route });

  return (
    <View style={{ height, backgroundColor: '#fff', overflow: 'hidden' }}>
      <BackgroundCircles />

      <View style={{ position: 'absolute', width: '100%', height }}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingVertical: 56,
            alignItems: 'center',
          }}
        >
          <Logo />
          <TitlePage title="Sign up" />

          <InputGroup>
            <Input.Label>Name</Input.Label>
            <Input.Root>
              <Input.Field
                placeholder="Name Lastname"
                onChangeText={setName}
                keyboardType="default"
                autoCapitalize="words"
              />
            </Input.Root>
          </InputGroup>

          <InputGroup>
            <Input.Label>E-mail</Input.Label>
            <Input.Root>
              <Input.Field
                placeholder="example@mail.com"
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
                secureTextEntry={secureMode}
              />
              <Input.Icon onPress={toggleSecure}>
                <Icon name={secureMode ? 'eye' : 'eye-off'} size={20} color="#666" />
              </Input.Icon>
            </Input.Root>
          </InputGroup>

          <InputGroup>
            <Input.Label>Phone</Input.Label>
            <Input.Root>
              <Input.Field
                placeholder="(00) 00000-0000"
                onChangeText={setPhone}
                keyboardType="phone-pad"
                autoCapitalize="none"
              />
            </Input.Root>
          </InputGroup>

          <Button onPress={handleSignUp}>Sign up</Button>

          <GroupLabelFooter label="Already have account?" linkLabel="Login" onPress={handleLogin} />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
