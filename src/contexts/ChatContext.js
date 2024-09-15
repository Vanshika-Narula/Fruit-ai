import React, { createContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, { content: message, isBot: false }]);
    // TODO: Implement bot logic to send a response
    // ...
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return React.useContext(ChatContext);
};