import { Box } from "@mui/material"
import CardSmall from "../components/CardSmall.jsx"
import SimpleCard from "../components/SimpleCard.jsx"
import Section from "../components/Section.jsx"
import TablonConPestañas from "../components/TablonConPestañas.jsx"

export default function Playground () {
    return(
        <>
            <TablonConPestañas></TablonConPestañas>
            <CardSmall />
            <Box sx={{display: 'flex'}}>
                <Section>
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                </Section>
            </Box>
            <Box sx={{display: 'flex'}}>
            <Section>
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
            </Section>
            <Section>
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
            </Section>
            </Box>
        </>
    )
}