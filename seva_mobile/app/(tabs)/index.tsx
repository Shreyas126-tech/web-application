import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import { Text, Card, Title, Paragraph, useTheme, Button } from 'react-native-paper';
import { useAuthStore } from '../../store/useAuthStore';
import api from '../../services/api';
import Colors from '../../constants/Colors';
import { ExternalLink } from '../../components/ExternalLink';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  flashUpdate: boolean;
}

export default function HomeScreen() {
  const { user } = useAuthStore();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [flash, setFlash] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const [newsRes, flashRes] = await Promise.all([
        api.get('/content/news'),
        api.get('/content/flash-updates')
      ]);
      setNews(newsRes.data);
      setFlash(flashRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderTimings = () => (
    <Card style={styles.timingsCard}>
      <Card.Content>
        <Title style={styles.cardTitle}>Darshana & Prasada Timings</Title>
        <View style={styles.timingRow}>
          <Text style={styles.timingLabel}>Darshana:</Text>
          <Text style={styles.timingValue}>5:00 AM - 8:30 AM | 5:00 PM - 7:30 PM</Text>
        </View>
        <View style={styles.timingRow}>
          <Text style={styles.timingLabel}>Prasada:</Text>
          <Text style={styles.timingValue}>Noon 11:30 AM | Evening 7:30 PM</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.welcome}>Welcome, {user?.fullName || 'Devotee'}</Text>
      </View>

      {/* Flash Updates Carousel Placeholder */}
      <View style={styles.flashContainer}>
        <FlatList
          data={flash}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.flashItem}>
              <Text style={styles.flashText}>⚡ {item.title}</Text>
            </View>
          )}
        />
      </View>

      {renderTimings()}

      <Title style={styles.sectionTitle}>Latest News</Title>
      {news.map((item) => (
        <Card key={item.id} style={styles.newsCard}>
          <Card.Content>
            <Title style={styles.newsTitle}>{item.title}</Title>
            <Paragraph numberOfLines={2}>{item.content}</Paragraph>
          </Card.Content>
        </Card>
      ))}

      <View style={styles.socialHeader}>
        <Title style={styles.sectionTitle}>Follow Us</Title>
        <View style={styles.socialLinks}>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/sodematha')}>
            <Text style={styles.link}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com/@sodematha')}>
            <Text style={styles.link}>YouTube</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/sodematha')}>
            <Text style={styles.link}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

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
    padding: 20,
    backgroundColor: Colors.light.tint,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    color: 'white',
    fontWeight: 'bold',
  },
  flashContainer: {
    marginVertical: 15,
    backgroundColor: Colors.light.accent,
    paddingVertical: 10,
  },
  flashItem: {
    width: 300,
    paddingHorizontal: 20,
  },
  flashText: {
    color: 'white',
    fontWeight: 'bold',
  },
  timingsCard: {
    margin: 15,
    backgroundColor: 'white',
    elevation: 4,
  },
  cardTitle: {
    color: Colors.light.tint,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
    marginBottom: 10,
  },
  timingRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  timingLabel: {
    fontWeight: 'bold',
    width: 80,
    color: '#3E2723',
  },
  timingValue: {
    flex: 1,
    color: '#5D4037',
  },
  sectionTitle: {
    marginHorizontal: 15,
    marginTop: 10,
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  newsCard: {
    marginHorizontal: 15,
    marginVertical: 8,
    backgroundColor: 'white',
  },
  newsTitle: {
    fontSize: 16,
    color: '#3E2723',
  },
  socialHeader: {
    marginTop: 20,
    padding: 15,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  link: {
    color: Colors.light.tint,
    textDecorationLine: 'underline',
  }
});
