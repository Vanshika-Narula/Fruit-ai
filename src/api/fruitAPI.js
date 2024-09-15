// Example (replace with actual API endpoints)
const apiUrl = 'https://api.example.com'; 

export const getFaqs = async () => {
  try {
    const response = await fetch(`${apiUrl}/faqs`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
};

// ... other API functions