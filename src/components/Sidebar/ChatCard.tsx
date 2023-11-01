import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface Props {
  name: string;
  message: string;
  time: string;
}

const ChatCard = ({ name, message, time }: Props) => {
  return (
    <div className="bg-backdrop-primary-200 hover:bg-backdrop-primary-400 my-2 mx-1 px-1 rounded-[8px] flex items-center">
      <div className="p-1">
        <AccountCircleIcon />
      </div>
      <div className="grow">
        <h4>{name}</h4>
        <p>{message}</p>
      </div>
      <div className="p-1">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default ChatCard;
