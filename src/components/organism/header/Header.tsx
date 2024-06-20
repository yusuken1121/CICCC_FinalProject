import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

export const Header = () => {
  const [isDarkmode, setIsDarkMode] = useState<boolean>(false);
  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkmode);
  };
  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkmode]);

  return (
    <header className="banner-base flex justify-between">
      <h1 className="h1-base ml-5">PROJECTS MANAGEMENT</h1>
      {isDarkmode && (
        <IoMoonOutline
          className="darkModeIcon-base"
          onClick={onToggleDarkMode}
        />
      )}
      {!isDarkmode && (
        <IoMoon className="darkModeIcon-base" onClick={onToggleDarkMode} />
      )}
    </header>
  );
};
