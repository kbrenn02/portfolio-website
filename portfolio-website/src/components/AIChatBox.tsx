import React from 'react'
import { Message, useChat } from 'ai/react'
import { cn } from '../libs/utils';
import { XCircle } from 'lucide-react';
// this useChat hook is coming from Vercel.ai SDK that I already installed

interface AIChatBoxProps {
    open: boolean;
    onClose: () => void;
}


const AIChatBox = ({open, onClose} : AIChatBoxProps) => {

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
                id: '1',
                role: 'assistant',
                content: "Hi, I'm the chatbot!"
            },
            {
                id: '2',
                role: 'user',
                content: "Hi, I'm the user!"
            },
        ]
    }); // the default api endpoint is '/api/chat'

    return (
        <div 
            className={cn(
                "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36", 
                open ? "fixed" : "hidden",
            )}
        >
            <button onClick={onClose} className='mb-1 ms-auto block'>
                <XCircle size={30} className='rounded-full bg-background' />
            </button>
            <div className='flex h-[600px] flex-col rounder border bg-background shadow-xl'>
                <div className='mt-3 h-full overflow-y-auto px-3'>
                    {messages.map(message => (
                        <ChatMessage message={message} key={message.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}


interface ChatMessageProps {
    message: Message;
}

function ChatMessage( {message: {role, content}}: ChatMessageProps) {
    const isAiMessage = role === 'assistant';

    return <div>
        Role: {role}
        Message: {content}
    </div>
}

export default AIChatBox