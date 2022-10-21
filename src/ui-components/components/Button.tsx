import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface TButtonProps extends ButtonProps {}

const Button = ({ children, ...props }: TButtonProps) => (
  <MuiButton variant="contained" {...props}>
    {children}
  </MuiButton>
);

export default Button;
