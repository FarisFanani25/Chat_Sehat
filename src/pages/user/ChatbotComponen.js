import React from 'react';

const ChatbotIframe = () => {
  return (
    <div className="chatbot-container">
      <iframe
        height="430"
        width="350"
        src="https://console.dialogflow.com/api-client/demo/embedded/a52749e6-0a77-410c-9040-dd872ba70716"
        title="ChatSehat"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default ChatbotIframe;
