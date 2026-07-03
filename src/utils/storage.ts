export interface TrackerState {
  status: { [key: number]: 'unsolved' | 'in-progress' | 'completed' };
  favorites: { [key: number]: boolean };
  notes: { [key: number]: string };
}

const STORAGE_KEY = 'tcs_nqt_prep_tracker';

const defaultState: TrackerState = {
  status: {},
  favorites: {},
  notes: {},
};

export const loadTrackerState = (): TrackerState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return {
      status: parsed.status || {},
      favorites: parsed.favorites || {},
      notes: parsed.notes || {},
    };
  } catch (e) {
    console.error("Failed to load tracker state from localStorage:", e);
    return defaultState;
  }
};

export const saveTrackerState = (state: TrackerState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save tracker state to localStorage:", e);
  }
};
