import React from 'react';
import { Container, Message, Title } from './styles';
import { MessageFeedbackProps } from './types';

export function MessageFeedbackView({ type, title, message, ...rest }: MessageFeedbackProps) {
  return (
    <Container type={type} {...rest}>
      <Title type={type}>{title}</Title>
      <Message type={type}>{message}</Message>
    </Container>
  );
}
