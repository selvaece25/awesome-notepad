import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-extended'
import { AppConstant } from '@/constants/appConstants';
import { TestID } from '@/TestID'
import WelcomeNote  from '@/components/WelcomeNote';


describe('<WelcomeNote />', () => {
    it('renders the WelcomeNote component', () => {
      const component = render(<WelcomeNote />)
      expect(component).toBeTruthy()
    })
    it('should render welcome title inside a h4 tag', () => {
        const component = render(<WelcomeNote />)
        const welcomeNoteText = component.queryByTestId(TestID.WELCOME_NOTE);
        expect(welcomeNoteText).toBeValid()
        expect(component.getByText(AppConstant['WELCOME_TITLE'])).toBeInstanceOf(Node)
      })
})