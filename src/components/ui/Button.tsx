import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textSize?: "text-xs" | "text-sm" | "text-md" | "text-lg" | "text-xl";
  fontFamily?: string;
  size?: "small" | "medium" | "large" | "giant" | "huge";
}

export function Button({
  size = "medium",
  textSize = "text-md",
  fontFamily = "",
  color = "#FFFFFF",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    small: "h-[33px]",
    medium: "h-[34px]",
    large: "h-[36px]",
    giant: "h-[37px]",
    huge: "h-[41px]",
  };

  return (
    <button
      type="button"
      className={cn(baseStyles, textSize, fontFamily && `font-${fontFamily}`, sizeStyles[size], className)} // Se aplica el color correctamente
      {...props}
    />
  );
}