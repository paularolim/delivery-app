import React from 'react';

import { ButtonLogin, LabelButton } from './styles';
import { ButtonProps } from './types';

export function ButtonView({ children, ...rest }: ButtonProps) {
  return (
    <ButtonLogin {...rest}>
      <LabelButton>{children}</LabelButton>
    </ButtonLogin>
  );
}
