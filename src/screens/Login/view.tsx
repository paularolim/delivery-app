import React from 'react';
import { Dimensions, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
import { useLoginViewModel } from './view.model';
import { schema, ValidationSchema } from './validation';
import { Animation } from '../../components/Animation';

const { height } = Dimensions.get('screen');

export function LoginView({ navigation, route }: ScreenProps) {
  // prettier-ignore
  const {
    handleLogin,
    handleSignUp,
    secureMode,
    toggleSecure,
    loading,
  } = useLoginViewModel({
    navigation,
    route,
  });

  const { control, handleSubmit } = useForm<ValidationSchema>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ValidationSchema) => {
    handleLogin(data.email, data.password);
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

          <TitlePage title="Login" />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <InputGroup>
                <Input.Label>E-mail</Input.Label>
                <Input.Root>
                  <Input.Field
                    placeholder="email@mail.com"
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
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
              <InputGroup>
                <Input.Label>Password</Input.Label>
                <Input.Root>
                  <Input.Field
                    placeholder="********"
                    keyboardType="default"
                    autoCapitalize="none"
                    secureTextEntry={secureMode}
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

          {loading ? (
            <Animation name="coffeeLoading" />
          ) : (
            <Button onPress={handleSubmit(onSubmit)}>Login</Button>
          )}

          <GroupLabelFooter
            label="Don't have an account?"
            linkLabel="Sign up"
            onPress={handleSignUp}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}
