import { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { fetchBuilds } from '../api/buildsApi';

const games = [
  {
    id: 1,
    title: 'Elden Ring',
    genre: 'RPG',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Diablo IV',
    genre: 'ARPG',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Warframe',
    genre: 'Shooter',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Path of Exile',
    genre: 'ARPG',
    image:
      'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Destiny 2',
    genre: 'FPS',
    image:
      'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Valorant',
    genre: 'FPS',
    image:
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=400&auto=format&fit=crop',
  },
];

export default function ExploreScreen({ navigation }) {
  const [builds, setBuilds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadBuilds = async () => {
      try {
        // Отримуємо список білдів з MockAPI через окремий файл api/buildsApi.js.
        const data = await fetchBuilds();

        // Зберігаємо отримані дані у стані компонента.
        setBuilds(data);
      } catch (error) {
        console.log('Builds loading error:', error);
        setErrorMessage('Unable to load builds. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadBuilds();
  }, []);

  const handleBuildPress = build => {
    // Передаємо весь об'єкт build на екран деталей.
    navigation.navigate('BuildDetails', { build });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Explore</Text>

      <Pressable onPress={() => {}} style={styles.searchBox}>
        <Text style={styles.searchText}>Search builds, guides, games</Text>
      </Pressable>

      <View style={styles.filters}>
        <Pressable onPress={() => {}}>
          <LinearGradient
            colors={['#FF4F93', '#FF8A1E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.activeFilter}
          >
            <Text style={styles.activeFilterText}>Trending</Text>
          </LinearGradient>
        </Pressable>

        <Pressable onPress={() => {}} style={styles.filter}>
          <Text style={styles.filterText}>New</Text>
        </Pressable>

        <Pressable onPress={() => {}} style={styles.filter}>
          <Text style={styles.filterText}>Top Rated</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Browse by Game</Text>

      <View style={styles.gameGrid}>
        {games.map(game => (
          <Pressable
            key={game.id}
            onPress={() => {}}
            style={({ pressed }) => [
              styles.gameCard,
              pressed && styles.pressedCard,
            ]}
          >
            <Image source={{ uri: game.image }} style={styles.gameImage} />

            <Text style={styles.gameTitle} numberOfLines={1}>
              {game.title}
            </Text>

            <Text style={styles.gameGenre}>{game.genre}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Builds</Text>

        <Pressable onPress={() => {}}>
          <Text style={styles.filterLink}>Filter</Text>
        </Pressable>
      </View>

      {isLoading && (
        <View style={styles.statusBox}>
          <ActivityIndicator size="large" color="#FF5FA2" />
          <Text style={styles.statusText}>Loading builds...</Text>
        </View>
      )}

      {errorMessage ? (
        <View style={styles.statusBox}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : null}

      {!isLoading &&
        !errorMessage &&
        builds.map((build, index) => (
          <Pressable
            key={build.id ? build.id.toString() : `build-${index}`}
            onPress={() => handleBuildPress(build)}
            style={({ pressed }) => [
              styles.buildCard,
              pressed && styles.pressedCard,
            ]}
          >
            <Image source={{ uri: build.image }} style={styles.buildImage} />

            <View style={styles.buildContent}>
              <Text style={styles.buildTitle}>{build.title}</Text>

              <Text style={styles.buildSubtitle}>
                {build.game} · {build.author}
              </Text>

              <Text style={styles.buildStats}>
                ♡ {build.likes}   ◉ {build.views}
              </Text>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050713',
  },
  content: {
    paddingTop: 44,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  title: {
    color: '#F4F4FF',
    fontSize: 34,
    fontWeight: '600',
    marginBottom: 28,
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#080A18',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 24,
  },
  searchText: {
    color: '#7B819E',
    fontSize: 16,
  },
  filters: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 30,
  },
  activeFilter: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeFilterText: {
    color: '#080A18',
    fontWeight: '700',
    fontSize: 15,
  },
  filter: {
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#080A18',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  filterText: {
    color: '#7B819E',
    fontWeight: '600',
    fontSize: 15,
  },
  sectionTitle: {
    color: '#F4F4FF',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 18,
  },
  gameGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 34,
  },
  gameCard: {
    width: '31%',
    minHeight: 148,
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#090B1D',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  pressedCard: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
  gameImage: {
    width: 56,
    height: 56,
    borderRadius: 16,
    marginBottom: 12,
  },
  gameTitle: {
    color: '#F4F4FF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  gameGenre: {
    color: '#7B819E',
    fontSize: 13,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterLink: {
    color: '#FF5FA2',
    fontSize: 16,
    marginBottom: 18,
  },
  buildCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#090B1D',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },
  buildImage: {
    width: 76,
    height: 76,
    borderRadius: 14,
  },
  buildContent: {
    flex: 1,
  },
  buildTitle: {
    color: '#F4F4FF',
    fontSize: 19,
    marginBottom: 8,
  },
  buildSubtitle: {
    color: '#7B819E',
    fontSize: 15,
    marginBottom: 8,
  },
  buildStats: {
    color: '#7B819E',
    fontSize: 14,
  },
  statusBox: {
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#090B1D',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    marginBottom: 14,
  },
  statusText: {
    color: '#7B819E',
    fontSize: 15,
    marginTop: 10,
  },
  errorText: {
    color: '#F4F4FF',
    fontSize: 15,
    textAlign: 'center',
  },
});