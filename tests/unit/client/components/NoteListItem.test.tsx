import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-extended'
import { NoteListItemProps } from '@/types';
import NoteListItem  from '@/components/NoteListItem';

describe('<NoteListItem />', () => {
    it('renders the NoteListItem component', () => {
        const enabledProps: NoteListItemProps = {
            selectNoteHandler: jest.fn,
            activeNote: { id: 1, note: 'Test'},
            note: { id: 3, note: 'Alternate Test' },
          }  
      const component = render(<NoteListItem {...enabledProps} />)
      expect(component).toBeTruthy()
    })
    it('should render note item under <ul> tag', () => {
        const enabledProps: NoteListItemProps = {
            selectNoteHandler: jest.fn,
            activeNote: { id: 1, note: 'Test'},
            note: { id: 3, note: 'Alternate Test' },
          }  
        const component = render(<NoteListItem {...enabledProps} />)
        expect(component.getByText('Alternate Test')).toBeInstanceOf(Node)
      })

})