import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
    palette: {
        primary: {
            main: '#032D3C',
            contrastText: '#F5F5F5'
        },
        secondary: {
            main: '#8C7676',
        },
        background: {
            default: '#F5F5F5',
            paper: '#032D3C',
        },
        text: {
            primary: '#F5F5F5',
            secondary: '#8C7676',

        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#F5F5F5',
                    background: '#032D3C',
                    "&:hover": {
                        color: '#032D3C',
                        background: '#F5F5F5'
                    }
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    color: '#F5F5F5',
                    background: '#032D3C',
                    "&:hover": {
                        color: '#F5F5F5',
                        background: '#032D3C'
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#F5F5F5',
                    background: '#032D3C',
                    "&:hover": {
                        color: '#032D3C',
                        background: '#F5F5F5'
                    }
                }
            }
        },
    }
});

export default themeLight;