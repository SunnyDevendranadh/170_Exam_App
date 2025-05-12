import React, { useState } from "react";
import Quiz from "./components/Quiz";
import { ConceptGuide } from "./components/ConceptGuide";

// Import JSON data for Quiz 1
import decisionTreeData from "./data/decisionTree.json";
import knnData from "./data/knn.json";
import naiveBayesData from "./data/naiveBayes.json";
import svmData from "./data/svm.json";
import pcaData from "./data/pca.json";
import regressionData from "./data/regression.json";
import danceData from "./data/dance_quiz.json";
import agenticAIData from "./data/agentic_ai.json";

// Import JSON data for Quiz 2
import decisionTreeData2 from "./data/quiz_2/decisiontree2.json";
import knnData2 from "./data/quiz_2/knn2.json";
import naiveBayesData2 from "./data/quiz_2/naiveBayes2.json";
import svmData2 from "./data/quiz_2/svm2.json";
import pcaData2 from "./data/quiz_2/pca2.json";
import regressionData2 from "./data/quiz_2/regression2.json";
import agenticAIData2 from "./data/quiz_2/agenticai2.json";

// Import cumilative quiz data
import cumulativeData from "./data/cumilative.json";
import cumulativeData2 from "./data/cumilative_2.json";

// Import concept guides
import {
  naiveBayesConcepts,
  svmConcepts,
  regressionConcepts,
  decisionTreeConcepts,
  knnConcepts,
  pcaConcepts,
  agenticAIConcepts,
  danceConcepts,
} from "./data/concepts";

// Import shadcn/ui components
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./components/ui/card";

import "./App.css";

// --- Type Definitions ---

// UI components require these types
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

// This represents the actual structure in our JSON files
interface RawQuestionData {
  questionText: string;
  answerOptions: AnswerOptionData[];
  explanation?: string;
}

// This interface represents the structure of our JSON files
interface RawTopicJsonData {
  questions: RawQuestionData[];
}

interface TopicInfo {
  title: string;
  data: RawTopicJsonData;
  data2: RawTopicJsonData;
}

// Define the possible keys for the topics explicitly
type TopicKey =
  | "decisionTree"
  | "knn"
  | "naiveBayes"
  | "svm"
  | "pca"
  | "regression"
  | "dance"
  | "agenticAI";

type ViewMode =
  | "topics"
  | "quiz"
  | "concepts"
  | "quizSelection"
  | "finalQuiz"
  | "finalQuizSelection";
type QuizSet = 1 | 2;

// Topic icons and colors for improved UI
const topicIcons: Record<TopicKey, { icon: string; description: string }> = {
  decisionTree: {
    icon: "🌲",
    description: "Learn about Decision Trees and Random Forests",
  },
  knn: {
    icon: "👥",
    description: "Explore K-Nearest Neighbors algorithm",
  },
  naiveBayes: {
    icon: "📊",
    description: "Study the Naive Bayes classifier",
  },
  svm: {
    icon: "🔄",
    description: "Understand Support Vector Machines",
  },
  pca: {
    icon: "📉",
    description: "Learn about Principal Component Analysis",
  },
  regression: {
    icon: "📈",
    description: "Master various regression techniques",
  },
  dance: {
    icon: "💃",
    description: "Explore Dance Philosophies and Analysis",
  },
  agenticAI: {
    icon: "🤖",
    description: "Understand Agentic AI and its applications",
  },
};

// Function to process the raw questions and add IDs
const processQuestions = (questions: RawQuestionData[]): QuestionData[] => {
  return questions.map((question, index) => ({
    ...question,
    id: index + 1, // Add an ID based on the index
  }));
};

