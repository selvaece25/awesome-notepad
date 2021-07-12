import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="header">
          <div className="header-left">
              <h3 className="text-center">
                <i className="fas fa-plus"></i>
              </h3>
          </div>
          <div className="text-center">
            <h4>My Awesome NotePad</h4>
          </div>
        </div>
      )
}

Header.displayName = 'Header Section';
export default Header;