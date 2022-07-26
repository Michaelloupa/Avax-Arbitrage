//THIS IS THE PAGE TO THE WEB APP.

// IMPORTING RESOURCES...

import react from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

//Importing components





//WE BEGIN...Start of Page


export default function Homepage() {
    return(

        // Main Container

        <Container >

            {/* Appbar Container */}
            <Box>

                {/* Appbbar */}

                

            </Box>

            {/*Functionality page */}

            <Box >
                {/* Heading */}
                <Typography 
                sx={{                
                    textAlign:'center',
                    fontWeight:'Bold',
                    color:'#000',
                    fontSize:'40px'
                }}>
                    Simulating Arbitrage on Avax.
                </Typography>
            </Box>


            {/* STEP ONE ( AVAX REQUIREMENTS ) */}
            <Box>
                <Box>
                    <Typography>
                        
                    </Typography>
                </Box>

            </Box>
        </Container>

    
    )
}