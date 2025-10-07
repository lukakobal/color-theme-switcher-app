import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "container dark" : "container light"}>
      <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
