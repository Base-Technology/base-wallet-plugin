import { useState, useEffect } from 'react';
import { history,useLocation } from "umi";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppsIcon from '@mui/icons-material/Apps';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function SimpleBottomNavigation() {
    const routers=['/account/assets', '/account/positions', '/account/activity'];
    const [value, setValue] = useState(0);
    const location  = useLocation();
    useEffect(()=>{
        setValue(routers.indexOf(location.pathname));
    },[])
    return (
        <Box sx={{
            backgroundColor: '#101014',
            borderTop: '1px solid #1d1f22'
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    history.push(routers[newValue]);
                }}
            >
                <BottomNavigationAction label="Assets" icon={<AccountBalanceWalletIcon />} />
                <BottomNavigationAction label="Positions" icon={<AppsIcon />} />
                <BottomNavigationAction label="Activity" icon={<LocalActivityIcon />} />
            </BottomNavigation>
        </Box>
    );
}