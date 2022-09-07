import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
    palette: {
        primary: {
            main: '#041c32',
        },
        secondary: {
            main: '#fafafa',
        },
        background: {
            default: '#fafafa',
            paper: '#041c32',
        },
        text: {
            primary: '#fafafa',
        }
    }
});

export default themeLight;