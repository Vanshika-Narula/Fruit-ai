import React, { createContext, useState, useEffect, useContext } from 'react';
import { getFaqs } from '../api/fruitAPI';

// Create the FaqContext
const FaqContext = createContext();

// Provider component
export const FaqProvider = ({ children }) => {
  const [faqs, setFaqs] = useState([]);

  // Function to fetch FAQs from API
  const fetchFaqs = async () => {
    try {
      const data = await getFaqs();
      setFaqs(data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  // Function to add a new FAQ
  const addFaq = async (newFaq) => {
    try {
      // TODO: Implement API call to add a new FAQ
      // await api.addFaq(newFaq);
      fetchFaqs(); // Refetch FAQs after adding
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  // Function to update an existing FAQ
  const updateFaq = async (faqId, updatedFaq) => {
    try {
      // TODO: Implement API call to update an FAQ
      // await api.updateFaq(faqId, updatedFaq);
      fetchFaqs(); // Refetch FAQs after updating
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  // Function to delete an FAQ
  const deleteFaq = async (faqId) => {
    try {
      // TODO: Implement API call to delete an FAQ
      // await api.deleteFaq(faqId);
      fetchFaqs(); // Refetch FAQs after deletion
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  // Fetch FAQs on component mount
  useEffect(() => {
    fetchFaqs();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <FaqContext.Provider value={{ faqs, addFaq, updateFaq, deleteFaq }}>
      {children}
    </FaqContext.Provider>
  );
};

// Custom hook to use the FaqContext
export const useFaq = () => {
  return useContext(FaqContext);
};
