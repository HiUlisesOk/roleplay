import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";

const TextBox = ({ content, setContent }) => {
   const textareaRef = useRef(null);
   const addTag = (x) => {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentContent = textarea.value;

      const newText =
         currentContent.substring(0, start) +
         `[${x}]` +
         currentContent.substring(start, end) +
         `[/${x}]` +
         currentContent.substring(end);

      setContent(newText);

      setTimeout(() => {
         textarea.focus();
         textarea.setSelectionRange(start + `[${x}]`.length, end + `[${x}]`.length);
      }, 0);
   };
   const addSingleTag = (x) => {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentContent = textarea.value;

      const newText =
         currentContent.substring(0, start) +
         `[${x}]` +
         currentContent.substring(start, end) +
         currentContent.substring(end);

      setContent(newText);

      setTimeout(() => {
         textarea.focus();
         textarea.setSelectionRange(start + `[${x}]`.length, end + `[${x}]`.length);
      }, 0);
   };

   return (
      <>
         <TextField
            inputRef={textareaRef}
            value={content}
            multiline
            onChange={(e) => { setContent(e.target.value); }} />
         <Box>
            <Button color="secondary" variant='contained' onClick={() => addTag('b')}> B </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('i')}> I </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('s')}> S </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('code')}> CODE </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('quote')}> QUOTE </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('list')}> LIST </Button>
            <Button color="secondary" variant='contained' onClick={() => addSingleTag('*')}> ITEM </Button>
         </Box>
      </>
   );
};
export default TextBox;