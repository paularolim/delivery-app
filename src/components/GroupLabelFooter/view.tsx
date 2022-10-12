import React from 'react';
import { Label, LabelGroup, LinkLabel } from './styles';
import { GroupLabelFooterProps } from './types';

export function GroupLabelFooterView({ label, linkLabel, onPress }: GroupLabelFooterProps) {
  return (
    <LabelGroup>
      {label && <Label>{label}</Label>}
      {linkLabel && onPress && <LinkLabel onPress={onPress}>{` ${linkLabel}`}</LinkLabel>}
    </LabelGroup>
  );
}
