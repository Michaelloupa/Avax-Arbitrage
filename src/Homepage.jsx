//THIS IS THE PAGE TO THE WEB APP.

// IMPORTING RESOURCES...

import react from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { CustomButton } from './Custombutton';
import { Input } from './Input';

//Importing components





//WE BEGIN...Start of Page


export default function Homepage() {
    return(

        // Main Container

        <Container >

           {/*Functionality page */}
          

            <Box >
                {/* Heading */}
                <Typography 
                sx={{                
                    textAlign:'center',
                    fontWeight:'Bold',
                    color:'#000',
                    fontSize:'40px',
                    mt:'6%',
                    mb:"3%"
                }}>
                    Simulating Arbitrage on Avax.
                </Typography>
            </Box>


            {/* STEP ONE ( AVAX REQUIREMENTS ) */}
            <Box>

                {/* Amount to Gain */}

                <Box 
                sx={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <Typography 
                    sx={{
                        fontSize:"26px",
                        fontWeight:"400",
                        mr:'6%'
                    }}>
                        Amount to gain Avax
                    </Typography>

                    {/* Avax Amount ( READ ONLY ) */}

                    <Box 
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        border:1,
                        width:150,
                        height:35,
                        borderRadius:1

                    }}>
                        <Typography>
                            ''
                        </Typography>
                    </Box>

                
                </Box>
                    

                {/* Amount Needed to Arbitrage */}

                <Box 
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    mt:'5%'
                }}>
                    <Typography 
                    sx={{
                        fontSize:"26px",
                        fontWeight:"400",
                        mr:'6%'
                    }}>
                        Amount to gain Avax
                    </Typography>

                    {/* Avax Amount ( READ ONLY ) */}

                    <Box 
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        border:1,
                        width:150,
                        height:35,
                        borderRadius:1

                    }}>
                        <Typography>
                            ''
                        </Typography>
                    </Box>

                
                </Box>

                {/* STEP TWO */}

                <Box 
                sx={{
                   display:'flex',
                   justifyContent:'center',
                   mt:'6%'
                    
                }}>

                    <Box 
                    >
                        <Typography 
                        sx={{
                            fontWeight:'500',
                            fontSize:'32px'
                        }}>
                            You Ready to try Arbitrage?
                        </Typography>

                        <CustomButton 
                        sx={{
                            mt:'2%'
                        }}> Simulate </CustomButton>
                    </Box>

                    
                </Box>


                {/* STEP THREE */}

                <Box 
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    mt:'6%'
                }}>
                     <Box>
                     {/* Head */}
                     <Box>
                            <Typography>
                                Need a Flashloan? Try it out...
                            </Typography>
                        </Box>

                        <Box 
                        sx={{
                            // display:'flex',
                            // justifyContent:'center'
                        }}>
                            <Input 
                            sx={{
                                display:'flex',
                                mb:'6%'
                            }}/>
                            <CustomButton>Execute</CustomButton>
                        </Box>
                     
                     </Box>   
                    </Box>
                

                {/* STEP FOUR */}

                <Box 
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    mt:'6%'
                }}>
                    <Typography>
                        Let's Cleanup. Withdraw.
                    </Typography>

                    <Box 
                        sx={{
                            // display:'flex',
                            justifyContent:'center'
                        }}>
                            <Input 
                            sx={{
                                // display:'flex',
                                mb:'6%'
                            }}/>
                            <CustomButton 
                            sx={{
                                mr:'6%'
                            }}>Withdraw</CustomButton>
                        </Box>

                </Box>
                    

                

                    
               

            </Box>
        </Container>

    
    )
}