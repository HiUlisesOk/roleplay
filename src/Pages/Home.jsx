import { Box, Button } from "@mui/material";
import Slide from "../components/Home_/Slide.jsx";
import { Link } from "react-router-dom";
import styles from "../css/HomeStyles.js";
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLastActiveTopics } from "../redux/actions/topicActions.js";
import { getLastActiveTopicsSelector } from "../redux/selector/topicSelector.js";
import CardSmall from "../components/Home_/CardSmall.jsx";
import SimpleCard from "../components/Home_/SimpleCard.jsx";
import { useSpring, animated } from 'react-spring';
import CrearPersonajes from '../components/Personajes/CrearPersonajes.jsx';
import DisplayPersonajes from "../components/Home_/DisplayPersonajes.jsx";

export default function Home() {
    const dispatch = useDispatch();

    const LastActiveTopics = useSelector(getLastActiveTopicsSelector);

    useEffect(() => {
        dispatch(getLastActiveTopics());
    }, []);

    console.log('Last', LastActiveTopics.lastActiveTopicsState);

    const anunciosArray = ['Anuncio 1', 'Anuncio 2', 'Anuncio 3', 'Anuncio 4', 'Anuncio 5'];
    const lastActives = LastActiveTopics?.lastActiveTopicsState?.lastActiveTopics;
    const [buttons, setButtons] = useState([
        {
            text: 'Personajes',
            variant: 'disabled',
            content: <DisplayPersonajes />
        },
        {
            text: 'Button 2',
            variant: 'text',
            content: '2'
        },
        {
            text: 'Button 3',
            variant: 'text',
            content: '3'
        },
    ]);


    const [pauseAnimation, setPauseAnimation] = useState(false);

    const animStyles = useSpring({
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(-100%)' },
        config: { duration: 30000 },
        pause: pauseAnimation,
        loop: true,
    });

    const handleButton = (i) => {
        setButtons(
            buttons?.map(
                (item, index) => (
                    index == i
                        ? { text: item.text, variant: 'disabled', content: item.content }
                        : { text: item.text, variant: 'text', content: item.content }
                )
            )
        );
    };

    const theme = useTheme();

    return (

        <>
            <Box
                sx={styles.box1}
            >
                <Box
                    sx={styles.box2}
                >
                    <Box sx={styles.contenedorTablon}>
                        <Box sx={styles.botonesTablon}>
                            {
                                buttons.map((item, index) => (
                                    <Button key={item.text + index} variant={item.variant} color="secondary" onClick={() => { handleButton(index); }}>{item.text}</Button>
                                ))
                            }
                        </Box>
                        <Box sx={styles.tablonSection}>
                            {
                                buttons.map(
                                    (item) => (
                                        item.variant === 'disabled' && item.content
                                    )
                                )
                            }
                        </Box>
                    </Box>
                    <Box sx={styles.containerSection1}>
                        <Box sx={styles.section}>
                            <Slide arrayItems={anunciosArray} column={true} element='simplecard' />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={styles.containerSection2}>
                        <Box sx={styles.section}>

                            <animated.div style={animStyles}>
                                <Box
                                    sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}
                                    onMouseEnter={() => { setPauseAnimation(true); }}
                                    onMouseLeave={() => { setPauseAnimation(false); }}>
                                    {
                                        lastActives?.map((item, index) => (
                                            item !== null &&
                                            <CardSmall key={item.ID + index} title={item.title} user={item.lastAuthor} date={item.updatedAt} topicID={item.ID} />
                                        ))
                                    }
                                </Box>
                            </animated.div>
                            {//<Slide arrayItems={postsArray} column={false} element='cardsmall' />
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
