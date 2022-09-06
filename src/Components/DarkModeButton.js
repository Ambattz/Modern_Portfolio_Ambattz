import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';




export default function DarkModeButton(props) {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab onClick={props.changeMode} color="primary" aria-label="edit" sx={{
                position: "fixed",
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2)
            }}>
                {props.mode ? <DarkModeIcon color='secondary' /> : <LightModeIcon color='secondary' />}
            </Fab>
        </Box>
    );
}
