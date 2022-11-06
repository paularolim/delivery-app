import React from 'react';
import { Container, IconContainer, Label, RNInput } from './styles';
import { InputFieldProps, InputIconProps, InputLabelProps, InputRootProps } from './types';

function InputRoot({ children }: InputRootProps) {
  return <Container>{children}</Container>;
}

function InputField({ ...rest }: InputFieldProps) {
  return <RNInput placeholderTextColor="#333" {...rest} />;
}

function InputIcon({ children, ...rest }: InputIconProps) {
  return <IconContainer {...rest}>{children}</IconContainer>;
}

function InputLabel({ children }: InputLabelProps) {
  return <Label>{children}</Label>;
}

InputRoot.displayName = 'Input.Root';
InputField.displayName = 'Input.Field';
InputIcon.displayName = 'Input.Icon';
InputLabel.displayName = 'Input.Label';

export const Input = {
  Root: InputRoot,
  Field: InputField,
  Icon: InputIcon,
  Label: InputLabel,
};
