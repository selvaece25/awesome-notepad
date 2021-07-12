import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-extended';
import { TestID } from '@/TestID';
import { AppConstant } from '@/constants/appConstants';

import { NoteListProps } from '@/types';
import NoteList from '@/components/NoteList';

describe('<NoteList />', () => {
  it('renders the NoteList component', () => {
    const enabledProps: NoteListProps = {
      selectNoteHandler: jest.fn,
      activeNote: { id: 1, note: 'Test' },
      notes: [],
      isLoading: false,
    };
    const component = render(<NoteList {...enabledProps} />);
    expect(component).toBeTruthy();
  });
  it('should render `This list is empty`', () => {
    const enabledProps: NoteListProps = {
      selectNoteHandler: jest.fn,
      activeNote: { id: 1, note: 'Test' },
      notes: [],
      isLoading: false,
    };
    const component = render(<NoteList {...enabledProps} />);
    expect(component.getByText(AppConstant['NOTE_NO_RECORD'])).toBeInstanceOf(Node);
  });
  it('should render a list', () => {
    const enabledProps: NoteListProps = {
      selectNoteHandler: jest.fn,
      activeNote: { id: 1, note: 'Test' },
      notes: [
        { id: 3, note: 'Alternate Test' },
        { id: 4, note: 'Second Test' },
      ],
      isLoading: false,
    };
    const component = render(<NoteList {...enabledProps} />);
    const noteList = component.queryByTestId(TestID.NOTE_LIST);
    expect(noteList).toBeValid();
    expect(component.getByText('Second Test')).toBeInstanceOf(Node);
  });
});
