
import { history } from "umi";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import AcyPageWrapper from '@/components/AcyPageWrapper';
import AcyTokenSelect from '@/components/AcyTokenSelect';
import AcyLink from '@/components/AcyLink';
import IconButton from '@mui/material/IconButton';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import SwapVertIcon from '@mui/icons-material/SwapVert';
function HeaderIcon(props: SvgIconProps) {
	return (
		<SvgIcon sx={{ borderRadius: '100%' }} {...props}>
			<rect x="0" y="0" width="28" height="28" transform="translate(-7.273159811897144 2.900951681526347) rotate(177.2 14 14)" fill="#01858E"></rect><rect x="0" y="0" width="28" height="28" transform="translate(15.281449849293063 8.509385771155797) rotate(93.0 14 14)" fill="#FA7D00"></rect><rect x="0" y="0" width="28" height="28" transform="translate(2.539932948119678 -20.56125067835797) rotate(429.9 14 14)" fill="#F94701"></rect>
		</SvgIcon>
	);
}
export default function BasicList() {

	return (
		<AcyPageWrapper
			title="Trade"
		>
			<Box>Trade From</Box>
			<AcyTokenSelect />
			<Box sx={{ textAlign: 'center', padding: '20px' }}>
				<IconButton aria-label="delete">
					<SwapVertIcon />
				</IconButton>
			</Box>
			<Box>Trade To</Box>
			<AcyTokenSelect />
		</AcyPageWrapper>
	);
}