import * as React from 'react';
// Material UI Imports
import { Box, Typography } from '@mui/material';
//Third-Party Imports
import Typewriter from 'typewriter-effect';

function HomePage() {
    return (
        <React.Fragment>
            {/* XS Device component */}
            <Box sx={{
                display: { xs: 'flex', md: 'none' },
                width: 'auto',
                height: '100vh'
            }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center" >
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center">
                    <Typography
                        sx={{
                            fontSize: 38,
                            color: 'secondary.main',
                            pr: 1
                        }}>I'm</Typography>
                    <Typography
                        sx={{
                            fontSize: 38,
                            color: 'primary.main',
                        }}>
                        <Typewriter
                            options={{
                                strings: ["Alvin Ambattu", "an Engineer", "a Web Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center">
                    <Typography
                        sx={{
                            fontSize: 18,
                            color: 'secondary.main',

                        }}>A high-yielding &nbsp;
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 23,
                            color: 'primary.main',

                        }}>IT GEEK
                    </Typography>
                </Box>
            </Box>
            {/* MD Device component */}
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                width: 'auto',
                height: '100vh'
            }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center" >
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center">
                    <Typography
                        sx={{
                            fontSize: 86,
                            color: 'secondary.main',
                            pr: 3
                        }}>I'm </Typography>
                    <Typography
                        sx={{
                            fontSize: 86,
                            color: 'primary.main',
                        }}>
                        <Typewriter
                            options={{
                                strings: ["Alvin Ambattu", "an Engineer", "a Web Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center">
                    <Typography
                        sx={{
                            fontSize: 20,
                            color: 'secondary.main',

                        }}>A high-yielding &nbsp;
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 30,
                            color: 'primary.main',

                        }}>IT GEEK
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default HomePage