import React from "react";
import ThemeSelector from "./ThemeSelector";

function Header() {
  
  return (
    <div className="w-full flex gap-4 justify-between py-4 border-b border-neutral">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl uppercase">save any thing</h1>
        <h2 className="text-base self-end uppercase">find it later</h2>
      </div>
      <ThemeSelector />
    </div>
  );
}

export default Header;
