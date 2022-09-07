import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI Imports
import { Grid, Box, Container } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu'
import { MenuOpen, MotionPhotosAuto, HomeRounded, Person4Rounded, TerminalRounded, ContactMailRounded } from '@mui/icons-material/';
// Custom Imports
import { Avathar, MenuButton } from '../helper/directoryHelper';

const pagesInfo = { 'Home': <HomeRounded />, 'Profile': <Person4Rounded />, 'Expertise': < TerminalRounded />, 'Contact': < ContactMailRounded /> };

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
            <AppBar sx={{
                width: 'fit-content',
                borderRadius: 5,
                left: 'auto',
                right: 'auto',
                mt: 4
            }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        {/* XS Device component */}
                        <MotionPhotosAuto
                            titleAccess="Alvin Logo"
                            fontSize='large'
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                        />
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
                                color: "text.primary",
                                textDecoration: 'none',
                            }}
                        >
                            mbattz
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <MenuButton
                                state={Boolean(anchorElNav)}
                                onClick={handleOpenNavMenu}
                            >
                                {Boolean(anchorElNav) ? <MenuOpen /> : <MenuIcon />}
                            </MenuButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
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
                                            cursor: "default",
                                            borderRadius: 2,
                                        }
                                    }}>
                                        {pageIcon}
                                        <Typography textAlign="center" sx={{ ml: 1 }}>
                                            {pageName}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 0, ml: 2 }}>
                            <Tooltip
                                title="Alvin Ambattu"
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 400 }}>
                                <Avatar
                                    sx={{ width: 50, height: 50 }}
                                    alt="Alvin Ambattu"
                                    src={Avathar}
                                    variant="rounded"
                                />
                            </Tooltip>
                        </Box>
                        {/* MD Device component */}
                        <MotionPhotosAuto
                            titleAccess="Alvin Logo"
                            fontSize='large'
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.5 }}
                        />
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
                                color: "text.primary",
                                textDecoration: 'none',
                            }}
                        >
                            mbattz
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {Object.entries(pagesInfo).map(([pageName, pageIcon]) => (
                                <Link to={`/${pageName.toLowerCase()}`}>
                                    <Button
                                        key={pageName}
                                        startIcon={pageIcon}
                                        onClick={handleCloseNavMenu}
                                        size="medium"
                                        sx={{
                                            my: 2, display: 'block',
                                            "&:hover": {
                                                cursor: "default",
                                            },
                                        }}
                                    >

                                        {pageName}
                                    </Button>
                                </Link>

                            ))}
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0, ml: 2 }}>
                            <Tooltip
                                title="Alvin Ambattu"
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 200 }}>
                                <Avatar
                                    sx={{ width: 65, height: 65 }}
                                    alt="Alvin Ambattu"
                                    src={Avathar}
                                    variant="rounded"
                                />
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Grid >
    );
};
export default NavigationBar;
