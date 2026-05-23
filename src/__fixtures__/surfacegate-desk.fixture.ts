import type { SurfaceGateDeskSnapshot } from '../features/surfacegate-desk/surfacegate-desk.store';

export const surfaceGateDeskFixture: SurfaceGateDeskSnapshot = {
  activeScreen: 'tickets',
  activeRoute: '/tickets',
  activePanel: 'ticket-list',
  selectedRecordId: 'SG-1042',
  counts: {
    tickets: 24,
    queues: 5,
    agents: 12,
    breached: 3,
  },
  preferences: {
    density: 'comfortable',
    filters: ['open', 'priority'],
  },
};
