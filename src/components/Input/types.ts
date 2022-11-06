import { TextInputProps, TextProps, TouchableOpacityProps, ViewProps } from 'react-native';

export type MasksType = 'phone-br'

export interface InputFieldProps extends TextInputProps {
  maskType?: MasksType
}

export interface InputLabelProps extends TextProps { }

export interface InputRootProps extends ViewProps { }

export interface InputIconProps extends TouchableOpacityProps { }
