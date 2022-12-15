
import { history } from "umi";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
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

  return (
    <AcyPageWrapper
      title="Accounts"
      endAction={
        <IconButton id="basic-button" sx={{ color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
          <AddIcon />
        </IconButton>}
    >
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={() => history.push('/account/assets')}>
          <ListItemIcon>
            <Box sx={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '100%' }}></Box>
          </ListItemIcon>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: '1' }}>
            <span>Account1<br />
              <Typography variant="subtitle2">0x0347 ... 65B8</Typography>
            </span>
            <span>
              <IconButton id="basic-button" onClick={e => { e.stopPropagation();history.push('/accounts/0xsdfdsfjdslk'); }} sx={{ color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
                <MoreHorizIcon />
              </IconButton>
            </span>
          </Box>
        </ListItemButton>
        <ListItemButton onClick={() => history.push('/account/assets')}>
          <ListItemIcon>
            <Box sx={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '100%' }}></Box>
          </ListItemIcon>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: '1' }}>
            <span>Account2<br />
              <Typography variant="subtitle2">0x0347 ... 65B8</Typography>
            </span>
            <span>
              <IconButton id="basic-button" onClick={e => { e.stopPropagation() }} sx={{ color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
                <MoreHorizIcon />
              </IconButton>
            </span>
          </Box>
        </ListItemButton>
        <ListItemButton onClick={() => history.push('/account/assets')}>
          <ListItemIcon>
            <Box sx={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '100%' }}></Box>
          </ListItemIcon>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: '1' }}>
            <span>Account3<br />
              <Typography variant="subtitle2">0x0347 ... 65B8</Typography>
            </span>
            <span>
              <IconButton id="basic-button" onClick={e => { e.stopPropagation() }} sx={{ color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
                <MoreHorizIcon />
              </IconButton>
            </span>
          </Box>
        </ListItemButton>
      </List>
    </AcyPageWrapper>
  );
}