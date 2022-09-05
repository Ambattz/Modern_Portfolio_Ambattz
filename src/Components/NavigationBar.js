import * as React from 'react';
//Material UI Imports
import { Grid, AppBar, Box, Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
import Fade from '@mui/material/Fade';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
//Custom Imports
import AvatharImg from '../StaticFiles/avathar.jpg';

const theme = createTheme({
    palette: {
        primary: {
            main: amber[500],
            contrastText: '#064663'
        },
        background: {
            paper: amber[500]
        },
    }
});

const pages = ['Home', 'Profile', 'Expertise', 'Contact'];

const NavigationBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={theme} >
            <Grid container justifyContent="center">
                <AppBar position="static"
                    sx={{
                        borderRadius: 5,
                        width: "fit-content"
                    }}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters>
                            <MotionPhotosAutoIcon titleAccess="Alvin Logo" fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.5 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'cursive',
                                    fontWeight: 800,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                mbattz
                            </Typography>
                            <Box sx={{ color: 'primary', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    {Boolean(anchorElNav) ? <MenuOpenIcon /> : <MenuIcon />}
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 60,
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu} >
                                            <Typography textAlign="center" sx={{ color: 'inherit', }}>
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <MotionPhotosAutoIcon titleAccess="Alvin Logo" fontSize='large' sx={{ display: { xs: 'flex', md: 'none' } }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'cursive',
                                    fontWeight: 800,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                mbattz
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'inherit', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            <Box sx={{ flexGrow: 0, ml: 2 }}>
                                <Tooltip
                                    title="Alvin Ambattu"
                                    arrow
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 400 }}>
                                    <Avatar
                                        alt="Alvin Ambattu"
                                        src={AvatharImg}
                                        sx={{ width: 45, height: 45 }}
                                        variant="rounded"
                                    />
                                </Tooltip>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar >
            </Grid >
        </ThemeProvider >
    );
};
export default NavigationBar;
