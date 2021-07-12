import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { editorOptions } from '@/constants/appConstants'
import { CodeMirrorEditorProps } from '@/types';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/addon/selection/active-line';

const CodeMirrorEditor: React.FC<CodeMirrorEditorProps> = ({ noteText, ChangeTextHandler }) => {
  const renderEditor = () => {
    return (
      <CodeMirror
        className="editor mousetrap"
        value={noteText}
        onBeforeChange={(editor, data, value) => {
          ChangeTextHandler(value)
        }}
        onChange={(editor, data, value) => {
          if (!value) {
            editor.focus()
          }
        }}
        options={editorOptions}
      />
    )
  }

  return <>{renderEditor()}</>
}
CodeMirrorEditor.displayName = 'Code Mirror Editor';
export default CodeMirrorEditor;
