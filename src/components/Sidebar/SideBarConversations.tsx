import React, { useState } from 'react';
import ChatCard from './ChatCard';

const SideBarConversations = () => {
  const [conversations, setConversations] = useState([
    {
      name: 'test #1',
      lastMessage: 'last message #1',
      timestamp: 'today',
    },
    {
      name: 'test #2',
      lastMessage: 'last message #2',
      timestamp: 'today',
    },
    {
      name: 'test #3',
      lastMessage: 'last message #3',
      timestamp: 'today',
    },
  ]);

  return (
    <div className="m-2 bg-white rounded-[8px] grow overflow-scroll scrollbar-hide">
      {conversations.map((item: any) => {
        return (
          <ChatCard
            key={item.name}
            name={item.name}
            message={item.lastMessage}
            time={item.timestamp}
          />
        );
      })}
    </div>
  );
};

export default SideBarConversations;
