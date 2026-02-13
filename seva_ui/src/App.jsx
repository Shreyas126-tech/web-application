import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { AuthProvider } from './context/AuthContext';

// Layouts
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';

// Public Pages
import Home from './pages/public/Home';
import History from './pages/public/History';
import Sevas from './pages/public/Sevas';
import Kanike from './pages/public/Kanike';
import OnlineSeva from './pages/public/OnlineSeva';
import DailyWorship from './pages/public/DailyWorship';
import Contact from './pages/public/Contact';
import Login from './pages/public/Login';
import Signup from './pages/public/Signup';
import Events from './pages/public/Events';
import Gallery from './pages/public/Gallery';
import Artefacts from './pages/public/Artefacts';
import RoomBooking from './pages/public/RoomBooking';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import ContentManager from './pages/admin/ContentManager';
import SevaBookings from './pages/admin/SevaBookings';
import UserManagement from './pages/admin/UserManagement';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <Router>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<PublicLayout />}>
                            <Route index element={<Home />} />
                            <Route path="history" element={<History />} />
                            <Route path="sevas" element={<Sevas />} />
                            <Route path="daily-worship" element={<DailyWorship />} />
                            <Route path="online-seva" element={<OnlineSeva />} />
                            <Route path="kanike" element={<Kanike />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="events" element={<Events />} />
                            <Route path="gallery" element={<Gallery />} />
                            <Route path="artefacts" element={<Artefacts />} />
                            <Route path="room-booking" element={<RoomBooking />} />
                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                        </Route>

                        {/* Admin Routes - Protected by Auth (Logic to be added) */}
                        <Route path="/admin" element={<AdminLayout />}>
                            <Route index element={<Navigate to="/admin/dashboard" replace />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="content" element={<ContentManager />} />
                            <Route path="sevas" element={<SevaBookings />} />
                            <Route path="users" element={<UserManagement />} />
                        </Route>

                        {/* Fallback */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
