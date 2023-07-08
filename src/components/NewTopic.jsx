import { Box, Button, TextField } from "@mui/material"
import { createTopic } from "../redux/actions/topicActions"
import { createTopicSelector } from "../redux/selector/topicSelector"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

export default function  NewTopic (){
    const dispatch = useDispatch()

    const state = useSelector(createTopicSelector)
    
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    console.log(userId , ' USER ID')

    const [ topicInfo, setTopicInfo ] = useState({})
    const handleChange = (e) => {
      setTopicInfo(
        {
          title: e.target.value,
          authorID: userId
        }
      )
    }

    const handleSubmit = () => {
      dispatch(createTopic(topicInfo))
      console.log(topicInfo)
    }

    return(
        <>
         <Box component="form" onSubmit={handleSubmit}>
            <TextField
              id="titleTopic"
              label="Titulo del Topic"
              onChange={handleChange}
            />
            <Button type="submit" color="secondary">Click me!</Button>
        </Box>
        </>
    ) 
}