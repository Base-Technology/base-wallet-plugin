import { Outlet } from 'umi';
import Header from "./Header";
import Box from '@mui/material/Box';

export default function Layout(props: any) {
	const { children } = props;
	return (
		<Box>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column',
				width: '360px',
				height: '600px',
				overflow: 'hidden',
			}}>
				<Box>
					<Header {...props} />
				</Box>
				<Box sx={{ flex: 'auto', overflow: 'auto', padding: '20px' }}>{children}</Box>
			</Box>
		</Box>
	);
}
