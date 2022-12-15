import { history } from "umi";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import AcyBadge from "@/components/AcyBadge";
import EllipseButton from "@/components/AcyEllipseButton";

export default function Header(props:any) {
	return <Box sx={{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '8px 12px',
		position:'relative'
	}}>
		<Box sx={{
			display: 'flex',
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<span>{props.title||'Settings'}</span>
		</Box>
		<Box>
			<Tooltip title="Go Back">
				<IconButton onClick={() => history.back()} sx={{ marginLeft: '5px', color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
					<ArrowBackIcon />
				</IconButton>
			</Tooltip>
		</Box>
		<Box>
			{props.endAction}
		</Box>
	</Box>;
}