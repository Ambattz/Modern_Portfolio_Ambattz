import * as React from 'react';
import { Box, Fab } from '@mui/material';
import { LightModeIcon, DarkModeIcon } from '@mui/icons-material';

export default function DarkModeButton(props) {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab
                onClick={props.changeMode}
                color="primary"
                aria-label="edit"
                sx={{
                    position: "fixed",
                    bottom: (theme) => theme.spacing(2),
                    right: (theme) => theme.spacing(2)
                }}>
                {props.mode ? <DarkModeIcon color='secondary' /> : <LightModeIcon color='secondary' />}
            </Fab>
        </Box>
    );
}
