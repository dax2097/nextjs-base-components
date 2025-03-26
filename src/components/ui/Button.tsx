import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  textColor?: "text-orange-normal" | "text-grey-dark" | "text-white";
  textSize?: "text-xs" | "text-sm" | "text-md" | "text-lg" | "text-xl";
}

export function Button({
  variant = "primary",
  size = "md",
  rounded = "md",
  textColor = "text-white",
  textSize = "text-md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-color-orange-normal hover:bg-color-orange-dark focus:ring-color-orange-light",
    secondary: "border border-color-orange-normal hover:bg-color-orange-light focus:ring-color-orange-dark",
    ghost: "hover:bg-color-orange-light focus:ring-color-orange-dark",
  };

  const sizeStyles = {
    sm: "px-3 py-1",
    md: "px-5 py-2",
    lg: "px-6 py-3",
  };

  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles[rounded]} ${textColor} ${textSize} ${className}`}
      {...props}
    />
  );
}