import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

// Define the interface for the component's props
interface ExplanationProps {
  explanation?: string; // Mark as optional
  onNext: () => void;
  isLastQuestion: boolean;
}

// Use React.FC and the Props interface
const Explanation: React.FC<ExplanationProps> = ({
  explanation,
  onNext,
  isLastQuestion,
}) => {
  // Optional: Handle cases where explanation might be missing or empty
  // if (!explanation) {
  //   return null; // Or return a default message if needed
  // }

  return (
    <Card className="mt-4 md:mt-6 bg-amber-50 border-amber-300 shadow-sm overflow-hidden">
      <CardContent className="p-4 md:p-5 overflow-hidden">
        <h3 className="font-semibold text-base md:text-lg mb-2 text-black">
          Explanation:
        </h3>
        <p className="text-sm md:text-base text-black break-words whitespace-normal">
          {explanation || "No explanation provided."}
        </p>
      </CardContent>
      <CardFooter className="px-4 md:px-5 pb-4 md:pb-5">
        <Button
          className={cn(
            "mt-2",
            isLastQuestion ? "bg-green-600 hover:bg-green-700" : ""
          )}
          onClick={onNext}
        >
          {isLastQuestion ? "See Results" : "Next Question"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Explanation;
