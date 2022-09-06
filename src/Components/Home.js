import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
function Home() {
    return (
        <Box sx={{
            display: { xs: 'none', md: 'flex' },
            margin: 0,
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
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
                        fontSize: 80,
                        color: 'text.secondary',
                        pr: 3
                    }}>I'm </Typography>
                <Typography
                    sx={{
                        fontSize: 80,
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
                        fontSize: 30,
                        color: 'text.secondary',

                    }}>A high-yielding IT GEEK </Typography>
            </Box>
        </Box >
    )
}

export default Home