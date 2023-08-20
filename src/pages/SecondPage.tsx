import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if necessary data is present in local storage
    const userDetailsString = localStorage.getItem('userDetails');
    if (!userDetailsString) {
      navigate('/'); // Redirect to the first page if data is not present
    }
  }, [navigate]);

  // Render the content of the second page
  return (
    <div>
      Second page
    </div>
  );
};

export default SecondPage;
