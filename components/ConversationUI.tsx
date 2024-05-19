import React from "react";
import Header from "./ui/chat-header";
import ChatInput from "./ui/chatInput";

const placeholders = [
  "Discuss time travel's impact with historical figures.",
  "Chat with an AI about colonizing Mars.",
  "Imagine headlines from 2050 with an AI.",
  "Engage in a conversation about AI self-awareness.",
];

const ConversationUI = () => {
  return (
    <div className="w-full">
      <Header
        title="Conversation"
        description="Our most advanced conversational model"
      />
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ChatInput placeholders={placeholders} />
        </div>
      </div>
    </div>
  );
};

export default ConversationUI;
