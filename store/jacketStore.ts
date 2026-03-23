import { create } from 'zustand';
import { Jacket } from '../data/Jackets';

interface JacketStore {
  favourites: Jacket[];
  visitedCount: number;
  addToFavourites: (jacket: Jacket) => void;
  removeFromFavourites: (jacketId: number) => void;
  incrementVisitedCount: () => void;
  isFavourite: (jacketId: number) => boolean;
}

export const useJacketStore = create<JacketStore>((set, get) => ({
  favourites: [],
  visitedCount: 0,

  addToFavourites: jacket =>
    set(state => ({ favourites: [...state.favourites, jacket] })),

  removeFromFavourites: jacketId =>
    set(state => ({
      favourites: state.favourites.filter(
        jacket => jacket.JacketId !== jacketId,
      ),
    })),

  incrementVisitedCount: () =>
    set(state => ({ visitedCount: state.visitedCount + 1 })),

  isFavourite: jacketId =>
    get().favourites.some(jacket => jacket.JacketId === jacketId),
}));
