import { createTheme } from '@mui/material/styles';

const themeDark = createTheme({
    palette: {
        primary: {
            main: '#ffc107',
            contrastText: '#041c32'
        },
        secondary: {
            main: '#4e9f3d',
        },
        background: {
            default: '#041c32',
            paper: '#ffc107',
        },
        text: {
            primary: '#041c32',
            secondary: '#4e9f3d',

        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#041c32',
                    background: '#ffc107',
                    "&:hover": {
                        color: '#ffc107',
                        background: '#041c32'
                    }
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    color: '#041c32',
                    background: '#ffc107',
                    "&:hover": {
                        color: '#041c32',
                        background: '#ffc107'
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#041c32',
                    background: '#ffc107',
                    "&:hover": {
                        color: '#ffc107',
                        background: '#041c32'
                    }
                }
            }
        },
    }
});

export default themeDark;