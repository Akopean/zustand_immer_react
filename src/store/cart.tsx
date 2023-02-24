import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface CartState {
  bears: number;
  increase: (by: number) => void;
  removeAllBears: () => void;
}

const useCartStore = create<CartState>()(
  devtools(
    persist(
      immer(
   (set) => ({
      bears: 0,
      increase: (by: number) => set((state) => {
        state.bears += by
      }),
      removeAllBears: () => set({ bears: 0 }),
    })),
    {
      name: 'cart-storage',
    })
  ));

export default useCartStore;