// Use a Record type for stronger typing of the topicData object
const topicData: Record<TopicKey, TopicInfo> = {
  decisionTree: {
    title: "Decision Tree & Random Forest",
    data: decisionTreeData as unknown as RawTopicJsonData,
    data2: decisionTreeData2 as unknown as RawTopicJsonData,
  },
  knn: {
    title: "K-Nearest Neighbors (KNN)",
    data: knnData as unknown as RawTopicJsonData,
    data2: knnData2 as unknown as RawTopicJsonData,
  },
  naiveBayes: {
    title: "Naive Bayes",
    data: naiveBayesData as unknown as RawTopicJsonData,
    data2: naiveBayesData2 as unknown as RawTopicJsonData,
  },
  svm: {
    title: "Support Vector Machines (SVM)",
    data: svmData as unknown as RawTopicJsonData,
    data2: svmData2 as unknown as RawTopicJsonData,
  },
  pca: {
    title: "Principal Component Analysis (PCA)",
    data: pcaData as unknown as RawTopicJsonData,
    data2: pcaData2 as unknown as RawTopicJsonData,
  },
  regression: {
    title: "Regression Models",
    data: regressionData as unknown as RawTopicJsonData,
    data2: regressionData2 as unknown as RawTopicJsonData,
  },
  dance: {
    title: "Dance Philosophies & Analysis",
    data: danceData as unknown as RawTopicJsonData,
    data2: danceData as unknown as RawTopicJsonData, // Using same data for both sets since it's a final exam
  },
  agenticAI: {
    title: "Agentic AI",
    data: agenticAIData as unknown as RawTopicJsonData,
    data2: agenticAIData2 as unknown as RawTopicJsonData,
  },
};

// --- Component Definition ---

