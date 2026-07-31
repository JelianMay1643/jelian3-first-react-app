import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary:"bg-black text-white hover:bg-gray-800",
    tertiary: "w-full border bg-amber-200 text-black-800 py-3 rounded-lg hover:bg-amber-600 ",
  };

  return (
    <button className={cn("cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus:outline-none px-4 py-1.5 rounded-lg text-sm", 
      variantStyles[variant],
      className
    )}
    {...props}
    >
      {children}
    </button>
  );
}