import React from 'react';

import { Title } from './styles';
import { TitlePageProps } from './types';

export function TitlePageView({ title }: TitlePageProps) {
  return <Title>{title}</Title>;
}
