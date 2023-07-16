import { Box, Button, TextField } from "@mui/material";
import { getPostByID, updatePost } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByIDSelector } from "../redux/selector/postSelector";

export default function EditPost() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPostByID(id));
    }, []);

    const postSelector = useSelector(getPostByIDSelector);
    const post = postSelector.getPostByIDState;
    console.log(post, 'post');

    const [newPost, setNewPost] = useState(post.content);
    const handleChange = (e) => {
        setNewPost(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost({
            authorID: userId,
            topicID: post.TopicID,
            content: newPost,
            postID: id,
        }));
        navigate(-1);
    };

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{
                width: '60%',
                marginTop: 4,
                marginX: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}>
                <TextField
                    id="newTitleTopic"
                    defaultValue={post.content}
                    onChange={handleChange}
                    autoFocus={true}
                    sx={{
                        '& .MuiInputBase-input': {
                            marginTop: 0,
                            minHeight: '60vh',
                        },
                    }}
                    multiline
                />
                <Button type="submit" color="secondary">Aceptar!</Button>

                <Button onClick={() => { navigate(-1); }} color="secondary">Cancelar!</Button>
            </Box>
        </>
    );
}