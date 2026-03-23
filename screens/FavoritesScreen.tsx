// FavoritesScreen.tsx
// This screen displays all jackets that have been added to favorites using Zustand store

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useJacketStore } from '../store/jacketStore';
import { COLORS } from '../theme/colors';

function FavoritesScreen() {
  // Get the list of favorite jackets from Zustand store
  const favorites = useJacketStore(state => state.favorites);

  return (
    <SafeAreaView edges={['bottom']} style={styles.screen}>
      {/* Header section showing title and count */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Favorites</Text>
        <Text style={styles.headerSubtitle}>
          {favorites.length} jacket{favorites.length !== 1 ? 's' : ''} saved
        </Text>
      </View>

      {/* FlatList to display all favorited jackets */}
      <FlatList
        data={favorites}
        keyExtractor={item => item.JacketId.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardMeta}>Jacket ID: {item.JacketId}</Text>
            <Text style={styles.cardTitle}>{item.JacketName}</Text>
            <Text style={styles.cardSubtitle}>Brand: {item.Brand}</Text>
            <Text style={styles.cardPrice}>${item.cost}</Text>
            <View style={styles.cardDetails}>
              <Text style={styles.cardDetailText}>Type: {item.JacketType}</Text>
              <Text style={styles.cardDetailText}>Made in: {item.MadeIn}</Text>
            </View>
          </View>
        )}
        // Show empty state when no favorites exist
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptyText}>
              Go to Jacket List and tap "Add to Favorites" on jackets you like!
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

// Define styles for the FavoritesScreen, including layout for the header, cards, and empty state.
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
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
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 28,
    gap: 14,
  },
  card: {
    borderRadius: 18,
    backgroundColor: '#F7F9FA',
    padding: 18,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.025,
    shadowRadius: 6,
    elevation: 1,
  },
  cardMeta: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  cardTitle: {
    marginTop: 8,
    color: COLORS.blue,
    fontSize: 20,
    fontWeight: '600',
  },
  cardSubtitle: {
    marginTop: 6,
    color: COLORS.black,
    fontSize: 15,
  },
  cardPrice: {
    marginTop: 8,
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '600',
  },
  cardDetails: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.grey,
    gap: 4,
  },
  cardDetailText: {
    color: COLORS.black,
    fontSize: 13,
  },
  emptyState: {
    marginTop: 80,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  emptyTitle: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyText: {
    marginTop: 12,
    color: COLORS.grey,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default FavoritesScreen;
