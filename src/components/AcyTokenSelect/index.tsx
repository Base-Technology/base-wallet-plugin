import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function TokenSelect() {
    return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: '1', padding: '0 10px',
            border: 'thin solid rgba(255, 255, 255, 0.23)',
            height: '56px',
            borderRight: 0
        }}>
            <img width={36} src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <span>ETH</span>
                <ArrowDropDownIcon />
            </Box>
        </Box>
        <TextField id="outlined-basic" variant="outlined" />
    </Box>
}