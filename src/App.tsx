import { useEffect, useMemo, useSyncExternalStore } from 'react';
import {
  AgentWorkloadSurfacegateDesk,
  EmptyAndErrorRecoverySurfacegateDesk,
  InsightsSurfacegateDesk,
  QueueAndStatusManagementSurfacegateDesk,
  SettingsAndPreferencesSurfacegateDesk,
  TicketEditorSurfacegateDesk,
  TicketOperationsSurfacegateDesk,
} from './screens';
import { surfaceGateDeskFixture } from './__fixtures__/surfacegate-desk.fixture';
import { createSurfaceGateDeskRepository } from './features/surfacegate-desk/surfacegate-desk.repo';
import { createSurfaceGateDeskStore, type SurfaceGateDeskStore } from './features/surfacegate-desk/surfacegate-desk.store';
import { publishSurfaceGateDeskBridge } from './test/bridge';

const createAppStore = () => {
  const repository = createSurfaceGateDeskRepository(surfaceGateDeskFixture);
  const loaded = repository.load();
  const store = createSurfaceGateDeskStore(loaded.snapshot, repository.save);

  if (loaded.recovered) {
    store.actions.recoverStorage();
  } else if (loaded.error) {
    store.actions.setStorageStatus('unavailable');
    store.actions.setLastError(loaded.error);
  } else {
    store.actions.savePreferences(loaded.snapshot.preferences);
  }

  return store;
};

function useSurfaceGateDeskState(store: SurfaceGateDeskStore) {
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
}

