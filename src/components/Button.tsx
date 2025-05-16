
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "link";
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "default",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-colors",
        // Variants
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary/90 active:bg-primary/95",
        variant === "outline" &&
          "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
        variant === "link" &&
          "bg-transparent p-0 text-primary underline-offset-4 hover:underline",
        // Sizes
        size === "default" && "py-2.5 px-4",
        size === "sm" && "py-2 px-3 text-sm",
        size === "lg" && "py-3 px-6 text-lg",
        // Width
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;