import { Button } from "@mui/material";
import Navbar from "../components/Navbar.jsx"

export default function Home() {
    return(
        <>
        <Navbar></Navbar>
        <Button componente="a" href="/" variant="contained" color="primary">GoBack!</Button>
        </>
    )
}