import { Box, Button } from "@mui/material"
import { createTopic } from "../redux/actions/topicActions"
import { createTopicSelector } from "../redux/selector/topicSelector"
import { useDispatch, useSelector } from "react-redux"
export default function  NewTopic (){
    const dispatch = useDispatch()

    const state = useSelector(createTopicSelector)
    
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;

    console.log(userId , ' USER ID')

    const handleClick = () => {
      dispatch(createTopic({
        title : 'Hola soy un titulo!',
        authorID : userId 
      }))
      console.log('new topic created!')
    }
    return(
        <>
         <Box>
            <Button color="secondary" onClick={()=>{handleClick()}}>Click me!</Button>
        </Box>
        </>
    )
}