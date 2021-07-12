import { ConstantItemProps } from '@/types';

export const AppConstant: ConstantItemProps = {
APP_TITLE: 'My awesome Notepad',
WELCOME_TITLE: 'Welcome to My Awesome Notepad!',
WELCOME_CONTENT: 'Awesome Notepad is a free and Have some fun on Awesome Notepad.',
FORM_PROCESSING: 'Processing ...',
NOTE_CREATE_BUTTON:'Save',
NOTE_UPATE_BUTTON:'Update',
NOTE_LOADING:'Loading please wait .....',
NOTE_NO_RECORD:'Notes Not Found',
NOTE_DETAIL_LOADING:'Fetching please wait .....',
};


export const editorOptions = {
  autoCloseBrackets: true,
  cursorScrollMargin: 48,
  lineNumbers: false,
  styleActiveLine: true,
  viewportMargin: 70,
};

export const defaultActiveNote = { id: null, note: null };