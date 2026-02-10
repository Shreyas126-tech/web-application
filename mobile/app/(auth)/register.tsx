import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button, Checkbox, useTheme } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useAuthStore } from '../../store/useAuthStore';
import api from '../../services/api';
import Colors from '../../constants/Colors';

export default function RegisterScreen() {
    const { mobile } = useLocalSearchParams();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [gotra, setGotra] = useState('');
    const [nakshatra, setNakshatra] = useState('');
    const [volunteer, setVolunteer] = useState(false);
    const [consent, setConsent] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { setUser } = useAuthStore();

    const handleRegister = async () => {
        if (!fullName || !consent) return;

        setLoading(true);
        try {
            const response = await api.post('/auth/register', {
                mobileNumber: mobile,
                fullName,
                email,
                gotra,
                nakshatra,
                volunteerSignup: volunteer,
                dataConsent: consent
            });
            setUser(response.data);
            router.replace('/(tabs)');
        } catch (err) {
            console.error(err);
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
                <Text variant="headlineSmall" style={styles.title}>Devotee Registration</Text>
                <Text style={styles.mobileText}>Mobile: {mobile}</Text>

                <TextInput
                    label="Full Name *"
                    value={fullName}
                    onChangeText={setFullName}
                    mode="outlined"
                    style={styles.input}
                    outlineColor={Colors.light.tint}
                    activeOutlineColor={Colors.light.accent}
                />

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    mode="outlined"
                    style={styles.input}
                    outlineColor={Colors.light.tint}
                    activeOutlineColor={Colors.light.accent}
                />

                <View style={styles.row}>
                    <TextInput
                        label="Gotra"
                        value={gotra}
                        onChangeText={setGotra}
                        mode="outlined"
                        style={[styles.input, { flex: 1, marginRight: 10 }]}
                    />
                    <TextInput
                        label="Nakshatra"
                        value={nakshatra}
                        onChangeText={setNakshatra}
                        mode="outlined"
                        style={[styles.input, { flex: 1 }]}
                    />
                </View>

                <View style={styles.option}>
                    <Checkbox
                        status={volunteer ? 'checked' : 'unchecked'}
                        onPress={() => setVolunteer(!volunteer)}
                        color={Colors.light.tint}
                    />
                    <Text>Sign up as Volunteer</Text>
                </View>

                <View style={styles.option}>
                    <Checkbox
                        status={consent ? 'checked' : 'unchecked'}
                        onPress={() => setConsent(!consent)}
                        color={Colors.light.tint}
                    />
                    <Text style={styles.consentText}>I consent to data storage for communications *</Text>
                </View>

                <Button
                    mode="contained"
                    onPress={handleRegister}
                    loading={loading}
                    style={styles.button}
                    disabled={!fullName || !consent}
                    buttonColor={Colors.light.tint}
                >
                    Complete Registration
                </Button>
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
        padding: 20,
    },
    title: {
        color: Colors.light.tint,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    mobileText: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    input: {
        marginBottom: 15,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 0,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    consentText: {
        flex: 1,
        fontSize: 12,
    },
    button: {
        marginTop: 20,
    },
});
