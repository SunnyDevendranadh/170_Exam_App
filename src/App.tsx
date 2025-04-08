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

// Import JSON data for Quiz 2
import decisionTreeData2 from "./data/quiz_2/decisiontree2.json";
import knnData2 from "./data/quiz_2/knn2.json";
import naiveBayesData2 from "./data/quiz_2/naiveBayes2.json";
import svmData2 from "./data/quiz_2/svm2.json";
import pcaData2 from "./data/quiz_2/pca2.json";
import regressionData2 from "./data/quiz_2/regression2.json";

// Import concept guides
import { conceptGuides } from "./data/conceptGuides";

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
  | "regression";

type ViewMode = "topics" | "quiz" | "concepts" | "quizSelection";
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
    if (viewMode === "quizSelection") {
      setViewMode("topics");
      setSelectedTopic(null);
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

  const handleReadConcepts = (topic: TopicKey): void => {
    setSelectedTopic(topic);
    setViewMode("concepts");
  };

  const handleSelectQuiz = (quizSet: QuizSet): void => {
    setSelectedQuizSet(quizSet);
    setViewMode("quiz");
  };

  // Get the keys strongly typed
  const availableTopics = Object.keys(topicData) as TopicKey[];

  // Helper function to get quiz data
  const getQuizData = (topic: TopicKey): RawTopicJsonData => {
    return selectedQuizSet === 1
      ? topicData[topic].data
      : topicData[topic].data2;
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-y-auto overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 py-4 md:py-8 max-w-7xl">
        <header className="mb-4 md:mb-10 text-center py-3 md:py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-black">
            Machine Learning Quiz App
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2">
            Test your knowledge on machine learning algorithms and techniques.
          </p>
        </header>

        {viewMode === "topics" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {availableTopics.map((topic) => (
              <Card
                key={topic}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border-none shadow"
              >
                <CardHeader className="pb-3 border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2 text-black">
                    <span className="text-3xl" role="img" aria-hidden="true">
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
                  >
                    Start Quiz
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:w-1/2 border-amber-500 text-amber-700 hover:bg-amber-50"
                    onClick={() => handleReadConcepts(topic)}
                  >
                    Read Concepts
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : viewMode === "quizSelection" && selectedTopic ? (
          <div className="max-w-4xl mx-auto">
            <Button
              onClick={handleBack}
              className="mb-6 gap-2"
              variant="default"
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
                <Card
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:border-amber-500"
                  onClick={() => handleSelectQuiz(1)}
                >
                  <CardHeader className="pb-3 text-center">
                    <CardTitle className="text-xl text-black">Quiz 1</CardTitle>
                    <CardDescription>
                      {topicData[selectedTopic].data.questions.length} questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <Button variant="default">Start Quiz 1</Button>
                  </CardContent>
                </Card>

                <Card
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:border-amber-500"
                  onClick={() => handleSelectQuiz(2)}
                >
                  <CardHeader className="pb-3 text-center">
                    <CardTitle className="text-xl text-black">Quiz 2</CardTitle>
                    <CardDescription>
                      {topicData[selectedTopic].data2.questions.length}{" "}
                      questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <Button variant="default">Start Quiz 2</Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        ) : viewMode === "quiz" && selectedTopic ? (
          <div className="max-w-4xl mx-auto scroll-y-only">
            <Button
              onClick={handleBack}
              className="mb-6 gap-2"
              variant="default"
            >
              <span aria-hidden="true">←</span> Back to Topics
            </Button>
            <Quiz
              title={`${topicData[selectedTopic].title} - Quiz ${selectedQuizSet}`}
              questions={processQuestions(getQuizData(selectedTopic).questions)}
            />
          </div>
        ) : viewMode === "concepts" && selectedTopic ? (
          <div className="max-w-4xl mx-auto">
            <ConceptGuide
              topicTitle={topicData[selectedTopic].title}
              concepts={conceptGuides[selectedTopic]}
              onBack={handleBack}
            />
          </div>
        ) : null}

        {viewMode === "topics" && (
          <footer className="mt-12 text-center text-gray-500 text-sm py-4">
            <p>
              Created for machine learning students. Study and test your
              knowledge with our curated quizzes.
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default App;
