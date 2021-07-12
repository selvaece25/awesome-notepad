import React, { memo } from 'react';
import { AppConstant } from '@/constants/appConstants';

const WelcomeNote: React.FC = () => {
  return (
    <div className="container fill text-center" data-testid="welcome_note">
      <h4 className="pt-4">{ AppConstant['WELCOME_TITLE'] } </h4>
      <p>{ AppConstant['WELCOME_CONTENT'] } </p>
    </div>
  )
}

WelcomeNote.displayName = 'Welcome Note';
export default memo(WelcomeNote);