export default function App() {
  const store = useMemo(createAppStore, []);
  const state = useSurfaceGateDeskState(store);
  const actions = store.actions;
  const runAction = (actionId: string, label: string) => () => actions.acknowledgeAction(`${label} (${actionId})`);

  useEffect(() => {
    publishSurfaceGateDeskBridge(state, actions);
  }, [state, actions]);

  const navigationActions = {
    'tickets-1': () => actions.navigate('tickets'),
    'queues-2': () => actions.navigate('queues'),
    'agents-3': () => actions.navigate('agents'),
    'insights-4': () => actions.navigate('insights'),
    'settings-5': () => actions.navigate('settings'),
    'help-6': () => actions.navigate('help'),
  };

  return (
    <div data-setfarm-root="surfacegate-desk" data-active-screen={state.activeScreen} className="min-h-screen bg-slate-50 text-slate-950">
      <section aria-label="SurfaceGate Desk state" className="surfacegate-state-strip">
        <span>Screen: {state.activeScreen}</span>
        <span>Panel: {state.activePanel}</span>
        <span>Selected: {state.selectedRecordId ?? 'none'}</span>
        <span>Items: {state.itemCount}</span>
        <span>Storage: {state.storageStatus}</span>
        <span>{state.lastAction}</span>
      </section>
      {state.lastError ? (
        <div role="status" className="surfacegate-recovery-banner">
          {state.lastError}
        </div>
      ) : null}
      {state.activeScreen === 'tickets' ? (
        <TicketOperationsSurfacegateDesk
          actions={{
            ...navigationActions,
            'new-ticket-1': () => actions.navigate('editor'),
            'create-3': () => actions.navigate('editor'),
            'filter-4': () => actions.setActivePanel('ticket-filters'),
            'button-2-2': runAction('button-2-2', 'ticket toolbar'),
            'button-5-5': runAction('button-5-5', 'ticket bulk action'),
            'button-6-6': runAction('button-6-6', 'ticket priority action'),
            'button-7-7': runAction('button-7-7', 'ticket status action'),
            'button-8-8': runAction('button-8-8', 'ticket escalation action'),
            'edit-9': () => actions.navigate('editor'),
            'comment-10': () => actions.setActivePanel('ticket-comments'),
          }}
        />
      ) : null}
      {state.activeScreen === 'queues' ? (
        <QueueAndStatusManagementSurfacegateDesk
          actions={{
            ...navigationActions,
            'new-ticket-1': () => actions.navigate('editor'),
            'button-2-2': runAction('button-2-2', 'queue toolbar'),
            'create-ticket-3': () => actions.navigate('editor'),
            'button-4-4': runAction('button-4-4', 'queue capacity action'),
            'button-5-5': runAction('button-5-5', 'queue status action'),
            'filter-6': () => actions.setActivePanel('queue-filters'),
            'button-7-7': runAction('button-7-7', 'queue routing action'),
            'button-8-8': runAction('button-8-8', 'queue SLA action'),
            'button-9-9': runAction('button-9-9', 'queue audit action'),
          }}
        />
      ) : null}
      {state.activeScreen === 'agents' ? (
        <AgentWorkloadSurfacegateDesk
          actions={{
            'button-1-1': runAction('button-1-1', 'agent toolbar'),
            'button-2-2': runAction('button-2-2', 'agent schedule action'),
            'create-ticket-3': () => actions.navigate('editor'),
            'filter-4': () => actions.setActivePanel('agent-filters'),
            'reassign-5': () => actions.setActivePanel('reassign-agent'),
            'assign-6': () => actions.selectRecord('AG-204'),
            'assign-7': () => actions.selectRecord('AG-318'),
          }}
        />
      ) : null}
      {state.activeScreen === 'insights' ? (
        <InsightsSurfacegateDesk
          actions={{
            ...navigationActions,
            'new-ticket-1': () => actions.navigate('editor'),
            'button-2-2': runAction('button-2-2', 'insights toolbar'),
            'button-3-3': runAction('button-3-3', 'insights trend action'),
            'button-4-4': runAction('button-4-4', 'insights SLA action'),
            'create-ticket-5': () => actions.navigate('editor'),
            'filter-6': () => actions.setActivePanel('insights-filters'),
            'export-7': () => actions.setActivePanel('export-report'),
            'button-8-8': runAction('button-8-8', 'insights report action'),
            'view-breached-tickets-9': () => actions.selectRecord('SG-BREACHED'),
          }}
        />
      ) : null}
      {state.activeScreen === 'settings' ? (
        <SettingsAndPreferencesSurfacegateDesk
          actions={{
            ...navigationActions,
            'create-ticket-1': () => actions.navigate('editor'),
            'button-2-2': runAction('button-2-2', 'settings toolbar'),
            'button-3-3': runAction('button-3-3', 'settings notification action'),
            'button-4-4': runAction('button-4-4', 'settings security action'),
            'button-5-5': runAction('button-5-5', 'settings profile action'),
            'create-ticket-6': () => actions.navigate('editor'),
            'add-filter-7': () => actions.savePreferences({ filters: [...state.preferences.filters, 'custom'] }),
            'button-8-8': runAction('button-8-8', 'settings queue action'),
            'button-9-9': runAction('button-9-9', 'settings agent action'),
            'button-10-10': runAction('button-10-10', 'settings insight action'),
            'button-11-11': runAction('button-11-11', 'settings storage action'),
            'reset-all-preferences-to-system-default-12': () => actions.savePreferences(surfaceGateDeskFixture.preferences),
            'retry-loading-13': () => actions.setLastError(null),
            'save-changes-14': () => actions.savePreferences(state.preferences),
          }}
        />
      ) : null}
      {state.activeScreen === 'help' ? (
        <EmptyAndErrorRecoverySurfacegateDesk
          actions={{
            ...navigationActions,
            'create-ticket-1': () => actions.navigate('editor'),
            'button-2-2': runAction('button-2-2', 'recovery retry action'),
            'button-3-3': runAction('button-3-3', 'recovery queue action'),
            'button-4-4': runAction('button-4-4', 'recovery support action'),
            'clear-all-filters-5': actions.clearFilters,
            'create-new-ticket-6': () => actions.navigate('editor'),
          }}
        />
      ) : null}
      {state.activeScreen === 'editor' ? (
        <TicketEditorSurfacegateDesk
          actions={{
            'button-1-1': () => actions.navigate('tickets'),
            'cancel-2': () => actions.navigate('tickets'),
            'save-changes-3': () => actions.navigate('tickets'),
          }}
        />
      ) : null}
    </div>
  );
}
