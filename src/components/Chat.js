import React, { useState, useEffect } from 'react';

function Chat() {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  useEffect(() => {
    // dummy data for fruits
    const fruitsData = [
      { id: 1, name: 'Apple', description: 'A juicy red fruit' },
      { id: 2, name: 'Banana', description: 'A yellow curved fruit' },
      { id: 3, name: 'Cherry', description: 'A small red fruit' },
    ];
    setFruits(fruitsData);
  }, []);

  const handleFruitSelect = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h2>Fruits</h2>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit.id}>
              <div
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={() => handleFruitSelect(fruit)}
              >
                {fruit.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedFruit && (
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <h2>{selectedFruit.name}</h2>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
}

export default Chat;