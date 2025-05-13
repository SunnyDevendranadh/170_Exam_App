import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { danceQuizQuestions } from "../data/dance-quiz";
import { dancePhilosophiesQuiz } from "../data/dance-quiz-philosophies";
import { danceQuizShort } from "../data/dance-quiz-short";
import danceQuiz1 from "../data/dance_quiz.json";
import danceQuiz2 from "../data/quiz_2/dance_quiz2.json";

type QuizType =
  | "dance-quiz"
  | "dance-quiz-1"
  | "dance-quiz-2"
  | "dance-philosophies"
  | "dance-quiz-short";

const DanceQuizSelector = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Get the current quiz data based on selection
  const getQuizData = () => {
    switch (selectedQuiz) {
      case "dance-quiz":
        return danceQuizQuestions;
      case "dance-quiz-1":
        return danceQuiz1.questions;
      case "dance-quiz-2":
        return danceQuiz2.questions;
      case "dance-philosophies":
        return dancePhilosophiesQuiz;
      case "dance-quiz-short":
        return danceQuizShort;
      default:
        return null;
    }
  };

  const quizData = getQuizData();
  const currentQuizItem = quizData ? quizData[currentQuestion] : null;

  // Handle the selection of an answer
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
  };

  // Move to the next question
  const handleNextQuestion = () => {
    if (!quizData) return;

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // End of quiz
      setCurrentQuestion(0);
      setSelectedQuiz(null);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  // Format the question and answers based on quiz type
  const getQuestionText = () => {
    if (!currentQuizItem) return "";

    if (
      selectedQuiz === "dance-quiz" ||
      selectedQuiz === "dance-philosophies" ||
      selectedQuiz === "dance-quiz-short"
    ) {
      return currentQuizItem.question;
    } else {
      return currentQuizItem.questionText;
    }
  };

  const getOptions = () => {
    if (!currentQuizItem) return [];

    if (
      selectedQuiz === "dance-quiz" ||
      selectedQuiz === "dance-philosophies" ||
      selectedQuiz === "dance-quiz-short"
    ) {
      return currentQuizItem.options;
    } else {
      return currentQuizItem.answerOptions.map((option: any) =>
        typeof option === "string" ? option : option.answerText
      );
    }
  };

  const getCorrectAnswer = () => {
    if (!currentQuizItem) return "";

    if (
      selectedQuiz === "dance-quiz" ||
      selectedQuiz === "dance-philosophies" ||
      selectedQuiz === "dance-quiz-short"
    ) {
      return currentQuizItem.answer;
    } else {
      const correctOption = currentQuizItem.answerOptions.find(
        (option: any) => option.isCorrect
      );
      return correctOption ? correctOption.answerText : "";
    }
  };

  const getExplanation = () => {
    if (!currentQuizItem) return "";

    return currentQuizItem.explanation || "";
  };

  // Check if the selected answer is correct
  const isCorrect = () => {
    if (!selectedAnswer) return false;

    if (
      selectedQuiz === "dance-quiz" ||
      selectedQuiz === "dance-philosophies" ||
      selectedQuiz === "dance-quiz-short"
    ) {
      return selectedAnswer === currentQuizItem.answer;
    } else {
      const correctOption = currentQuizItem.answerOptions.find(
        (option: any) => option.isCorrect
      );
      return selectedAnswer === (correctOption ? correctOption.answerText : "");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {!selectedQuiz ? (
        <Card>
          <CardHeader>
            <CardTitle>Dance Quiz Selector</CardTitle>
            <CardDescription>Choose a quiz to practice with</CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={(value: QuizType) => setSelectedQuiz(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a quiz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dance-quiz">
                  Foster's Analysis Quiz (20 questions)
                </SelectItem>
                <SelectItem value="dance-philosophies">
                  Dance Philosophies Deep Dive (25 questions)
                </SelectItem>
                <SelectItem value="dance-quiz-short">
                  Quick Dance Philosophy Quiz (30 questions)
                </SelectItem>
                <SelectItem value="dance-quiz-1">
                  Dance Fundamentals Quiz (50 questions)
                </SelectItem>
                <SelectItem value="dance-quiz-2">
                  Dance History and Theory Quiz (50 questions)
                </SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>
              Question {currentQuestion + 1} of {quizData?.length}
            </CardTitle>
            <CardDescription>{getQuestionText()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {getOptions().map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedAnswer === option
                      ? isCorrect()
                        ? "outline"
                        : "destructive"
                      : "outline"
                  }
                  className={
                    selectedAnswer === option && isCorrect()
                      ? "border-green-500"
                      : ""
                  }
                  onClick={() => handleAnswerSelect(option)}
                  disabled={!!selectedAnswer}
                >
                  {option}
                </Button>
              ))}
            </div>

            {showExplanation && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="font-semibold">
                  {isCorrect()
                    ? "Correct!"
                    : `Incorrect. The correct answer is: ${getCorrectAnswer()}`}
                </p>
                <p className="mt-2">{getExplanation()}</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            {showExplanation && (
              <Button onClick={handleNextQuestion}>
                {currentQuestion < (quizData?.length || 0) - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default DanceQuizSelector;
