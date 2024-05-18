import React from "react";
import Header from "./ui/chat-header";
import ChatInput from "./ui/chatInput";

const placeholders = [
  "Create a short film script about time travel adventures.",
  "Produce a mockumentary about life on Mars in 2050.",
  "Direct a sci-fi trailer for a fictional AI uprising.",
  "Generate a comedy sketch featuring historical figures."
];

const VideoUI = () => {
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

export default VideoUI;
