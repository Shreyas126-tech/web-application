import React from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import { Text, Button, Card, Title, Avatar } from 'react-native-paper';
import { useAuthStore } from '../../store/useAuthStore';
import Colors from '../../constants/Colors';

export default function ProfileScreen() {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Logout', onPress: () => logout(), style: 'destructive' },
        ]);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Avatar.Text
                    size={80}
                    label={user?.fullName?.charAt(0) || 'D'}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{user?.fullName || 'Devotee'}</Text>
                <Text style={styles.phone}>{user?.mobileNumber}</Text>
            </View>

            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.cardTitle}>Profile Details</Title>
                    <View style={styles.row}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>{user?.email || 'Not set'}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Data Consent:</Text>
                        <Text style={styles.value}>{user?.dataConsent ? '✅ Yes' : '❌ No'}</Text>
                    </View>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.cardTitle}>About the App</Title>
                    <Text style={styles.aboutText}>
                        Sode Sri Vadiraja Matha App v1.0{'\n'}
                        Built for the Vaibhavotsava Hackathon{'\n'}
                        © 2026 Sode Sri Vadiraja Matha
                    </Text>
                </Card.Content>
            </Card>

            <Button
                mode="contained"
                onPress={handleLogout}
                style={styles.logoutBtn}
                buttonColor="#D32F2F"
            >
                Logout
            </Button>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    header: {
        backgroundColor: Colors.light.tint,
        padding: 30,
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    avatar: {
        backgroundColor: Colors.light.accent,
    },
    name: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
    },
    phone: {
        color: '#FFD54F',
        fontSize: 14,
        marginTop: 5,
    },
    card: {
        margin: 15,
        backgroundColor: 'white',
    },
    cardTitle: {
        fontSize: 16,
        color: Colors.light.tint,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
        color: '#555',
    },
    value: {
        color: '#333',
    },
    aboutText: {
        color: '#666',
        lineHeight: 22,
    },
    logoutBtn: {
        marginHorizontal: 15,
        marginTop: 10,
    },
});
