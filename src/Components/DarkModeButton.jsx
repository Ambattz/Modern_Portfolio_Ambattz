import * as React from 'react';
import { Box, Fab } from '@mui/material';
import { LightModeRounded, DarkModeRounded } from '@mui/icons-material';

export default function DarkModeButton(props) {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab
                onClick={props.changeMode}
                aria-label="edit"
                sx={{
                    position: "fixed",
                    bottom: (theme) => theme.spacing(2),
                    left: (theme) => theme.spacing(2)
                }}>
                {props.mode ? <DarkModeRounded /> : <LightModeRounded />}
            </Fab>
        </Box>
    );
}
