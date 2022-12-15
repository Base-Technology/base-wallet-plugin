import * as React from "react";
import { history } from "umi";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import AcyBadge from "@/components/AcyBadge";
import EllipseButton from "@/components/AcyEllipseButton";

export default function Header() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return <Box sx={{
		display: 'flex',
		justifyContent: 'space-between',
		color: 'red'
	}}>
		<Box>
			<EllipseButton
				size="small"
				variant="contained"
				endIcon={<ArrowDropDownIcon />}
				onClick={() => history.push('/accounts')}
			>
				Account1
			</EllipseButton>
		</Box>
		<Box>
			<EllipseButton
				id="basic-button"
				size="small"
				variant="contained"
				onClick={handleClick}
			>
				Testnet <AcyBadge color="green" />
			</EllipseButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				sx={{ marginTop: '10px' }}
			>
				<MenuItem onClick={handleClose}>Mainnet <AcyBadge color="green" /></MenuItem>
				<MenuItem onClick={handleClose}>Othrenet<AcyBadge color="red" /></MenuItem>
			</Menu>
			<Tooltip title="Lock wallet">
				<IconButton onClick={() => history.push('/lock')} sx={{ marginLeft: '5px', color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
					<LockIcon sx={{ fontSize: '20px' }} />
				</IconButton>
			</Tooltip>
			<Tooltip title="Settings">
				<IconButton color="secondary" onClick={() => history.push('/settings')} sx={{ marginLeft: '5px', color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
					<SettingsIcon sx={{ fontSize: '20px' }} />
				</IconButton>
			</Tooltip>
		</Box>
	</Box >;
}