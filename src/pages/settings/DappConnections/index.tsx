
import { history } from "umi";
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AcyPageWrapper from '@/components/AcyPageWrapper';
import Typography from '@mui/material/Typography';
export default function BasicList() {

    return (
        <AcyPageWrapper
            title="Dapp connections"
        >
            <Typography sx={{textAlign:'center'}} variant="subtitle1">You haven't connected to any dapp yet.</Typography>
        </AcyPageWrapper>
    );
}