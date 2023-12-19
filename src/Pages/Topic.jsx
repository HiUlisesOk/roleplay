import { useEffect, useState } from "react";
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
import RenderBBcode from "../BBcode/RenderBBcode";


export default function Topic() {

    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopicById(id));
        dispatch(getPostByTopicID(id));
    }, [id]);
    const topicSelector = useSelector(getTopicByIdSelector);
    const postSelector = useSelector(getPostByTopicIDSelector);
    const posts = postSelector.postByTopicIDState;
    const topic = topicSelector.topicByIdState;
    // console.log(topic, 'topic');
    // console.log(userId, 'userID');
    const [orderPosts, setOrderPost] = useState([]);

    useEffect(() => {
        if (posts.length) {
            setOrderPost([...posts].sort((a, b) => a.ID - b.ID));
        }
    }, [posts]);

    // console.log(posts, 'posts');

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
                    <Box sx={{ display: userId == topic.authorID ? 'flex' : 'none', }} >
                        <Button onClick={handleDelete} variant='contained' color="secondary" >Borrar Topic!</Button>
                        <EditTopic topic={topic} />
                    </Box>

                    {posts.length && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3rem', py: '3rem' }}>
                            {orderPosts.map(
                                (post => (
                                    <Post key={post.ID} author={post.author} authorID={post.authorID} createdAt={post.createdAt} id={post.ID}>
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