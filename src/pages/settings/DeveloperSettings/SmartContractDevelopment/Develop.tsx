import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DraftsIcon from '@mui/icons-material/Drafts';
import Typography from '@mui/material/Typography';
import AcyPageWrapper from '@/components/AcyPageWrapper';
const CustomListItem = ({ text, icon, to }: any) => <ListItem disablePadding>
    <Link sx={{ width: '100%', color: '#ffffff', borderBottom: 'thin solid rgba(255, 255, 255, 0.12)' }} underline="none" href={to}>
        <ListItemButton>
            <ListItemText primary={text} />
            <ArrowForwardIosIcon />
        </ListItemButton>
    </Link>
</ListItem>
export default function BasicList() {

    return (
        <AcyPageWrapper title="Develop smart contract">
            <Box sx={{ '& .MuiInputBase-root': { marginBottom: '15px' } }}>
                <TextField fullWidth id="outlined-basic" label="Contract Classhash" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Network" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Account" variant="outlined" />

            </Box>
            <Box sx={{ padding: '16px 0 24px ', textAlign: 'center' }}>
                <Button sx={{ width: '80%', borderRadius: '9999px',padding:'12px 16px'}} variant="contained">Develop</Button>
            </Box>
        </AcyPageWrapper>
    );
}