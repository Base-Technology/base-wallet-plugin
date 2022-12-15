import { useLayoutEffect, useState } from "react";
import { Link, Outlet } from 'umi';
import Box from '@mui/material/Box';
import Navigation from "./Navigation";
import Header from "./Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#eb5c20',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
	},
	typography: {
		h2: {
			fontWeight: '600',
			fontSize: '32px',
			textAlign:'center'
		},
		subtitle1:{
			color:'#88888a'
		}
	}
});
export default function Layout() {
	const [fixBg, setFixBg] = useState(false);
	useLayoutEffect(() => {
		document.getElementById('acymain')?.addEventListener('scroll', e => {
			const scrollTop = (e.target as HTMLElement).scrollTop;
			setFixBg(scrollTop > 50);
		})
		return () => {
			document.getElementById('acymain')?.removeEventListener('scroll', () => { });
		}
	}, [])
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
				<Box sx={{ padding: '8px 12px', background: fixBg && '#28282c' || 'unset', transition: 'all 0.05s' }}><Header /></Box>
				<Box id="acymain" sx={{ flex: 'auto', overflow: 'auto',padding:'20px 0' }}><Outlet /></Box>
				<Box><Navigation /></Box>
			</Box>
		</Box>
	);
}
