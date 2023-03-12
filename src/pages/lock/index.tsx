import { history } from "umi";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from '@/assets/logo1.svg';
const Lock = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        }}>
            <Box sx={{ padding: '6rem 0 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Logo style={{ width: '80px' }} />
                <Box sx={{ padding: '2rem 0' }}>
                    <Typography variant="h2">Welcome back</Typography>
                    <Typography variant="subtitle1">Unlock your wallet to continue</Typography>
                </Box>
                <TextField sx={{width:'80%'}} type="password" id="outlined-basic" label="Password" variant="outlined" />
            </Box>
            <Box sx={{ padding: '16px 0 24px ', textAlign: 'center' }}>
                <Button onClick={() => history.push('/')} sx={{ width: '80%', borderRadius: '9999px',padding:'12px 16px'}} variant="contained">Unlock</Button>
            </Box>
        </Box>
    );
};

export default Lock;
