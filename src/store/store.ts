import { Coin } from './../interfaces/index';
import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface CryptoState {
    data: Coin | null;
    currencySelected: string;
    setCurrencySelected: (value: string) => void;
    setCoinSelected: (value: string) => void;
    coinSelected: string;
    setData: (value: Coin | null) => void;
}

export const useCryptoStore = create<CryptoState>((set) => ({
    data: null,
    currencySelected: '',
    coinSelected: '',
    setCurrencySelected: (value: string) => set(() => ({currencySelected: value})),
    setCoinSelected: (value: string) => set(() => ({coinSelected: value})),
    setData: (value: Coin | null) => set(() => ({ data: value })),
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useCryptoStore);
}