import { ConstantItemProps } from '@/types';

export const ErrorCode: ConstantItemProps = {
  GENERAL_ERR: 'General error',
  APP_CATCH_ERR: 'Data cannot be processed by Notepad application',
  APP_CATCH_DESCRIPTION: 'Data cannot be processed by this application',
  401: 'Unauthorized',
  400: 'Unauthorized',
  403: "You don't have the necessary permissions to perform this action",
  404: '404 Not Found',
  500: 'Unable to process your request',
  503: 'Unable to process your request',
  504: '504 Timeout',
  NOTE_LIST_FAILED: 'Data cannot be processed.',
  NOTE_CREATE_FAILED: 'Note Create is Failed',
  NOTE_UPDATE_FAILED: 'Note update is failed',
  NOTE_DETAIL_FAILED: 'Note details failed to render'
  };
