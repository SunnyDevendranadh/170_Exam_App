import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Concept } from "../types";
import { ArrowLeft } from "lucide-react";

interface ConceptGuideProps {
  topicTitle: string;
  concepts: Concept[];
  onBack: () => void;
}

export const ConceptGuide = ({
  topicTitle,
  concepts,
  onBack,
}: ConceptGuideProps) => {
  return (
    <Card className="w-full shadow-sm border-none">
      <CardHeader className="text-center pb-2 border-b">
        <CardTitle className="text-xl sm:text-2xl md:text-3xl text-black whitespace-normal">
          {topicTitle} - Concept Guide
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6 overflow-y-auto scroll-y-only max-h-[70vh]">
        {concepts.map((concept, conceptIndex) => (
          <div
            key={conceptIndex}
            className="p-4 md:p-6 bg-amber-50 rounded-lg border border-amber-500"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 text-black">
              {concept.title}
            </h3>
            {concept.description.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="mb-3 text-sm md:text-base text-black whitespace-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex justify-center p-4 md:p-6 border-t">
        <Button
          onClick={onBack}
          className="px-6 py-2 flex items-center gap-2"
          variant="default"
          aria-label="Go back to topics"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Topics
        </Button>
      </CardFooter>
    </Card>
  );
};
