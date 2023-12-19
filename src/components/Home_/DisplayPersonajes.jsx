import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterByUserId } from "../../redux/actions/characterActions";
import { getCharacterByUserIdSelector } from "../../redux/selector/characterSelector";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonajeCard from "./PersonajeCard";


export default function DisplayPersonajes({ }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userData } = useSelector((state) => state);
    const userId = userData?.userInfo?.ID;
    const charactersSelector = useSelector(getCharacterByUserIdSelector);
    const characters = charactersSelector.getCharacterByUserIdState;
    useEffect(() => {
        userId && dispatch(getCharacterByUserId(userId));
    }, [userId]);
    // console.log(characters);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
            <PersonajeCard character={characters[0]} />
            <PersonajeCard character={characters[1]} />
            <PersonajeCard character={characters[2]} />
        </Box >
    );
}