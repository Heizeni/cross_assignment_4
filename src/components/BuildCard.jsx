// components/BuildCard.jsx

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function BuildCard({ build, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: build.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{build.title}</Text>

        <Text style={styles.meta}>
          {build.game} · {build.className} · by {build.author}
        </Text>

        <View style={styles.statsRow}>
          <Text style={styles.stat}>♡ {build.likes}</Text>
          <Text style={styles.stat}>◉ {build.views}</Text>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {build.description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#090A18',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#1C1F3A',
    marginBottom: 18,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#111322',
  },

  content: {
    padding: 16,
  },

  title: {
    color: '#E6E8FF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },

  meta: {
    color: '#777C9F',
    fontSize: 14,
    marginBottom: 12,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },

  stat: {
    color: '#8B91B8',
    fontSize: 14,
  },

  description: {
    color: '#A0A5C7',
    fontSize: 15,
    lineHeight: 22,
  },
});