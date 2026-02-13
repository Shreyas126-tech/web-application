import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

interface Event {
    id: number;
    title: string;
    description: string;
    eventDate: string;
    type: string;
    location?: string;
}

export default function EventsScreen() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/api/events') // Use correct IP for real device
            .then(res => setEvents(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <ActivityIndicator style={styles.loader} />;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event Calendar</Text>
            <FlatList
                data={events}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.type}>{item.type}</Text>
                            <Text style={styles.date}>{new Date(item.eventDate).toLocaleDateString()}</Text>
                        </View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#c2410c', marginBottom: 16 },
    loader: { flex: 1, justifyContent: 'center' },
    card: { backgroundColor: 'white', padding: 16, borderRadius: 12, marginBottom: 12, borderLeftWidth: 4, borderLeftColor: '#c2410c' },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    type: { backgroundColor: '#ffedd5', color: '#c2410c', fontSize: 10, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, overflow: 'hidden' },
    date: { color: '#666', fontSize: 12 },
    cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    desc: { color: '#666', marginTop: 4 }
});
