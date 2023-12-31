import { Button } from "@/components/ui/button";
import { ActivitySquare } from "lucide-react";
import type { UseChatHelpers } from "@sshkeda/ai/react";

interface ChatSuggestionsProps {
  append: UseChatHelpers["append"];
  generateReport: () => void;
}

export default function ChatSuggestions({
  append,
  generateReport,
}: ChatSuggestionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          append({
            role: "user",
            content: "What is waccessible.ai?",
          })
        }
      >
        What is waccessible.ai?
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          append({
            role: "user",
            content: "What is WCAG?",
          })
        }
      >
        What is WCAG?
      </Button>
      <Button variant="outline" onClick={generateReport}>
        <ActivitySquare className="mr-2 h-4 w-4" />
        Generate an accessibility report
      </Button>
    </div>
  );
}
