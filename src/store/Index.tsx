import { devtools, persist } from "zustand/middleware";
import createBearSlice, { BearSlice } from "./Bear"
import createCartSlice, {CartSlice} from "./cart"
import { create } from 'zustand'
import { immer } from "zustand/middleware/immer";

const useStore = create<CartSlice & BearSlice>()(devtools(persist(immer((...params) => ({
    ...createBearSlice(...params),
    ...createCartSlice(...params),
  })), {name: 'test'})));

  export default useStore;