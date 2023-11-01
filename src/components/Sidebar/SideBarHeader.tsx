import React from 'react';

import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const SideBarHeader = () => {
  return (
    <div className="bg-white px-4 py-2 rounded-[16px] mx-2 mt-2 flex justify-between max-sm:flex-col max-sm:items-center max-sm:px-0">
      <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
      <div>
        <IconButton>
          <PersonAddIcon />
        </IconButton>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
        <IconButton>
          <NightlightRoundIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SideBarHeader;
