import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SimpleCard from './SimpleCard.jsx';
import CardSmall from './CardSmall.jsx'
import { Box } from '@mui/system';

export default function Slide ({ arrayItems, column, element }) {
   Slide.propTypes = {
      arrayItems: PropTypes.array,
      column: PropTypes.bool,
      element: PropTypes.string,
      infinite: PropTypes.bool,
      };

const [pauseAnimation, setPauseAnimation] = useState(false);

  if (arrayItems.length < 5 && element == 'simplecard') {
    let newArrayItems = arrayItems;
    for (let i = arrayItems.length; i < 5; i= i + i){
    newArrayItems = newArrayItems.concat(arrayItems);
    }
    arrayItems = newArrayItems
  }

  const componentType = {
    cardsmall: CardSmall,
    simplecard: SimpleCard,
  };

  const Component = componentType[element];

  const styles = useSpring({
    from: {transform: column == true ? 'translateX(-50%)' : 'translateY(100%)' },
    to: {transform: column == true ? 'translateX(0%)' : 'translateY(-100%)'},
    config: {duration: 30000},
    pause: pauseAnimation,
    loop: true,
    });
    
  return (
    <animated.div style={styles}>
      <Box  
    sx={{ display: 'flex', gap: 1, flexDirection: column == true ? 'row' : 'column'}}
onMouseEnter={()=>{setPauseAnimation(true)}}
onMouseLeave={()=>{setPauseAnimation(false)}}>
    {
        arrayItems.map((item, index)=>(
          Component && <Component key={String(item) + String(index) + 'a'} title={String(item)} user={String(item)} date={String(item)} />
        ))
    }
    { element == 'simplecard' &&
        arrayItems.map((item,index)=>(
          Component && <Component key={String(item) + String(index) + 'b'} title={String(item)} />
        ))
    }
    </Box>
    </animated.div>
    );
 }