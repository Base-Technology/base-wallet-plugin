import * as React from 'react';
import { history } from "umi";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import AddIcon from '@mui/icons-material/Add';
import DraftsIcon from '@mui/icons-material/Drafts';

import AcyPageWrapper from '@/components/AcyPageWrapper';
const CustomListItem = ({ text, icon, to }: any) => <ListItem disablePadding>
  <Link sx={{ width: '100%', color: '#ffffff', borderBottom: 'thin solid rgba(255, 255, 255, 0.12)' }} underline="none" href={to}>
    <ListItemButton>
      <ListItemText primary={text} />
    </ListItemButton>
  </Link>
</ListItem>
export default function BasicList() {

  return (
    <AcyPageWrapper title="Networks">
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          <CustomListItem text="Mainnet" to="#/settings/addressbook" />
          <CustomListItem text="Testnet" to="#/settings/dappconnections" />
        </List>
        <Box sx={{ textAlign: 'center' }}>
          <Tooltip title="Add Network">
            <IconButton onClick={() => history.push('/settings/developersettings/managenetworks/add')} sx={{ marginLeft: '5px', color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>

      </Box>
    </AcyPageWrapper>
  );
}