import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TopicCard({topic}) {
    const navigate = useNavigate();
  return (
    <>
    <Box sx={{display: 'flex', backgroundColor: 'primary.main', width: '400px',}}>
        <Card sx={{ width: '300px', height: 'fit-content', width: '100%' }}>
            <CardActionArea onClick={()=>{navigate(topic.url)}}>
                <CardMedia
                component="img"
                height="300"
                image={topic.author.pfp}
                alt={topic.author.name}
                />
                <CardContent sx={{height: '100px'}}>
                <Typography noWrap gutterBottom variant="h5" component="div">
                    {topic.title}
                </Typography>
                <Box sx={{
                    display: 'flex', justifyContent: 'space-between'
                }}>
                <Typography variant="body2" color="text.secondary">
                    {topic.author.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {topic.creationDate}
                </Typography>
                </Box>
                </CardContent>
            </CardActionArea>
                
        </Card>
        { topic.users.length > 4 &&
            <Box>
            <Card sx={{ width: '100px', height: '100px' }}>
                <CardActionArea onClick={()=>{navigate(topic.users[1].url)}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={topic.users[1].pfp}
                        />
                </CardActionArea>
            </Card>
            <Card sx={{ width: '100px', height: '100px' }}>
                <CardActionArea onClick={()=>{navigate(topic.users[2].url)}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={topic.users[2].pfp}
                        />
                </CardActionArea>
            </Card>
            <Card sx={{ width: '100px', height: '100px' }}>
                <CardActionArea onClick={()=>{navigate(topic.users[3].url)}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={topic.users[3].pfp}
                        />
                </CardActionArea>
            </Card>
            <Card sx={{ width: '100px', height: '100px', alignSelf: 'end' }}>
                <CardActionArea sx={{height: '100%'}} onClick={()=>{navigate(topic.usersUrl)}} >
                    <CardContent>
                        <Typography align='center' variant="h4">+{topic.users.length - 4}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
        }
    </Box>
    </>
  );
}