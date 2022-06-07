import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import useStyles from "./styles";

const Abilities = ({ currentAbilities }) => {
    const classes = useStyles();
    return (
        <div>
            {currentAbilities.map((data) => {
                return (
                    <Box className={classes.abilities}>
                        {data.displayIcon ? <Avatar src={data.displayIcon} alt={data.displayName} /> : <AutoAwesomeIcon />}
                        <Box item className={classes.abilitiesDesc}>
                            <Typography>{data.displayName}</Typography>
                            <Typography>{data.description}</Typography>
                        </Box>
                    </Box>)
            })}
        </div>
    )
}

export default Abilities;