import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface MainState {
  count: number;
}

interface MainActions {
  increment: () => void;
}

export type MainStore = MainState & MainActions;

const initialState: MainState = {
  count: 0,
};

export const createMainStore = (prefix: string) =>
  create<MainStore>()(
    devtools(
      persist(
        (set) => ({
          ...initialState,

          increment: () => set((state) => ({ count: state.count + 1 })),
        }),
        {
          name: `${prefix}:main-store`,
          partialize: ({ count }) => ({
            count,
          }),
        },
      ),
    ),
  );
