import { TextInputProps } from 'react-native';

export interface InputViewProps extends TextInputProps {
  title: string;
  linkLabel?: string;
}
