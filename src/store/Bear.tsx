import { StateCreator } from 'zustand'
import { CartSlice } from './cart'

export interface BearSlice {
  bears: number
  addBear: () => void
}

const createBearSlice: StateCreator<
  BearSlice & CartSlice,
  [["zustand/immer", never],["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => {
    state.bears += 1
  }),
});

export default createBearSlice;