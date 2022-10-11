import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function Login({navigation}: ScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Product')}
        style={{
          backgroundColor: '#ccc',
          paddingVertical: 12,
          paddingHorizontal: 48,
          borderRadius: 12,
        }}>
        <Text>Explorar</Text>
      </TouchableOpacity>
    </View>
  );
}
