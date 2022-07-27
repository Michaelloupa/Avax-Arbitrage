//Importing Resources

import React from 'react';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";

export const CustomButton = styled(Button)({
    color: "white",
    backgroundColor: "black",
    textdecoration: 'none',
    "&:hover": {
      backgroundColor: "black",
    },
    'a': {
      color: '#fff',
      textdecoration: 'none'
    }
    
  });