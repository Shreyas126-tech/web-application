import React, { useState } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, TextInput, Button, Checkbox, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../store/useAuthStore';
import api from '../../services/api';
import Colors from '../../constants/Colors';

export default function LoginScreen() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();
    const { setUser } = useAuthStore();
    const theme = useTheme();

    const handleRequestOtp = async () => {
        if (!mobileNumber || mobileNumber.length < 10) {
            setError('Please enter a valid mobile number');
            return;
        }
        setLoading(true);
        try {
            await api.post(`/auth/request-otp?mobileNumber=${mobileNumber}`);
            setOtpSent(true);
            setError('');
        } catch (err) {
            setError('Failed to send OTP. Is the backend running?');
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async () => {
        if (!otp) {
            setError('Please enter the OTP');
            return;
        }
        if (!checked) {
            setError('You must agree to the Terms & Conditions');
            return;
        }

        setLoading(true);
        try {
            const response = await api.post(`/auth/login?mobileNumber=${mobileNumber}&otp=${otp}`);
            if (response.data) {
                setUser(response.data);
                router.replace('/(tabs)');
            } else {
                // Not registered, redirect to registration
                router.push({
                    pathname: '/(auth)/register',
                    params: { mobile: mobileNumber }
                });
            }
        } catch (err) {
            setError('Invalid OTP or Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text variant="headlineMedium" style={styles.title}>Sode Sri Vadiraja Matha</Text>
                    <Text variant="titleMedium" style={styles.subtitle}>Devotee Login</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        label="Mobile Number"
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                        mode="outlined"
                        keyboardType="phone-pad"
                        disabled={otpSent}
                        style={styles.input}
                        outlineColor={Colors.light.tint}
                        activeOutlineColor={Colors.light.accent}
                    />

                    {otpSent && (
                        <TextInput
                            label="Enter OTP"
                            value={otp}
                            onChangeText={setOtp}
                            mode="outlined"
                            keyboardType="number-pad"
                            style={styles.input}
                            outlineColor={Colors.light.tint}
                            activeOutlineColor={Colors.light.accent}
                        />
                    )}

                    {error ? <Text style={styles.error}>{error}</Text> : null}

                    {!otpSent ? (
                        <Button
                            mode="contained"
                            onPress={handleRequestOtp}
                            loading={loading}
                            style={styles.button}
                            buttonColor={Colors.light.tint}
                        >
                            Request OTP
                        </Button>
                    ) : (
                        <Button
                            mode="contained"
                            onPress={handleLogin}
                            loading={loading}
                            style={styles.button}
                            buttonColor={Colors.light.tint}
                        >
                            Login
                        </Button>
                    )}

                    <View style={styles.consentContainer}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(!checked)}
                            color={Colors.light.tint}
                        />
                        <Text style={styles.consentText}>
                            I agree to the <Text style={styles.link}>Privacy Policy</Text> and <Text style={styles.link}>Terms & Conditions</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: Colors.light.accent,
        marginTop: 5,
    },
    form: {
        width: '100%',
    },
    input: {
        marginBottom: 15,
        backgroundColor: 'white',
    },
    button: {
        marginTop: 10,
        paddingVertical: 5,
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    consentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    consentText: {
        flex: 1,
        fontSize: 12,
        color: '#3E2723',
    },
    link: {
        color: Colors.light.tint,
        textDecorationLine: 'underline',
    },
});
