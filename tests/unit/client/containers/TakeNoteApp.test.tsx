import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-extended'
import { ToastProvider } from 'react-toast-notifications'
 import { TestID } from '@/TestID'
import TakeNoteApp  from '@/containers/TakeNoteApp';


describe('<TakeNoteApp />', () => {
    it('renders the TakeNoteApp component', () => {
      const component = render(<ToastProvider><TakeNoteApp /></ToastProvider>)
      expect(component).toBeTruthy()
    })
    it('should render with test attribute id  ', () => {
        const component = render(<ToastProvider><TakeNoteApp /></ToastProvider>)
        const welcomeNoteText = component.queryByTestId(TestID.NOTE_CONATINER);
        expect(welcomeNoteText).toBeTruthy()
      })
})