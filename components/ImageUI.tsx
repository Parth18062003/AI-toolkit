import React from "react";
import Header from "./ui/chat-header";
import ChatInput from "./ui/chatInput";

const placeholders = [
  "Generate surreal landscapes with AI assistance.",
  "Design futuristic cityscapes using AI-powered tools.",
  "Create whimsical character illustrations using AI algorithms.",
  "Produce abstract artwork inspired by random prompts."
];

const ImageUI = () => {

  return (
    <div>
      <Header
        title="Image"
        description="Our most advanced conversational model"
      />
      <div className="px-4 lg:px-8">
        <ChatInput placeholders={placeholders}/>
      </div>
      <div className="space-y-4 mt-4">
        Messages
      </div>
    </div>
  );
};

export default ImageUI;
