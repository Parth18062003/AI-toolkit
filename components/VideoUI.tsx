import React from "react";
import Header from "./ui/chat-header";
import ChatInput from "./ui/chatInput";

const VideoUI = () => {
  return (
    <div>
      <Header
        title="Conversation"
        description="Our most advanced conversational model"
      />

      <ChatInput />

      <div className="space-y-4 mt-4">Messages</div>
    </div>
  );
};

export default VideoUI;
