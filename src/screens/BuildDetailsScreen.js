import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const splitTextToArray = value => {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return value.split(',').map(item => item.trim());
};

export default function BuildDetailsScreen({ route, navigation }) {
  const { build } = route.params;

  const tags = splitTextToArray(build.tags);
  const skills = splitTextToArray(build.skills);
  const items = splitTextToArray(build.items);
  const talismans = splitTextToArray(build.talismans);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Text style={styles.iconText}>‹</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Build Details</Text>

        <View style={styles.iconButton}>
          <Text style={styles.shareText}>⌯</Text>
        </View>
      </View>

      <View style={styles.heroCard}>
        <Image source={{ uri: build.image }} style={styles.heroImage} />

        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>{build.title}</Text>
        </View>
      </View>

      <Text style={styles.title}>{build.title}</Text>

      <Text style={styles.meta}>
        {build.game} · {build.className} · by {build.author}
      </Text>

      <View style={styles.statsRow}>
        <Text style={styles.stat}>♡ {build.likes}</Text>
        <Text style={styles.stat}>◉ {build.views}</Text>
      </View>

      <View style={styles.tagsRow}>
        {tags.map((tag, index) => (
          <View key={`${tag}-${index}`} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.description}>{build.description}</Text>
      </View>

      <BuildSection title="Skills" items={skills} icon="ϟ" />
      <BuildSection title="Items" items={items} icon="†" />
      <BuildSection title="Mods / Talismans" items={talismans} icon="▱" />

      <View style={styles.buttonsRow}>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Save Build</Text>
        </Pressable>

        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Like ♥</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

function BuildSection({ title, items = [], icon }) {
  const displayedItems = Array.isArray(items) ? [...items] : [];

  while (displayedItems.length < 4) {
    displayedItems.push('Empty');
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <View style={styles.grid}>
        {displayedItems.slice(0, 4).map((item, index) => {
          const isEmpty = item === 'Empty';

          return (
            <View
              key={`${item}-${index}`}
              style={[styles.slotCard, isEmpty && styles.emptySlotCard]}
            >
              <Text style={[styles.slotIcon, isEmpty && styles.emptyText]}>
                {icon}
              </Text>

              <Text style={[styles.slotText, isEmpty && styles.emptyText]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050713',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
  iconButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#F4F4FF',
    fontSize: 42,
    lineHeight: 42,
  },
  shareText: {
    color: '#7B819E',
    fontSize: 28,
  },
  headerTitle: {
    flex: 1,
    color: '#F4F4FF',
    fontSize: 28,
    fontWeight: '600',
    marginLeft: 8,
  },
  heroCard: {
    height: 180,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#171A2E',
    marginBottom: 28,
    backgroundColor: '#090B1D',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  heroTitle: {
    color: '#F4F4FF',
    fontSize: 20,
  },
  title: {
    color: '#F4F4FF',
    fontSize: 34,
    fontWeight: '600',
    marginBottom: 12,
  },
  meta: {
    color: '#7B819E',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 18,
    marginBottom: 24,
  },
  stat: {
    color: '#7B819E',
    fontSize: 18,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 28,
  },
  tag: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#080A18',
  },
  tagText: {
    color: '#7B819E',
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionBox: {
    backgroundColor: '#090B1D',
    borderWidth: 1,
    borderColor: '#171A2E',
    borderRadius: 22,
    padding: 20,
    marginBottom: 30,
  },
  description: {
    color: '#9CA1C3',
    fontSize: 18,
    lineHeight: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#F4F4FF',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 18,
  },
  grid: {
    flexDirection: 'row',
    gap: 14,
  },
  slotCard: {
    flex: 1,
    minHeight: 112,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#7A1357',
    backgroundColor: '#140616',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  emptySlotCard: {
    borderStyle: 'dashed',
    borderColor: '#20233E',
    backgroundColor: '#050616',
  },
  slotIcon: {
    color: '#F4F4FF',
    fontSize: 28,
    marginBottom: 10,
  },
  slotText: {
    color: '#F4F4FF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '600',
  },
  emptyText: {
    color: '#5E6389',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 18,
  },
  secondaryButton: {
    flex: 1,
    height: 62,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F4F4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#F4F4FF',
    fontSize: 20,
    fontWeight: '600',
  },
  primaryButton: {
    flex: 1,
    height: 62,
    borderRadius: 20,
    backgroundColor: '#F4F4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#050713',
    fontSize: 20,
    fontWeight: '700',
  },
});