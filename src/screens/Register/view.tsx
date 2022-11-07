import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
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
import { schema, ValidationSchema } from './validation';
import { useRegisterViewModel } from './view.model';

const { height } = Dimensions.get('window');

export function RegisterView({ navigation, route }: ScreenProps) {
  // prettier-ignore
  const {
    handleLogin,
    handleSignUp,
    secureMode,
    toggleSecure,
  } = useRegisterViewModel({ navigation, route });

  const { control, handleSubmit } = useForm<ValidationSchema>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ValidationSchema) => {
    handleSignUp(data.name, data.email, data.password, data.phone);
  };

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

          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <InputGroup>
                <Input.Label>Name</Input.Label>
                <Input.Root>
                  <Input.Field
                    placeholder="Name Lastname"
                    keyboardType="default"
                    autoCapitalize="words"
                    autoComplete="off"
                    autoCorrect={false}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    maxLength={40}
                  />
                </Input.Root>
                <Input.Error>{error?.message || ''}</Input.Error>
              </InputGroup>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <InputGroup>
                <Input.Label>E-mail</Input.Label>
                <Input.Root>
                  <Input.Field
                    placeholder="example@mail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    maxLength={60}
                  />
                </Input.Root>
                <Input.Error>{error?.message || ''}</Input.Error>
              </InputGroup>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <InputGroup>
                <Input.Label>Password</Input.Label>
                <Input.Root>
                  <Input.Field
                    placeholder="********"
                    keyboardType="default"
                    secureTextEntry={secureMode}
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    maxLength={10}
                  />
                  <Input.Icon onPress={toggleSecure}>
                    <Icon name={secureMode ? 'eye' : 'eye-off'} size={20} color="#666" />
                  </Input.Icon>
                </Input.Root>
                <Input.Error>{error?.message || ''}</Input.Error>
              </InputGroup>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <InputGroup>
                <Input.Label>Phone</Input.Label>
                <Input.Root>
                  <Input.MaskField
                    placeholder="(00) 00000-0000"
                    keyboardType="phone-pad"
                    maskType="phone-br"
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    onChangeText={(_, unmasked) => onChange(unmasked)}
                    onBlur={onBlur}
                    value={value}
                    maxLength={16}
                  />
                </Input.Root>
                <Input.Error>{error?.message || ''}</Input.Error>
              </InputGroup>
            )}
          />

          <Button onPress={handleSubmit(onSubmit)}>Sign up</Button>

          <GroupLabelFooter label="Already have account?" linkLabel="Login" onPress={handleLogin} />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
