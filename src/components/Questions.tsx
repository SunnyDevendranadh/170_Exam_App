import React from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "../lib/utils";

// Define the interface for the component's props
interface QuestionProps {
  questionText: string;
}

// Use React.FC (Functional Component) and the Props interface
// Destructure questionText directly from the typed props
const Question: React.FC<QuestionProps> = ({ questionText }) => {
  return (
    <Card className="mb-4 md:mb-6 shadow-sm border-none overflow-hidden">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-start gap-2 md:gap-3">
          <div
            className="flex-shrink-0 h-7 w-7 md:h-8 md:w-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "text-base md:text-xl font-semibold text-black leading-snug break-words whitespace-normal"
              )}
              aria-live="polite"
              id="current-question"
            >
              {questionText}
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Question;
