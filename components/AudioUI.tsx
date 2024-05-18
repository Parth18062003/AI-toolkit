import React from "react";
import Header from "./ui/chat-header";
import ChatInput from "./ui/chatInput";

const placeholders = [
  "Compose a futuristic soundtrack for a sci-fi movie.",
  "Produce an ambient music track inspired by space exploration.",
  "Create a podcast intro discussing AI ethics.",
  "Generate a radio drama script set in a post-apocalyptic world.",
];

const AudioUI = () => {
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

export default AudioUI;
