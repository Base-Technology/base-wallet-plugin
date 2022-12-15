import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DraftsIcon from '@mui/icons-material/Drafts';

import AcyPageWrapper from '@/components/AcyPageWrapper';
const CustomListItem = ({ text, icon, to }: any) => <ListItem disablePadding>
  <Link sx={{ width: '100%', color: '#ffffff', borderBottom: 'thin solid rgba(255, 255, 255, 0.12)' }} underline="none" href={to}>
    <ListItemButton>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
      <ArrowForwardIosIcon />
    </ListItemButton>
  </Link>
</ListItem>
export default function BasicList() {

  return (
    <AcyPageWrapper>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          <CustomListItem icon={<ContactMailIcon />} text="Address Book" to="#/settings/addressbook" />
          <CustomListItem icon={<AllInclusiveIcon />} text="Connected Sites" to="#/settings/dappconnections" />
          <CustomListItem icon={<CodeIcon />} text="Developer Settings" to="#/settings/developersettings" />
          <CustomListItem icon={<SecurityIcon />} text="Privacy" to="#/settings/privacy" />
        </List>
      </Box>
    </AcyPageWrapper>
  );
}