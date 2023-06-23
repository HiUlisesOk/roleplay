import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export default function CardSmall({titulo = "Titulo del Topic", user = "Username", date = "dd/mm hh:mm", pic = "https://via.placeholder.com/70x70"}) {

  CardSmall.propTypes = {
    titulo: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.string,
    pic: PropTypes.string,
  };

    const theme = useTheme();
    return(
            <Box sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                minWidth: '400px',
                flexGrow: 1,
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
                    width: '70px', 
                    height: '70px', 
                    borderRadius: '20px'
                }} 
                src={pic} />
                <Box sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    width: '100%',
                    paddingLeft: 1,
                    justifyContent: 'space-between',
                }}>
                    <Typography variant="subtitle1">
                        {titulo}
                    </Typography>
                    <Box sx={{
                        display: 'flex', 
                        justifyContent : 'space-between',
                        }}>
                        <Typography variant="subtitle2">
                            {user}
                        </Typography>
                        <Typography variant="subtitle2">
                            {date}
                        </Typography>
                    </Box>
                </Box>
            </Box>
    )
}