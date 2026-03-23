import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FavoriteNavIcon } from '../components/NavigationIcons';
import { Jacket, Jackets } from '../data/Jackets';
import { COLORS } from '../theme/colors';

export type JacketListScreenProps = {
  favoriteIds: number[];
  onToggleFavorite: (jacketId: number) => void;
};

type DetailRowProps = {
  label: string;
  value: string;
};

function JacketListScreen({
  favoriteIds,
  onToggleFavorite,
}: JacketListScreenProps) {
  const [selectedJacket, setSelectedJacket] = useState<Jacket | null>(null);

  return (
    <SafeAreaView edges={['bottom']} style={styles.screen}>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Winter Jacket Collection</Text>
        <View style={styles.summaryBadge}>
          <FavoriteNavIcon color={COLORS.black} size={16} />
          <Text style={styles.summaryBadgeText}>
            Favorites selected: {favoriteIds.length}
          </Text>
        </View>
      </View>

      <FlatList
        data={Jackets}
        keyExtractor={item => item.JacketId.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isFavorite = favoriteIds.includes(item.JacketId);

          return (
            <View style={styles.card}>
              <Pressable
                onPress={() => setSelectedJacket(item)}
                style={({ pressed }) => [
                  styles.cardPressArea,
                  pressed && styles.cardPressed,
                ]}>
                <Text style={styles.cardMeta}>Jacket ID: {item.JacketId}</Text>
                <Text style={styles.cardTitle}>{item.JacketName}</Text>
                <Text style={styles.cardSubtitle}>Brand: {item.Brand}</Text>
              </Pressable>

              <Pressable
                onPress={() => onToggleFavorite(item.JacketId)}
                style={[
                  styles.favoriteButton,
                  isFavorite && styles.favoriteButtonActive,
                ]}>
                <Text
                  style={[
                    styles.favoriteButtonText,
                    isFavorite && styles.favoriteButtonTextActive,
                  ]}>
                  {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </Text>
              </Pressable>
            </View>
          );
        }}
      />

      <Modal
        animationType="slide"
        transparent
        visible={selectedJacket !== null}
        onRequestClose={() => setSelectedJacket(null)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Jacket Details</Text>

            {selectedJacket ? (
              <View style={styles.modalBody}>
                <DetailRow
                  label="JacketId"
                  value={selectedJacket.JacketId.toString()}
                />
                <DetailRow
                  label="JacketName"
                  value={selectedJacket.JacketName}
                />
                <DetailRow label="Brand" value={selectedJacket.Brand} />
                <DetailRow label="cost" value={`$${selectedJacket.cost}`} />
                <DetailRow
                  label="JacketType"
                  value={selectedJacket.JacketType}
                />
                <DetailRow label="MadeIn" value={selectedJacket.MadeIn} />
              </View>
            ) : null}

            <Pressable
              onPress={() => setSelectedJacket(null)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  summaryCard: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  summaryTitle: {
    color: COLORS.blue,
    fontSize: 20,
    fontWeight: '600',
  },
  summaryText: {
    marginTop: 8,
    color: COLORS.black,
    fontSize: 14,
    lineHeight: 21,
  },
  summaryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
  },
  summaryBadgeText: {
    color: COLORS.black,
    fontSize: 13,
    fontWeight: '500',
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
    paddingHorizontal: 16,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.025,
    shadowRadius: 6,
    elevation: 1,
  },
  cardPressArea: {
    paddingVertical: 18,
  },
  cardPressed: {
    backgroundColor: COLORS.white,
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
  favoriteButton: {
    marginBottom: 18,
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: COLORS.blue,
    borderWidth: 0,
  },
  favoriteButtonText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '500',
  },
  favoriteButtonTextActive: {
    color: COLORS.white,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(114, 119, 122, 0.2)',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    borderRadius: 20,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  modalTitle: {
    color: COLORS.blue,
    fontSize: 22,
    fontWeight: '600',
  },
  modalBody: {
    marginTop: 18,
    gap: 12,
  },
  detailRow: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  detailLabel: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  detailValue: {
    marginTop: 4,
    color: COLORS.blue,
    fontSize: 16,
    fontWeight: '500',
  },
  closeButton: {
    marginTop: 20,
    minWidth: 140,
    borderRadius: 999,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
  },
  closeButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default JacketListScreen;
