import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const Contact = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h3" gutterBottom>
                Contact Us
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h5" gutterBottom>Sode Matha</Typography>
                        <Typography paragraph>
                            Address details regarding Sode Matha.
                        </Typography>
                        <Typography variant="body1">
                            <strong>Phone:</strong> +91 1234567890
                        </Typography>
                        <Typography variant="body1">
                            <strong>Email:</strong> office@sodematha.in
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Google Maps Placeholder */}
                    <Box sx={{ width: '100%', height: 400, bgcolor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body2" color="text.secondary">Google Map will load here</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
