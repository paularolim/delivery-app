import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

import { BackgroundCircles } from '../../components/BackgroundCircles';
import { Button } from '../../components/Button';
import { GroupLabelFooter } from '../../components/GroupLabelFooter';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { TitlePage } from '../../components/TitlePage';
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
  } = useRegisterViewModel({ navigation, route });

  return (
    <View style={{ height, backgroundColor: '#fff' }}>
      <BackgroundCircles />

      <View style={{ position: 'absolute', width: '100%', height }}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingVertical: 56,
            alignItems: 'center',
          }}
        >
          <Logo />
          <TitlePage title="Sign up" />

          <Input title="Name" placeholder="Name Lastname" onChangeText={setName} />
          <Input title="Email" placeholder="email@mail.com" onChangeText={setEmail} />
          <Input title="Password" placeholder="*********" onChangeText={setPassword} />
          <Input title="Phone" placeholder="(00) 00000-0000" onChangeText={setPhone} />

          <Button onPress={handleSignUp}>Sign up</Button>

          <GroupLabelFooter label="Already have account?" linkLabel="Login" onPress={handleLogin} />
        </ScrollView>
      </View>
    </View>
  );
}
