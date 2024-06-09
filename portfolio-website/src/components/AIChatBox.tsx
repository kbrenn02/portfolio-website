import React from 'react'
import { useChat } from 'ai/react'
import { cn } from '../libs/utils';
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
    } = useChat(); // the default api endpoint is '/api/chat'

    return (
        <div 
            className={cn(
                "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36", 
                open ? "fixed" : "hidden",
            )}
        >
            Chatbox
        </div>
    );
}

export default AIChatBox