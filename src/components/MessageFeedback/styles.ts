import { Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MessageFeedbackTypes } from './types';

export const Container = styled(View) <{ type: MessageFeedbackTypes }>`
  ${({ type }) => {
    if (type === 'success') {
      return css`
        background-color: #d4edda;
      `;
    }
    if (type === 'warning') {
      return css`
        background-color: #fff3cd;
      `;
    }
    return css`
        background-color: #f8d7da;
      `;
  }}
  width: 100%;
  padding: 12px;
  border-radius: 8px;
`;

export const Title = styled(Text) <{ type: MessageFeedbackTypes }>`
  ${({ type }) => {
    if (type === 'success') {
      return css`
        color: #155724;
      `;
    }
    if (type === 'warning') {
      return css`
        color: #856404;
      `;
    }
    return css`
        color: #721c24;
      `;
  }}
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const Message = styled(Text) <{ type: MessageFeedbackTypes }>`
  ${({ type }) => {
    if (type === 'success') {
      return css`
        color: #155724;
      `;
    }
    if (type === 'warning') {
      return css`
        color: #856404;
      `;
    }
    return css`
        color: #721c24;
      `;
  }}
  font-size: 12px;
`;
