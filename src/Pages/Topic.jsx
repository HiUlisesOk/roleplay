import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPost } from "../redux/actions/postActions";
import { getAllTopic } from "../redux/actions/topicActions";
import { getAllTopicSelector } from "../redux/selector/topicSelector";
import { getAllPostSelector } from "../redux/selector/postSelector";
import { Box, Button, Typography } from "@mui/material";
import NewPost from "../components/Topic/NewPost";
import Post from "../components/Topic/Post";
import EditTopic from "../components/EditTopic";


export default function Topic() {
	const { id } = useParams();

    const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAllTopic()),
        dispatch(getAllPost())
	}, [id])
    const allTopicSelector= useSelector(getAllTopicSelector);
    const allPostSelector = useSelector(getAllPostSelector);

    const topic = allTopicSelector.allTopicState.length ? allTopicSelector.allTopicState.find((topic)=>(topic.ID == id )) : false
    console.log(topic);
    const posts = allPostSelector.getAllPostState.length ? allPostSelector.getAllPostState.filter((post)=>(post.topicID == id)) : false
    console.log(posts)

    const handleDelete = () => {
        dispatch(deleteTopic(topic.ID))
    }

    return(
        <>
        {topic ? (
            <>
                <Typography variant="h2">{topic.title}</Typography>
                <Button onClick={handleDelete} variant='contained' color="secondary" >Borrar Topic!</Button>
                <EditTopic topic={topic} />
                
                {posts.length > 0 && (
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '3rem', py: '3rem'}}>
                {posts.map(
                        (post=>(
                            <Post author={post.author} createdAt={post.createdAt} id={post.ID}>
                                {post.content}
                            </Post>
                        ))
                    )}
                </Box>
                ) 
                }
                <NewPost topicId={id} />
            </>    ) : (
        <Box>Error</Box>
                )}
        </>
    )
}