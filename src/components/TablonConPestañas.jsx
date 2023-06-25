import { Box, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

export default function TablonConPestañas() {
    const [buttons,setButtons] = useState([
        {
            text: 'Button 1',
            variant: 'disabled',
            content: '1'
        },
        {
            text: 'Button 2',
            variant: 'text',
            content: '2'
        },
        {
            text: 'Button 3',
            variant: 'text',
            content: '3'
        },
    ])
    
    const handleButton = (i) => {
        setButtons(
        buttons.map(
            (item,index)=>(
        index == i
        ? {text: item.text, variant: 'disabled', content: item.content} 
        : {text: item.text, variant: 'text', content: item.content} 
        )
        )
        )}

    const theme = useTheme();
    return(
        <Box>
            <Box sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '8px 8px 0px 0px'
            }}>
                {
                    buttons.map((item,index)=>(
                        <Button key={item.text + index} variant={item.variant} color="secondary" onClick={()=>{handleButton(index)}}>{item.text}</Button>
                    ))
                }
            </Box>
            <Box sx={{
                borderRadius: '0px 0px 8px 8px',
                height: '340px',
                backgroundColor: theme.palette.primary.light,
            }}>
                {
                    buttons.map(
                        (item)=>(
                            item.variant === 'disabled' && item.content
                        )
                    )
                }
            </Box>
        </Box>
    )
}