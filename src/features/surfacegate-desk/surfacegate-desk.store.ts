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
  lastAction: string;
  itemCount: number;
}

export interface SurfaceGateDeskActions {
  hydrate: (snapshot: SurfaceGateDeskSnapshot, status: StorageStatus, error: string | null) => void;
  navigate: (screen: SurfaceGateScreen) => void;
  selectRecord: (recordId: string | null) => void;
  setActivePanel: (panel: string) => void;
  setLastError: (message: string | null) => void;
  setStorageStatus: (status: StorageStatus) => void;
  clearFilters: () => void;
  savePreferences: (preferences: Partial<SurfaceGatePreferences>) => void;
  recoverStorage: () => void;
  acknowledgeAction: (action: string) => void;
}

export interface SurfaceGateDeskStore {
  state: SurfaceGateDeskState;
  actions: SurfaceGateDeskActions;
  subscribe: (listener: (state: SurfaceGateDeskState) => void) => () => void;
  getSnapshot: () => SurfaceGateDeskState;
}

export const surfaceGateDeskMessages = {
  loaded: 'SurfaceGate Desk loaded.',
  storageUnavailable: 'Storage unavailable.',
  storageUnavailableDetail: 'Unable to save SurfaceGate Desk state.',
  storageRecoveredDetail: 'Recovered from corrupted local SurfaceGate Desk data.',
  storageRecoveredAction: 'Recovered local data.',
} as const;

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
    lastAction: surfaceGateDeskMessages.loaded,
    itemCount: getItemCount(initialSnapshot.counts),
  };

  const listeners = new Set<(nextState: SurfaceGateDeskState) => void>();

  const emit = () => {
    try {
      persist?.(state);
    } catch (error) {
      const message = error instanceof Error ? error.message : surfaceGateDeskMessages.storageUnavailableDetail;
      state = {
        ...state,
        storageStatus: 'unavailable',
        lastError: message,
        lastAction: surfaceGateDeskMessages.storageUnavailable,
      };
    }

    listeners.forEach((listener) => listener(state));
  };

  const update = (patch: Partial<SurfaceGateDeskState>) => {
    state = { ...state, ...patch };
    emit();
  };

  const actions: SurfaceGateDeskActions = {
    hydrate(snapshot, status, error) {
      update({
        ...snapshot,
        storageStatus: status,
        lastError: error,
        lastAction: status === 'recovered' ? surfaceGateDeskMessages.storageRecoveredAction : surfaceGateDeskMessages.loaded,
        itemCount: getItemCount(snapshot.counts),
      });
    },
    navigate(screen) {
      update({
        activeScreen: screen,
        activeRoute: surfaceGateRouteByScreen[screen],
        activePanel: panelByScreen[screen],
        lastAction: `Opened ${screen}.`,
      });
    },
    selectRecord(recordId) {
      update({
        selectedRecordId: recordId,
        activePanel: recordId ? 'ticket-detail' : panelByScreen[state.activeScreen],
        lastAction: recordId ? `Selected ${recordId}.` : 'Selection cleared.',
      });
    },
    setActivePanel(panel) {
      update({ activePanel: panel, lastAction: `Opened ${panel}.` });
    },
    setLastError(message) {
      update({ lastError: message, lastAction: message ? 'Error surfaced.' : 'Error cleared.' });
    },
    setStorageStatus(status) {
      update({ storageStatus: status, lastAction: `Storage ${status}.` });
    },
    clearFilters() {
      update({
        preferences: { ...state.preferences, filters: [] },
        lastError: null,
        storageStatus: 'ready',
        lastAction: 'Cleared all filters.',
      });
    },
    savePreferences(preferences) {
      update({
        preferences: { ...state.preferences, ...preferences },
        storageStatus: 'ready',
        lastError: null,
        lastAction: 'Preferences saved.',
      });
    },
    recoverStorage() {
      update({
        storageStatus: 'recovered',
        lastError: surfaceGateDeskMessages.storageRecoveredDetail,
        lastAction: surfaceGateDeskMessages.storageRecoveredAction,
      });
    },
    acknowledgeAction(action) {
      update({ activePanel: action, lastAction: `Ran ${action}.` });
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

function getItemCount(counts: SurfaceGateCounts) {
  return counts.tickets + counts.queues + counts.agents;
}
