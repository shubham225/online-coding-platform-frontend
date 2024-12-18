"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "./ui/toggle";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <Toggle
        onPressedChange={(on) => (on ? setTheme("dark") : setTheme("light"))}
      >
        {theme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        )}
      </Toggle>
    </div>
  );
}
