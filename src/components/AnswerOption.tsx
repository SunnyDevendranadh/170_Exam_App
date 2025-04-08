import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

// Define the interface for the component's props
interface AnswerOptionProps {
  answerText: string;
  isCorrect: boolean;
  isSelected: boolean;
  isAnswered: boolean;
  onClick: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  answerText,
  isCorrect,
  isSelected,
  isAnswered,
  onClick,
}) => {
  // Determine the button variant and styling based on the state
  let variant = "outline";
  let icon = null;
  let ringStyle = "";

  if (isAnswered) {
    if (isSelected && isCorrect) {
      // Correct answer selected
      variant = "outline";
      ringStyle = "border-green-500 bg-green-50 text-black";
      icon = (
        <div className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    } else if (isSelected && !isCorrect) {
      // Incorrect answer selected
      variant = "outline";
      ringStyle = "border-red-500 bg-red-50 text-black";
      icon = (
        <div className="h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    } else if (isCorrect) {
      // Correct answer not selected
      variant = "outline";
      ringStyle = "border-green-500 bg-green-50 text-black";
      icon = (
        <div className="h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    } else {
      // Incorrect answer not selected
      variant = "outline";
      ringStyle = "border-gray-200 text-gray-600";
      icon = (
        <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0" />
      );
    }
  } else {
    // Not answered yet
    ringStyle = "hover:border-amber-500 hover:bg-amber-50 text-black";
    icon = (
      <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0" />
    );
  }

  return (
    <Button
      variant={variant as "outline"}
      className={cn(
        "w-full justify-start text-sm md:text-base font-normal h-auto py-3 md:py-4 px-3 md:px-4 mb-2 shadow-sm max-w-full",
        ringStyle
      )}
      onClick={onClick}
      disabled={isAnswered}
    >
      {icon}
      <span className="text-left break-words whitespace-normal">
        {answerText}
      </span>
    </Button>
  );
};

export default AnswerOption;
