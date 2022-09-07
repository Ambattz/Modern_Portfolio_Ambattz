import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
    palette: {
        primary: {
            main: '#42855B',
            contrastText: '#F5F5F5'
        },
        secondary: {
            main: '#032D3C',
        },
        background: {
            default: '#F5F5F5',
            paper: '#42855B',
        },
        text: {
            primary: '#F5F5F5',
            secondary: '#032D3C',

        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#F5F5F5',
                    background: '#42855B',
                    "&:hover": {
                        color: '#42855B',
                        background: '#F5F5F5'
                    }
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    color: '#F5F5F5',
                    background: '#42855B',
                    "&:hover": {
                        color: '#F5F5F5',
                        background: '#42855B'
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#F5F5F5',
                    background: '#42855B',
                    "&:hover": {
                        color: '#42855B',
                        background: '#F5F5F5'
                    }
                }
            }
        },
    }
});

export default themeLight;