import { TextInputProps, TextProps, TouchableOpacityProps, ViewProps } from 'react-native';
import { TextInputMaskProps } from 'react-native-text-input-mask';

export type MasksType = 'phone-br'

export interface InputFieldProps extends TextInputProps { }

export interface InputMaskFieldProps extends TextInputMaskProps {
  maskType: MasksType
}

export interface InputLabelProps extends TextProps { }

export interface InputRootProps extends ViewProps { }

export interface InputIconProps extends TouchableOpacityProps { }
