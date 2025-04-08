// Define the Question interface needed for the Results component
export interface Question {
  id?: number | string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
}

// Define the Concept interface for concept guides
export interface Concept {
  title: string;
  description: string[];
} 