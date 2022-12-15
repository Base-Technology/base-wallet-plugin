
import { history } from "umi";
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AcyPageWrapper from '@/components/AcyPageWrapper';
import Typography from '@mui/material/Typography';
export default function BasicList() {

    return (
        <AcyPageWrapper
            title="Address Book"
            endAction={<Tooltip title="Add NewAddress">
                <IconButton onClick={() => history.push('/settings/addressbook/newaddress')} sx={{ marginLeft: '5px', color: '#9f9fa1' }} size='small' aria-label="fingerprint" >
                    <AddIcon />
                </IconButton>
            </Tooltip>}
        >
            <Typography sx={{ textAlign: 'center' }} variant="subtitle1">You don’t have any saved addresses.</Typography>
        </AcyPageWrapper>
    );
}