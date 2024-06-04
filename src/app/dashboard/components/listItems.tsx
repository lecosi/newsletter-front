import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Link from 'next/link'


export const mainListItems = (
    <React.Fragment>
        <Link href="/dashboard">
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <Link href="/dashboard/newsletter/">
            <ListItemButton>
                <ListItemIcon>
                    <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="Newsletter" />
            </ListItemButton>
        </Link>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Recent
        </ListSubheader>
        <Link href="/dashboard/newsletter/add/">
            <ListItemButton>
                <ListItemIcon>
                    <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="Add newsletter" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);