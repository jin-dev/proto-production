import { create } from 'zustand';

// State types
interface States {
  count: number;
}

interface Actions {
  inc: () => void;
  dec: () => void;
  removeAllCount: () => void;
}

// useCounterStore
export const useCountStore = create<States & Actions>((set) => ({
  count: 0,
  inc: () => set((state: { count: number }) => ({ count: state.count + 1 })),
  dec: () => set((state: { count: number }) => ({ count: state.count - 1 })),
  removeAllCount: () => set({ count: 0 }),
}));
