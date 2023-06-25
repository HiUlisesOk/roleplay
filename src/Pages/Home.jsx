import { Box } from "@mui/material";
import Navbar from "../components/Navbar.jsx"
import Section from "../components/Section.jsx";
import TablonConPestañas from "../components/TablonConPestañas.jsx";
import CardSmall from "../components/CardSmall.jsx";
import Slide from "../components/Slide.jsx";



export default function Home() {
    const anunciosArray = ['Anuncio 1','Anuncio 2','Anuncio 3','Anuncio 4', 'Anuncio 5']
    
    const postsArray = ['Tema 1','Tema 2','Tema 3','Tema 4', 'Tema 5']
    return(
        <>
        <Navbar></Navbar>
        <Box sx={{
            pl: 10, pt: 10, pr: 1, pb: 1,
            height: '100vh',
            display: 'flex',
            maxWidth: '1600px',
            margin: '0 auto',
            gap: 1,
        }}>
            <Box sx={{
                flexGrow: '2',
                overflow: 'hidden',
                gap: 1,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <TablonConPestañas></TablonConPestañas>
                <Section titulo="Anuncios" >
                    <Slide arrayItems={anunciosArray} column={true} element='simplecard' />
                </Section>
            </Box>
            <Box sx={{
                flexGrow: '1',
                height: '300px',
            }}>
                <Section titulo="Ultimos Posts" direction="column">
                    <Slide arrayItems={postsArray} column={false} element='cardsmall' />
                </Section>
            </Box>
        </Box>
        </>
    )
}