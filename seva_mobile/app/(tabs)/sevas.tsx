import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import { Text, Card, Title, Button, Paragraph, TextInput } from 'react-native-paper';
import api from '../../services/api';
import Colors from '../../constants/Colors';
import { useAuthStore } from '../../store/useAuthStore';

interface Seva {
    id: number;
    name: string;
    description: string;
    amount: number;
}

export default function SevasScreen() {
    const { user } = useAuthStore();
    const [sevas, setSevas] = useState<Seva[]>([]);
    const [selectedSeva, setSelectedSeva] = useState<Seva | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSevas();
    }, []);

    const fetchSevas = async () => {
        try {
            const res = await api.get('/content/sevas');
            setSevas(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleBookSeva = (seva: Seva) => {
        Alert.alert(
            "Confirm Booking",
            `Would you like to book ${seva.name} for ₹${seva.amount}?`,
            [
                { text: "Cancel", style: "cancel" },
                { text: "Proceed to Payment", onPress: () => Alert.alert("Payment Simulated", "This would navigate to Razorpay/UPI in production.") }
            ]
        );
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Title style={styles.header}>Book Sevas in Sode</Title>
            <Paragraph style={styles.subtitle}>Choose from the list of available sevas</Paragraph>

            {sevas.map((seva) => (
                <Card key={seva.id} style={styles.card}>
                    <Card.Content>
                        <Title style={styles.sevaName}>{seva.name}</Title>
                        <Paragraph>{seva.description}</Paragraph>
                        <Text style={styles.amount}>₹ {seva.amount}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            mode="contained"
                            buttonColor={Colors.light.tint}
                            onPress={() => handleBookSeva(seva)}
                        >
                            Book Now
                        </Button>
                    </Card.Actions>
                </Card>
            ))}

            <View style={styles.bookingBox}>
                <Title style={styles.bookingTitle}>Room Booking</Title>
                <Paragraph>Request accommodation in the Matha guest rooms.</Paragraph>
                <TextInput
                    label="Booking Date"
                    mode="outlined"
                    placeholder="YYYY-MM-DD"
                    style={styles.input}
                />
                <Button mode="outlined" style={styles.bookButton} textColor={Colors.light.tint}>
                    Request via Email
                </Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    content: {
        padding: 15,
    },
    header: {
        color: Colors.light.tint,
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: 20,
        color: '#666',
    },
    card: {
        marginBottom: 15,
        backgroundColor: 'white',
    },
    sevaName: {
        color: Colors.light.tint,
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        color: Colors.light.accent,
    },
    bookingBox: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#FFFDE7',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF176',
    },
    bookingTitle: {
        color: '#FBC02D',
    },
    input: {
        marginVertical: 10,
        backgroundColor: 'white',
    },
    bookButton: {
        marginTop: 10,
        borderColor: Colors.light.tint,
    }
});
