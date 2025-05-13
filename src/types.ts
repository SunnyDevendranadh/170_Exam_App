// Define the Question interface needed for the Results component
export interface Question {
  id?: number | string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
}

// Define a Quiz Question interface for quiz data files
export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

// Define the Concept interface for concept guides
export interface Concept {
  title: string;
  description: string[];
} 