// Use React.FC (Functional Component) type
const App: React.FC = () => {
  // Type the state: it can be one of the TopicKeys or null
  const [selectedTopic, setSelectedTopic] = useState<TopicKey | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("topics");
  const [selectedQuizSet, setSelectedQuizSet] = useState<QuizSet>(1);

  // Add explicit void return type
  const handleBack = (): void => {
    if (viewMode === "quizSelection" || viewMode === "finalQuizSelection") {
      setViewMode("topics");
      setSelectedTopic(null);
    } else if (viewMode === "finalQuiz") {
      setViewMode("finalQuizSelection");
    } else {
      setSelectedTopic(null);
      setViewMode("topics");
      setSelectedQuizSet(1);
    }
  };

  const handleStartQuiz = (topic: TopicKey): void => {
    setSelectedTopic(topic);
    setViewMode("quizSelection");
  };

  const handleStartFinalQuiz = (): void => {
    setViewMode("finalQuizSelection");
  };

  const handleReadConcepts = (topic: TopicKey): void => {
    setSelectedTopic(topic);
    setViewMode("concepts");
  };

  const handleSelectQuiz = (quizSet: QuizSet): void => {
    setSelectedQuizSet(quizSet);
    setViewMode("quiz");
  };

  const handleSelectFinalQuiz = (quizSet: QuizSet): void => {
    setSelectedQuizSet(quizSet);
    setViewMode("finalQuiz");
  };

  // Get the keys strongly typed
  const availableTopics = Object.keys(topicData) as TopicKey[];

  // Helper function to get quiz data
  const getQuizData = (topic: TopicKey): RawTopicJsonData => {
    return selectedQuizSet === 1
      ? topicData[topic].data
      : topicData[topic].data2;
  };

  // Helper function to get cumulative quiz data
  const getFinalQuizData = (): RawTopicJsonData => {
    if (selectedQuizSet === 1) {
      return cumulativeData as unknown as RawTopicJsonData;
    } else {
      // Handle the different structure of cumilative_2.json
      const conceptQuestions = cumulativeData2.concept_quiz.flatMap(
        (topic) => topic.questions
      );
      return { questions: conceptQuestions } as unknown as RawTopicJsonData;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-y-auto overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 py-4 md:py-8 max-w-7xl">
        <header className="mb-4 md:mb-10 text-center py-3 md:py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-black">
            Study Quiz App
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2">
            Test your knowledge on machine learning algorithms, dance
            philosophies, and more.
          </p>
        </header>

        {viewMode === "topics" ? (
          <div>
            {/* Final Quiz Card */}
            <div className="mb-8">
              <Card className="flex flex-col items-center overflow-hidden hover:shadow-lg transition-all duration-300 bg-amber-50 border-amber-200 shadow max-w-2xl mx-auto">
                <CardHeader className="pb-3 border-b border-amber-100">
                  <CardTitle className="flex items-center gap-2 text-black text-center">
                    <span
                      className="text-3xl mx-auto"
                      role="img"
                      aria-hidden="true"
                    >
                      🏆
                    </span>
                    <span className="mx-auto">Final Cumulative Quiz</span>
                  </CardTitle>
                  <CardDescription className="text-amber-700">
                    Test your knowledge with questions from all topics
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-0 pt-4">
                  <p className="text-sm text-amber-700">
                    A comprehensive assessment with{" "}
                    {cumulativeData.questions.length} questions covering all
                    machine learning concepts
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    variant="default"
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    onClick={handleStartFinalQuiz}
                    aria-label="Start Final Quiz"
                  >
                    Start Final Quiz
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <h2 className="text-xl font-semibold mb-4 text-center">
              Topic Quizzes
            </h2>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              role="list"
            >
              {availableTopics.map((topic) => (
                <Card
                  key={topic}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border-none shadow"
                  role="listitem"
                >
                  <CardHeader className="pb-3 border-b border-gray-100">
                    <CardTitle className="flex items-center gap-2 text-black">
                      <span
                        className="text-3xl"
                        role="img"
                        aria-hidden="true"
                        aria-label={topicIcons[topic].icon}
                      >
                        {topicIcons[topic].icon}
                      </span>
                      {topicData[topic].title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {topicIcons[topic].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-0 pt-4">
                    <p className="text-sm text-gray-500">
                      Multiple quizzes available with{" "}
                      {Math.max(
                        topicData[topic].data.questions.length,
                        topicData[topic].data2.questions.length
                      )}{" "}
                      questions each
                    </p>
                  </CardContent>
                  <CardFooter className="pt-4 flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="default"
                      className="w-full sm:w-1/2"
                      onClick={() => handleStartQuiz(topic)}
                      aria-label={`Start quiz for ${topicData[topic].title}`}
                    >
                      Start Quiz
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full sm:w-1/2 border-amber-500 text-amber-700 hover:bg-amber-50"
                      onClick={() => handleReadConcepts(topic)}
                      aria-label={`Read concepts for ${topicData[topic].title}`}
                    >
                      Read Concepts
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ) : viewMode === "quizSelection" && selectedTopic ? (
          <div className="max-w-4xl mx-auto">
            <Button
              onClick={handleBack}
              className="mb-6 gap-2"
              variant="default"
              aria-label="Go back to topics"
            >
              <span aria-hidden="true">←</span> Back to Topics
            </Button>

            <Card className="overflow-hidden shadow-lg bg-white border-none">
              <CardHeader className="text-center pb-2 border-b">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl text-black">
                  {topicData[selectedTopic].title} - Select Quiz
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Choose one of the available quiz sets
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <QuizCard
                  topic={selectedTopic}
                  onClick={() => handleSelectQuiz(1)}
                  buttonText="Quiz 1"
                  questions={topicData[selectedTopic].data.questions.length}
                />

                <QuizCard
                  topic={selectedTopic}
                  onClick={() => handleSelectQuiz(2)}
                  buttonText="Quiz 2"
                  questions={topicData[selectedTopic].data2.questions.length}
                />
              </CardContent>
            </Card>
          </div>
        ) : viewMode === "quiz" && selectedTopic ? (
          <div className="max-w-4xl mx-auto scroll-y-only">
            <Button
              onClick={handleBack}
              className="mb-6 gap-2"
              variant="default"
              aria-label="Go back to topics"
            >
              <span aria-hidden="true">←</span> Back to Topics
            </Button>
            <Quiz
              title={`${topicData[selectedTopic].title} - Quiz ${selectedQuizSet}`}
              questions={processQuestions(getQuizData(selectedTopic).questions)}
            />
          </div>
        ) : viewMode === "finalQuizSelection" ? (
          <div className="max-w-4xl mx-auto">
            <Button
              onClick={handleBack}
              className="mb-6 gap-2"
              variant="default"
              aria-label="Go back to topics"
            >
              <span aria-hidden="true">←</span> Back to Topics
            </Button>

            <Card className="overflow-hidden shadow-lg bg-amber-50 border-amber-200">
              <CardHeader className="text-center pb-2 border-b border-amber-100">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl text-black">
                  Final Cumulative Quiz - Select Version
                </CardTitle>
                <CardDescription className="text-amber-700">
                  Choose one of the available quiz sets
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <QuizCard
                  topic="decisionTree" // Just to satisfy the type, not actually used
                  onClick={() => handleSelectFinalQuiz(1)}
                  buttonText="Cumulative Quiz 1"
                  questions={cumulativeData.questions.length}
                />

                <QuizCard
                  topic="decisionTree" // Just to satisfy the type, not actually used
                  onClick={() => handleSelectFinalQuiz(2)}
                  buttonText="Cumulative Quiz 2"
                  questions={cumulativeData2.concept_quiz.reduce(
                    (total, topic) => total + topic.questions.length,
                    0
                  )}
                />
              </CardContent>
            </Card>
          </div>
        ) : viewMode === "finalQuiz" ? (
          <div className="max-w-4xl mx-auto scroll-y-only">
            <Button
              onClick={handleBack}
              className="mb-6 gap-2"
              variant="default"
              aria-label="Go back to quiz selection"
            >
              <span aria-hidden="true">←</span> Back
            </Button>
            <Quiz
              title={`Final Cumulative Quiz ${selectedQuizSet}`}
              questions={processQuestions(getFinalQuizData().questions)}
            />
          </div>
        ) : viewMode === "concepts" && selectedTopic ? (
          <div className="max-w-4xl mx-auto">
            <ConceptGuide
              topicTitle={topicData[selectedTopic].title}
              concepts={
                selectedTopic === "naiveBayes"
                  ? naiveBayesConcepts
                  : selectedTopic === "svm"
                  ? svmConcepts
                  : selectedTopic === "regression"
                  ? regressionConcepts
                  : selectedTopic === "decisionTree"
                  ? decisionTreeConcepts
                  : selectedTopic === "knn"
                  ? knnConcepts
                  : selectedTopic === "pca"
                  ? pcaConcepts
                  : selectedTopic === "dance"
                  ? danceConcepts
                  : agenticAIConcepts
              }
              onBack={handleBack}
            />
          </div>
        ) : null}

        {viewMode === "topics" && (
          <footer className="mt-12 text-center text-gray-500 text-sm py-4">
            <p>
              Created for students. Study and test your knowledge with our
              curated quizzes on various subjects.
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};

const QuizCard: React.FC<{
  topic: TopicKey;
  onClick: () => void;
  buttonText: string;
  questions: number;
}> = ({ onClick, buttonText, questions }) => (
  <Card
    className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:border-amber-500"
    onClick={onClick}
    role="button"
    aria-pressed="false"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        onClick();
        e.preventDefault();
      }
    }}
  >
    <CardHeader className="pb-3 text-center">
      <CardTitle className="text-xl text-black">{buttonText}</CardTitle>
      <CardDescription>{questions} questions</CardDescription>
    </CardHeader>
    <CardContent className="text-center pb-6">
      <Button variant="default">Start {buttonText}</Button>
    </CardContent>
  </Card>
);

export default App;
