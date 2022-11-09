import { ViewProps } from 'react-native';

export type MessageFeedbackTypes = 'success' | 'warning' | 'error'

export interface MessageFeedbackProps extends ViewProps {
  type: MessageFeedbackTypes;
  title?: string;
  message?: string;
}
