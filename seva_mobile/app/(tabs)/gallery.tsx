import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import axios from 'axios';

const { width } = Dimensions.get('window');

interface Media {
    id: number;
    title: string;
    url: string;
    type: string;
}

export default function GalleryScreen() {
    const [media, setMedia] = useState<Media[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/gallery')
            .then(res => setMedia(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gallery</Text>
            <FlatList
                data={media}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.url }} style={styles.image} />
                        <Text style={styles.imageTitle} numberOfLines={1}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', padding: 8 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#c2410c', margin: 8 },
    imageContainer: { width: (width / 2) - 16, margin: 8, borderRadius: 8, overflow: 'hidden' },
    image: { width: '100%', height: 150, backgroundColor: '#eee' },
    imageTitle: { fontSize: 12, color: '#333', marginTop: 4, fontWeight: 'medium' }
});
