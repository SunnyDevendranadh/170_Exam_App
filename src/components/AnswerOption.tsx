import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { CheckCircle, XCircle } from "lucide-react";

// Define the interface for the component's props
interface AnswerOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: string;
  selected: boolean;
  answered: boolean;
  isCorrect: boolean;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  option,
  selected,
  answered,
  isCorrect,
  className,
  ...props
}) => {
  // Determine the background color based on state
  const bgColor = answered
    ? isCorrect
      ? "bg-green-100 border-green-300"
      : selected && !isCorrect
      ? "bg-red-100 border-red-300"
      : "bg-white"
    : selected
    ? "bg-blue-100 border-blue-300"
    : "bg-white";

  return (
    <button
      className={cn(
        "relative w-full text-left p-4 border rounded-lg min-h-[80px] flex items-center gap-3 text-sm md:text-base overflow-hidden",
        bgColor,
        className
      )}
      aria-pressed={selected}
      role="option"
      aria-selected={selected}
      aria-disabled={answered}
      disabled={answered}
      {...props}
    >
      {answered && isCorrect && (
        <CheckCircle
          className="min-w-5 h-5 text-green-500 mr-1 mt-0 flex-shrink-0"
          aria-hidden="true"
        />
      )}
      {answered && selected && !isCorrect && (
        <XCircle
          className="min-w-5 h-5 text-red-500 mr-1 mt-0 flex-shrink-0"
          aria-hidden="true"
        />
      )}
      <div className="overflow-auto break-words whitespace-normal">
        {option}
      </div>
    </button>
  );
};
