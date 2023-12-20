import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useCryptoStore = create((set) => ({
    data: null,
    setData: (value) => set((state) => ({ data: value })),
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useCryptoStore);
}