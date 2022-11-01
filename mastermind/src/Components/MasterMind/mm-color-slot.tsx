/* The individual slots representing a color. 

Has: color attribute as background

Can be: display only, if it is part of one of the historical rows, or clickable to let user pick colors*/

import * as React from 'react';
import Box from '@mui/material/Box';

export default function MMColorSlot() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        Color box
    </Box>
  );
}