import { Box, Button, TextField } from "@mui/material";
import { createPost } from "../../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function NewPost({ topicId }) {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state);
  const userId = userData?.userInfo?.ID;

  const [postContent, setPostContent] = useState('');
  const handleChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(createPost({
      content: postContent,
      authorID: userId,
      topicID: topicId,
    }));
    console.log({
      content: postContent,
      authorID: userId,
      topicID: topicId,
    });
  };


  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="Contenido del post"
          label="Contenido del post"
          onChange={handleChange}
        />
        <Button type="submit" varian="contained" color="secondary">Post!</Button>
      </Box>
    </>
  );
}