import React from "react";

function SortingMenu() {
  return (
    <div className="w-[40%]">
      <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn btn-accent m-1">
          Sort by
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Time</a>
          </li>
          <li>
            <a>A-z</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SortingMenu;
