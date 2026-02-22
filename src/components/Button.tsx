import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          " border  flex justify-center text-off-white border-off-white hover:bg-off-white hover:text-primary  items-center gap-2 px-2 transition-all ease-in text-sm  h-10    cursor-pointer  text-color",
          className,
        )}
        {...props}
      />
    );
  },
);
export default Button;
