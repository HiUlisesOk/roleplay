import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export default function Section({children, direction="row", titulo = "Titulo de Section"}){
    const theme = useTheme();

    Section.propTypes = {
        titulo: PropTypes.string,
        children: PropTypes.element,
        direction: PropTypes.string,
      };
    

    return(
        <Box sx={{
            p : 1,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            height: '100%',
            }}>
            <Typography variant="h6" sx={{
                m:1,
                pb: 1,
                borderBottom: "1px solid",
                borderColor: theme.palette.text.disabled
                }}>{titulo}</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: direction,
                gap: 1,
                p:1,
                m: '0 auto',
                width: '99%',
                overflow: 'hidden',
                height: '100%'
                }}>
            {children}
            </Box>
        </Box>
    )
}