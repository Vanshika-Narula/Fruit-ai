import React, { createContext, useState, useEffect } from 'react';
import { getFaqs } from '../api/fruitAPI';

const FaqContext = createContext();

export const FaqProvider = ({ children }) => {
  const [faqs, setFaqs] = useState([]);

  const fetchFaqs = async () => {
    try {
      const data = await getFaqs();
      setFaqs(data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  const addFaq = async (newFaq) => {
    // TODO: Implement API call to add a new FAQ
    // ...

    fetchFaqs();
  };

  const updateFaq = async (faqId) => {
    // TODO: Implement API call to update an existing FAQ
    // ...

    fetchFaqs();
  };

  const deleteFaq = async (faqId) => {
    // TODO: Implement API call to delete an FAQ
    // ...

    fetchFaqs();
  };

  return (
    <FaqContext.Provider value={{ faqs, fetchFaqs, addFaq, updateFaq, deleteFaq }}>
      {children}
    </FaqContext.Provider>
  );
};

export const useFaq = () => {
  return React.useContext(FaqContext);
};