// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Queue and Status Management - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Ellipsis, ListFilter, Menu, Plus, Search, Settings } from "lucide-react";


export type QueueAndStatusManagementSurfacegateDeskActionId = "new-ticket-1" | "button-2-2" | "create-ticket-3" | "button-4-4" | "button-5-5" | "filter-6" | "button-7-7" | "button-8-8" | "button-9-9" | "tickets-1" | "queues-2" | "agents-3" | "insights-4" | "settings-5" | "help-6";

export interface QueueAndStatusManagementSurfacegateDeskProps {
  actions?: Partial<Record<QueueAndStatusManagementSurfacegateDeskActionId, () => void>>;
}

export function QueueAndStatusManagementSurfacegateDesk({ actions }: QueueAndStatusManagementSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low border-r border-outline-variant flex flex-col h-full w-sidebar-width shrink-0 hidden md:flex">
      {/* Header */}
      <div className="px-container-padding py-6 border-b border-outline-variant/50">
      <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-bold">
                          S
                      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary">SurfaceGate</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Service Desk</p>
      </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary flex items-center justify-center gap-2 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity" type="button" data-action-id="new-ticket-1" onClick={actions?.["new-ticket-1"]}>
      <Plus  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      New Ticket
                  </button>
      </div>
      {/* Main Tabs */}
      <div className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="tickets-1" onClick={actions?.["tickets-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Tickets</span>
      </a>
      {/* Active Tab */}
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container border-l-4 border-primary cursor-pointer active:scale-95" href="#" data-action-id="queues-2" onClick={actions?.["queues-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queues</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="agents-3" onClick={actions?.["agents-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Agents</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </div>
      {/* Footer Tabs */}
      <div className="p-4 border-t border-outline-variant/50 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 cursor-pointer rounded" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150 cursor-pointer rounded" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Help</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
      {/* TopNavBar (Mobile Only replacement for sidebar, or full width top bar if needed based on design system. Adapting to standard dashboard layout: Sidebar + Main Area Header) */}
      <header className="bg-surface border-b border-outline-variant h-standard-row-height flex items-center justify-between px-container-padding w-full shrink-0">
      {/* Mobile Menu Button (visible only on small screens) */}
      <button className="md:hidden text-on-surface-variant mr-4" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="flex items-center gap-4 flex-1">
      <h2 className="font-headline-md text-headline-md font-semibold text-on-surface hidden md:block">Queue Management</h2>
      <h2 className="font-headline-md text-headline-md font-semibold text-primary md:hidden">SurfaceGate</h2>
      {/* Search (on left as per JSON) */}
      <div className="relative max-w-md w-full ml-0 md:ml-8 hidden sm:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-3 bg-surface-container-low border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary text-body-sm transition-colors outline-none placeholder:text-outline" placeholder="Search queues, tickets..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4">
      {/* Trailing Primary Action (from JSON) */}
      <button className="hidden sm:flex items-center gap-2 bg-primary-container text-on-primary px-3 py-1.5 rounded font-label-md text-label-md hover:opacity-90 transition-opacity" type="button" data-action-id="create-ticket-3" onClick={actions?.["create-ticket-3"]}>
                          Create Ticket
                      </button>
      {/* Trailing Icon Actions */}
      <button className="text-on-surface-variant hover:bg-surface-container-high p-1.5 rounded-full transition-colors relative" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border border-surface"></span>
      </button>
      <button className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant hover:border-primary transition-colors" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A close up portrait of a confident male professional with short dark hair, wearing a dark blue button down shirt against a clean, blurred, light gray background. High key, even, modern office lighting. Composed, efficient, authoritative aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhzvoXVoMQXb5RirMfFSzzMKLzXam97C7w5TpAoWSotrlZN-BSB1iygcHpvTiAf0mUtp3DfvdKzeUMKXI2GwEf_JtKNu9f56C4izYFHaNlgBGocDXqRO4Gjp3sHbeZ1zseXZAl-pM7ks4tDaztabSzKNWgmWIilJOCmejAMmF9zv1IeTv-Vto417IV7jL3pGvD-kL1y_Z00pnA9-d9do5qkPOB1OeWOhjUDwuinqD3CH_J4PntDnw1oky3RrdD42VF0WTeS1T_MJpH" />
      </button>
      </div>
      </header>
      {/* Board Area */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden bg-surface-container-low/30 kanban-board">
      <div className="p-container-padding h-full flex flex-col">
      {/* Board Controls */}
      <div className="flex items-center justify-between mb-4 shrink-0">
      <div className="flex items-center gap-4">
      <select className="h-8 bg-surface border border-outline-variant rounded px-3 py-1 font-label-md text-label-md focus:border-primary focus:ring-1 focus:ring-primary outline-none">
      <option>L1 Support Queue</option>
      <option>L2 Infrastructure</option>
      <option>Vendor Escalations</option>
      </select>
      <div className="h-4 w-px bg-outline-variant hidden sm:block"></div>
      <div className="flex items-center gap-2 hidden sm:flex">
      <span className="w-2 h-2 rounded-full bg-error"></span> <span className="font-body-sm text-body-sm text-on-surface-variant">Breached</span>
      <span className="w-2 h-2 rounded-full bg-[#FFAB00] ml-2"></span> <span className="font-body-sm text-body-sm text-on-surface-variant">At Risk</span>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="h-8 px-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-low text-on-surface-variant font-label-md text-label-md flex items-center gap-2" type="button" data-action-id="filter-6" onClick={actions?.["filter-6"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" /> Filter
                              </button>
      </div>
      </div>
      {/* Kanban Lanes */}
      <div className="flex gap-4 h-full overflow-y-hidden min-w-max pb-4">
      {/* Lane 1: Triage */}
      <div className="w-[300px] flex flex-col bg-surface-container-low rounded-lg border border-outline-variant/50 shrink-0 h-full">
      <div className="p-3 border-b border-outline-variant/50 flex items-center justify-between shrink-0">
      <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Triage <span className="text-on-surface-variant font-normal ml-1">(3)</span></h3>
      <button className="text-on-surface-variant hover:text-primary" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}><Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="p-2 flex-1 overflow-y-auto flex flex-col gap-2 kanban-column">
      {/* Ticket Card */}
      <div className="ticket-card bg-surface p-3 rounded border border-outline-variant hover:border-primary-fixed-dim transition-colors relative group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-code text-code text-on-surface-variant">INC-1042</span>
      {/* Status Badge High Contrast */}
      <span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[10px] uppercase border border-error/20">P1 - Critical</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-semibold mb-2 line-clamp-2">VPN Authentication Failing Globally</h4>
      <div className="sla-bar-container"><div className="sla-bar-progress sla-breached"></div></div>
      <div className="mt-3 flex items-center justify-between">
      <div className="flex items-center gap-1 text-error">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px]">-45m</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center text-outline text-[10px] font-bold">UN</div>
      </div>
      </div>
      </div>
      </div>
      {/* Lane 2: In Progress */}
      <div className="w-[300px] flex flex-col bg-surface-container-low rounded-lg border border-outline-variant/50 shrink-0 h-full">
      <div className="p-3 border-b border-outline-variant/50 flex items-center justify-between shrink-0">
      <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">In Progress <span className="text-on-surface-variant font-normal ml-1">(2)</span></h3>
      <button className="text-on-surface-variant hover:text-primary" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}><Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="p-2 flex-1 overflow-y-auto flex flex-col gap-2 kanban-column">
      {/* Ticket Card */}
      <div className="ticket-card bg-surface p-3 rounded border border-outline-variant hover:border-primary-fixed-dim transition-colors relative group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-code text-code text-on-surface-variant">REQ-8831</span>
      <span className="px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant font-label-sm text-[10px] uppercase border border-outline-variant/50">P3 - Normal</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-semibold mb-2 line-clamp-2">New Employee Onboarding: Sarah J.</h4>
      <div className="sla-bar-container"><div className="sla-bar-progress sla-healthy"></div></div>
      <div className="mt-3 flex items-center justify-between">
      <div className="flex items-center gap-1 text-on-surface-variant">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px]">2d in state</span>
      </div>
      <img alt="Assignee" className="w-6 h-6 rounded-full border border-surface" data-alt="A small circular avatar portrait of a smiling young woman with long dark hair. Modern office environment. Clean, bright, authoritative service desk style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD85bu4k9RCBTtikusiD8Q4pYpJ4Xso52EKaunaHEwZqgRXpfeYl2YPW7AP_ZmGH4vmOrevM3b1YPXvfboNjxlsTA98J_-3LJ2oybRluzh6ed02_fJNDxH2uzTNASdZR4s7ztUj0tCmyZ_-15k9LuNTn6xm76DaMv-bQ29yRmkkSZiZ47kGstIrXii9sj7GJGRwxxuIf9b05YfLtbguUiwOiujRTjE9vnPZhT4SDOPRKMDUC8UTTdG8waJbyjzvF9sAhJxJGO9O_wty" />
      </div>
      </div>
      </div>
      </div>
      {/* Lane 3: Pending Vendor */}
      <div className="w-[300px] flex flex-col bg-surface-container-low rounded-lg border border-outline-variant/50 shrink-0 h-full opacity-80">
      <div className="p-3 border-b border-outline-variant/50 flex items-center justify-between shrink-0">
      <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Pending Vendor <span className="text-on-surface-variant font-normal ml-1">(1)</span></h3>
      <button className="text-on-surface-variant hover:text-primary" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}><Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="p-2 flex-1 overflow-y-auto flex flex-col gap-2 kanban-column">
      {/* Ticket Card */}
      <div className="ticket-card bg-surface p-3 rounded border border-outline-variant border-dashed hover:border-solid hover:border-primary-fixed-dim transition-colors relative group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-code text-code text-on-surface-variant">INC-0992</span>
      <span className="px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-[10px] uppercase border border-tertiary/20">P2 - High</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-semibold mb-2 line-clamp-2 text-on-surface-variant">Database cluster replication lag</h4>
      <div className="sla-bar-container"><div className="sla-bar-progress bg-outline-variant w-full"></div></div>
      <div className="mt-3 flex items-center justify-between">
      <div className="flex items-center gap-1 text-[#FFAB00]">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px]">Awaiting AWS</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center text-outline text-[10px] font-bold">UN</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
