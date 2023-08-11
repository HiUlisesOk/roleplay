import { Box, Button, Icon, IconButton, Menu, MenuItem, TextField, Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import CodeIcon from '@mui/icons-material/Code';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import PhotoIcon from '@mui/icons-material/Photo';
import LinkIcon from '@mui/icons-material/Link';
import InventoryIcon from '@mui/icons-material/Inventory';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const TextBox = ({ content, setContent, }) => {
   const textareaRef = useRef(null);
   const [anchorColor, setAnchorColor] = useState(null);
   const [anchorImg, setAnchorImg] = useState(null);
   const [anchorUrl, setAnchorUrl] = useState(null);
   const [anchorSpoiler, setAnchorSpoiler] = useState(null);

   const [anchorSize, setAnchorSize] = useState(null);
   const [color, setColor] = useState('');
   const [img, setImg] = useState('');
   const [url, setUrl] = useState('');
   const [spoiler, setSpoiler] = useState('');
   const [size, setSize] = useState('');


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
            <Tooltip title="Bold">
               <IconButton color="secondary" variant='contained' onClick={() => addTag('b')}><FormatBoldIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Italic">
               <IconButton color="secondary" variant='contained' onClick={() => addTag('i')}><FormatItalicIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Underline">
               <IconButton color="secondary" variant='contained' onClick={() => addTag('u')}><FormatUnderlinedIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Strike">
               <IconButton color="secondary" variant='contained' onClick={() => addTag('s')}><FormatStrikethroughIcon /> </IconButton>
            </Tooltip>
            <Tooltip title="Code">
               <IconButton color="secondary" variant='contained' onClick={() => addTag('code')}><CodeIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Align Left">
               <IconButton color="secondary" variant='contained' onClick={() => addTagValue('align', 'left')}><FormatAlignLeftIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Align Center">
               <IconButton color="secondary" variant='contained' onClick={() => addTagValue('align', 'center')}><FormatAlignCenterIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Align Right">
               <IconButton color="secondary" variant='contained' onClick={() => addTagValue('align', 'right')}><FormatAlignRightIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Align Justify">
               <IconButton color="secondary" variant='contained' onClick={() => addTagValue('align', 'justify')}><FormatAlignJustifyIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Quote">
               <IconButton color="secondary" variant='contained' onClick={() => addTag('quote')}><FormatQuoteIcon /></IconButton>
               {/* <IconButton color="secondary" variant='contained' onClick={() => addTag('list')}> LIST </IconButton>
            <IconButton color="secondary" variant='contained' onClick={() => addSingleTag('*')}> ITEM </IconButton> */}
            </Tooltip>
            <Tooltip title="Color">
               <IconButton color="secondary" variant="contained" id="color-button"
                  aria-controls={open ? 'color-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => { setAnchorColor(e.currentTarget); }}><FormatColorTextIcon /></IconButton>
            </Tooltip>
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
                        id="outlined-basic" label="color" variant="outlined"
                        value={color}
                        onChange={(e) => { setColor(e.target.value); }} />
                     <Button type="submit" color="secondary" variant="text">Submit</Button>
                  </Box>
               </MenuItem>
            </Menu>
            <Tooltip title="Imagen">
               <IconButton color="secondary" variant="contained" id="img-button"
                  aria-controls={open ? 'img-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => { setAnchorImg(e.currentTarget); }}><PhotoIcon /></IconButton>
            </Tooltip>
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
            <Tooltip title="Link">
               <IconButton color="secondary" variant="contained" id="url-button"
                  aria-controls={open ? 'url-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => { setAnchorUrl(e.currentTarget); }}><LinkIcon /></IconButton>
            </Tooltip>
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
            <Tooltip title="Spoiler">
               <IconButton color="secondary" variant="contained" id="spoiler-button"
                  aria-controls={open ? 'spoiler-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => { setAnchorSpoiler(e.currentTarget); }}><InventoryIcon /></IconButton>
            </Tooltip>
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
                        id="outlined-basic" label="spoiler title" variant="outlined"
                        value={spoiler}
                        defaultValue={''}
                        onChange={(e) => { setSpoiler(e.target.value); }} />
                     <Button type="submit" color="secondary" variant="text">Submit</Button>
                  </Box>
               </MenuItem>
            </Menu>
            <Tooltip title="Size">
               <IconButton color="secondary" variant="contained" id="size-button"
                  aria-controls={open ? 'size-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(e) => { setAnchorSize(e.currentTarget); }}><FormatSizeIcon /></IconButton>
            </Tooltip>
            <Menu
               id="size-menu"
               anchorEl={anchorSize}
               open={Boolean(anchorSize)}
               onClose={() => { setAnchorSize(null); }}
               MenuListProps={{
                  'aria-labelledby': 'size-button',
               }}
            >
               <MenuItem>
                  <Box component="form" onSubmit={(e) => {
                     e.preventDefault();
                     addTagValue('size', `${size}px`);
                     setAnchorSize(null);
                  }}>
                     <TextField
                        id="outlined-basic" label="font size" variant="outlined"
                        type="number"
                        value={size}
                        onChange={(e) => { setSize(e.target.value); }} />
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