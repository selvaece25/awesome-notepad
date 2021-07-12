import React, { useMemo, MouseEvent } from 'react';
import { ButtonProps } from '@/types';
import { AppConstant } from '@/constants/appConstants';

const Button: React.FC<ButtonProps> = ({ text, classes, onClickHandler, canShow }) => {
  return useMemo(() => {
    const handleActionEvent = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onClickHandler();
    };
    return (
      <>
        {canShow ? (
          <button type="button" className={`btn ${classes}`} onClick={handleActionEvent}>
            {text}
          </button>
        ) : (
          <p>{AppConstant['FORM_PROCESSING']} </p>
        )}
      </>
    );
  }, [canShow]);
};

Button.displayName = 'Action Button';
export default Button;
