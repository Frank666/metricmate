import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { metricMateWebsite } from '../../shared/constants/configs.js'

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href={metricMateWebsite}>
                Metric Mate
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Copyright;