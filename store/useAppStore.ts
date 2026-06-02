import { create } from 'zustand';

export type PreloaderState = 'loading' | 'dropping' | 'splashed' | 'completed';

interface AppState {
  preloaderState: PreloaderState;
  activeSection: string;
  isScrollLocked: boolean;
  scrollDepth: number; // 0 to 10994
  isTerminalOpen: boolean;
  activeTimeSlot: string; // e.g. "09:00"
  setPreloaderState: (state: PreloaderState) => void;
  setActiveSection: (section: string) => void;
  setScrollLocked: (locked: boolean) => void;
  setScrollDepth: (depth: number) => void;
  setTerminalOpen: (open: boolean) => void;
  setActiveTimeSlot: (slot: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  preloaderState: 'loading',
  activeSection: 'hero',
  isScrollLocked: false,
  scrollDepth: 0,
  isTerminalOpen: false,
  activeTimeSlot: '09:00',
  setPreloaderState: (state) => set({ preloaderState: state }),
  setActiveSection: (section) => set({ activeSection: section }),
  setScrollLocked: (locked) => set({ isScrollLocked: locked }),
  setScrollDepth: (depth) => set({ scrollDepth: depth }),
  setTerminalOpen: (open) => set({ isTerminalOpen: open }),
  setActiveTimeSlot: (slot) => set({ activeTimeSlot: slot }),
}));
