import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Ask me anything about AI or LLMs 🚀" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    
    try {
      const response = await fetch("/api/chat?message=" + encodeURIComponent(input));
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let aiMessage = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        aiMessage += decoder.decode(value);
        setMessages((prev) => [
          ...prev.filter((m) => m.sender !== "stream"),
          { sender: "stream", text: aiMessage },
        ]);
      }


      setMessages((prev) => [
        ...prev.filter((m) => m.sender !== "stream"),
        { sender: "bot", text: aiMessage },
      ]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong." }]);
    }
  };


  return (
    <div>
      hello
    </div>
  );
};

export default ChatBot;
