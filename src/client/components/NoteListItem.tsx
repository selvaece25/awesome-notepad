import React, { useMemo } from 'react';
import { NoteListItemProps } from '@/types';

const NoteListItem: React.FC<NoteListItemProps> = ({ selectNoteHandler, note, activeNote }) => {
  const { id, note: noteText } = note;
  const { id: activeNoteId } = activeNote;
  const truncateNote = () => noteText.length > 40 ? noteText.substring(0, 40) + '...' : noteText;
  return useMemo(() => {
    return (
      <li className="nav-item" onClick={() => selectNoteHandler(id)} key={id}>
        <a className={`nav-link ${activeNoteId === id ? 'active show' : ''}`} href="#">
          {truncateNote()}
        </a>
      </li>
    );
  }, [note, activeNote, selectNoteHandler]);
};

NoteListItem.displayName = 'Note List Item';
export default NoteListItem;
