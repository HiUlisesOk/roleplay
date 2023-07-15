import { Box, Button, TextField } from "@mui/material";
import { updateTopicTitle } from "../redux/actions/topicActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function EditTopic({ topic }) {
    const [newTitle, setNewTitle] = useState('');

    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(updateTopicTitle({
            title: newTitle,
            authorID: topic.authorID,
            topicID: topic.ID,
        }));
        setShow(false);
        console.log(topic.ID, newTitle);
    };
    const handleClick = () => {
        setShow(true);
    };

    return (
        <>
            <Button variant="contained" onClick={handleClick}>Edit Topic</Button>
            {
                show &&
                <Box component="form" onSubmit={handleSubmit} sx={{
                    backgroundColor: '#1f1b1add',
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextField
                        id="newTitleTopic"
                        label="Nuevo titulo del Topic"
                        defaultValue={topic.title}
                        onChange={handleChange}
                        autoFocus={true}
                    />
                    <Button type="submit" color="secondary">Change me!</Button>

                    <Button onClick={() => { setShow(false); }} color="secondary">Close me!</Button>
                </Box>
            }

        </>
    );
}