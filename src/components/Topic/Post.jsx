import { Box, Button, Typography } from "@mui/material";
import { deletePost } from '../../redux/actions/postActions';
import { useDispatch } from "react-redux";

export default function Post({author, createdAt, children, id}) {
    const dispatch = useDispatch()
    const editarPost = () =>{

    }
    const borrarPost = () => {
        dispatch(deletePost(id))
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