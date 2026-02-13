import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';

const Dashboard = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Dashboard
            </Typography>
            <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 300, justifyContent: 'center' }}>
                <Typography component="h2" variant="h4" color="primary" gutterBottom>
                    Welcome to Sode Matha Admin Panel
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                    Manage your application settings securely.
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" color="text.disabled">
                        (Additional admin features can be enabled here in the future)
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default Dashboard;
