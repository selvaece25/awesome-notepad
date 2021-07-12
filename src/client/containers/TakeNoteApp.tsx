import React, { useEffect } from 'react';

import NoteEditor from '@/components/NoteEditor';
import NoteList from '@/components/NoteList';
import Header from '@/components/Header';
import useNote from '@/hooks/useNote';

const TakeNoteApp: React.FC = () => {
  let { notes, fetchNotes, selectActiveNote, showNewNote, activeNote, isAddNote, saveNoteRecord, isLoading, isFormProcessing } = useNote();

  useEffect(() => { fetchNotes() }, [])

  return (
    <section className="tabs-section text-secondary" data-testid="note_container">
      <div className="container-fluid">
        <Header showNewNote={() => showNewNote()} isLoading={ isLoading } />
        <div className="row">
          <NoteList
            notes={notes}
            activeNote={activeNote}
            isLoading= { isLoading }
            selectNoteHandler={(id: number) => selectActiveNote(id)}
          />
          <NoteEditor
            activeNote={activeNote}
            isAddNote={isAddNote}
            isFormProcessing = { isFormProcessing }
            saveNoteHandler={(noteId: number, noteText: string) => saveNoteRecord(noteId, noteText)}
          />
        </div>
      </div>
    </section>
  )
}

TakeNoteApp.displayName = 'TakeNoteApp';
export default TakeNoteApp;
