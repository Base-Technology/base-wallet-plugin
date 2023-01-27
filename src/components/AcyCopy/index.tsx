import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box, { BoxProps } from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const shortAddress = (
	address: string,
	preLength = 6,
	endLength = 4,
	skipStr = "..."
  ) => {
	const totalLength = preLength + skipStr.length + endLength;
	if (address.length > totalLength) {
	  return (
		address.substr(0, preLength) +
		skipStr +
		address.substr(address.length - endLength, address.length)
	  );
	}
	return address;
  };

const CopyBox = styled(Box)<BoxProps>(({ theme }) => ({
	borderRadius: '12px',
	padding: '4px 10px',
	whiteSpace: 'nowrap',
	display: 'inline-block',
	color: '#ffffff',
	cursor: 'pointer',
	fontSize: '14px',
	'&:hover': {
		backgroundColor: 'rgba(255, 255, 255, 0.15)',
	},
	'& > svg': {
		marginLeft: '5px',
	},
}));
export interface AcyCopyProps {

}
export default function AcyCopy(props: any) {
	const [open, setOpen] = useState(false);

	const handleTooltipOpen = () => {
		setOpen(true);
		navigator.clipboard.writeText(props.children);
		// setTimeout(() => {
		// 	setOpen(false);
		// }, 1000);
	};
	const handleClose = () => {
		setTimeout(() => {
			setOpen(false);
		}, 200);

	}
	return <Tooltip
		PopperProps={{
			disablePortal: true,
		}}
		placement="top"
		onClose={handleClose}
		title={!open && 'Click to copy address' || "Copied!"}
	>
		<CopyBox onClick={handleTooltipOpen}>
			{shortAddress(props.children)}
			<ContentCopyIcon sx={{ fontSize: '12px' }} />
		</CopyBox>
	</Tooltip>
}