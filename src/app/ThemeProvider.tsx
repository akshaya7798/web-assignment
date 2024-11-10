"use client";
import { ThemeProvider as ThemeProviderNext } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider(props: Props) {
  return (
    <ThemeProviderNext attribute="class">{props.children}</ThemeProviderNext>
  );
}