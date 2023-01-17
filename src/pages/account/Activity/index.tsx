import Box from '@mui/material/Box';
import styled from 'styled-components';
import ArticleIcon from '@mui/icons-material/Article';
import SendIcon from '@mui/icons-material/Send';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import SubtitlesOffIcon from '@mui/icons-material/SubtitlesOff';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
const H2 = styled.h2`
font-weight: 600;
font-size: 32px;
line-height: 38.4px;
margin-bottom: 25px;
margin-top: 16px;
text-align: center;
`;
const H3 = styled.h3`
font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    margin: 10px 16px;
`;
const Cr = styled.div`    font-size: 40px;
width: 1em;
height: 1em;
border-radius: 500px;
background-color: rgb(0, 0, 0);
position: relative;
display: flex;
justify-content: center;
align-items: center;
`
const Ms = styled.div`font-size: 13px;
line-height: 18px;
color: rgb(143, 142, 140);
margin: 0px;`

export default function Trade() {
  return <Box>
    <Typography variant="h2">Activity</Typography>
    <H3>13 November 2022</H3>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <Cr>
            <ArticleIcon />
          </Cr>
        </ListItemIcon>
        <Box>
          <Box>Deploy wallet</Box>
          <Ms>0x0000...0000</Ms>
        </Box>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Cr>
            <ArticleIcon />
          </Cr>
        </ListItemIcon>
        <Box>
          <Box>Deploy wallet</Box>
          <Ms>0x0000...0000</Ms>
        </Box>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Cr>
            <ArticleIcon />
          </Cr>
        </ListItemIcon>
        <Box>
          <Box>Deploy wallet</Box>
          <Ms>0x0000...0000</Ms>
        </Box>
      </ListItemButton>
    </List>
    <H3>13 November 2022</H3>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton sx={{display:'flex',justifyContent:'space-between'}}>

        <Box sx={{display:'flex'}}>
          <ListItemIcon>
            <Cr>
              <SendIcon />
            </Cr>
          </ListItemIcon>
          <Box>
            <Box>Send</Box>
            <Ms>To:0x0000...0000</Ms>
          </Box>
        </Box>
        <Box sx={{textAlign:'right'}}>
          <Box>-0.001ETH</Box>
          <Ms>-$1.20</Ms>
        </Box>
      </ListItemButton>
      <ListItemButton sx={{display:'flex',justifyContent:'space-between'}}>

        <Box sx={{display:'flex'}}>
          <ListItemIcon>
            <Cr>
              <AddIcon />
            </Cr>
          </ListItemIcon>
          <Box>
            <Box>Receive</Box>
            <Ms>From:0x0000...0000</Ms>
          </Box>
        </Box>
        <Box sx={{textAlign:'right'}}>
          <Box>0.001ETH</Box>
          <Ms>$1.20</Ms>
        </Box>
      </ListItemButton>
      <ListItemButton sx={{display:'flex',justifyContent:'space-between'}}>

        <Box sx={{display:'flex'}}>
          <ListItemIcon>
            <Cr>
              <OpenInBrowserIcon />
            </Cr>
          </ListItemIcon>
          <Box>
            <Box>Open</Box>
            <Ms>From:0x0000...0000</Ms>
          </Box>
        </Box>
        <Box sx={{textAlign:'right'}}>
          <Box>0.001ETH</Box>
          <Ms>$1.20</Ms>
        </Box>
      </ListItemButton>
      <ListItemButton sx={{display:'flex',justifyContent:'space-between'}}>

        <Box sx={{display:'flex'}}>
          <ListItemIcon>
            <Cr>
              <SubtitlesOffIcon />
            </Cr>
          </ListItemIcon>
          <Box>
            <Box>Close</Box>
            <Ms>From:0x0000...0000</Ms>
          </Box>
        </Box>
        <Box sx={{textAlign:'right'}}>
          <Box>0.001ETH</Box>
          <Ms>$1.20</Ms>
        </Box>
      </ListItemButton>
      <ListItemButton sx={{display:'flex',justifyContent:'space-between'}}>

        <Box sx={{display:'flex'}}>
          <ListItemIcon>
            <Cr>
              <SwapHorizIcon />
            </Cr>
          </ListItemIcon>
          <Box>
            <Box>Trade</Box>
            <Ms>From:0x0000...0000</Ms>
          </Box>
        </Box>
        <Box sx={{textAlign:'right'}}>
          <Box>0.001ETH</Box>
          <Ms>$1.20</Ms>
        </Box>
      </ListItemButton>
    </List>
  </Box>
}

