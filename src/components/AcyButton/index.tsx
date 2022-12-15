import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

import { purple } from '@mui/material/colors';
type AcyButtonProps = React.FC<ButtonProps> & {
  big: boolean;
};
const AcyButton = styled(Button)<ButtonProps>(({ theme }) => {
  // if (big) {
    return {
      borderRadius: '999px',
      padding: '8px 30px',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      textTransform: 'unset'
    };
  // }
  // else {
  //   return {
  //     borderRadius: '999px',
  //     backgroundColor: 'rgba(255, 255, 255, 0.08)',
  //     '&:hover': {
  //       backgroundColor: 'rgba(255, 255, 255, 0.1)',
  //     },
  //     textTransform: 'unset'
  //   };
  // }
});
export default AcyButton;