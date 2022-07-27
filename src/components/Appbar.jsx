//THIS IS THE PAGE TO THE WEB APP.

// IMPORTING RESOURCES...


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//Creating the Appbar

export default function Appbar() {
    return (

        //Appbar Container

        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar sx={{ backgroundColor: "#e5e5e5" }} position='static'>

                <Toolbar>

                    {/* App Name */}

                    <Typography variant='h6' component="div"
                        sx={{
                            flexGrow: 1,
                            color: "#000000",
                            fontFamily: 'DM Sans',
                            fontSize: '24px',
                            fontWeight: 'bold',

                        }}>
                        Avax-Arbitrage
                    </Typography>

                    {/* Connect Button */}

                    <Button sx={{ color: "#fff", backgroundColor: 'black', fontFamily: 'DM Sans' }}>
                        Connect Wallet
                    </Button>

                </Toolbar>


            </AppBar>

        </Box>

    )
}