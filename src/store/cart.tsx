import { StateCreator } from 'zustand'
import { BearSlice } from './Bear';

export interface CartSlice {
  cart: number;
  increase: (by: number) => void;
  removeAllBears: () => void;
}

const createCartSlice: StateCreator<BearSlice & CartSlice,[["zustand/immer", never],["zustand/devtools", never], ["zustand/persist", unknown]],[],CartSlice> =
    (set) => ({
      cart: 0,
      increase: (by: number) => set((state) => {
        state.cart += by
      }),
      removeAllBears: () => set({ cart: 0 }),
    });

export default createCartSlice;