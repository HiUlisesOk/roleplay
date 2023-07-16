import { Box, Button, TextField } from "@mui/material";
import { getAllPost, updatePost } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getAllPostSelector } from "../redux/selector/postSelector";

export default function EditPost() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllPost());
    }, [id]);

    const allPostSelector = useSelector(getAllPostSelector);
    const post = allPostSelector.getAllPostState.length ? allPostSelector.getAllPostState.filter((post) => (post.ID == id)) : false;
    console.log(post);

    const [newPost, setNewPost] = useState(post[0].content);
    const handleChange = (e) => {
        setNewPost(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost({
            authorID: userId,
            topicID: post[0].TopicID,
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
                    defaultValue={post[0].content}
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