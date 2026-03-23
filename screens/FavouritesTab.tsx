import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useJacketStore } from '../store/jacketStore';

export const FavoritesTab = () => {
  const favorites = useJacketStore(state => state.favourites);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.JacketId.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.JacketName}</Text>
            <Text>{item.Brand}</Text>
            <Text>${item.cost}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No favorites yet!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginBottom: 8,
    borderRadius: 8,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  empty: { textAlign: 'center', marginTop: 50, fontSize: 16, color: '#999' },
});
