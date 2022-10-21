import React from 'react';
import { Grid as MuiGrid, GridProps } from '@mui/material';

interface TGridProps extends GridProps {}

const Grid = ({ children, ...props }: TGridProps) => <MuiGrid {...props}>{children}</MuiGrid>;

export default Grid;
