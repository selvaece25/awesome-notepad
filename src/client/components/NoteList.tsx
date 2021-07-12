import React, { useMemo } from 'react';
import { NoteListProps, NoteItem } from '@/types';
import NoRecords from '@/components/NoRecords';
import NoteListItem from '@/components/NoteListItem';
import { AppConstant } from '@/constants/appConstants';

const NoteList: React.FC<NoteListProps> = ({ notes, activeNote, selectNoteHandler, isLoading }) => {
  const hasNotes = Boolean(notes.length);
  const defaultText = isLoading ? AppConstant['NOTE_LOADING'] : AppConstant['NOTE_NO_RECORD'];
  const noteListView = notes
    .sort((a: NoteItem, b: NoteItem) => (a.id < b.id ? 1 : -1))
    .map((note: NoteItem) => (
      <NoteListItem
        selectNoteHandler={(id: number) => selectNoteHandler(id)}
        activeNote={activeNote}
        note={note}
        key={note.id}
      />
    ));

  const renderNotes = () => {
    return hasNotes ? (
      <ul className="nav nav-tabs flex-column mb-5 fill border-right" data-testid="note_list">
        { noteListView }
      </ul>
    ) : (
      <NoRecords message={defaultText} />
    );
  };
  return <div className="col-sm-5 col-lg-3">{renderNotes()}</div>;
};
NoteList.displayName = 'NoteList';
export default NoteList;
