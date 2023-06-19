import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export default function CardSmall({titulo = "Titulo del Topic", user = "Username", date = "dd/mm hh:mm"}) {

    CardSmall.defaultProps = {
    data: 'dd/mm'
  };
  
  CardSmall.propTypes = {
    titulo: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
  };

    const theme = useTheme();
    return(
            <Box sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                display: 'flex',
                padding: 1,
                border: '1px solid',
                borderColor: 'transparent',
                borderRadius: '20px',
                transition: 'borderColor 0.1s ease-in-out, color 0.1s ease-in-out',
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
                    width: '90px', 
                    height: '90px', 
                    borderRadius: '20px'
                }} 
                src="https://via.placeholder.com/90x90" />
                <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    width: '100%',
                    paddingLeft: 1,
                    justifyContent: 'space-between',
                }}>
                    <Typography variant="h6">
                        {titulo}
                    </Typography>
                    <Box sx={{
                        display: 'flex', 
                        justifyContent : 'space-between',
                        }}>
                        <Typography variant="subtitle1">
                            {user}
                        </Typography>
                        <Typography variant="subtitle1">
                            {date}
                        </Typography>
                    </Box>
                </Box>
            </Box>
    )
}