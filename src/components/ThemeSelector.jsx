import React, { useState } from "react";

function ThemeSelector() {
  const THEMES = ["dark", "winter", "luxury"];

  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);

  const changeTheme = (theme) => {
    document.getElementsByTagName("html")[0]?.setAttribute("data-theme", theme);
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Themes
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {THEMES.map((theme) => (
          <li
            key={theme}
            className={`${selectedTheme === theme ? "bg-base-200" : ""}`}
          >
            <button
              onClick={() => {
                changeTheme(theme);
                setSelectedTheme(theme);
              }}
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeSelector;
