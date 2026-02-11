import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Sode Sri Vadiraja Matha
                        </Typography>
                        <Typography variant="body2">
                            Values of tradition and spirituality.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="/" color="inherit" display="block">Home</Link>
                        <Link href="/sevas" color="inherit" display="block">Sevas</Link>
                        <Link href="/contact" color="inherit" display="block">Contact Us</Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2">
                            Car Street, Udupi, Karnataka.
                        </Typography>
                        <Typography variant="body2">
                            Email: office@sodematha.in
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Sode Sri Vadiraja Matha. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
