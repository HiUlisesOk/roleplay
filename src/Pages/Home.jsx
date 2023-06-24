import { Box } from "@mui/material";
import Navbar from "../components/Navbar.jsx"
import Section from "../components/Section.jsx";
import TablonConPestañas from "../components/TablonConPestañas.jsx";
import SimpleCard from "../components/SimpleCard.jsx"
import CardSmall from "../components/CardSmall.jsx";
import Carrousel from "../components/Carrousel.jsx"


export default function Home() {
    return(
        <>
        <Navbar></Navbar>
        <Box sx={{
            pl: 10, pt: 10, pr: 1, pb: 1,
            height: '100vh',
            display: 'flex',
            gap: 1,
        }}>
            <Box sx={{
                flexGrow: '2',
                overflow: 'hidden'
            }}>
                <TablonConPestañas></TablonConPestañas>
                <Section>
                    <Carrousel>
                        <SimpleCard />
                    </Carrousel>
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