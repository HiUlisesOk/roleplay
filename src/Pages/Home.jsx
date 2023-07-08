import { Box } from "@mui/material";
import Navbar from "../components/Navbar.jsx"
import Section from "../components/Section.jsx";
import TablonConPestañas from "../components/TablonConPestañas.jsx";
import Slide from "../components/Slide.jsx";
import { loginSelector } from '../redux/selector/userSelector.js'
import { useSelector } from "react-redux";
import AllTopic from "../components/AllTopic.jsx";
import NewTopic from "../components/NewTopic.jsx";

export default function Home() {
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;


    const anunciosArray = ['Anuncio 1', 'Anuncio 2', 'Anuncio 3', 'Anuncio 4', 'Anuncio 5'];
    const postsArray = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 6', 'Tema 7'];

    return (
        <>
            <Navbar></Navbar>
            <Box
                sx={{
                    pl: 10, pt: 10, pb: 1,
                    maxHeight: '700px',
                    maxWidth: '1400px',
                    overflow: 'hidden',
                    display: 'flex',
                    margin: '0 auto',
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        overflow: 'hidden',
                        gap: 1,
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                    }}
                >
                    <TablonConPestañas></TablonConPestañas>
                    <Section titulo="Anuncios" >
                        <Slide arrayItems={anunciosArray} column={true} element='simplecard' />
                    </Section>
                </Box>
                <Box
                    sx={{
                        maxHeight: '100%',
                    }}
                >
                    <Section titulo="Ultimos Posts" direction="column">
                        <Slide arrayItems={postsArray} column={false} element='cardsmall' />
                    </Section>
                </Box>
            </Box>
            <Box sx={{pl: 10,}}>
            <AllTopic />
            <NewTopic />
            </Box>
        </>
    );
}
