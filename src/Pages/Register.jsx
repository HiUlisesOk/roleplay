import { Button } from "@mui/material";
import RegistrationForm from "../Formik/RegisterForm";

export default function Home() {
    return (
        <>
            <Button component="a" href="/" variant="contained" color="primary">GoBack!</Button>
            <RegistrationForm />
        </>
    )
}