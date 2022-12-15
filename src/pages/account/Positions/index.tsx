import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  symbol: string,
  size: string,
  pnl: string
) {
  return { symbol, size, pnl};
}

const rows = [
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
  createData('BTCUSDT', '16.6BUSD', '+0.00BUSD'),
];

export default function CustomizedTables() {
  return (
    <Box>
      <Typography variant="h2">Postions</Typography>
      <Tabs value={0} aria-label="basic tabs example">
          <Tab label="Futures" />
          <Tab label="Options"/>
          <Tab label="Powers" />
        </Tabs>
      <TableContainer sx={{marginTop:'20px'}} component={Paper}>

        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Symbol</StyledTableCell>
              <StyledTableCell align="right">Size</StyledTableCell>
              <StyledTableCell align="right">PNL(ROE %)</StyledTableCell>
              {/* <StyledTableCell align="right">Action</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.symbol}>
                <StyledTableCell component="th" scope="row">
                  {row.symbol}
                </StyledTableCell>
                <StyledTableCell align="right">{row.size}</StyledTableCell>
                <StyledTableCell align="right">{row.pnl}</StyledTableCell>
                {/* <StyledTableCell align="right">Close</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  );
}

