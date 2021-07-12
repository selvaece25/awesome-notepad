export type ConstantItemProps = {
  [key: string]: string;
};

export interface NoRecordProps {
  message: string | null;
}

export interface NoteItem {
  id: number;
  note: string;
}

export interface NoteEditorProps {
  isAddNote: boolean;
  saveNoteHandler: (noteId: number, noteText: string) => void;
  isFormProcessing: boolean;
  activeNote: any;
}

export interface CodeMirrorEditorProps {
  noteText: string;
  ChangeTextHandler: (value: string )=> void;
}

export interface ButtonProps {
  onClickHandler: () => void;
  text: string;
  classes: string | null;
  canShow: boolean;
}

export interface WelcomeNoteProps {
  title: string | null;
  message: string | null;
}
export interface HeaderProps {
  showNewNote: () => void;
  isLoading: boolean;
}

export interface NoteListProps {
  selectNoteHandler: (id: number) => void;
  activeNote: any;
  notes: NoteItem[]
  isLoading: boolean;
}

export interface NoteListItemProps {
  selectNoteHandler: (id: number) => void;
  activeNote: NoteItem;
  note: NoteItem
}

export interface RequestProps {
  method: 'GET' | 'POST' | 'PUT';
  url: string;
  payloadData?: any;
  sucessMessage?: string;
}