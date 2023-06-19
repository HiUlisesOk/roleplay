import { Box } from "@mui/material"
import CardSmall from "../components/CardSmall.jsx"
import Section from "../components/Section.jsx"

export default function Playground () {
    return(
        <>
            <CardSmall />
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
            <Section>
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
            </Section>
            </Box>
            <Section>
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
            </Section>
        </>
    )
}