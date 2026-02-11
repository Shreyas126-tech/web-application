import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
    return (
        <Container maxWidth="lg">
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', py: 8, bgcolor: 'primary.light', color: 'white', borderRadius: 2, mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Sode Sri Vadiraja Matha
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                    A spiritual journey into the Dwaita philosophy.
                </Typography>
                <Button variant="contained" color="secondary" size="large" component={RouterLink} to="/sevas" sx={{ mt: 2 }}>
                    Book Sevas Online
                </Button>
            </Box>

            {/* News / Updates Section Placeholder */}
            <Typography variant="h4" gutterBottom>
                Latest Updates
            </Typography>
            <Grid container spacing={3}>
                {[1, 2, 3].map((item) => (
                    <Grid item xs={12} md={4} key={item}>
                        <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                            <Typography variant="h6" gutterBottom>
                                News Update {item}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
