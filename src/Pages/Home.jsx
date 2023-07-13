import { Box, Button } from "@mui/material";
import Slide from "../components/Home_/Slide.jsx";
import { Link } from "react-router-dom";
import styles from "../css/HomeStyles.js";
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

export default function Home() {
    const anunciosArray = ['Anuncio 1', 'Anuncio 2', 'Anuncio 3', 'Anuncio 4', 'Anuncio 5'];
    const postsArray = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6', 'Tema 7'];
    const [buttons, setButtons] = useState([
        {
            text: 'Button 1',
            variant: 'disabled',
            content: '1'
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

    const handleButton = (i) => {
        setButtons(
            buttons.map(
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
                            <Slide arrayItems={postsArray} column={false} element='cardsmall' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
