import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Typography } from "@mui/material";

export default function SimpleCard({pic = "https://via.placeholder.com/250x150", title="Card Title"}) {
    SimpleCard.propTypes = {
        pic: PropTypes.string,  
        title: PropTypes.string,
      };
    const theme = useTheme();
    return(
        <Box sx={{
            backgroundColor: theme.palette.primary.light,
            border: '1px solid transparent',
            borderRadius: '20px',
            [`&:hover`]: {
                borderColor: theme.palette.secondary.main,
                color: theme.palette.secondary.main,
                cursor : 'pointer',
            },
        }}>
            <Box 
                component="img" 
                sx={{
                    objectFit: 'cover', 
                    width: '250', 
                    height: '150', 
                    borderRadius: '20px 20px 0px 0px',
                }} 
                src={pic} />
            <Typography variant="h6" sx={{
                ml: 1, mb: 1,
            }}>{title}</Typography>
        </Box>
    )
}