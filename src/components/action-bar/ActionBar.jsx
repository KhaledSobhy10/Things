import React from "react";
import SearchBar from "./SearchBar";
import SortingMenu from "./SortingMenu";

function ActionBar() {
  return (
    <div className="flex  items-center gap-2 w-full pt-4">
      <SearchBar />
      <SortingMenu />
      <button className="btn btn-primary">Add thing</button>
    </div>
  );
}

export default ActionBar;
