import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <React.Fragment>
            <Title>New Subscribers</Title>
            <Typography component="p" variant="h4">
                # 3,024
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Add Newsletter
                </Link>
            </div>
        </React.Fragment>
    );
}