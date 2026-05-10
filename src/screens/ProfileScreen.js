import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const achievements = [
  {
    id: 1,
    title: 'First Build',
    description: 'Create your first build',
    progress: '100%',
  },
  {
    id: 2,
    title: 'Trending Creator',
    description: 'Reach 100 likes',
    progress: '80%',
  },
  {
    id: 3,
    title: 'Guide Master',
    description: 'Write 5 guides',
    progress: '45%',
  },
  {
    id: 4,
    title: 'Community Star',
    description: 'Get featured on Explore',
    progress: '10%',
  },
];

const builds = [
  {
    id: 1,
    title: 'Moonveil Katana',
    subtitle: 'Elden Ring · 2,340 likes',
    image:
      'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Whirlwind Barb',
    subtitle: 'Diablo IV · 1,890 likes',
    image:
      'https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=400&auto=format&fit=crop',
  },
];

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Profile</Text>

        <Pressable
          onPress={() => navigation.navigate('Settings')}
          style={({ pressed }) => [
            styles.settingsButton,
            pressed && styles.pressedButton,
          ]}
        >
          <Text style={styles.settingsIcon}>⚙</Text>
        </Pressable>
      </View>

      <View style={styles.profileCard}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=400&auto=format&fit=crop',
          }}
          style={styles.avatar}
        />

        <Text style={styles.username}>ShadowHunter_42</Text>
        <Text style={styles.level}>Level 24</Text>
        <Text style={styles.xp}>XP: 7,200 / 10,000</Text>

        <View style={styles.progressTrack}>
          <LinearGradient
            colors={['#FF4F93', '#FF8A1E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.progressFill}
          />
        </View>

        <View style={styles.statsRow}>
          <View>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Builds</Text>
          </View>

          <View>
            <Text style={styles.statNumber}>4,580</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>

          <View>
            <Text style={styles.statNumber}>890</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
        </View>

        <Pressable onPress={() => {}}>
          <LinearGradient
            colors={['#FF4F93', '#FF8A1E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.profileButton}
          >
            <Text style={styles.profileButtonText}>Edit profile</Text>
          </LinearGradient>
        </Pressable>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Achievements</Text>

        <Pressable onPress={() => {}}>
          <Text style={styles.link}>View all</Text>
        </Pressable>
      </View>

      {achievements.map(item => (
        <Pressable
          key={item.id}
          onPress={() => {}}
          style={({ pressed }) => [styles.card, pressed && styles.pressedCard]}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.description}</Text>

          <View style={styles.smallProgressTrack}>
            <LinearGradient
              colors={['#FF4F93', '#FF8A1E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.smallProgressFill, { width: item.progress }]}
            />
          </View>
        </Pressable>
      ))}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Builds</Text>

        <Pressable onPress={() => {}}>
          <Text style={styles.link}>See all</Text>
        </Pressable>
      </View>

      {builds.map(build => (
        <Pressable
          key={build.id}
          onPress={() => {}}
          style={({ pressed }) => [
            styles.buildCard,
            pressed && styles.pressedCard,
          ]}
        >
          <Image source={{ uri: build.image }} style={styles.buildImage} />

          <View style={styles.buildContent}>
            <Text style={styles.buildTitle}>{build.title}</Text>
            <Text style={styles.buildSubtitle}>{build.subtitle}</Text>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#F4F4FF',
    fontSize: 34,
    fontWeight: '600',
    marginBottom: 28,
  },
  settingsButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#090B1D',
    borderWidth: 1,
    borderColor: '#171A2E',
    marginBottom: 28,
  },
  pressedButton: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  settingsIcon: {
    color: '#F4F4FF',
    fontSize: 20,
  },
  profileCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#090B1D',
    borderRadius: 24,
    padding: 28,
    marginBottom: 34,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 20,
  },
  username: {
    color: '#F4F4FF',
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 14,
  },
  level: {
    color: '#7B819E',
    fontSize: 18,
    marginBottom: 14,
  },
  xp: {
    color: '#7B819E',
    fontSize: 16,
    marginBottom: 12,
  },
  progressTrack: {
    width: 180,
    height: 10,
    backgroundColor: '#060817',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 28,
  },
  progressFill: {
    width: '72%',
    height: '100%',
    borderRadius: 8,
  },
  statsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  statNumber: {
    color: '#FF7A45',
    fontSize: 24,
    textAlign: 'center',
  },
  statLabel: {
    color: '#7B819E',
    marginTop: 8,
    textAlign: 'center',
  },
  profileButton: {
    paddingVertical: 13,
    paddingHorizontal: 36,
    borderRadius: 22,
  },
  profileButtonText: {
    color: '#080A18',
    fontWeight: '700',
    fontSize: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#F4F4FF',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 18,
  },
  link: {
    color: '#FF5FA2',
    fontSize: 16,
    marginBottom: 18,
  },
  card: {
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#090B1D',
    borderRadius: 18,
    padding: 22,
    marginBottom: 16,
  },
  pressedCard: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
  cardTitle: {
    color: '#F4F4FF',
    fontSize: 21,
    marginBottom: 12,
  },
  cardSubtitle: {
    color: '#7B819E',
    fontSize: 16,
    marginBottom: 18,
  },
  smallProgressTrack: {
    height: 9,
    backgroundColor: '#060817',
    borderRadius: 8,
    overflow: 'hidden',
  },
  smallProgressFill: {
    height: '100%',
    borderRadius: 8,
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
  },
});