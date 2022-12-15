import { styled } from '@mui/material/styles';
const colors={
    'red':'rgb(193, 32, 38)',
    'green':'rgb(2, 187, 168)'
}
interface BadgeProps{
    color:'red'|'green'
}
const Badge=styled('span')<BadgeProps>(({ color }) => ({
    width: '8px',
    height: '8px',
    borderRadius: '8px',
    marginLeft:'5px',
    backgroundColor:colors[color]
}));

export default function AcyBadge(props: any) {
	return <Badge {...props}/>
}