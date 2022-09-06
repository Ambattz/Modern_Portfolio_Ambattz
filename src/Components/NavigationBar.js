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
import Fade from '@mui/material/Fade';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person4RoundedIcon from '@mui/icons-material/Person4Rounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
//Custom Imports
import AvatharImg from '../StaticFiles/avathar.jpg';

const pagesInfo = { 'Home': <HomeRoundedIcon />, 'Profile': <Person4RoundedIcon />, 'Expertise': < TerminalRoundedIcon />, 'Contact': < ContactMailRoundedIcon /> };

const NavigationBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Grid container justifyContent="center">
            <AppBar position='static' sx={{
                borderRadius: 5,
                width: "fit-content",
                mt: 2
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
                                    '& .MuiMenu-list': {
                                        paddingLeft: 1,
                                        paddingRight: 1

                                    }
                                }}
                            >
                                {Object.entries(pagesInfo).map(([pageName, pageIcon]) => (
                                    <MenuItem key={pageName} onClick={handleCloseNavMenu} sx={{
                                        "&:hover": {
                                            color: "primary.main",
                                            backgroundColor: "primary.contrastText",
                                            cursor: "default",
                                            borderRadius: 2,
                                        }
                                    }}>
                                        {pageIcon}
                                        <Typography textAlign="center" sx={{ ml: 1, color: 'inherit', }}>
                                            {pageName}
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
                            href="/"
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
                            {Object.entries(pagesInfo).map(([pageName, pageIcon]) => (
                                <Button
                                    key={pageName}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2, color: 'inherit', display: 'block',
                                        "&:hover": {
                                            color: "primary.main",
                                            backgroundColor: "primary.contrastText",
                                            cursor: "default",
                                        },
                                    }}
                                >
                                    {pageIcon}
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
    );
};
export default NavigationBar;
