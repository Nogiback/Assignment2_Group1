// ProfileScreen.tsx
// This screen displays user statistics: number of jackets visited and number of favorites

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useJacketStore } from '../store/jacketStore';
import { COLORS } from '../theme/colors';

function ProfileScreen() {
  // Get visited count and favorites count from Zustand store
  const visitedCount = useJacketStore(state => state.visitedCount);
  const favoritesCount = useJacketStore(state => state.favorites.length);

  return (
    <SafeAreaView edges={['bottom']} style={styles.screen}>
      {/* Header section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Text style={styles.headerSubtitle}>Your jacket browsing activity</Text>
      </View>

      {/* Statistics cards showing visited count and favorites count */}
      <View style={styles.statsContainer}>
        {/* Card displaying number of jackets visited */}
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{visitedCount}</Text>
          <Text style={styles.statLabel}>Jackets Visited</Text>
          <Text style={styles.statDescription}>
            Number of jacket details you've viewed
          </Text>
        </View>

        {/* Card displaying number of favorites */}
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{favoritesCount}</Text>
          <Text style={styles.statLabel}>Favorites</Text>
          <Text style={styles.statDescription}>
            Jackets you've added to favorites
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Define styles for the ProfileScreen, including layout for the header and statistics cards.
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  headerTitle: {
    color: COLORS.blue,
    fontSize: 20,
    fontWeight: '600',
  },
  headerSubtitle: {
    marginTop: 8,
    color: COLORS.black,
    fontSize: 14,
  },
  statsContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  statCard: {
    borderRadius: 18,
    backgroundColor: '#F7F9FA',
    padding: 24,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.025,
    shadowRadius: 6,
    elevation: 1,
  },
  statValue: {
    color: COLORS.blue,
    fontSize: 48,
    fontWeight: '700',
  },
  statLabel: {
    marginTop: 8,
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '600',
  },
  statDescription: {
    marginTop: 6,
    color: COLORS.grey,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProfileScreen;
