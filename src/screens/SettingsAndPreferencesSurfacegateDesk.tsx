// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, ListFilter, Menu, Pencil, Plus, Search, Settings, Trash2 } from "lucide-react";


export type SettingsAndPreferencesSurfacegateDeskActionId = "create-ticket-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "create-ticket-6" | "add-filter-7" | "button-8-8" | "button-9-9" | "button-10-10" | "button-11-11" | "reset-all-preferences-to-system-default-12" | "retry-loading-13" | "save-changes-14" | "tickets-1" | "queues-2" | "agents-3" | "insights-4" | "settings-5" | "help-6";

export interface SettingsAndPreferencesSurfacegateDeskProps {
  actions?: Partial<Record<SettingsAndPreferencesSurfacegateDeskActionId, () => void>>;
}

export function SettingsAndPreferencesSurfacegateDesk({ actions }: SettingsAndPreferencesSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="w-sidebar-width h-screen sticky top-0 left-0 bg-surface-container-low border-r border-outline-variant flex flex-col py-container-padding z-40 hidden md:flex">
      <div className="px-4 mb-6">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">SurfaceGate Desk</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Service Excellence</p>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="tickets-1" onClick={actions?.["tickets-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Tickets</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="queues-2" onClick={actions?.["queues-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Queues</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="agents-3" onClick={actions?.["agents-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Agents</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      </nav>
      <div className="px-4 mt-auto">
      <button className="w-full bg-primary-container text-on-primary rounded font-label-md text-label-md h-standard-row-height flex items-center justify-center gap-2 hover:bg-primary transition-colors mb-4" type="button" data-action-id="create-ticket-1" onClick={actions?.["create-ticket-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      Create Ticket
                  </button>
      <div className="flex flex-col gap-1 border-t border-outline-variant pt-4">
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container border-l-4 border-primary font-bold transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Help</span>
      </a>
      </div>
      </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0 bg-surface">
      {/* TopNavBar */}
      <header className="h-standard-row-height w-full sticky top-0 z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-container-padding">
      <div className="flex items-center gap-4">
      <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-md text-headline-md text-primary font-bold hidden md:block">SurfaceGate Desk</div>
      </div>
      <div className="flex-1 max-w-md mx-4 hidden sm:block">
      <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-[32px] pl-9 pr-3 rounded border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant" placeholder="Search..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4 font-label-md text-label-md">
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer sm:hidden" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Search aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer relative" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary-container text-on-primary px-4 h-[32px] rounded hover:bg-primary transition-colors hidden sm:block" type="button" data-action-id="create-ticket-6" onClick={actions?.["create-ticket-6"]}>
                          Create Ticket
                      </button>
      </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-container-padding lg:p-8">
      <div className="max-w-[800px] mx-auto">
      <header className="mb-8 flex justify-between items-end">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Settings &amp; Preferences</h2>
      <p className="text-on-surface-variant">Manage your personal workspace settings and notification preferences.</p>
      </div>
      </header>
      <div className="flex flex-col gap-6">
      {/* Saved Filters Section */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
      <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
      <h3 className="font-headline-md text-headline-md text-on-surface">Saved Filters</h3>
      <button className="text-primary hover:text-primary-container transition-colors text-sm font-semibold flex items-center gap-1" type="button" data-action-id="add-filter-7" onClick={actions?.["add-filter-7"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" /> Add Filter
                                  </button>
      </div>
      <ul className="flex flex-col gap-2">
      <li className="flex items-center justify-between p-3 bg-surface hover:bg-surface-container-low border border-outline-variant rounded transition-colors group">
      <div className="flex items-center gap-3">
      <ListFilter className="text-secondary text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-semibold text-on-surface">My High Priority</span>
      </div>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-1 text-on-surface-variant hover:text-primary transition-colors rounded" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="p-1 text-on-surface-variant hover:text-error transition-colors rounded" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}><Trash2 className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </li>
      <li className="flex items-center justify-between p-3 bg-surface hover:bg-surface-container-low border border-outline-variant rounded transition-colors group">
      <div className="flex items-center gap-3">
      <ListFilter className="text-secondary text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-semibold text-on-surface">Stale Hardware Tickets</span>
      </div>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-1 text-on-surface-variant hover:text-primary transition-colors rounded" type="button" data-action-id="button-10-10" onClick={actions?.["button-10-10"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="p-1 text-on-surface-variant hover:text-error transition-colors rounded" type="button" data-action-id="button-11-11" onClick={actions?.["button-11-11"]}><Trash2 className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </li>
      </ul>
      </section>
      {/* Default Views Section */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4 border-b border-outline-variant pb-2">Default Landing</h3>
      <label className="block text-sm font-semibold text-on-surface-variant mb-1">Landing Page</label>
      <select className="w-full h-[32px] px-3 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface">
      <option>Tickets &gt; All Open</option>
      <option>Dashboard</option>
      <option>My Assigned</option>
      </select>
      </div>
      <div className="flex-1">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4 border-b border-outline-variant pb-2">Sorting</h3>
      <label className="block text-sm font-semibold text-on-surface-variant mb-1">Default Sort Order</label>
      <select className="w-full h-[32px] px-3 border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface">
      <option>Priority (High to Low)</option>
      <option>Date Created (Newest First)</option>
      <option>SLA Deadline</option>
      </select>
      </div>
      </section>
      {/* Display & Notifications Section */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4 border-b border-outline-variant pb-2">Display &amp; Notifications</h3>
      <div className="mb-6">
      <h4 className="font-semibold text-on-surface mb-2">Display Density</h4>
      <label className="flex items-center gap-3 cursor-pointer">
      <input checked={true} className="form-checkbox h-4 w-4 text-primary border-outline-variant rounded rounded-sm focus:ring-primary focus:ring-offset-0 bg-surface" type="checkbox" />
      <span className="text-on-surface select-none">Enable Compact View (36px row height for tables)</span>
      </label>
      </div>
      <div>
      <h4 className="font-semibold text-on-surface mb-2">Notification Channels</h4>
      <div className="flex flex-col gap-2">
      <label className="flex items-center gap-3 cursor-pointer">
      <input checked={true} className="form-checkbox h-4 w-4 text-primary border-outline-variant rounded rounded-sm focus:ring-primary focus:ring-offset-0 bg-surface" type="checkbox" />
      <span className="text-on-surface select-none">In-App Browser Notifications</span>
      </label>
      <label className="flex items-center gap-3 cursor-pointer">
      <input className="form-checkbox h-4 w-4 text-primary border-outline-variant rounded rounded-sm focus:ring-primary focus:ring-offset-0 bg-surface" type="checkbox" />
      <span className="text-on-surface select-none">Email Notifications (Digest)</span>
      </label>
      </div>
      </div>
      </section>
      {/* Danger Zone / Reset */}
      <section className="bg-surface-container-lowest border border-error-container rounded-lg p-6">
      <h3 className="font-headline-md text-headline-md text-error mb-2">System Reset</h3>
      <p className="text-on-surface-variant mb-4">Revert all personalization back to organizational defaults. This action cannot be undone.</p>
      <button className="px-4 py-2 border border-outline text-on-surface-variant hover:bg-surface-container-low hover:text-error transition-colors rounded text-sm font-semibold" type="button" data-action-id="reset-all-preferences-to-system-default-12" onClick={actions?.["reset-all-preferences-to-system-default-12"]}>
                                  Reset all preferences to system default
                              </button>
      </section>
      </div>
      {/* Action Footer */}
      <footer className="mt-8 pt-4 border-t border-outline-variant flex justify-between items-center pb-8">
      <button className="px-4 py-2 border border-secondary text-secondary hover:bg-surface-container-low transition-colors rounded text-sm font-semibold" type="button" data-action-id="retry-loading-13" onClick={actions?.["retry-loading-13"]}>
                              Retry Loading
                          </button>
      <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 flex items-center gap-1" id="toast-message">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" /> Changes saved
                              </span>
      <button className="px-6 py-2 bg-primary-container text-on-primary hover:bg-primary transition-colors rounded text-sm font-semibold shadow-sm" id="save-btn" type="button" data-action-id="save-changes-14" onClick={actions?.["save-changes-14"]}>
                                  Save Changes
                              </button>
      </div>
      </footer>
      </div>
      </main>
      </div>
      
    </>
  );
}
