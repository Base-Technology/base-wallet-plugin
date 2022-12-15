import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import AcyPageWrapper from '@/components/AcyPageWrapper';
import FormControl from '@mui/material/FormControl';
export default function BasicList() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <AcyPageWrapper
            title="New Address"
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        height: '64px',
                        width: '64px',
                        backgroundColor: 'rgb(51, 51, 50)',
                        borderRadius: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <AddIcon />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    
                    <TextField sx={{ width: '80%' }} id="outlined-basic" label="Name" variant="outlined" />
                    <TextField sx={{ width: '80%' }} id="outlined-basic" label="Net Address" variant="outlined" />
                    <FormControl sx={{ width: '80%' }}>

                        <InputLabel id="demo-simple-select-label">Network</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Network"
                            onChange={handleChange}

                        >
                            <MenuItem value={10}>Mainnet</MenuItem>
                            <MenuItem value={20}>Testnet</MenuItem>
                        </Select>
                    </FormControl>
                    <Stack sx={{width:'100%'}} direction="row" spacing={2}>
                        <Button  sx={{width:'50%',background:'rgb(51, 51, 50)','&:hover':{backgroundColor:'rgb(51, 51, 50)'}}} variant="contained">Cancel</Button>
                        <Button sx={{width:'50%'}} variant="contained">Save</Button>
                    </Stack>
                </Box>

            </Box>
        </AcyPageWrapper >
    );
}