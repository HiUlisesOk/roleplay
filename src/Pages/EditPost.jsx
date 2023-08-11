import { Box, Button, TextField } from "@mui/material";
import { getPostByID, updatePost } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByIDSelector } from "../redux/selector/postSelector";
import TextBox from "../BBcode/TextBox";

export default function EditPost() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;
    const navigate = useNavigate();
    const postSelector = useSelector(getPostByIDSelector);
    const post = postSelector.getPostByIDState;
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        dispatch(getPostByID(id));
    }, []);

    useEffect(() => {
        setNewPost(post.content);
    }, [post]);


    console.log(post, 'post');

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
            <Box sx={{
                width: '900px', backgroundColor: '#ffffff11', p: '1rem', m: '1rem auto'
            }}>
                <TextBox content={newPost} setContent={setNewPost} />
                <Button onClick={handleSubmit} color="secondary">Aceptar!</Button>
                <Button onClick={() => { navigate(-1); }} color="secondary">Cancelar!</Button>
            </Box>
        </>
    );
}