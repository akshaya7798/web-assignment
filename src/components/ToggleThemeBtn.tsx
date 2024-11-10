"use client";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

export function ToggleThemeBtn({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const theme = resolvedTheme;

  function toggleTheme() {
    if (theme == "dark") setTheme("light");
    if (theme == "light") setTheme("dark");
  }
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex h-5 w-10 cursor-pointer  items-center rounded-full p-1  ",
        { "bg-light-theme-toggle  ": theme == "light" },
        { "bg-dark-theme-toggle": theme == "dark" },
      )}
    >
      <div
        className={cn(
          "h-4 w-4 rounded-full bg-white transition-all dark:bg-very-dark-blue-bg",
          { "translate-x-full": theme === "light" },
          { "translate-x-0": theme === "dark" },
        )}
      />
    </button>
  );
}