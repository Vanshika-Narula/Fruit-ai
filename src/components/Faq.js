import React, { useState, useEffect } from 'react';

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  useEffect(() => {
    // dummy data for faqs
    const faqsData = [
      { id: 1, question: 'What is Fruit.ai?', answer: 'A health manager product' },
      { id: 2, question: 'How do I use Fruit.ai?', answer: 'Follow the instructions' },
    ];
    setFaqs(faqsData);
  }, []);

  const handleFaqSubmit = (e) => {
    e.preventDefault();
    const newFaqData = { ...newFaq, id: faqs.length + 1 };
    setFaqs([...faqs, newFaqData]);
    setNewFaq({ question: '', answer: '' });
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq) => (
            <li key={faq.id}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
        <form onSubmit={handleFaqSubmit}>
          <label>Question:</label>
          <input
            type="text"
            value={newFaq.question}
            onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          />
          <br />
          <label>Answer:</label>
          <input
            type="text"
            value={newFaq.answer}
            onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          />
          <br />
          <button type="submit">Add FAQ</button>
        </form>
      </div>
    </div>
  );
}

export default Faq;