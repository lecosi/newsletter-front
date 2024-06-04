import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { redirect } from 'next/navigation';
import axios from 'axios';


import { useState, useEffect } from 'react';


function preventDefault(event: React.MouseEvent) {
    redirect(`/dashboard/newsletter/`);
    event.preventDefault();

}

async function sendNewsletter(id: string) {
    const response = await axios.post("http://localhost:8000/newsletter/send", {
        "newsletter_id": id
    });

    if(response.status === 200){
        console.log("OK");
    }
}

export default function Orders() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(process.env.API_URL);
        axios.get('http://localhost:8000/newsletter')
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <React.Fragment>
            <Title>New Newsletter</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Ship Date</TableCell>
                        <TableCell>Files</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((row) => (
                        <TableRow key={row["_id"]}>
                            <TableCell>{row["_name"]}</TableCell>
                            <TableCell>{row["_file"]}</TableCell>
                            <TableCell>
                                <Link href="#" onClick={async (event: React.MouseEvent) => await sendNewsletter(row["_id"])}>Enviar</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="dashboard/newsletter/" onClick={preventDefault} sx={{ mt: 3 }}>
                See more newsletters
            </Link>
        </React.Fragment>
    );
}