import { history } from "umi";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from '@/assets/logo.svg';

const Register = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        }}>
            <Box sx={{ padding: '6rem 0 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Logo style={{ width: '80px' }} />
                <Box sx={{ padding: '2rem' }}>
                    <Typography variant="h2">ACY Wallet</Typography>
                </Box>
            </Box>
            <Box sx={{ padding: '16px 0 24px ', textAlign: 'center' }}>
                <Button onClick={() => history.push('/account/assets')} sx={{ width: '80%', borderRadius: '9999px' }} variant="contained">Create Account</Button>
            </Box>
        </Box>
    );
};

export default Register;
