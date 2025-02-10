import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Wrapper } from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Box>
        <Button variant="contained">Hello Wrapper</Button>
      </Box>
    </Wrapper>
  );
}

export default App;
