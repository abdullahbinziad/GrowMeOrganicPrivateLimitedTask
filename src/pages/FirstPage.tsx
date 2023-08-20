import { Typography ,useTheme } from "@mui/material";

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Form from "../components/Form";
const FirstPage = () => {

    const theme = useTheme();


  return (
    <Container  maxWidth="md">
        <CssBaseline />
         
      <Typography margin={theme.spacing(8)} variant="h4" fontWeight={10} align="center"  component="h2">
        {" "}
        Information for Furthure Proceed
      </Typography>

<Form/>

  
      </Container>





  );
};

export default FirstPage;






