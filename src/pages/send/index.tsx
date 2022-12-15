
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
import AcyLink from '@/components/AcyLink';
import Typography from '@mui/material/Typography';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HeaderIcon(props: SvgIconProps) {
	return (
		<Box sx={{width:'40px',height:'40px',background:'rgba(255, 255, 255, 0.08)',borderRadius:'100%'}}></Box>

	);
}
export default function BasicList() {

	return (
		<AcyPageWrapper
			title="Send"
		>
			<Box sx={{ width: '90%', margin: 'auto' }}>
				<FormControl fullWidth >
					<OutlinedInput
						id="outlined-adornment-amount"
						// startAdornment={<InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>}
						placeholder="Recipient's address"
					/>
				</FormControl>
				<Typography sx={{ marginTop: '20px' }} variant="subtitle1">Recents</Typography>
				<AcyLink href="#/send/sendtoken/0x818D">
					<ListItemButton>
						<ListItemIcon>
							<HeaderIcon />
						</ListItemIcon>
						<ListItemText primary="0x818D...18B7" />
					</ListItemButton>
				</AcyLink>
				<AcyLink href="#/send/sendtoken">
					<ListItemButton>
						<ListItemIcon>
							<HeaderIcon />
						</ListItemIcon>
						<ListItemText primary="0x98C2...B90A" />
					</ListItemButton>
				</AcyLink>
			</Box>


		</AcyPageWrapper>
	);
}