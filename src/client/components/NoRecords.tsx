import React, { memo } from 'react';
import { NoRecordProps } from '@/types';

const NoRecords: React.FC<NoRecordProps> = ({ message }) => {
  return (
    <div className="error-template fill d-none d-sm-block d-md-block border-right text-center">
      <h5 className="pt-3">{ message }</h5>
    </div>
  )
};

NoRecords.displayName = 'Records Not Found';
export default memo(NoRecords);
