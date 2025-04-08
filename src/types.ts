// Define the Question interface needed for the Results component
export interface Question {
  id?: number | string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
} 