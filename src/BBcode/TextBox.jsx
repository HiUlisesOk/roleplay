import { Box, Button, Menu, MenuItem, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const TextBox = ({ content, setContent, }) => {
   const textareaRef = useRef(null);
   const [anchorColor, setAnchorColor] = useState(null);
   const [anchorImg, setAnchorImg] = useState(null);
   const [anchorUrl, setAnchorUrl] = useState(null);
   const [anchorSpoiler, setAnchorSpoiler] = useState(null);
   const [color, setColor] = useState('');
   const [img, setImg] = useState('');
   const [url, setUrl] = useState('');
   const [spoiler, setSpoiler] = useState('');


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
   const addTagValue = (x, value) => {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentContent = textarea.value;
      const newText =
         currentContent.substring(0, start) +
         `[${x}=${value}]` +
         currentContent.substring(start, end) +
         `[/${x}]` +
         currentContent.substring(end);
      setContent(newText);
      setTimeout(() => {
         textarea.focus();
         textarea.setSelectionRange(start + `[${x}=${value}]`.length, end + `[/${x}]`.length);
      }, 0);
   };
   const addImg = (x) => {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentContent = textarea.value;
      const newText =
         currentContent.substring(0, start) +
         `[img]` + x + `[/img]` +
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
         <Box sx={{ display: 'flex', gap: '0.5rem', width: '100%', justifyContent: 'center', my: '1rem', flexWrap: 'wrap' }}>
            <Button color="secondary" variant='contained' onClick={() => addTag('b')}> B </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('i')}> I </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('s')}> S </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('code')}> CODE </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('quote')}> QUOTE </Button>
            <Button color="secondary" variant='contained' onClick={() => addTag('list')}> LIST </Button>
            <Button color="secondary" variant='contained' onClick={() => addSingleTag('*')}> ITEM </Button>
            <Button color="secondary" variant="contained" id="color-button"
               aria-controls={open ? 'color-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={(e) => { setAnchorColor(e.currentTarget); }}>COLOR</Button>
            <Menu
               id="color-menu"
               anchorEl={anchorColor}
               open={Boolean(anchorColor)}
               onClose={() => { setAnchorColor(null); }}
               MenuListProps={{
                  'aria-labelledby': 'color-button',
               }}
            >
               <MenuItem>
                  <Box component="form" onSubmit={(e) => {
                     e.preventDefault();
                     addTagValue('color', color);
                     setAnchorColor(null);
                  }}>
                     <TextField
                        inputProps={{
                           autocomplete: 'new-password',
                           form: {
                              autocomplete: 'off',
                           },
                        }}
                        id="outlined-basic" label="color" variant="outlined"
                        value={color}
                        onChange={(e) => { setColor(e.target.value); }} />
                     <Button type="submit" color="secondary" variant="text">Submit</Button>
                  </Box>
               </MenuItem>
            </Menu>

            <Button color="secondary" variant="contained" id="img-button"
               aria-controls={open ? 'img-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={(e) => { setAnchorImg(e.currentTarget); }}>IMG</Button>
            <Menu
               id="basic-menu"
               anchorEl={anchorImg}
               open={Boolean(anchorImg)}
               onClose={() => { setAnchorImg(null); }}
               MenuListProps={{
                  'aria-labelledby': 'color-button',
               }}
            >
               <MenuItem>
                  <Box component="form" onSubmit={(e) => {
                     e.preventDefault();
                     addImg(img);
                     setAnchorImg(null);
                     setImg('');
                  }}>
                     <TextField type='url' id="outlined-basic" label="Img url" variant="outlined"
                        value={img}
                        onChange={(e) => { setImg(e.target.value); }} />
                     <Button type="submit" color="secondary" variant="text">Submit</Button>
                  </Box>
               </MenuItem>
            </Menu>
            <Button color="secondary" variant="contained" id="url-button"
               aria-controls={open ? 'url-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={(e) => { setAnchorUrl(e.currentTarget); }}>URL</Button>
            <Menu
               id="url-menu"
               anchorEl={anchorUrl}
               open={Boolean(anchorUrl)}
               onClose={() => { setAnchorUrl(null); }}
               MenuListProps={{
                  'aria-labelledby': 'color-button',
               }}
            >
               <MenuItem>
                  <Box component="form" onSubmit={(e) => {
                     e.preventDefault();
                     addTagValue('url', url);
                     setAnchorUrl(null);
                  }}>
                     <TextField type='url' id="outlined-basic" label="url" variant="outlined"
                        value={url}
                        onChange={(e) => { setUrl(e.target.value); }} />
                     <Button type="submit" color="secondary" variant="text">Submit</Button>
                  </Box>
               </MenuItem>
            </Menu>
            <Button color="secondary" variant="contained" id="spoiler-button"
               aria-controls={open ? 'spoiler-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={(e) => { setAnchorSpoiler(e.currentTarget); }}>SPOILER</Button>
            <Menu
               id="spoiler-menu"
               anchorEl={anchorSpoiler}
               open={Boolean(anchorSpoiler)}
               onClose={() => { setAnchorSpoiler(null); }}
               MenuListProps={{
                  'aria-labelledby': 'spoiler-button',
               }}
            >
               <MenuItem>
                  <Box component="form" onSubmit={(e) => {
                     e.preventDefault();
                     addTagValue('spoiler', spoiler);
                     setAnchorSpoiler(null);
                  }}>
                     <TextField
                        inputProps={{
                           autocomplete: 'new-password',
                           form: {
                              autocomplete: 'off',
                           },
                        }}
                        id="outlined-basic" label="spoiler title" variant="outlined"
                        value={spoiler}
                        onChange={(e) => { setSpoiler(e.target.value); }} />
                     <Button type="submit" color="secondary" variant="text">Submit</Button>
                  </Box>
               </MenuItem>
            </Menu>
         </Box>
         <TextField
            fullWidth
            rows={10}
            inputRef={textareaRef}
            value={content}
            multiline
            onChange={(e) => { setContent(e.target.value); }} />
      </>
   );
};
export default TextBox;