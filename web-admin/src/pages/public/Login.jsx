import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [step, setStep] = useState('PHONE'); // PHONE or OTP
    const { login } = useAuth(); // Assuming login function exists in AuthContext, need to update AuthContext to include login logic
    const navigate = useNavigate();

    const handleSendOtp = async (e) => {
        e.preventDefault();
        // TODO: Implement Firebase phone auth logic here
        console.log("Sending OTP to", phone);
        setStep('OTP');
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            await login(phone, otp);
            navigate('/admin/dashboard');
        } catch (err) {
            setError(err.message || "Login Failed");
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Login
                </Typography>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

                {step === 'PHONE' ? (
                    <Box component="form" onSubmit={handleSendOtp}>
                        <TextField
                            fullWidth
                            label="Mobile Number"
                            variant="outlined"
                            margin="normal"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3 }}
                        >
                            Send OTP
                        </Button>
                    </Box>
                ) : (
                    <Box component="form" onSubmit={handleVerifyOtp}>
                        <TextField
                            fullWidth
                            label="Enter OTP"
                            variant="outlined"
                            margin="normal"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3 }}
                        >
                            Verify & Login
                        </Button>
                        <Button
                            fullWidth
                            variant="text"
                            sx={{ mt: 1 }}
                            onClick={() => setStep('PHONE')}
                        >
                            Back
                        </Button>
                    </Box>
                )}
            </Paper>
        </Container>
    );
};

export default Login;
