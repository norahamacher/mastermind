/* Game file, which will contain the game panel itself */

/* The individual slots representing a color. 

Has: color attribute as background

Can be: display only, if it is part of one of the historical rows, or clickable to let user pick colors*/

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
export default function MMGame(children:any) {
  return (
    <Box
      sx={{
        width: 600,
        height: "100%",
      }}
    >

    {children}
    </Box>
  );
}