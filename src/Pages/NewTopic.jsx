import { Box, Button, TextField } from "@mui/material";
import { createTopic } from "../redux/actions/topicActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function NewTopic() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [topicTitle, setTopicTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const response = useSelector((state) => state.createTopicState.createTopicState);
  const { userData } = useSelector((state) => state);
  const userId = userData?.userInfo?.ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTopic({
      title: topicTitle,
      authorID: userId,
      content: postContent
    }));
  };

  console.log(!response.topic ? response.topic : response.topic.ID);

  useEffect(() => {
    if (response.topic !== undefined) {
      const nuevaURL = `/topic/${response.topic.ID}`;
      window.history.replaceState(null, null, nuevaURL);
      location.pathname = nuevaURL;
      window.location.reload();
    }
  }, [response]
  );

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', margin: '10px auto', width: '50%' }}>
        <TextField
          id="titleTopic"
          label="Titulo del Topic"
          autoFocus
          required
          onChange={(e) => {
            setTopicTitle(e.target.value);
          }}
        />{
          <TextField
            id="contentPost"
            label="Contenido del Post"
            required
            onChange={(e) => {
              setPostContent(e.target.value);
            }}
          />}
        <Button type="submit" color="secondary">Crear Topic!</Button>
      </Box>
    </>
  );
}