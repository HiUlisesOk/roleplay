import { useState } from "react";
import TextBox from "../BBcode/TextBox";
import { Box, Button } from "@mui/material";
import RenderBBcode from "../BBcode/RenderBBcode";

function Playground() {
   const [textContent, setTextContent] = useState('');
   const handleClick = () => {
   };
   return (
      <>
         <TextBox content={textContent} setContent={setTextContent} />
         <Button color="error" variant="contained" onClick={handleClick}> Send </Button>
         <Box> <RenderBBcode content={textContent} /> </Box>
      </>
   );
}
export default Playground;