import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import MMGame from './Components/MasterMind/mm-game'
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import MMColorSlot from './Components/MasterMind/mm-color-slot';
function Game() {

  const [playing, setPlaying] = useState(false)
  const [numColors,setNumColors] = useState(5)
  const [guessRow,setGuessRow] = useState<string[]>([])
  const [useDuplicateColors,setUseDuplicateColors] = useState(false)

  useEffect(() => {
    let arr = [];
    for(let i = 0; i < numColors; i++){
      arr.push("#f5dcc6");
    }
    setGuessRow(arr);
  }, [numColors]);
  useEffect(() => {
    // Update the document title using the browser API
    console.log("playing: " +playing)
  }, [playing]);

  useEffect(() => {
    console.log("use DuplicateColors: " +useDuplicateColors)
  }, [useDuplicateColors])

  pickColor(index)=>{
    
  }
  return (
    <Container >
      <Box
        sx={{
          display: 'flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        {/* Contains difficulty configurations for the game. Is deactivated when currently playing. */}
        <Box
          sx={{
            width: 200,
            height: 300
          }}
        >
          <FormControlLabel control={<Checkbox defaultChecked={false} onClick={()=>setUseDuplicateColors(!useDuplicateColors)}/>} label="Allow duplicated colors" />
        </Box>
        {/*   */}
 
          <Box   sx={{
            width: 500,
            height: 48,
            display: 'flex',
            justifyContent: 'center'
          }}>
            {guessRow.map((color, index) => 
              <Box 
              sx={{width:48, 
              height:48, 
              borderColor:"black",
              border: '1px solid', 
              bgcolor:color }} 
              onclick={()=>pickColor(index)}
              key={"col"+index}>
              </Box>
            )}
          </Box>
 
      </Box>


      <Button sx={{ height: 48 }} onClick={() => {
        setPlaying(!playing);
      }}> {playing ? "Start Game" : "Stop Game"}</Button>
    </Container>

  );
}

export default Game;
