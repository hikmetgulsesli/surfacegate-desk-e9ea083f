// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowRight, Circle, CircleUserRound, Download, EllipsisVertical, ListFilter, Menu, Plus, Search, Settings } from "lucide-react";


export type InsightsSurfacegateDeskActionId = "new-ticket-1" | "button-2-2" | "button-3-3" | "button-4-4" | "create-ticket-5" | "filter-6" | "export-7" | "button-8-8" | "view-breached-tickets-9" | "tickets-1" | "queues-2" | "agents-3" | "insights-4" | "settings-5" | "help-6";

export interface InsightsSurfacegateDeskProps {
  actions?: Partial<Record<InsightsSurfacegateDeskActionId, () => void>>;
}

export function InsightsSurfacegateDesk({ actions }: InsightsSurfacegateDeskProps) {
  return (
    <>
      {/* JSON Component: SideNavBar */}
      <aside className="bg-surface-container-low border-r border-outline-variant w-sidebar-width h-screen sticky top-0 left-0 hidden md:flex flex-col flex-shrink-0 z-50">
      {/* Header */}
      <div className="px-4 py-6 border-b border-outline-variant flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-md shrink-0">
      <Circle  style={{fontSize: "20px"}} aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary truncate">SurfaceGate</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant truncate">Service Desk</p>
      </div>
      </div>
      {/* Main Nav */}
      <nav className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="tickets-1" onClick={actions?.["tickets-1"]}>
      <Circle className="shrink-0" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Tickets</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="queues-2" onClick={actions?.["queues-2"]}>
      <Circle className="shrink-0" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queues</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="agents-3" onClick={actions?.["agents-3"]}>
      <Circle className="shrink-0" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Agents</span>
      </a>
      {/* ACTIVE TAB */}
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container border-l-4 border-primary cursor-pointer active:scale-95" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="shrink-0" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </nav>
      {/* CTA & Footer Nav */}
      <div className="p-4 border-t border-outline-variant flex flex-col gap-2">
      <button className="w-full bg-primary-container text-on-primary-container hover:bg-primary transition-colors py-2 rounded font-label-md text-label-md flex items-center justify-center gap-2 mb-2" type="button" data-action-id="new-ticket-1" onClick={actions?.["new-ticket-1"]}>
      <Plus  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                      New Ticket
                  </button>
      <a className="flex items-center gap-3 px-2 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 rounded" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings style={{fontSize: "18px"}} className="shrink-0" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-2 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 rounded" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle style={{fontSize: "18px"}} className="shrink-0" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Help</span>
      </a>
      </div>
      </aside>
      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-surface">
      {/* JSON Component: TopNavBar (Mobile Header / Action Bar) */}
      <header className="bg-surface border-b border-outline-variant h-standard-row-height sticky top-0 z-40 w-full flex items-center justify-between px-container-padding flex-shrink-0">
      <div className="flex items-center gap-4">
      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-on-surface-variant p-1 -ml-1 rounded hover:bg-surface-container" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-lg text-headline-lg font-black text-primary truncate hidden sm:block">SurfaceGate Desk</div>
      <div className="font-headline-md text-headline-md font-bold text-primary truncate sm:hidden">Insights</div>
      </div>
      <div className="flex items-center gap-4">
      {/* Search (on left as per JSON, but pushed right by flex-between) */}
      <div className="relative hidden lg:block w-64">
      <Search  style={{fontSize: "18px"}} className="absolute left-2 top-1/2 -translate-y-1/2 text-outline" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-3 text-body-sm font-body-sm bg-surface-container-low border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-outline" placeholder="Search..." type="text" />
      </div>
      <div className="flex items-center gap-2">
      <button className="text-on-surface-variant p-1.5 rounded hover:bg-surface-container transition-colors" title="Notifications" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant p-1.5 rounded hover:bg-surface-container transition-colors" title="Account" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      <div className="w-px h-6 bg-outline-variant mx-2 hidden sm:block"></div>
      <button className="hidden sm:flex items-center justify-center h-8 px-4 bg-primary text-on-primary hover:bg-primary-container transition-colors rounded font-label-md text-label-md" type="button" data-action-id="create-ticket-5" onClick={actions?.["create-ticket-5"]}>
                              Create Ticket
                          </button>
      </div>
      </div>
      </header>
      {/* Scrollable Content Canvas */}
      <main className="flex-1 overflow-y-auto p-container-padding lg:p-6 lg:px-8 max-w-[1600px] mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Insights &amp; Activity</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Summary trends and status signals for your queues.</p>
      </div>
      <div className="flex items-center gap-2">
      <button className="h-8 px-3 flex items-center gap-2 border border-outline-variant rounded text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md bg-surface" type="button" data-action-id="filter-6" onClick={actions?.["filter-6"]}>
      <ListFilter  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                              Filter
                          </button>
      <button className="h-8 px-3 flex items-center gap-2 border border-outline-variant rounded text-on-surface hover:bg-surface-container-low transition-colors font-label-md text-label-md bg-surface" type="button" data-action-id="export-7" onClick={actions?.["export-7"]}>
      <Download  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                              Export
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
      {/* Metrics Row (Compact Sparklines) */}
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col gap-2">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Open Tickets</span>
      <Circle  style={{fontSize: "18px"}} className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface mt-1">142</div>
      <div className="flex items-center gap-1 font-body-sm text-body-sm text-error">
      <Circle  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
      <span>+12% this week</span>
      </div>
      {/* Minimal Sparkline representation */}
      <div className="h-8 mt-2 w-full flex items-end gap-1">
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[40%]"></div>
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[50%]"></div>
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[30%]"></div>
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[70%]"></div>
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[60%]"></div>
      <div className="w-1/6 bg-error-container rounded-t h-[90%]"></div>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col gap-2">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Resolution</span>
      <Circle  style={{fontSize: "18px"}} className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface mt-1">4.2h</div>
      <div className="flex items-center gap-1 font-body-sm text-body-sm text-primary">
      <Circle  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
      <span>-0.5h this week</span>
      </div>
      <div className="h-8 mt-2 w-full flex items-end gap-1">
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[80%]"></div>
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[75%]"></div>
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[70%]"></div>
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[60%]"></div>
      <div className="w-1/6 bg-surface-container-highest rounded-t h-[50%]"></div>
      <div className="w-1/6 bg-primary-container opacity-50 rounded-t h-[40%]"></div>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col gap-2 md:col-span-1 lg:col-span-2">
      <div className="flex justify-between items-start">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">SLA Breaches</span>
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <EllipsisVertical  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="font-headline-lg text-headline-lg text-on-surface mt-1">3</div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-sm">Requires immediate attention. 2 critical network issues and 1 hardware replacement overdue.</p>
      <div className="mt-auto pt-2">
      <button className="text-error hover:bg-error-container hover:text-on-error-container transition-colors px-2 py-1 -ml-2 rounded font-label-md text-label-md flex items-center gap-1" type="button" data-action-id="view-breached-tickets-9" onClick={actions?.["view-breached-tickets-9"]}>
                                  View Breached Tickets <ArrowRight  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Main Chart Area (Distribution) */}
      <div className="bg-surface border border-outline-variant rounded flex flex-col md:col-span-3 lg:col-span-3 min-h-[320px]">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest rounded-t">
      <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">State &amp; Priority Distribution</h3>
      <div className="flex gap-2">
      <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant"><div className="w-2 h-2 rounded bg-error"></div> High</span>
      <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant"><div className="w-2 h-2 rounded bg-primary-container"></div> Med</span>
      <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant"><div className="w-2 h-2 rounded bg-surface-container-high"></div> Low</span>
      </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-end relative">
      {/* Y Axis Labels */}
      <div className="absolute left-4 top-6 bottom-8 flex flex-col justify-between font-code text-code text-on-surface-variant opacity-70">
      <span>50</span>
      <span>40</span>
      <span>30</span>
      <span>20</span>
      <span>10</span>
      <span>0</span>
      </div>
      {/* Grid Lines */}
      <div className="absolute left-12 right-6 top-6 bottom-8 flex flex-col justify-between pointer-events-none">
      <div className="w-full h-px bg-outline-variant opacity-30"></div>
      <div className="w-full h-px bg-outline-variant opacity-30"></div>
      <div className="w-full h-px bg-outline-variant opacity-30"></div>
      <div className="w-full h-px bg-outline-variant opacity-30"></div>
      <div className="w-full h-px bg-outline-variant opacity-30"></div>
      <div className="w-full h-px bg-outline-variant opacity-30"></div>
      </div>
      {/* Bars */}
      <div className="pl-10 pr-2 h-[200px] flex justify-around items-end z-10 w-full">
      {/* New */}
      <div className="flex flex-col justify-end items-center w-12 h-full group">
      <div className="w-8 flex flex-col gap-px h-[80%] relative">
      <div className="w-full bg-error rounded-t hover:brightness-110 transition-colors cursor-pointer" style={{height: "15%"}}></div>
      <div className="w-full bg-primary-container hover:brightness-110 transition-colors cursor-pointer" style={{height: "45%"}}></div>
      <div className="w-full bg-surface-container-highest hover:brightness-110 transition-colors cursor-pointer" style={{height: "40%"}}></div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-2">New</span>
      </div>
      {/* Open */}
      <div className="flex flex-col justify-end items-center w-12 h-full">
      <div className="w-8 flex flex-col gap-px h-[60%]">
      <div className="w-full bg-error rounded-t" style={{height: "10%"}}></div>
      <div className="w-full bg-primary-container" style={{height: "50%"}}></div>
      <div className="w-full bg-surface-container-highest" style={{height: "40%"}}></div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-2">Open</span>
      </div>
      {/* Pending */}
      <div className="flex flex-col justify-end items-center w-12 h-full">
      <div className="w-8 flex flex-col gap-px h-[30%]">
      <div className="w-full bg-error rounded-t" style={{height: "0%"}}></div>
      <div className="w-full bg-primary-container" style={{height: "30%"}}></div>
      <div className="w-full bg-surface-container-highest" style={{height: "70%"}}></div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-2">Pending</span>
      </div>
      {/* Resolved */}
      <div className="flex flex-col justify-end items-center w-12 h-full">
      <div className="w-8 flex flex-col gap-px h-[90%]">
      <div className="w-full bg-error rounded-t" style={{height: "5%"}}></div>
      <div className="w-full bg-primary-container" style={{height: "25%"}}></div>
      <div className="w-full bg-surface-container-highest" style={{height: "70%"}}></div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-2">Resolved</span>
      </div>
      </div>
      </div>
      </div>
      {/* Actionable Follow-up Hints */}
      <div className="bg-surface border border-outline-variant rounded flex flex-col md:col-span-3 lg:col-span-1 min-h-[320px]">
      <div className="p-4 border-b border-outline-variant bg-surface-container-lowest rounded-t flex justify-between items-center">
      <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Action Required</h3>
      <span className="bg-error-container text-on-error-container font-label-sm px-2 py-0.5 rounded">3 Items</span>
      </div>
      <div className="flex-1 flex flex-col divide-y divide-outline-variant overflow-y-auto">
      <div className="p-4 hover:bg-surface-container-lowest transition-colors cursor-pointer group">
      <div className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-error mt-1.5 shrink-0"></div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">SLA Warning: TKT-8902</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">Network outage in Building 4 reported 3 hours ago. Escalation required.</p>
      </div>
      </div>
      </div>
      <div className="p-4 hover:bg-surface-container-lowest transition-colors cursor-pointer group">
      <div className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-tertiary-container mt-1.5 shrink-0"></div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Unassigned Critical</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">Database failover alert requires immediate routing to DBA team.</p>
      </div>
      </div>
      </div>
      <div className="p-4 hover:bg-surface-container-lowest transition-colors cursor-pointer group">
      <div className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Agent Capacity High</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">L1 Support queue depth exceeding threshold. Consider reassigning resources.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="mt-8 mb-4 border-t border-outline-variant pt-4 text-center font-label-sm text-label-sm text-on-surface-variant">
                      Last updated: Just now
                  </div>
      </main>
      </div>
    </>
  );
}
