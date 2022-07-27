//THIS IS THE PAGE TO THE WEB APP.

// IMPORTING RESOURCES...

import react from 'react';
import Box from '@mui/material/Box';
import { Card, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { CustomButton } from './Custombutton';
import { Input } from './Input';


//WE BEGIN...Start of Page


export default function Homepage() {
    return (

        // Main Container
        <Container maxwidth='xxl' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
            {/*Functionality page */}
            <Box >
                {/* Heading */}
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'Bold',
                        color: '#000',
                        fontSize: '40px',
                        mt: '6%',
                        mb: "3%",
                        fontFamily: 'Roboto',

                    }}>
                    Simulating Arbitrage on Avax.. 🎬
                </Typography>
            </Box>
            {/* STEP ONE ( AVAX REQUIREMENTS ) */}
            <Box
                sx={{
                    display: 'flex',

                }}>
                <Typography
                    sx={{
                        fontSize: "26px",
                        fontWeight: "400",
                        mr: '6%',
                    }}>
                    Avax Required to Arbitrage 🤑
                </Typography>
                {/* Avax Amount ( READ ONLY ) */}
                <Input InputProps={{
                    readOnly: true,
                }} label="Avax required" >
                </Input>
            </Box>


            {/* Amount Needed to Arbitrage */}

            <Box
                sx={{
                    display: 'flex',

                    mt: '5%'
                }}>
                <Typography
                    sx={{
                        fontSize: "26px",
                        fontWeight: "400",
                        mr: '6%'
                    }}>
                    Amount needed to Gain Avax 🚀
                </Typography>
                {/* Avax Amount ( READ ONLY ) */}
                <Input InputProps={{
                    readOnly: true,
                }} label="Max Arbitrage Amount" >
                </Input>
            </Box>

            {/* STEP TWO */}
            <Box
                sx={{
                    display: 'flex',

                    mt: '6%',
                    mr: '8%'

                }}>
                <Box sx={{ gridTemplateColumns: '2fr 1fr', display: "grid", gridGap: '1rem' }}>

                    <Typography
                        sx={{
                            fontWeight: '500',
                            fontSize: '32px'
                        }}>
                        Ready to try Arbitrage? 💵
                    </Typography>

                    <CustomButton
                        sx={{
                            mt: '4%'
                        }}> Simulate </CustomButton>
                </Box>
            </Box>


            {/* STEP THREE */}



            <Box sx={{ display: 'flex', mt: 4 }}>
                <Stack>
                    <Typography >
                        Need a Flashloan? Try it out...
                    </Typography>
                    <Input label="Flashloan Amount"
                        sx={{
                            mb: '3%',
                        }}
                    />
                    < CustomButton> Execute</CustomButton>
                </Stack>

            </Box>


            {/* STEP FOUR */}

            <Box
                sx={{
                    display: 'flex',
                    // justifyContent: 'flex-start',
                    mt: '6%',
                }}>
                <Stack>
                    <Typography >
                        Let's Cleanup. Withdraw...💼
                    </Typography>



                    <Input
                        label="Withdraw Amount"
                        sx={{

                            mb: '6%'
                        }} />
                    <CustomButton
                        sx={{

                        }}>Withdraw</CustomButton>

                </Stack>

            </Box>
        </Container >


    )
}