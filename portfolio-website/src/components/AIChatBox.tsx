import React from "react";
import { Message, useChat } from "ai/react";
import { cn } from "../libs/utils";
import { Bot, XCircle } from "lucide-react";
// this useChat hook is coming from Vercel.ai SDK that I already installed
import ReactMarkdown from "react-markdown";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

const AIChatBox = ({ open, onClose }: AIChatBoxProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat({
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Hi, I'm the chatbot!",
      },
      {
        id: "2",
        role: "user",
        content: "Hi, I'm the user!",
      },
      {
        id: "3",
        role: "assistant",
        content: `
[Coding in Flow](http://codinginflow.com)
List:
- item 1
- item 2
- item 3
`,
      },
    ],
  }); // the default api endpoint is '/api/chat'

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircle size={30} className="rounded-full bg-background" />
      </button>
      <div className="rounder flex h-[600px] flex-col border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3">
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <Bot className="mr-2 flex-none" />}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-foreground text-background",
        )}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default AIChatBox;
