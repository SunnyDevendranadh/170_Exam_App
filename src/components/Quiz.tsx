import React, { useState } from "react";

// Import the components
import Question from "./Questions";
import { AnswerOption } from "./AnswerOption";
import Explanation from "./Explanation";
import Results from "./Results";

// --- Type Definitions (as defined above) ---
interface AnswerOptionData {
  answerText: string;
  isCorrect: boolean;
}

interface QuestionData {
  id: number | string;
  questionText: string;
  answerOptions: AnswerOptionData[];
  explanation?: string;
}

interface QuizProps {
  title: string;
  questions: QuestionData[];
}

// --- Component Definition ---
const Quiz: React.FC<QuizProps> = ({ title, questions }) => {
  // --- State Hooks with Types ---
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  // Array to store the indices of questions already answered
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  // Array to store the index of the selected answer for each question (null if not answered)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // --- Event Handlers with Types ---
  const handleAnswerOptionClick = (
    answerIndex: number,
    isCorrect: boolean
  ): void => {
    // Prevent changing answer or score if already answered
    if (answeredQuestions.includes(currentQuestion)) {
      return;
    }

    // Update selected answer state
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(updatedSelectedAnswers);

    // Update score if the selected answer is correct
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1); // Use functional update for score
    }

    // Mark the current question as answered
    setAnsweredQuestions((prevAnswered) => [...prevAnswered, currentQuestion]);

    // Show the explanation section
    setShowExplanation(true);
  };

  const handleNextQuestion = (): void => {
    setShowExplanation(false); // Hide explanation before moving on
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // If no more questions, show the results view
      setShowScore(true);
    }
  };

  const restartQuiz = (): void => {
    // Reset all state variables to their initial values
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setAnsweredQuestions([]);
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowExplanation(false);
  };

  // --- Render Logic ---
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 border-none overflow-hidden"
      aria-labelledby="quiz-title"
    >
      <h2
        id="quiz-title"
        className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-black whitespace-normal"
      >
        {title} Quiz
      </h2>

      {showScore ? (
        // Display results view
        <Results
          score={score}
          questions={questions.map((q, index) => ({
            question: q.questionText,
            userAnswer:
              selectedAnswers[index] !== null
                ? q.answerOptions[selectedAnswers[index]].answerText
                : "",
            correctAnswer:
              q.answerOptions.find((opt) => opt.isCorrect)?.answerText || "",
          }))}
          onRestart={restartQuiz}
        />
      ) : (
        // Display quiz question view
        <>
          <div
            className="mb-4 flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-200"
            aria-live="polite"
            role="status"
          >
            <span className="text-sm sm:text-base md:text-lg font-semibold text-black mb-2 sm:mb-0">
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="text-sm sm:text-base md:text-lg font-medium bg-amber-50 text-black px-2 sm:px-3 py-1 rounded-full border border-amber-500">
              Score: {score}
            </span>
          </div>

          {/* Question component */}
          <Question questionText={questions[currentQuestion].questionText} />

          <div
            className="space-y-2 mt-4"
            role="listbox"
            aria-labelledby="current-question"
          >
            {/* Map over answer options for the current question */}
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <AnswerOption
                  key={index}
                  option={answerOption.answerText}
                  selected={selectedAnswers[currentQuestion] === index}
                  answered={answeredQuestions.includes(currentQuestion)}
                  isCorrect={answerOption.isCorrect}
                  onClick={() =>
                    handleAnswerOptionClick(index, answerOption.isCorrect)
                  }
                  aria-label={`${answerOption.answerText}${
                    answeredQuestions.includes(currentQuestion) &&
                    answerOption.isCorrect
                      ? ", correct answer"
                      : ""
                  }${
                    answeredQuestions.includes(currentQuestion) &&
                    selectedAnswers[currentQuestion] === index &&
                    !answerOption.isCorrect
                      ? ", incorrect answer"
                      : ""
                  }`}
                />
              )
            )}
          </div>

          {/* Conditionally render the explanation section */}
          {showExplanation && (
            <Explanation
              explanation={questions[currentQuestion].explanation}
              onNext={handleNextQuestion}
              isLastQuestion={currentQuestion === questions.length - 1}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
