import { create } from 'zustand'

export const useLangs = create((set) => ({
  activeLang: 'html',
  updateActiveLang: (newActiveLang) => set({ activeLang:newActiveLang}),
}))