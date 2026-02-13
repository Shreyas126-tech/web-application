import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header'; // Reusing Header for now, could be AdminHeader
import { Box, Toolbar } from '@mui/material';

const AdminLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, mt: 8 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default AdminLayout;
