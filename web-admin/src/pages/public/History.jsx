import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';

const swamijis = [
    "Sri Vishnutirtha", "Sri Vyaasatirtha", "Sri Vedyatirtha", "Sri Vedagarbhatirtha",
    "Sri Vareshatirtha", "Sri Vamanatirtha", "Sri Vasudevatirtha", "Sri Vedavyasatirtha",
    "Sri Varahatirtha", "Sri Vedatmatirtha", "Sri Vishwavandyatirtha - I", "Sri Ratnagarbhatirtha",
    "Sri Vedangatirtha", "Sri Vidyapatitirtha", "Sri Vishwavandyatirtha - II", "Sri Vishwatirtha",
    "Sri Vitthalatirtha", "Sri Varadarajatirtha - I", "Sri Vagishatirtha", "Sri Vadirajatirtharu",
    "Sri Vedavedyatirtha - (1530-1616)", "Sri Vidyanidhitirtha", "Sri Vedanidhitirtha",
    "Sri Varadarajatirtha - II", "Sri Vishwadhirajatirtha", "Sri Vadivandyatirtha",
    "Sri Vishwavandyatirtha - III", "Sri Vibudhavaryatirtha", "Sri Vishwanidhitirtha",
    "Sri Vishwadhishwaratirtha", "Sri Vishweshatirtha", "Sri Vishwapriyatirtha (Srimadvrindavan acharya) - 1774-1865",
    "Sri Vishwadhishatirtha", "Sri Vishwendratirtha", "Sri Vishwottamatirtha : (1934-2007)",
    "Sri Vishwavallabhatirtha (The Present Pontiff)"
];

const History = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom color="primary">
                    Sri Sode Vadiraja Matha
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ mb: 4, fontStyle: 'italic' }}>
                    Jagadguru Srimanmadhwaachaarya Moolamahaasamsthanam Aacharya Madhwa Lineage of the Swamijis of Sri Sode Mata
                </Typography>

                <Grid container spacing={3}>
                    {swamijis.map((name, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, transition: '0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 6 } }}>
                                <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: 'secondary.main' }}>
                                    {index + 1}
                                </Avatar>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default History;
