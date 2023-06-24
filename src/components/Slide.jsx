import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SimpleCard from './SimpleCard';
import { Box } from '@mui/system';

export default function Slide ({ arrayItems }) {
  const [pauseAnimation, setPauseAnimation] = useState(false);

  if (arrayItems.length < 5) {
    let newArrayItems = arrayItems;
    for (let i = arrayItems.length; i < 5; i= i + i){
    newArrayItems = newArrayItems.concat(arrayItems);
    }
    arrayItems = newArrayItems
  }

  Slide.propTypes = {
      arrayItems: PropTypes.array,
      };

  const styles = useSpring({
    from: {transform: 'translateX(-50%)'},
    to: {transform: 'translateX(0%)'},
    config: {duration: 15000},
    pause: pauseAnimation,
    loop: true,
    });
    
  return (
    <animated.div style={styles}>
      <Box  
    sx={{ display: 'flex', gap: 1}}
onMouseEnter={()=>{setPauseAnimation(true)}}
onMouseLeave={()=>{setPauseAnimation(false)}}>
    {
        arrayItems.map((item, index)=>(
          <SimpleCard key={String(item) + String(index) + 'a'} title={String(item)} />
        ))
    }
    {
        arrayItems.map((item,index)=>(
          <SimpleCard key={String(item) + String(index) + 'b'} title={String(item)} />
        ))
    }
    </Box>
    </animated.div>
    );
 }