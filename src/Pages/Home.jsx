import { Box } from "@mui/material";
import Navbar from "../components/Navbar.jsx"
import Section from "../components/Section.jsx";
import TablonConPestañas from "../components/TablonConPestañas.jsx";
import CardSmall from "../components/CardSmall.jsx";
import Slide from "../components/Slide.jsx";



export default function Home() {
    const anunciosArray = ['Anuncio 1','Anuncio 2','Anuncio 3',]
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
                overflow: 'hidden'
            }}>
                <TablonConPestañas></TablonConPestañas>
                <Section titulo="Anuncios" >
                    <Slide arrayItems={anunciosArray} />
                </Section>
            </Box>
            <Box sx={{
                flexGrow: '1',
            }}>
                <Section direction="column">
                    <CardSmall></CardSmall>
                    <CardSmall></CardSmall>
                    <CardSmall></CardSmall>
                    <CardSmall></CardSmall>
                </Section>
            </Box>
        </Box>
        </>
    )
}