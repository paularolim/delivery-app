import React from 'react';

import { Input, InputGroup, Label, LinkInput } from './styles';
import { InputViewProps } from './types';

export function InputView({ title, linkLabel, ...rest }: InputViewProps) {
  return (
    <InputGroup>
      <Label>{title}</Label>
      <Input placeholderTextColor="#666" {...rest} />

      <LinkInput>{linkLabel}</LinkInput>
    </InputGroup>
  );
}
