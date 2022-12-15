import yayJpg from '../assets/yay.jpg';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
export default function HomePage() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <TextField id="outlined-basic" placeholder='sss' />
      <IconButton variant="contained" color="primary" aria-label="upload picture" component="label">
        <PhotoCamera />
      </IconButton>
    </div>
  );
}
