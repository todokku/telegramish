import React, { Fragment } from 'react';

import '../Components.css';

export const RoomHeader = users => {
  return (
    <Fragment>
      <div className='col s8 '>
        <div id='chat-header-current'>
          <div className='row no-margin'>
            <span className='flow-text'>{users.room}</span>
            {/* <span className='col s2 offset-s10'>Logout</span> */}
          </div>
          <div className='row no-margin'>
            <span>1 Member</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RoomHeader;
