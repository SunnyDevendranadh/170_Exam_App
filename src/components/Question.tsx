import React from "react";
import { AnswerOption } from "./AnswerOption";

interface QuestionProps {
  question: {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number;
  };
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  answered: boolean;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  answered,
}) => {
  return (
    <div className="space-y-6">
      <h2
        className="text-xl font-semibold mb-4"
        id={`question-${question.id}`}
        aria-live="polite"
      >
        {question.text}
      </h2>
      <div
        className="space-y-3"
        role="listbox"
        aria-labelledby={`question-${question.id}`}
      >
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            selected={selectedAnswer === index}
            answered={answered}
            isCorrect={index === question.correctAnswer}
            onClick={() => !answered && onAnswerSelect(index)}
            aria-label={`${option}${
              answered && index === question.correctAnswer
                ? ", correct answer"
                : ""
            }${
              answered &&
              selectedAnswer === index &&
              index !== question.correctAnswer
                ? ", incorrect answer"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
