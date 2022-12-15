import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

import { purple } from '@mui/material/colors';

const EllipseButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius:'999px',
    backgroundColor:'rgba(255, 255, 255, 0.08)',
    '&:hover': {
        backgroundColor:'rgba(255, 255, 255, 0.1)',
    },
    textTransform:'unset'
}));

export default EllipseButton;