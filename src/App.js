import * as React from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { themeLight, themeDark } from './Components/Theme';

import './App.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import DarkModeButton from './Components/DarkModeButton';

function App() {

  const [mode, setMode] = React.useState(false);

  function changeMode() {
    setMode((prevMode) => !prevMode);
  }

  return (
    <ThemeProvider theme={mode ? themeLight : themeDark} >
      <CssBaseline />
      <NavigationBar />
      <Home />
      <DarkModeButton mode={mode} changeMode={changeMode} />
    </ThemeProvider >
  );
}

export default App;
