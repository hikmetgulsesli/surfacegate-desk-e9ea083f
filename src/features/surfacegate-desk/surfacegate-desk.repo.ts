import type { SurfaceGateDeskSnapshot, SurfaceGateDeskState } from './surfacegate-desk.store';

const STORAGE_KEY = 'surfacegate-desk:v1';

export interface SurfaceGateDeskRepository {
  load: () => { snapshot: SurfaceGateDeskSnapshot; recovered: boolean; error: string | null };
  save: (state: SurfaceGateDeskState) => void;
  clear: () => void;
}

export function createSurfaceGateDeskRepository(
  fallback: SurfaceGateDeskSnapshot,
  storage: Storage | undefined = typeof window === 'undefined' ? undefined : window.localStorage,
): SurfaceGateDeskRepository {
  return {
    load() {
      if (!storage) {
        return { snapshot: fallback, recovered: false, error: 'Local storage is unavailable.' };
      }

      const rawValue = storage.getItem(STORAGE_KEY);
      if (!rawValue) {
        return { snapshot: fallback, recovered: false, error: null };
      }

      try {
        return { snapshot: normalizeSnapshot(JSON.parse(rawValue), fallback), recovered: false, error: null };
      } catch {
        storage.removeItem(STORAGE_KEY);
        return {
          snapshot: fallback,
          recovered: true,
          error: 'Recovered from corrupted local SurfaceGate Desk data.',
        };
      }
    },
    save(state) {
      if (!storage) {
        return;
      }

      const snapshot: SurfaceGateDeskSnapshot = {
        activeScreen: state.activeScreen,
        activeRoute: state.activeRoute,
        activePanel: state.activePanel,
        selectedRecordId: state.selectedRecordId,
        counts: state.counts,
        preferences: state.preferences,
      };
      storage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    },
    clear() {
      storage?.removeItem(STORAGE_KEY);
    },
  };
}

function normalizeSnapshot(value: unknown, fallback: SurfaceGateDeskSnapshot): SurfaceGateDeskSnapshot {
  if (!value || typeof value !== 'object') {
    return fallback;
  }

  const candidate = value as Partial<SurfaceGateDeskSnapshot>;
  return {
    ...fallback,
    ...candidate,
    counts: { ...fallback.counts, ...candidate.counts },
    preferences: {
      ...fallback.preferences,
      ...candidate.preferences,
      filters: Array.isArray(candidate.preferences?.filters)
        ? candidate.preferences.filters.filter((filter): filter is string => typeof filter === 'string')
        : fallback.preferences.filters,
    },
  };
}
