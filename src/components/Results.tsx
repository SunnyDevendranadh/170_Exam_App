import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { cn } from "../lib/utils";
import { CheckCircle, XCircle } from "lucide-react";
import { Question } from "../types";

// Define the interface for the component's props
interface ResultsProps {
  score: number;
  questions: Question[];
  onRestart: () => void;
}

// Use React.FC and the Props interface
export const Results = ({ score, questions, onRestart }: ResultsProps) => {
  const percentage = Math.round((score / questions.length) * 100);

  let feedbackMessage = "";
  let progressColor = "";

  // Feedback based on score percentage
  if (percentage >= 90) {
    feedbackMessage = "Excellent! You've mastered this topic.";
    progressColor = "bg-green-500";
  } else if (percentage >= 70) {
    feedbackMessage = "Great job! You know this material well.";
    progressColor = "bg-amber-500";
  } else if (percentage >= 50) {
    feedbackMessage = "Good effort! A bit more study and you'll be an expert.";
    progressColor = "bg-amber-500";
  } else if (percentage >= 30) {
    feedbackMessage = "You're making progress! Keep studying.";
    progressColor = "bg-yellow-500";
  } else {
    feedbackMessage = "Keep practicing! Review the material and try again.";
    progressColor = "bg-red-500";
  }

  return (
    <Card className="w-full shadow-sm border-none">
      <CardHeader className="text-center pb-1 sm:pb-2">
        <CardTitle className="text-xl sm:text-2xl md:text-3xl text-black whitespace-normal">
          Quiz Completed!
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4 md:space-y-6 px-3 sm:px-6">
        <div className="p-3 sm:p-4 md:p-6 bg-amber-50 rounded-lg border border-amber-500">
          <p className="text-lg md:text-xl mb-3 text-black text-center">
            You scored <span className="font-semibold">{score}</span> out of{" "}
            <span className="font-semibold">{questions.length}</span>
          </p>

          <div className="space-y-2">
            <Progress
              value={percentage}
              max={100}
              className={cn("h-3 md:h-4", progressColor)}
            />
            <div
              className={cn(
                "flex justify-between text-xs md:text-sm",
                "text-black"
              )}
            >
              <span>0%</span>
              <span className="font-bold text-lg md:text-xl">
                {percentage}%
              </span>
              <span>100%</span>
            </div>
          </div>
        </div>

        <p
          className={cn(
            "text-sm sm:text-base md:text-lg font-medium text-center",
            "text-black"
          )}
        >
          {feedbackMessage}
        </p>

        <div className="w-full p-3 sm:p-4 md:p-6 rounded-lg bg-amber-50 border border-amber-500">
          <div className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6">
            You scored {score} out of {questions.length}
          </div>

          <div
            className="max-h-[50vh] overflow-y-auto pr-2 results-scroll space-y-4"
            role="list"
            aria-label="Quiz results"
          >
            {questions.map((question, index) => (
              <div key={index} className="flex items-start" role="listitem">
                {question.userAnswer === question.correctAnswer ? (
                  <CheckCircle
                    className="min-w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <XCircle
                    className="min-w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
                <div className="text-sm md:text-base min-w-0 flex-1">
                  <p className="font-medium break-words whitespace-normal">
                    {question.question}
                  </p>
                  {question.userAnswer !== question.correctAnswer && (
                    <div className="mt-1 text-xs md:text-sm">
                      <p className="text-red-600 break-words whitespace-normal">
                        Your answer:{" "}
                        {question.userAnswer || "No answer provided"}
                      </p>
                      <p className="text-green-600 break-words whitespace-normal">
                        Correct answer: {question.correctAnswer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center pb-4 md:pb-6">
        <Button
          onClick={onRestart}
          className="px-6 py-2 md:px-8 md:py-6 text-base md:text-lg"
          size="lg"
          aria-label="Restart Quiz"
        >
          Restart Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Results;
