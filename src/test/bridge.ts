import type { SurfaceGateDeskActions, SurfaceGateDeskState } from '../features/surfacegate-desk/surfacegate-desk.store';

export interface SurfaceGateDeskTestBridge extends SurfaceGateDeskState {
  actions: SurfaceGateDeskActions;
}

declare global {
  interface Window {
    app?: SurfaceGateDeskTestBridge;
  }
}

export function publishSurfaceGateDeskBridge(state: SurfaceGateDeskState, actions: SurfaceGateDeskActions) {
  if (typeof window === 'undefined') {
    return;
  }

  window.app = { ...state, actions };
}
