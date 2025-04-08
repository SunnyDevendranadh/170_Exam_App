import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-normal rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-amber-500 text-white hover:bg-amber-600",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-slate-300 bg-white hover:bg-amber-50 text-slate-900 hover:text-slate-900 hover:border-amber-500",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-amber-50 hover:text-amber-700",
        ghost: "hover:bg-amber-50 hover:text-amber-700",
        link: "text-amber-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
); 