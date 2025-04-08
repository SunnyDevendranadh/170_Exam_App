import React, { useState } from "react";
import Quiz from "./components/Quiz";

// Import JSON data
import decisionTreeData from "./data/decisionTree.json";
import knnData from "./data/knn.json";
import naiveBayesData from "./data/naiveBayes.json";
import svmData from "./data/svm.json";
import pcaData from "./data/pca.json";
import regressionData from "./data/regression.json";

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
}

// Define the possible keys for the topics explicitly
type TopicKey =
  | "decisionTree"
  | "knn"
  | "naiveBayes"
  | "svm"
  | "pca"
  | "regression";

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
  },
  knn: {
    title: "K-Nearest Neighbors (KNN)",
    data: knnData as unknown as RawTopicJsonData,
  },
  naiveBayes: {
    title: "Naive Bayes",
    data: naiveBayesData as unknown as RawTopicJsonData,
  },
  svm: {
    title: "Support Vector Machines (SVM)",
    data: svmData as unknown as RawTopicJsonData,
  },
  pca: {
    title: "Principal Component Analysis (PCA)",
    data: pcaData as unknown as RawTopicJsonData,
  },
  regression: {
    title: "Regression Models",
    data: regressionData as unknown as RawTopicJsonData,
  },
};

// --- Component Definition ---

// Define Props for the Quiz component to match the actual prop types
// interface QuizProps {
//   title: string;
//   questions: QuestionData[];
// }

// Use React.FC (Functional Component) type
const App: React.FC = () => {
  // Type the state: it can be one of the TopicKeys or null
  const [selectedTopic, setSelectedTopic] = useState<TopicKey | null>(null);

  // Type the parameter for the handler
  const handleTopicSelect = (topic: TopicKey): void => {
    setSelectedTopic(topic);
  };

  // Add explicit void return type
  const handleBack = (): void => {
    setSelectedTopic(null);
  };

  // Get the keys strongly typed
  const availableTopics = Object.keys(topicData) as TopicKey[];

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 py-4 md:py-8 max-w-7xl overflow-x-hidden">
        <header className="mb-4 md:mb-10 text-center py-3 md:py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-black">
            Machine Learning Quiz App
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-2">
            Test your knowledge on machine learning algorithms and techniques.
          </p>
        </header>

        {selectedTopic ? (
          <div className="max-w-4xl mx-auto">
            <Button
              onClick={handleBack}
              className="mb-6 gap-2"
              variant="default"
            >
              <span aria-hidden="true">←</span> Back to Topics
            </Button>
            <Quiz
              title={topicData[selectedTopic].title}
              questions={processQuestions(
                topicData[selectedTopic].data.questions
              )}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {availableTopics.map((topic) => (
              <Card
                key={topic}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border-none shadow"
                onClick={() => handleTopicSelect(topic)}
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
                    {topicData[topic].data.questions.length} questions to test
                    your knowledge
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button variant="default" className="w-full">
                    Start Quiz
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {!selectedTopic && (
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
