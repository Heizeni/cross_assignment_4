import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.pressedButton,
          ]}
        >
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Text style={styles.title}>Settings</Text>
      </View>

      <Text style={styles.sectionTitle}>Account</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Username</Text>

          <View style={styles.input}>
            <Text style={styles.inputText}>ShadowHunter_42</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Appearance</Text>

      <View style={styles.card}>
        <Text style={styles.mutedLabel}>Accent color</Text>

        <View style={styles.colorGrid}>
          <Pressable onPress={() => {}} style={styles.colorButton}>
            <View style={[styles.colorDot, styles.cyberCyan]} />
            <Text style={styles.colorText}>Cyber Cyan</Text>
          </Pressable>

          <Pressable onPress={() => {}} style={styles.colorButton}>
            <View style={[styles.colorDot, styles.nebulaViolet]} />
            <Text style={styles.colorText}>Nebula Violet</Text>
          </Pressable>

          <Pressable onPress={() => {}} style={[styles.colorButton, styles.selectedColor]}>
            <LinearGradient
              colors={['#FF4F93', '#FF8A1E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.colorDot}
            />
            <Text style={styles.colorText}>Plasma Fire</Text>
            <Text style={styles.check}>✓</Text>
          </Pressable>

          <Pressable onPress={() => {}} style={styles.colorButton}>
            <View style={[styles.colorDot, styles.toxicLime]} />
            <Text style={styles.colorText}>Toxic Lime</Text>
          </Pressable>
        </View>

        <View style={styles.divider} />

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingTitle}>Compact mode</Text>
            <Text style={styles.settingSubtitle}>Tighter spacing on lists</Text>
          </View>

          <Pressable onPress={() => {}} style={styles.switchOff}>
            <View style={styles.switchCircle} />
          </Pressable>
        </View>

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingTitle}>Reduce motion</Text>
            <Text style={styles.settingSubtitle}>
              Disable transitions and animations
            </Text>
          </View>

          <Pressable onPress={() => {}} style={styles.switchOff}>
            <View style={styles.switchCircle} />
          </Pressable>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Notifications</Text>

      <View style={styles.card}>
        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingTitle}>Push notifications</Text>
            <Text style={styles.settingSubtitle}>Likes, comments, and updates</Text>
          </View>

          <Pressable onPress={() => {}}>
            <LinearGradient
              colors={['#FF4F93', '#FF8A1E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.switchOn}
            >
              <View style={styles.switchCircleOn} />
            </LinearGradient>
          </Pressable>
        </View>

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingTitle}>Sound effects</Text>
            <Text style={styles.settingSubtitle}>Play a tone with notifications</Text>
          </View>

          <Pressable onPress={() => {}} style={styles.switchOff}>
            <View style={styles.switchCircle} />
          </Pressable>
        </View>

        <View style={styles.settingRow}>
          <View>
            <Text style={styles.settingTitle}>Test notification</Text>
          </View>

          <Pressable onPress={() => {}}>
            <LinearGradient
              colors={['#FF4F93', '#FF8A1E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.sendButton}
            >
              <Text style={styles.sendButtonText}>Send</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>

      <Pressable onPress={() => {}} style={styles.resetButton}>
        <Text style={styles.resetText}>↻ Reset to defaults</Text>
      </Pressable>
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
    paddingHorizontal: 18,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#090B1D',
    borderWidth: 1,
    borderColor: '#171A2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  pressedButton: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  backIcon: {
    color: '#F4F4FF',
    fontSize: 24,
    lineHeight: 26,
  },
  title: {
    color: '#F4F4FF',
    fontSize: 28,
    fontWeight: '600',
  },
  sectionTitle: {
    color: '#F4F4FF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 14,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#090B1D',
    borderWidth: 1,
    borderColor: '#171A2E',
    borderRadius: 18,
    padding: 16,
    marginBottom: 22,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#F4F4FF',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#171A2E',
    backgroundColor: '#070918',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    minWidth: 175,
  },
  inputText: {
    color: '#F4F4FF',
    fontSize: 14,
  },
  mutedLabel: {
    color: '#7B819E',
    fontSize: 14,
    marginBottom: 16,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  colorButton: {
    width: '48%',
    minHeight: 46,
    borderWidth: 1,
    borderColor: '#171A2E',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  selectedColor: {
    borderColor: '#FF4F93',
  },
  colorDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
  },
  cyberCyan: {
    backgroundColor: '#50B8FF',
  },
  nebulaViolet: {
    backgroundColor: '#D45DD6',
  },
  toxicLime: {
    backgroundColor: '#55E06B',
  },
  colorText: {
    color: '#F4F4FF',
    fontSize: 13,
    flex: 1,
  },
  check: {
    color: '#FF5FA2',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#171A2E',
    marginVertical: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 58,
  },
  settingTitle: {
    color: '#F4F4FF',
    fontSize: 16,
    marginBottom: 4,
  },
  settingSubtitle: {
    color: '#7B819E',
    fontSize: 13,
  },
  switchOff: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1A1F4A',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F4F4FF',
  },
  switchOn: {
    width: 50,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 4,
  },
  switchCircleOn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#F4F4FF',
  },
  sendButton: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  sendButtonText: {
    color: '#080A18',
    fontWeight: '700',
    fontSize: 13,
  },
  resetButton: {
    borderWidth: 1,
    borderColor: '#171A2E',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
  },
  resetText: {
    color: '#7B819E',
    fontSize: 15,
  },
});