import { useState } from "react";
import TextBox from "../BBcode/TextBox";
import { Box, Button } from "@mui/material";
import RenderBBcode from "../BBcode/RenderBBcode";

function Playground() {
   const [textContent, setTextContent] = useState('');

   return (
      <>
         <Box sx={{
            width: '900px', backgroundColor: '#ffffff11', p: '1rem',
         }}>
            <TextBox content={textContent} setContent={setTextContent} />
            <Button fullWidth variant='contained' color="secondary"> SEND </Button>
         </Box >
         <Box> <RenderBBcode content={textContent} /> </Box>
      </>
   );
}
export default Playground;