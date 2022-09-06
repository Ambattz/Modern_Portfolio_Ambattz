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

const themeDark = createTheme({
    palette: {
        primary: {
            main: '#ffc107',
        },
        secondary: {
            main: '#041c32',
        },
        background: {
            default: '#041c32',
            paper: '#ffc107',
        },
        text: {
            primary: '#041c32',
            secondary: '#ffc107',

        },
    }
});
export { themeLight, themeDark };