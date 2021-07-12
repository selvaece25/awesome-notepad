import React, { useEffect } from 'react';

const NoteList = () => {
  return (
    <div className="col-sm-5 col-lg-3">
      <ul className="nav nav-tabs flex-column mb-5">
        <li className="nav-item">
          <a className="nav-link active" href="#lorem-left" data-toggle="tab">
            Lorem
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#ipsum-left" data-toggle="tab">
            Ipsum
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NoteList;
