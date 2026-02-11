import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Box } from '@mui/material';

const PublicLayout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default PublicLayout;
