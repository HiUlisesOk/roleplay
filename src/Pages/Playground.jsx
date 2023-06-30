import { Box } from '@mui/material'
import TopicCard from '../components/TopicCard.jsx'

const topic = {
 title : 'Titulo del topic',
 url: '/topic-url',
 author: {
    name: 'author name',
    pfp: 'https://i.imgur.com/xYHzMV3.jpg',
 }, 
 creationDate: 'dd/mm/yy - hh:mm',
 usersUrl: '/userslist',
 users: [
    {pfp: 'https://i.imgur.com/xYHzMV3.jpg', url: '/someplace0' },
    {pfp: 'https://imgur.com/Bmvstjq.jpg', url: '/someplace1' },
    {pfp: 'https://imgur.com/ssz2qhn.jpg', url: '/someplace2' },
    {pfp: 'https://imgur.com/OCtqAXP.jpg', url: '/someplace3' },
    {pfp: 'https://imgur.com/nKNa6zh.jpg', url: '/someplace4' },
 ],

 lastPost: {
    author: 'username',
    date: 'dd/mm/yy - hh:mm',
 }
}
const topicsArray = [
   {
      title : 'Mi primer Topic',
      url: '/topic-url',
      author: {
         name: 'Kilos metraje',
         pfp: 'https://i.imgur.com/xYHzMV3.jpg',
      }, 
      creationDate: '10/06/23 - 18:06',
      usersUrl: '/userslist',
      users: [
         {pfp: 'https://i.imgur.com/xYHzMV3.jpg', url: '/someplace0' },
         {pfp: 'https://imgur.com/Bmvstjq.jpg', url: '/someplace1' },
         {pfp: 'https://imgur.com/ssz2qhn.jpg', url: '/someplace2' },
         {pfp: 'https://imgur.com/OCtqAXP.jpg', url: '/someplace3' },
         {pfp: 'https://imgur.com/nKNa6zh.jpg', url: '/someplace4' },
      ],
     },
     {
      title : 'Con suerte y sin un Duende',
      url: '/topic-url',
      author: {
         name: 'Dukoo',
         pfp: 'https://i.imgur.com/Bmvstjq.jpg',
      }, 
      creationDate: '15/03/24 - 15:15',
      usersUrl: '/userslist',
      users: [
         {pfp: 'https://i.imgur.com/xYHzMV3.jpg', url: '/someplace0' },
         {pfp: 'https://imgur.com/xYHzMV3.jpg', url: '/someplace1' },
         {pfp: 'https://imgur.com/nKNa6zh.jpg', url: '/someplace4' },
         {pfp: 'https://imgur.com/OCtqAXP.jpg', url: '/someplace3' },
         {pfp: 'https://imgur.com/ssz2qhn.jpg', url: '/someplace2' },
      ],
     },
     {
      title : 'Estoy cobrando shhh',
      url: '/topic-url',
      author: {
         name: 'kripy friky',
         pfp: 'https://i.imgur.com/ssz2qhn.jpg',
      }, 
      creationDate: '22/01/11 - 06:22',
      usersUrl: '/userslist',
      users: [
         {pfp: 'https://i.imgur.com/ssz2qhn.jpg', url: '/someplace0' },
      ],
     }
]

export default function Playground () {
    return(<>        <Box sx={{display: 'flex', gap: 1}}>
        {topicsArray.map((item)=>(
          <TopicCard key={item.title} topic={item} />)
        )}
        </Box>
        </>

    )
}