import React from 'react'
import { Route, Routes } from 'react-router-dom';
// Material UI Imports
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
// Custom Imports
import { ThemeLight, ThemeDark } from '../helper/directoryHelper';
import { NavigationBar, DarkModeButton } from '../helper/directoryHelper';
import { HomePage, ProfilePage, ExpertisePage, ContactPage } from '../helper/directoryHelper';
const LandingPage = () => {

    const [mode, setMode] = React.useState(false);

    function changeMode() {
        setMode((prevMode) => !prevMode);
    }

    return (
        <ThemeProvider theme={mode ? ThemeLight : ThemeDark} >
            <CssBaseline />
            <NavigationBar />
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/expertise' element={<ExpertisePage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
            <DarkModeButton mode={mode} changeMode={changeMode} />
        </ThemeProvider>
    )
}

export default LandingPage