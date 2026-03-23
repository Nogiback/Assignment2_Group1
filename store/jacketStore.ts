// jacketStore.ts
// This file defines a Zustand store for managing the state of jackets in the application, including favorites and visit count.

import { create } from 'zustand';
import { Jacket } from '../data/Jackets';

// Define the structure of the jacket store, including state and actions for managing favorites and visit count.
interface JacketStore {
  favorites: Jacket[];
  visitedCount: number;
  addFavorite: (jacket: Jacket) => void;
  removeFavorite: (jacketId: number) => void;
  toggleFavorite: (jacket: Jacket) => void;
  incrementVisited: () => void;
  isFavorite: (jacketId: number) => boolean;
}

export const useJacketStore = create<JacketStore>((set, get) => ({
  favorites: [],
  visitedCount: 0,

  // Action to add a jacket to favorites, with validation to prevent duplicates
  addFavorite: jacket =>
    set(state => {
      // Validation to prevent duplicate favorites
      if (state.favorites.some(j => j.JacketId === jacket.JacketId)) {
        return state;
      }
      return { favorites: [...state.favorites, jacket] };
    }),

  // Action to remove a jacket from favorites by its ID
  removeFavorite: jacketId =>
    set(state => ({
      favorites: state.favorites.filter(j => j.JacketId !== jacketId),
    })),

  // Toggle favorite: add if not present, remove if already favorited
  toggleFavorite: jacket => {
    const state = get();
    if (state.isFavorite(jacket.JacketId)) {
      state.removeFavorite(jacket.JacketId);
    } else {
      state.addFavorite(jacket);
    }
  },

  // Action to increment the visited count when a jacket is viewed
  incrementVisited: () =>
    set(state => ({ visitedCount: state.visitedCount + 1 })),

  // Helper function to check if a jacket is currently in favorites
  isFavorite: jacketId => get().favorites.some(j => j.JacketId === jacketId),
}));
