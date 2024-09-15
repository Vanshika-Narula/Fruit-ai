
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fruit-AI</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/chat">Chat</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/translator">Translator</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;