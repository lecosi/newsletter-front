'use client';

import * as React from 'react';
import {createContext, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import {styled} from '@mui/system';
import Paper from "@mui/material/Paper";
import Title from "@/app/dashboard/components/Title";
import Box from "@mui/material/Box";
import { redirect } from 'next/navigation';


const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const FormContext = createContext({isOpen: true});

export default function AddressForm() {
    const [isOpen, setIsOpen] = useState(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const response = await axios.postForm('http://localhost:8000/newsletter/', data);
        console.log({
            name: data.get('name'),
            document_file: data.get('document_file'),
        });
        console.log("response", response);
        if(response.status === 200){
            redirect("/dashboard/newsletter")
        }
    };
    return (
        <FormContext.Provider value={{ isOpen }}>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Title>Add Newsletter</Title>
                            <Grid container spacing={3}>
                                <FormGrid item xs={12} md={12}>
                                    <FormLabel htmlFor="name" required>
                                        Name
                                    </FormLabel>
                                    <OutlinedInput
                                        id="name"
                                        name="name"
                                        type="name"
                                        placeholder="Name newsletter"
                                        autoComplete="Name newsletter"
                                        required
                                    />
                                </FormGrid>
                                <FormGrid item xs={12} md={12}>
                                    <FormLabel htmlFor="document_file" required>
                                        File
                                    </FormLabel>
                                    <OutlinedInput
                                        id="document_file"
                                        name="document_file"
                                        type="file"
                                        placeholder="File newsletter"
                                        required
                                    />
                                </FormGrid>
                                <FormGrid item xs={12} md={12}>
                                    <FormLabel htmlFor="recipients" required>
                                        Recipients
                                    </FormLabel>
                                    <OutlinedInput
                                        id="recipients"
                                        name="recipients"
                                        type="recipients"
                                        placeholder="jhondoe@test.com;jhondoe@test.com"
                                        multiline
                                        rows={4}
                                        required
                                    />
                                </FormGrid>
                                <FormGrid item xs={12} md={12}>
                                    <Button type="submit" variant="text">Submit</Button>
                                </FormGrid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

        </FormContext.Provider>
    );
}