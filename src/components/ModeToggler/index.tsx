import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative"
    >
      {theme === "dark" ? (
        <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-100" />
      ) : (
        <FaMoon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
