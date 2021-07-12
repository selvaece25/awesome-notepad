import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import TakeNoteApp from '@/containers/TakeNoteApp';
import '@/style.css';

const StartApp = () => {
  return (
    <ToastProvider autoDismiss={true} autoDismissTimeout={2000}>
      <TakeNoteApp />
    </ToastProvider>
  );
};

export default StartApp;
