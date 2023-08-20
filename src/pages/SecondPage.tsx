import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import MyDataGrid from '../components/MyDataGrid';
import { Container, Typography } from '@mui/material';
import DepartmentBar from '../components/DepartmentBar';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if necessary data is present in local storage
    const userDetailsString = localStorage.getItem('userDetails');
    if (!userDetailsString) {
        alert('You must give all your details before accessing the second page.');
      navigate('/'); 
    }
  }, [navigate]);

 
  return (
    <Container >

        <Typography variant='h2' align='center' margin={5} fontWeight={1}>Second Page Data Table</Typography>
      <MyDataGrid/>

  

<main>
<Box margin={6}>
<Typography variant='h2' align='center' margin={5} fontWeight={1}>The Menu Side Bar</Typography>
<DepartmentBar/>
    </Box>
</main>

    </Container>
  );
};

export default SecondPage;
