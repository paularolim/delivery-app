import React from 'react';
import { Container, Error, IconContainer, Label, RNInput, RNMaskInput } from './styles';
import {
  InputFieldProps,
  InputIconProps,
  InputLabelProps,
  InputRootProps,
  MasksType,
} from './types';

function InputRoot({ children }: InputRootProps) {
  return <Container>{children}</Container>;
}

const masks: Record<MasksType, string> = { 'phone-br': '([00]) [0] [0000] [0000]' };

function InputField({ maskType, ...rest }: InputFieldProps) {
  if (maskType) {
    const mask = masks[maskType];
    return <RNMaskInput mask={mask} placeholderTextColor="#333" {...rest} />;
  }

  return <RNInput placeholderTextColor="#333" {...rest} />;
}

function InputIcon({ children, ...rest }: InputIconProps) {
  return <IconContainer {...rest}>{children}</IconContainer>;
}

function InputLabel({ children }: InputLabelProps) {
  return <Label>{children}</Label>;
}

function InputError({ children }: InputLabelProps) {
  return <Error>{children}</Error>;
}

InputRoot.displayName = 'Input.Root';
InputField.displayName = 'Input.Field';
InputIcon.displayName = 'Input.Icon';
InputLabel.displayName = 'Input.Label';
InputError.displayName = 'Input.Error';

export const Input = {
  Root: InputRoot,
  Field: InputField,
  Icon: InputIcon,
  Label: InputLabel,
  Error: InputError,
};
