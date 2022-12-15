
import * as React from "react";
import { history } from "umi";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import AcyPageWrapper from '@/components/AcyPageWrapper';
import AcyLink from '@/components/AcyLink';
import Typography from '@mui/material/Typography';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HeaderIcon(props: SvgIconProps) {
  return (
    <SvgIcon sx={{ borderRadius: '100%' }} {...props}>
      <rect x="0" y="0" width="28" height="28" transform="translate(-7.273159811897144 2.900951681526347) rotate(177.2 14 14)" fill="#01858E"></rect><rect x="0" y="0" width="28" height="28" transform="translate(15.281449849293063 8.509385771155797) rotate(93.0 14 14)" fill="#FA7D00"></rect><rect x="0" y="0" width="28" height="28" transform="translate(2.539932948119678 -20.56125067835797) rotate(429.9 14 14)" fill="#F94701"></rect>
    </SvgIcon>
  );
}
export default function BasicList() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AcyPageWrapper
      title="SendETH"
      endAction={
        <Box>
          <IconButton id="basic-button" onClick={handleClick} sx={{ marginLeft: '5px', color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
            <MoreVertOutlinedIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{ marginTop: '10px' }}
          >
            <MenuItem onClick={handleClose}>Copy address</MenuItem>
            <MenuItem onClick={handleClose}>View on Scan</MenuItem>
            <MenuItem onClick={handleClose}>Hide this token</MenuItem>
          </Menu></Box>}
    >
      <Box sx={{ width: '90%', margin: 'auto' }}>
        <FormControl fullWidth >
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">
              <img width="30" src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" />
            </InputAdornment>}
            endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
            placeholder="0.0"
          />
        </FormControl>
        <FormControl sx={{ marginTop: '15px' }} fullWidth >
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={<InputAdornment position="end"><AlternateEmailOutlinedIcon /></InputAdornment>}
            placeholder="Recipient's address"
          />
        </FormControl>
      </Box>


    </AcyPageWrapper>
  );
}