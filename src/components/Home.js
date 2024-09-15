import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Link to="/chat">
          <div className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Chat
          </div>
        </Link>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Link to="/translator">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Translator
          </div>
        </Link>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Link to="/faq">
          <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            FAQ
          </div>
        </Link>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Link to="/about">
          <div className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            About
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;