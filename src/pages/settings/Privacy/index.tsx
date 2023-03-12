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
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import AcyPageWrapper from '@/components/AcyPageWrapper';
const CustomListItem = ({ text, icon, to }: any) => <ListItem disablePadding>
    
            <ListItemText primary={text} />
            <Switch {...label} />
</ListItem>
export default function BasicList() {

    return (
        <AcyPageWrapper title="Privacy">
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List>
                    <CustomListItem text="Use BaseWallet Services" to="#/settings/developersettings/managenetworks" />
                    <Divider />
                    <CustomListItem text="Automatic Error Reporting" to="#/settings/developersettings/smartcontractdevelopment" />
                </List>
            </Box>
        </AcyPageWrapper>
    );
}