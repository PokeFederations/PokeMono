import React from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';

interface TTypographyProps extends TypographyProps {
  text: string | number;
}

const Typography = ({ text, ...props }: TTypographyProps) => (
  <MuiTypography {...props}>{text}</MuiTypography>
);

export default Typography;
