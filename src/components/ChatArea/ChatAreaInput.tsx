import React from 'react';

import { IconButton } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

const ChatAreaInput = () => {
  return (
    <div className="bg-white px-4 py-2 rounded-[16px] m-2 flex justify-between max-sm:flex-col max-sm:items-center max-sm:px-0">
      <input
        placeholder="type a message..."
        className="mr-2 border-none outline-none grow"
      />
      <IconButton>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default ChatAreaInput;
