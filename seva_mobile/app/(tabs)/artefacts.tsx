import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { FileText, Music } from 'lucide-react-native';

interface Artefact {
    id: number;
    title: string;
    category: string;
    fileUrl: string;
    fileType: string;
}

export default function ArtefactsScreen() {
    const [artefacts, setArtefacts] = useState<Artefact[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/artefacts')
            .then(res => setArtefacts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Publications</Text>
            <FlatList
                data={artefacts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.iconContainer}>
                            {item.fileType === 'PDF' ? <FileText color="#c2410c" size={24} /> : <Music color="#c2410c" size={24} />}
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.category}>{item.category}</Text>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#c2410c', marginBottom: 16 },
    card: { backgroundColor: 'white', padding: 16, borderRadius: 12, marginBottom: 12, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
    iconContainer: { backgroundColor: '#ffedd5', padding: 10, borderRadius: 10, marginRight: 16 },
    info: { flex: 1 },
    category: { fontSize: 10, color: '#c2410c', textTransform: 'uppercase', fontWeight: 'bold' },
    cardTitle: { fontSize: 16, color: '#333', fontWeight: '600' }
});
