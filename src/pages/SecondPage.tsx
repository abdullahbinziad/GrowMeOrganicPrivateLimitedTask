import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MyDataGrid from '../components/MyDataGrid';
import { Container, Typography } from '@mui/material';

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
    <Container >

        <Typography variant='h2' align='center' margin={5} fontWeight={1}>Second Page Data Table</Typography>
      <MyDataGrid/>
    </Container>
  );
};

export default SecondPage;
