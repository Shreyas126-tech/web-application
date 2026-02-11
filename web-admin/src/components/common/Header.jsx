import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Sode Sri Vadiraja Matha
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit" component={RouterLink} to="/">Home</Button>
                        <Button color="inherit" component={RouterLink} to="/history">History</Button>
                        <Button color="inherit" component={RouterLink} to="/gallery">Gallery</Button>
                        <Button color="inherit" component={RouterLink} to="/sevas">Sevas</Button>
                        <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
                        {/* Login button or User Profile if logged in */}
                        <Button color="inherit" variant="outlined" sx={{ ml: 2, borderColor: 'white' }} component={RouterLink} to="/login">
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
