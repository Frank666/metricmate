import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useNavigate } from 'react-router-dom';
import { BreadcrumbsModel } from '../../models/breadcrumbsModel'
import { isNil, map } from 'lodash';

interface BreadcrumbsParams {
    model: Array<BreadcrumbsModel>;
}

export default function CustomBreadcrumbs(props: BreadcrumbsParams) {
    const { model } = props;
    const navigate = useNavigate();

    return (
        <Breadcrumbs sx={{
            p: 2,
            width: '95%',
            marginTop: '30px',
            marginLeft: '5px'
        }} aria-label="breadcrumb">
            {
                map(model, (breadcrumb) => (
                    isNil(breadcrumb.to) ?
                        <Typography color="text.primary">{breadcrumb.name}</Typography> :

                        breadcrumb.to !== '-1' ?
                            <Link to={breadcrumb.to}>
                                {breadcrumb.name}
                            </Link>
                            : <Link to={'..'} onClick={(e) => { e.preventDefault(); navigate(-1) }}>
                                {breadcrumb.name}
                            </Link>


                ))
            }
        </Breadcrumbs>
    )
}