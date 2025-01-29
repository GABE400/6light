"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatBot = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError(null);

    const userMessage: Message = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, data]);
    } catch (err) {
      console.error("Error submitting message:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    if (messages.length > 0) {
      handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className={`fixed z-50 ${className}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 sm:w-96 h-[28rem] flex flex-col overflow-hidden"
          >
            <div className="bg-gray-200 dark:bg-gray-200 text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image
                  src="/6 Light Logo.png"
                  alt="6 Light Media Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <h3 className="font-bold text-lg text-black">
                  {" "}
                  Six Light Media Bot Assistant
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-red-600 transition-colors"
                aria-label="Close chat"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 ml-auto"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  } max-w-[80%]`}
                >
                  {message.content}
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <div className="animate-pulse flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                  </div>
                  <span>Typing...</span>
                </div>
              )}
              {error && (
                <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 flex flex-col items-start gap-2">
                  <div className="flex items-center">
                    <AlertCircle size={16} className="mr-2" />
                    An error occurred: {error}
                  </div>
                  <button
                    onClick={handleRetry}
                    className="text-sm text-red-800 dark:text-red-200 hover:underline"
                  >
                    Try again
                  </button>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-gray-200 dark:border-gray-700 flex"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-red-800 dark:bg-red-700 text-white px-4 py-2 rounded-r-md hover:bg-red-700 dark:hover:bg-red-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center space-x-2"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 rounded-full shadow-md"
          >
            <span className="text-sm font-medium">
              Need help? Chat with us!
            </span>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="bg-red-800 dark:bg-yellow-400 text-white dark:text-black p-3 rounded-full shadow-lg hover:bg-green-600 dark:hover:bg-green-600 transition-colors duration-300 flex items-center justify-center relative z-10"
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ChatBot;
