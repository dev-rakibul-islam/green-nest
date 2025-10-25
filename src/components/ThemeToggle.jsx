import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className="flex cursor-pointer gap-2 items-center">
      <span className="text-sm">{theme === "light" ? "Light" : "Dark"}</span>
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "dark"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </label>
  );
};

export default ThemeToggle;
