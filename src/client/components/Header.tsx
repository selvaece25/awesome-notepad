import React, { useMemo } from 'react'
import { HeaderProps } from '@/types'
import { AppConstant } from '@/constants/appConstants';

const Header: React.FC<HeaderProps> = ({ showNewNote, isLoading }) => {
  return useMemo(() => {
    return (
      <div className="header">
        <div className="header-left">
          {!isLoading && (
            <h3 className="text-center" onClick={() => showNewNote()}>
              <i className="fas fa-plus"></i>
            </h3>
          )}
        </div>
        <div className="text-center">
          <h4>{ AppConstant['APP_TITLE'] }</h4>
        </div>
      </div>
    )
  }, [isLoading])
}

Header.displayName = 'Header Section';
export default Header;
