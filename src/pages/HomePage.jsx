import * as React from 'react';
// Material UI Imports
import { Box, Typography } from '@mui/material';
//Third-Party Imports
import Typewriter from 'typewriter-effect';

function HomePage() {
    return (
        <React.Fragment>
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
                            fontSize: 40,
                            color: '#4e9f3d',
                            pr: 1
                        }}>I'm</Typography>
                    <Typography
                        sx={{
                            fontSize: 40,
                            color: 'text.secondary',
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
                            fontSize: 15,
                            color: '#4e9f3d',

                        }}>A high-yielding &nbsp;
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 20,
                            color: 'text.secondary',

                        }}>IT GEEK
                    </Typography>
                </Box>
            </Box >
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
                            fontSize: 100,
                            color: '#4e9f3d',
                            pr: 3
                        }}>I'm </Typography>
                    <Typography
                        sx={{
                            fontSize: 100,
                            color: 'text.secondary',
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
                            color: '#4e9f3d',

                        }}>A high-yielding &nbsp;
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 30,
                            color: 'text.secondary',

                        }}>IT GEEK
                    </Typography>
                </Box>
            </Box >
        </React.Fragment>
    )
}

export default HomePage