import {history} from 'umi';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import LaunchIcon from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import AcyCopy from "@/components/AcyCopy";
import AcyButton from "@/components/AcyButton";
const DocsPage = () => {
  return (
    <Box
      component="form"
      sx={{
        textAlign: 'center'
      }}
      autoComplete="off"
    >
      {/* <Input sx={{
        '&:before': { border: 0 },
        '& > input': { textAlign: 'center' },
        fontWeight: '600',
        fontSize: '32px',
        width: '260px'
      }} defaultValue="Account1" /> */}
      <Typography variant="h2">$ 100,293,23.47</Typography>
      <AcyCopy>
        0x0347 ... 65B8
      </AcyCopy>
      <Tooltip title="view">
        <IconButton sx={{color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
          <LaunchIcon sx={{width:'16px',height:'16px'}} />
        </IconButton>
      </Tooltip>

      <Stack sx={{ justifyContent: 'center', marginTop: '10px' }} direction="row" spacing={2}>
        <AcyButton onClick={()=>history.push('/trade')} variant="contained" startIcon={<SwapHorizontalCircleIcon />}>
          Trade
        </AcyButton>
        <AcyButton onClick={()=>history.push('/send')} variant="contained" startIcon={<SendIcon />}>
          Send
        </AcyButton>
      </Stack>
      <Box sx={{ marginTop: '10px' }}>
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <img width={40} src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" />
            </ListItemIcon>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
              <span>Ethereum</span>
              <span>0.11 ETH</span>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img width={40} src="https://app.acy.finance/static/icon_acy.78c0179c.svg" />
            </ListItemIcon>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
              <span>Acy</span>
              <span>12,232 ACY</span>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img width={40} src="https://cryptologos.cc/logos/polygon-matic-logo.svg?v=017" />
            </ListItemIcon>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
              <span>MATIC</span>
              <span>0.11</span>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img width={40} src="https://storageapi2.fleek.co/chwizdo-team-bucket/ACY Token List/USDT.svg" />
            </ListItemIcon>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
              <span>USDT</span>
              <span>0.11 USDT</span>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img width={40} src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=014" />
            </ListItemIcon>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
              <span>BNB</span>
              <span>0.11 BNB</span>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img width={40} src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=014" />
            </ListItemIcon>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
              <span>BTC</span>
              <span>0.11 BTC</span>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img width={40} src="https://storageapi2.fleek.co/chwizdo-team-bucket/ACY Token List/USDC.svg" />
            </ListItemIcon>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
              <span>USDC</span>
              <span>0.11 USDC</span>
            </Box>
          </ListItemButton>
        </List>
        <Button sx={{
          color: '#ffffff',
          borderRadius: '999px',
          padding: '8px 20px',
          textTransform: 'unset',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }} variant="text" startIcon={<AddIcon />}>Add Token</Button>
      </Box>
    </Box>
  );
};

export default DocsPage;
