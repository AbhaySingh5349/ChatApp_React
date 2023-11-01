import React from 'react';
import OtherMessageContainer from './OtherMessageContainer';
import SelfMessageContainer from './SelfMessageContainer';

const ChatAreaConversation = () => {
  return (
    <div className="m-2 bg-white rounded-[8px] grow overflow-scroll scrollbar-hide">
      <SelfMessageContainer />
      <OtherMessageContainer />
    </div>
  );
};

export default ChatAreaConversation;
