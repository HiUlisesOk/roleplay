import { Box, Button, Typography } from "@mui/material";

export default function Post({author , createdAt, children}) {
    const editarPost = () =>{

    }
    const borrarPost = () => {

    }
    return(
        <Box>
        <Box sx={{display: "flex", gap: '5rem'}}>
        <Typography variant="body2">
        {author}
        </Typography>
        <Typography variant="body2">
        {createdAt}
        </Typography>
        </Box>
        <Typography variant="h4">
            {children}
        </Typography>
        <Box sx={{display: 'flex', gap: '5rem'}}>
            <Button variant="contained" color="primary" onClick={editarPost}>Editar Post</Button>
            <Button variant="contained" color="primary" onClick={borrarPost}>Borrar Post</Button>
        </Box>
        </Box>
    )
}