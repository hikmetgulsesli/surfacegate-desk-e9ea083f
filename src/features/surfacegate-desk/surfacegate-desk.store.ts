export type SurfaceGateScreen = 'tickets' | 'queues' | 'agents' | 'insights' | 'settings' | 'help' | 'editor';

export type StorageStatus = 'idle' | 'ready' | 'unavailable' | 'recovered';

export interface SurfaceGateCounts {
  tickets: number;
  queues: number;
  agents: number;
  breached: number;
}

export interface SurfaceGatePreferences {
  density: 'comfortable' | 'compact';
  filters: string[];
}

export interface SurfaceGateDeskSnapshot {
  activeScreen: SurfaceGateScreen;
  activeRoute: string;
  activePanel: string;
  selectedRecordId: string | null;
  counts: SurfaceGateCounts;
  preferences: SurfaceGatePreferences;
}

export interface SurfaceGateDeskState extends SurfaceGateDeskSnapshot {
  storageStatus: StorageStatus;
  lastError: string | null;
}

export interface SurfaceGateDeskActions {
  navigate: (screen: SurfaceGateScreen) => void;
  selectRecord: (recordId: string | null) => void;
  setActivePanel: (panel: string) => void;
  setLastError: (message: string | null) => void;
  setStorageStatus: (status: StorageStatus) => void;
  clearFilters: () => void;
  savePreferences: (preferences: Partial<SurfaceGatePreferences>) => void;
  recoverStorage: () => void;
}

export interface SurfaceGateDeskStore {
  state: SurfaceGateDeskState;
  actions: SurfaceGateDeskActions;
  subscribe: (listener: (state: SurfaceGateDeskState) => void) => () => void;
  getSnapshot: () => SurfaceGateDeskState;
}

export const surfaceGateRouteByScreen: Record<SurfaceGateScreen, string> = {
  tickets: '/tickets',
  queues: '/queues',
  agents: '/agents',
  insights: '/insights',
  settings: '/settings',
  help: '/help',
  editor: '/tickets/editor',
};

const panelByScreen: Record<SurfaceGateScreen, string> = {
  tickets: 'ticket-list',
  queues: 'queue-status',
  agents: 'agent-workload',
  insights: 'insights',
  settings: 'preferences',
  help: 'support',
  editor: 'ticket-editor',
};

export function createSurfaceGateDeskStore(
  initialSnapshot: SurfaceGateDeskSnapshot,
  persist?: (state: SurfaceGateDeskState) => void,
): SurfaceGateDeskStore {
  let state: SurfaceGateDeskState = {
    ...initialSnapshot,
    storageStatus: 'idle',
    lastError: null,
  };

  const listeners = new Set<(nextState: SurfaceGateDeskState) => void>();

  const emit = () => {
    persist?.(state);
    listeners.forEach((listener) => listener(state));
  };

  const update = (patch: Partial<SurfaceGateDeskState>) => {
    state = { ...state, ...patch };
    emit();
  };

  const actions: SurfaceGateDeskActions = {
    navigate(screen) {
      update({
        activeScreen: screen,
        activeRoute: surfaceGateRouteByScreen[screen],
        activePanel: panelByScreen[screen],
      });
    },
    selectRecord(recordId) {
      update({
        selectedRecordId: recordId,
        activePanel: recordId ? 'ticket-detail' : panelByScreen[state.activeScreen],
      });
    },
    setActivePanel(panel) {
      update({ activePanel: panel });
    },
    setLastError(message) {
      update({ lastError: message });
    },
    setStorageStatus(status) {
      update({ storageStatus: status });
    },
    clearFilters() {
      update({
        preferences: { ...state.preferences, filters: [] },
        lastError: null,
      });
    },
    savePreferences(preferences) {
      update({
        preferences: { ...state.preferences, ...preferences },
        storageStatus: 'ready',
        lastError: null,
      });
    },
    recoverStorage() {
      update({
        storageStatus: 'recovered',
        lastError: 'Recovered from corrupted local SurfaceGate Desk data.',
      });
    },
  };

  return {
    get state() {
      return state;
    },
    actions,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot() {
      return state;
    },
  };
}
