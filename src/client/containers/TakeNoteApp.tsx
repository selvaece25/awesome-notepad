import React, { useEffect } from 'react';

import NoteEditor from '@/components/NoteEditor';
import NoteList from '@/components/NoteList';
import Header from '@/components/Header';

const TakeNoteApp: React.FC = () => {
  return (
    <section className="tabs-section text-secondary">
      <div className="container-fluid">
        <Header  />
        <div className="row">
          <NoteList />
          <NoteEditor />
        </div>
      </div>
    </section>
  )
}

TakeNoteApp.displayName = 'TakeNoteApp';
export default TakeNoteApp;