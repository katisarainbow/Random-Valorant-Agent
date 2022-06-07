import React from "react";

import useStyles from './styles';
import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';

import Abilities from './Abilities/Abilities';

const Quote = ({ agents }) => {

    const classes = useStyles();
    const getRandomAgent = () => {
        return agents[
            Math.floor(Math.random() * agents.length)
        ]
    };

    const randomQuote = getRandomAgent();

    const currentAgent = randomQuote.displayName;
    const currentDescription = randomQuote.description;
    const currentImage = randomQuote.fullPortraitV2;
    const currentRole = randomQuote.role.displayName;
    const currentImageRole = randomQuote.role.displayIcon;
    const currentAbilities = randomQuote.abilities;

    return (
        <Box className={classes.container}>
            <img className={classes.img} src={currentImage} alt={currentAgent} />
            <Box className={classes.grid}>
                <Typography className={classes.heading} variant="h2" align="center">{currentAgent}</Typography>
                <Box item className={classes.role}>
                    <Avatar className={classes.roleAvatar} src={currentImageRole} alt={currentRole} />
                    <Typography variant="h4" className={classes.roleDesc}>{currentRole}</Typography>
                </Box>
                <Abilities currentAbilities={currentAbilities} />
                <Typography>{currentDescription}</Typography>
                <IconButton className={classes.btn} onClick={() => window.location.reload()}>
                    <ShuffleOnIcon className={classes.btn} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Quote;