import { Box } from "@mui/material";
import { getAllTopic } from "../redux/actions/topicActions";
import { getAllTopicSelector } from "../redux/selector/topicSelector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TopicCard from '../components/TopicCard.jsx';

export default function AllTopic() {
    const dispatch = useDispatch();

    const state = useSelector(getAllTopicSelector);

    useEffect(() => {
        dispatch(getAllTopic());
    }, []);

    // console.log(state.allTopicState);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {state.allTopicState.length > 0 ? (
                    state.allTopicState.map(topic => (
                        <TopicCard key={topic.id} topic={topic} />
                    ))
                ) : (
                    <Box>No topics available</Box>
                )}
            </Box>
        </>
    );
}