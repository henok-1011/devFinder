import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import "./styles.css";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="container header">
      <h2>devfinder</h2>
      <h3 className="theme" onClick={toggleTheme}>
        {theme === "light" ? (
          <>
            <span>Dark</span>
            <span className="material-symbols-outlined">dark_mode</span>
          </>
        ) : (
          <>
            Light<span className="material-symbols-outlined">light_mode</span>
          </>
        )}
      </h3>
    </div>
  );
}
