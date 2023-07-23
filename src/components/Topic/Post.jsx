import { Box, Button, Typography } from "@mui/material";
import { deletePost } from '../../redux/actions/postActions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RenderBBcode from "../../BBcode/RenderBBcode";

export default function Post({ author, createdAt, children, id }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const editarPost = () => {
        navigate(`/editpost/${id}`);
    };
    const borrarPost = () => {
        dispatch(deletePost(id));
        window.location.reload();
    };
    return (
        <Box>
            <Box sx={{ display: "flex", gap: '5rem' }}>
                <Typography variant="body2">
                    {author}
                </Typography>
                <Typography variant="body2">
                    {createdAt}
                </Typography>
            </Box>
            <Box>
                <RenderBBcode content={children} />
            </Box>
            <Box sx={{ display: 'flex', gap: '5rem' }}>
                <Button variant="contained" color="primary" onClick={editarPost}>Editar Post</Button>
                <Button variant="contained" color="primary" onClick={borrarPost}>Borrar Post</Button>
            </Box>
        </Box>
    );
}