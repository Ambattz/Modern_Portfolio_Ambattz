import * as React from 'react';
import { Box, Fab } from '@mui/material';
import { Menu, MenuOpen } from '@mui/icons-material';

export default function MenuButton(props) {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab
                onClick={props.onClick}
                color="primary"
                aria-label="edit"
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    position: "fixed",
                    bottom: (theme) => theme.spacing(2),
                    right: (theme) => theme.spacing(2)
                }}>
                {props.state ? <MenuOpen color='secondary' /> : <Menu color='secondary' />}
            </Fab>
        </Box >
    );
}
