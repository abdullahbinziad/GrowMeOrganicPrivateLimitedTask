import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Box  } from '@mui/material';


const Form: React.FC = () => {
  const navigate = useNavigate();


  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const userDetails = {
      name,
      phoneNumber,
      email,
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    navigate('/secondpage');
  };

  const handleNavigateToSecondPage = () => {
    // Check if all necessary fields are filled
    const userDetailsString = localStorage.getItem('userDetails');
    if (!userDetailsString) {

      alert('Please enter all your details before accessing the second page.');
    } else {
      navigate('/secondpage');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
     
      <Box mt={2}> 
        <Button onClick={handleNavigateToSecondPage} variant="contained" color="secondary">
          Go to Second Page
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
