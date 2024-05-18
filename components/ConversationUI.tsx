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

export default ConversationUI;
