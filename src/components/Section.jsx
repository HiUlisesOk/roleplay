import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export default function Section({children, titulo = "Titulo de Section"}){
    const theme = useTheme();

    Section.propTypes = {
        titulo: PropTypes.string,
        children: PropTypes.element,
      };
    

    return(
        <Box sx={{
            p : 3,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 5,
            margin: 1,
            width: 'fit-content',
            }}>
            <Typography variant="h5" sx={{
                m:1,
                pb: 1,
                borderBottom: "1px solid",
                borderColor: theme.palette.text.disabled
                }}>{titulo}</Typography>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap', 
                gap: 2,
                }}>
            {children}
            </Box>
        </Box>
    )
}