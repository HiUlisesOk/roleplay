import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTopic, getTopicById } from "../redux/actions/topicActions";
import { getPostByTopicID } from "../redux/actions/postActions";
import { getTopicByIdSelector } from "../redux/selector/topicSelector";
import { getPostByTopicIDSelector } from "../redux/selector/postSelector";
import { Box, Button, Typography } from "@mui/material";
import NewPost from "../components/Topic/NewPost";
import Post from "../components/Topic/Post";
import EditTopic from "../components/EditTopic";


export default function Topic() {
    const { id } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopicById(id));
        dispatch(getPostByTopicID(id));
    }, [id]);
    const topicSelector = useSelector(getTopicByIdSelector);
    const postSelector = useSelector(getPostByTopicIDSelector);

    const topic = topicSelector.topicByIdState;
    const posts = postSelector.postByTopicIDState;

    console.log(posts, 'posts');

    const handleDelete = () => {
        dispatch(deleteTopic(id));
        const nuevaURL = '/home';
        window.history.replaceState(null, null, nuevaURL);
        location.pathname = nuevaURL;
        window.location.reload();
    };

    return (
        <Box sx={{ width: '80%', margin: '2rem auto' }}>
            {topic ? (
                <>
                    <Typography variant="h2">{topic.title}</Typography>
                    <Button onClick={handleDelete} variant='contained' color="secondary" >Borrar Topic!</Button>
                    <EditTopic topic={topic} />

                    {posts.length && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3rem', py: '3rem' }}>
                            {posts.map(
                                (post => (
                                    <Post key={post.ID} author={post.author} createdAt={post.createdAt} id={post.ID}>
                                        {post.content}
                                    </Post>
                                ))
                            )}
                        </Box>
                    )
                    }
                    <NewPost topicId={id} />
                </>) : (
                <Box>Error</Box>
            )}
        </ Box>
    );
}