import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Image } from 'react-native';
import { Text, Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper';
import api from '../../services/api';
import Colors from '../../constants/Colors';

interface Guru {
  id: number;
  name: string;
  biography: string;
  aaradhane?: string;
}

export default function ParamparaScreen() {
  const [gurus, setGurus] = useState<Guru[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchParampara();
  }, []);

  const fetchParampara = async () => {
    try {
      const res = await api.get('/content/parampara');
      setGurus(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderGuruTile = ({ item }: { item: Guru }) => (
    <Card style={styles.card} onPress={() => { }}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.avatarText}>{item.name[0]}</Text>
        </View>
        <View style={styles.textContainer}>
          <Title style={styles.guruName}>{item.name}</Title>
          <Text style={styles.details}>Aaradhane: {item.aaradhane || 'N/A'}</Text>
          <Text style={styles.details} numberOfLines={2}>{item.biography}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={Colors.light.tint} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={gurus}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGuruTile}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Text style={styles.header}>Succession of Peetadhipathis</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 15,
    backgroundColor: 'white',
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  guruName: {
    fontSize: 16,
    color: Colors.light.tint,
    lineHeight: 20,
  },
  details: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});
