import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChatProvider } from './contexts/ChatContext';
import { TranslatorProvider } from './contexts/TranslatorContext';
import { FaqProvider } from './contexts/FaqContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatProvider>
      <TranslatorProvider>
        <FaqProvider>
          <App />
        </FaqProvider>
      </TranslatorProvider>
    </ChatProvider>
  </React.StrictMode>
);