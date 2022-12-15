
import { history } from "umi";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
        <SvgIcon sx={{ borderRadius: '100%' }} {...props}>
            <rect x="0" y="0" width="28" height="28" transform="translate(-7.273159811897144 2.900951681526347) rotate(177.2 14 14)" fill="#01858E"></rect><rect x="0" y="0" width="28" height="28" transform="translate(15.281449849293063 8.509385771155797) rotate(93.0 14 14)" fill="#FA7D00"></rect><rect x="0" y="0" width="28" height="28" transform="translate(2.539932948119678 -20.56125067835797) rotate(429.9 14 14)" fill="#F94701"></rect>
        </SvgIcon>
    );
}
export default function BasicList() {

    return (
        <AcyPageWrapper
            title="Account1"
        >
            <Box sx={{textAlign:'center',padding:'20px 0'}}>
                <img style={{borderRadius: '100%'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij4KICAgIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0ZGQTg1QyIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTQlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjI4IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiIgZmlsbD0iI2ZmZmZmZiI+QTE8L3RleHQ+CiAgICA8L3N2Zz4=" />
            </Box>
            <OutlinedInput sx={{width:'100%'}} endAdornment={<InputAdornment position="end"><EditIcon /></InputAdornment>} id="outlined-basic" value={'Account 1'}/>
        </AcyPageWrapper>
    );
}