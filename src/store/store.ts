import { Coin } from './../interfaces/index';
import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface CryptoState {
    data: Coin | null;
    setData: (value: Coin | null) => void;
}

export const useCryptoStore = create<CryptoState>((set) => ({
    data: null,
    setData: (value: Coin | null) => set(() => ({ data: value })),
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useCryptoStore);
}