import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

export default function Carrousel ({ children }) {

    Carrousel.propTypes = {
        children: PropTypes.element,
      };
    

    const styles = useSpring({
        from: { transform: 'translateX(-500%)' },
        to: { transform: 'translateX(500%)' },
        config: { duration: 10000 },
        loop: true,
      });
    
      return (
        <animated.div style={styles}>
            {children}
        </animated.div>
      );
 }