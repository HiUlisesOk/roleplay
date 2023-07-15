import { Box, Button, TextField } from "@mui/material";
import { updatePost } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function EditPost({ topic }) {
    const [newPost, setNewPost] = useState('');
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewPost(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(updatePost({
            authorID: topic.authorID,
            topicID: topic.ID,
            content: newPost
        }));
        console.log(topic.ID, authorID, newTitle);
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
                    defaultValue={topic?.title}
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