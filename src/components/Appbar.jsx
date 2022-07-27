//THIS IS THE PAGE TO THE WEB APP.

// IMPORTING RESOURCES...


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//Creating the Appbar

export default function Appbar (){
    return (

        //Appbar Container

        <Box sx={{
            flexGrow:1
        }}>
            <AppBar position='static'>

                <Toolbar>

                    {/* App Name */}

                    <Typography variant='h6' component="div"
                    sx={{
                        flexGrow:1,
                        
                    }}>
                        Avax-Arbitrage
                    </Typography>

                    {/* Connect Button */}

                    <Button color="inherit">
                        Connect Wallet
                    </Button>

                </Toolbar>


            </AppBar>

        </Box>

    )
}