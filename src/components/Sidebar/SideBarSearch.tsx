import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

const SideBarSearch = () => {
  return (
    <div className="bg-white px-4 py-1.5 rounded-[16px] mx-2 mt-2 flex">
      <SearchIcon />
      <input
        placeholder="search..."
        className="ml-2 border-none outline-none grow"
      />
    </div>
  );
};

export default SideBarSearch;
