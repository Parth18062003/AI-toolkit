import React from "react";
import Header from "./ui/chat-header";
import ChatInput from "./ui/chatInput";

const placeholders = [
  "Write CSS to center a div horizontally and vertically.",
  "Implement a Java program to generate the Fibonacci sequence.",
  "Create a Python function to count the occurrence of a word in a string.",
  "Design JavaScript code to validate email addresses using regular expressions."
];

const CodeUI = () => {
  return (
    <div>
      <Header
        title="Conversation"
        description="Our most advanced conversational model"
      />

      <ChatInput placeholders={placeholders} />

      <div className="space-y-4 mt-4">Messages</div>
    </div>
  );
};

export default CodeUI;
