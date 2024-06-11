import React, { useEffect, useRef } from "react";
import { Message, useChat } from "ai/react";
import { cn } from "@/src/libs/utils";
import { Bot, SendHorizonal, Trash, XCircle } from "lucide-react";
// this useChat hook is coming from Vercel.ai SDK that I already installed
import ReactMarkdown from "react-markdown";
import Link from "next/link";

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
    api: '/api/chat'
  }); // the default api endpoint is '/api/chat'

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
        // this code is needed to scroll down in chatbox
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages])

  useEffect(() => {
    if (open) {
        inputRef.current?.focus();
    }
  }, [open])

  // this messages array could be empty, so we put the ? at the end of the array call. If it's not empty, then we're checking
  // the role of who sent the last message
  const lastMessageIsUser = messages[messages.length - 1]?.role === 'user';

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
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}


          {/* If the user asked a question, and before the ai chatbox as responded, this is the loading screen while
          it's "thinking." Also gives an error message if there is an error */}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
                message = {{
                    id: 'loading',
                    role: 'assistant',
                    content: 'Thinking...',
                }}
            />
          )}
          {error && (
            <ChatMessage
                message={{
                    id: 'error',
                    role: 'assistant',
                    content: 'The Chatbot is currently undergoing maintenance and is unavailable at the moment. Take a stroll through the website to find what you\'re looking for!',
                }}
            />
          )}

          {/* This is the view if there are no messages and no errors, aka the user hasn't started typing */}
          {!error && messages.length === 0 && (
            <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
              <Bot size={28} />
              <p className="text-lg font-medium">
                Send a message to start the AI chat!
              </p>
              <p className="text-sm text-muted-foreground">
                You can ask the chatbot any question about me and it will find
                the relevant information on this website.
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <button
                type="button"
                className="flex items-center justify-center w-10 flex-none"
                title='Clear chat'
                onClick={() => setMessages([])}
            >
                <Trash size = {24} />
          </button>
          <input 
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
            className="grow border rounded bg-background px-3 py-2"
            type="text" 
            ref={inputRef}
          />
          <button
            type="submit"
            className="flex items-center justify-center w-10 flex-none disabled:opacity-50"
            disabled={input.length === 0}
            title='Submit message'
          >
            <SendHorizonal size={24} />
          </button>

        </form>

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
        <ReactMarkdown
          components={{
            // this is applying specific styling to this different components only in the chatbox
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary hover:underline"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default AIChatBox;
