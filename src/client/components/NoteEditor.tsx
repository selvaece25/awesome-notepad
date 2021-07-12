import React, { useEffect, useState, useMemo } from 'react';
import CodeMirrorEditor from '@/shared/CodeMirrorEditor';
import WelcomeNote from '@/components/WelcomeNote';
import Button from '@/shared/Button';
import { AppConstant } from '@/constants/appConstants';
import { NoteEditorProps } from '@/types';

const NoteEditor: React.FC<NoteEditorProps> = ({ activeNote, isAddNote, saveNoteHandler, isFormProcessing }) => {
  const isFormEnabled = isAddNote || (activeNote && activeNote.id);
  const [noteText, setNoteText] = useState<string>('');
  const buttonText = isAddNote ? AppConstant['NOTE_CREATE_BUTTON'] : AppConstant['NOTE_UPATE_BUTTON'];

  useEffect(() => {
    setNoteText(activeNote.note);
  }, [activeNote]);

  const renderEditor = () => {
    if (isFormProcessing) {
      return <div className="spinner"><span className="spinner-border" ></span></div>;
    } else if (isFormEnabled) {
      return (
        <CodeMirrorEditor
          noteText={noteText}
          ChangeTextHandler={(value: string) => setNoteText(value)}
        />
      );
    } else {
      return <WelcomeNote />;
    }
  };
  return (
    <div className="col-sm-7 col-lg-9">
      <div className="tab-content">
        <div className="tab-pane active show">
          <div className="row">
            <div className="col-lg-12 details fill">
              {renderEditor()}
              <section className="note-menu-bar px-4">
                { isFormEnabled && (<Button
                  classes="btn-link"
                  text={buttonText}
                  canShow={!isFormProcessing}
                  onClickHandler={() => { saveNoteHandler(activeNote.id || null, noteText); }}
                />
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
NoteEditor.displayName = 'NoteEditor';
export default NoteEditor;
