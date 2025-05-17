import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import  { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    // setIsDarkMode(storedTheme === "dark");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
    if (!isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  return (
    <button
      onClick={() => toggleTheme()}
      className={cn(
        "cursor-pointer fixed max-sm:p-0  max-sm:right-2 bottom-2 z-41 right-2 rounded-full p-2 transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}

export default ThemeToggle;
