// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Menu, Plus, Search, Settings } from "lucide-react";


export type EmptyAndErrorRecoverySurfacegateDeskActionId = "create-ticket-1" | "button-2-2" | "button-3-3" | "button-4-4" | "clear-all-filters-5" | "create-new-ticket-6" | "tickets-1" | "queues-2" | "agents-3" | "insights-4" | "settings-5" | "help-6";

export interface EmptyAndErrorRecoverySurfacegateDeskProps {
  actions?: Partial<Record<EmptyAndErrorRecoverySurfacegateDeskActionId, () => void>>;
}

export function EmptyAndErrorRecoverySurfacegateDesk({ actions }: EmptyAndErrorRecoverySurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="hidden md:flex bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant dark:border-outline w-sidebar-width h-screen sticky top-0 left-0 flex-col py-container-padding flex-shrink-0 z-40">
      <div className="px-container-padding mb-6">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface">SurfaceGate Desk</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Service Excellence</p>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-2">
      {/* Tickets (Active) */}
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container border-l-4 border-primary font-bold cursor-pointer active:scale-95 rounded-r-DEFAULT" href="#" data-action-id="tickets-1" onClick={actions?.["tickets-1"]}>
      <Circle className="filled" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Tickets</span>
      </a>
      {/* Queues */}
      <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95 border-l-4 border-transparent rounded-r-DEFAULT" href="#" data-action-id="queues-2" onClick={actions?.["queues-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Queues</span>
      </a>
      {/* Agents */}
      <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95 border-l-4 border-transparent rounded-r-DEFAULT" href="#" data-action-id="agents-3" onClick={actions?.["agents-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Agents</span>
      </a>
      {/* Insights */}
      <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95 border-l-4 border-transparent rounded-r-DEFAULT" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </nav>
      <div className="px-4 mt-auto mb-4">
      <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-2 px-4 rounded-DEFAULT hover:bg-primary transition-colors flex items-center justify-center gap-2" type="button" data-action-id="create-ticket-1" onClick={actions?.["create-ticket-1"]}>
      <Plus  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                      Create Ticket
                  </button>
      </div>
      <div className="border-t border-outline-variant pt-4 flex flex-col gap-1 px-2">
      <a className="flex items-center gap-3 px-4 py-2 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95 rounded-DEFAULT" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-2 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95 rounded-DEFAULT" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Help</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* TopNavBar */}
      <header className="h-standard-row-height w-full sticky top-0 z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant flex justify-between items-center px-container-padding flex-shrink-0">
      {/* Mobile Brand/Menu */}
      <div className="flex md:hidden items-center gap-4">
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <span className="font-headline-md text-headline-md text-primary dark:text-inverse-primary font-bold">SurfaceGate Desk</span>
      </div>
      {/* Search Bar (Left aligned per JSON) */}
      <div className="hidden md:flex items-center flex-1 max-w-md ml-4">
      <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-9 pr-3 bg-surface-container-low border border-outline-variant rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant transition-colors" placeholder="Search tickets..." type="text" />
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer relative" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border border-surface"></span>
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Page Canvas - Empty State */}
      <main className="flex-1 overflow-y-auto bg-surface p-container-padding flex items-center justify-center">
      {/* Empty State Container */}
      <div className="max-w-md w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-8 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-container opacity-5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-container opacity-10 rounded-full blur-xl"></div>
      {/* Illustration / Icon */}
      <div className="w-24 h-24 bg-surface-container flex items-center justify-center rounded-full mb-6 text-on-surface-variant relative">
      <Circle  style={{fontVariationSettings: "'wght' 300"}} className="text-5xl" aria-hidden={true} focusable="false" />
      {/* Small accent icon */}
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center border-2 border-surface-container-lowest">
      <Circle className="text-sm text-primary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Content */}
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">No tickets found</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-4 max-w-sm">
                          No tickets match your current filter criteria: <span className="font-semibold text-on-surface">"High Priority"</span> and <span className="font-semibold text-on-surface">"Unassigned"</span>.
                      </p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-8 bg-surface-container-low px-4 py-2 rounded-DEFAULT border border-outline-variant inline-block">
                          Try adjusting your filters or creating a new ticket to get started.
                      </p>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
      <button className="bg-primary-container text-on-primary font-label-md text-label-md py-2 px-6 rounded-DEFAULT hover:bg-primary transition-colors flex items-center justify-center gap-2" type="button" data-action-id="clear-all-filters-5" onClick={actions?.["clear-all-filters-5"]}>
      <Circle  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                              Clear All Filters
                          </button>
      <button className="bg-transparent text-primary font-label-md text-label-md py-2 px-6 rounded-DEFAULT border border-primary hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2" type="button" data-action-id="create-new-ticket-6" onClick={actions?.["create-new-ticket-6"]}>
      <Plus  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                              Create New Ticket
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
