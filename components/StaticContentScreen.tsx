import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../theme/colors';

type StaticContentScreenProps = {
  title: string;
  description: string;
  highlights: string[];
};

function StaticContentScreen({
  title,
  description,
  highlights,
}: StaticContentScreenProps) {
  return (
    <SafeAreaView edges={['bottom']} style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        {highlights.map(item => (
          <View key={item} style={styles.listItem}>
            <View style={styles.bullet} />
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    color: COLORS.blue,
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    marginTop: 12,
    color: COLORS.black,
    fontSize: 15,
    lineHeight: 23,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 16,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 6,
    backgroundColor: COLORS.blue,
  },
  listText: {
    flex: 1,
    color: COLORS.black,
    fontSize: 15,
    lineHeight: 22,
  },
});

export default StaticContentScreen;
