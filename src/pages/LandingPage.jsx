import React from 'react'
// Material UI Imports
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
// Custom Imports
import { ThemeLight, ThemeDark } from '../helper/directoryHelper';
import { HomePage, NavigationBar, DarkModeButton } from '../helper/directoryHelper';

const LandingPage = () => {

    const [mode, setMode] = React.useState(false);

    function changeMode() {
        setMode((prevMode) => !prevMode);
    }

    return (
        <ThemeProvider theme={mode ? ThemeLight : ThemeDark} >
            <CssBaseline />
            <NavigationBar />
            <HomePage />
            <DarkModeButton mode={mode} changeMode={changeMode} />
        </ThemeProvider>
    )
}

export default LandingPage