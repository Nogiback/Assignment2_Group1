import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useJacketStore } from '../store/jacketStore';

export const ProfileTab = () => {
  const visitedCount = useJacketStore(state => state.visitedCount);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Jackets Visited:</Text>
      <Text style={styles.count}>{visitedCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 18, marginBottom: 8 },
  count: { fontSize: 48, fontWeight: 'bold', color: '#007AFF' },
});
