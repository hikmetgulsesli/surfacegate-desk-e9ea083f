// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ticket Operations - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, Circle, EllipsisVertical, ListFilter, Menu, Pencil, Plus, Search, Settings, X } from "lucide-react";


export type TicketOperationsSurfacegateDeskActionId = "new-ticket-1" | "button-2-2" | "create-3" | "filter-4" | "button-5-5" | "button-6-6" | "button-7-7" | "button-8-8" | "edit-9" | "comment-10" | "tickets-1" | "queues-2" | "agents-3" | "insights-4" | "settings-5" | "help-6";

export interface TicketOperationsSurfacegateDeskProps {
  actions?: Partial<Record<TicketOperationsSurfacegateDeskActionId, () => void>>;
}

export function TicketOperationsSurfacegateDesk({ actions }: TicketOperationsSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full w-sidebar-width bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline sticky top-0 left-0 z-50">
      {/* Brand */}
      <div className="px-container-padding py-4 border-b border-outline-variant">
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">SurfaceGate</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Service Desk</p>
      </div>
      {/* CTA */}
      <div className="px-container-padding py-4">
      <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-2 rounded flex items-center justify-center gap-2 hover:bg-primary transition-colors" type="button" data-action-id="new-ticket-1" onClick={actions?.["new-ticket-1"]}>
      <Plus  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                      New Ticket
                  </button>
      </div>
      {/* Navigation Tabs */}
      <div className="flex-1 overflow-y-auto">
      <ul className="flex flex-col py-2">
      {/* Active Item: Tickets */}
      <li>
      <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary-fixed-dim text-on-secondary-container dark:text-on-secondary-fixed border-l-4 border-primary dark:border-primary-fixed cursor-pointer active:scale-95" href="#" data-action-id="tickets-1" onClick={actions?.["tickets-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Tickets</span>
      </a>
      </li>
      {/* Inactive Items */}
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="queues-2" onClick={actions?.["queues-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queues</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="agents-3" onClick={actions?.["agents-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Agents</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer active:scale-95" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </li>
      </ul>
      </div>
      {/* Footer Navigation */}
      <div className="border-t border-outline-variant py-2">
      <ul className="flex flex-col">
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-150" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Help</span>
      </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col min-w-0 bg-surface">
      {/* TopNavBar (Mobile Header Fallback or Auxiliary Actions) */}
      <header className="h-standard-row-height sticky top-0 z-40 w-full flex items-center justify-between px-container-padding bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline md:hidden">
      <div className="flex items-center gap-2">
      <button className="text-on-surface-variant" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <span className="font-headline-md text-headline-md font-black text-primary dark:text-primary-fixed">SurfaceGate</span>
      </div>
      <div className="flex items-center gap-4">
      <Search className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <button className="bg-primary-container text-on-primary-container px-3 py-1 rounded font-label-sm text-label-sm" type="button" data-action-id="create-3" onClick={actions?.["create-3"]}>Create</button>
      </div>
      </header>
      {/* Workspace Layout */}
      <div className="flex-1 flex flex-col xl:flex-row overflow-hidden relative">
      {/* Center Column (List/Table) */}
      <div className="flex-1 flex flex-col min-w-0 max-w-[1600px] mx-auto w-full border-r border-outline-variant">
      {/* Toolbar Area */}
      <div className="px-container-padding py-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-outline-variant bg-surface-bright">
      {/* Search & Filter */}
      <div className="flex-1 flex items-center gap-2 max-w-2xl w-full">
      <div className="relative flex-1">
      <Search  style={{fontSize: "20px"}} className="absolute left-2.5 top-1.5 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-9 pr-3 py-1 border border-outline-variant rounded bg-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Search tickets..." type="text" />
      </div>
      <button className="h-8 px-3 flex items-center gap-1 border border-secondary text-secondary rounded bg-transparent hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Filter
                              </button>
      </div>
      {/* Metrics Summary */}
      <div className="flex items-center gap-6">
      <div className="flex flex-col items-end">
      <span className="font-headline-lg text-headline-lg text-on-surface leading-none">142</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Open</span>
      </div>
      <div className="flex flex-col items-end">
      <span className="font-headline-lg text-headline-lg text-tertiary leading-none">12</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">SLA at Risk</span>
      </div>
      <div className="flex flex-col items-end">
      <span className="font-headline-lg text-headline-lg text-error leading-none">3</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Overdue</span>
      </div>
      </div>
      </div>
      {/* Table Container */}
      <div className="flex-1 overflow-auto bg-surface relative">
      <table className="w-full text-left whitespace-nowrap border-collapse">
      <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10 shadow-sm">
      <tr>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-10">
      <input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" />
      </th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-24">ID</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Subject</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-32">Status</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-24">Priority</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-40">Assignee</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-32">SLA</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-16"></th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm">
      {/* Active/Selected Row */}
      <tr className="h-standard-row-height border-b border-outline-variant bg-surface-container-high hover:bg-surface-container-highest cursor-pointer relative">
      <td className="px-4">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary"></div>
      <input checked={true} className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" />
      </td>
      <td className="px-4 font-code text-code text-on-surface-variant">SRV-8942</td>
      <td className="px-4 text-on-surface font-medium truncate max-w-[300px]">Network switch failure in Building 4 - Urgent reset required</td>
      <td className="px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed">In Progress</span>
      </td>
      <td className="px-4 text-error font-medium flex items-center gap-1">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> High
                                      </td>
      <td className="px-4 text-on-surface-variant flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-[10px] text-on-secondary-container font-bold">AK</div>
                                          A. Kumar
                                      </td>
      <td className="px-4">
      <div className="flex flex-col gap-1 w-full max-w-[100px]">
      <span className="text-[11px] text-tertiary font-medium">45m remaining</span>
      <div className="w-full bg-surface-variant h-0.5 rounded-full overflow-hidden">
      <div className="bg-tertiary h-full" style={{width: "80%"}}></div>
      </div>
      </div>
      </td>
      <td className="px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}><EllipsisVertical  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Standard Row 1 */}
      <tr className="h-standard-row-height border-b border-outline-variant hover:bg-surface-container cursor-pointer transition-colors">
      <td className="px-4"><input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" /></td>
      <td className="px-4 font-code text-code text-on-surface-variant">SRV-8941</td>
      <td className="px-4 text-on-surface truncate max-w-[300px]">Request for software license renewal (Adobe Creative Cloud)</td>
      <td className="px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-variant text-on-surface-variant">Open</span>
      </td>
      <td className="px-4 text-on-surface-variant flex items-center gap-1">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" /> Medium
                                      </td>
      <td className="px-4 text-on-surface-variant flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-primary-container flex items-center justify-center text-[10px] text-on-primary-container font-bold">SJ</div>
                                          S. Jones
                                      </td>
      <td className="px-4">
      <div className="flex flex-col gap-1 w-full max-w-[100px]">
      <span className="text-[11px] text-primary font-medium">4h 30m remaining</span>
      <div className="w-full bg-surface-variant h-0.5 rounded-full overflow-hidden">
      <div className="bg-primary h-full" style={{width: "30%"}}></div>
      </div>
      </div>
      </td>
      <td className="px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}><EllipsisVertical  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Standard Row 2 */}
      <tr className="h-standard-row-height border-b border-outline-variant hover:bg-surface-container cursor-pointer transition-colors">
      <td className="px-4"><input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" /></td>
      <td className="px-4 font-code text-code text-on-surface-variant">SRV-8938</td>
      <td className="px-4 text-on-surface truncate max-w-[300px]">New employee onboarding setup for Marketing dept</td>
      <td className="px-4">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-variant text-on-surface-variant">Open</span>
      </td>
      <td className="px-4 text-on-surface-variant flex items-center gap-1">
      <ArrowDown className="text-[14px]" aria-hidden={true} focusable="false" /> Low
                                      </td>
      <td className="px-4 text-on-surface-variant flex items-center gap-2">
      <span className="text-outline italic text-[11px]">Unassigned</span>
      </td>
      <td className="px-4">
      <div className="flex flex-col gap-1 w-full max-w-[100px]">
      <span className="text-[11px] text-on-surface-variant font-medium">1d 4h remaining</span>
      <div className="w-full bg-surface-variant h-0.5 rounded-full overflow-hidden">
      <div className="bg-outline h-full" style={{width: "10%"}}></div>
      </div>
      </div>
      </td>
      <td className="px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}><EllipsisVertical  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Right Sidebar: Selected Item Preview */}
      <div className="hidden xl:flex flex-col w-[380px] bg-surface border-l border-outline-variant z-20 overflow-y-auto">
      {/* Preview Header */}
      <div className="p-container-padding border-b border-outline-variant bg-surface-container-low sticky top-0">
      <div className="flex justify-between items-start mb-2">
      <span className="font-code text-code text-on-surface-variant">SRV-8942</span>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}><X  style={{fontSize: "20px"}} aria-hidden={true} focusable="false" /></button>
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-3 leading-snug">Network switch failure in Building 4 - Urgent reset required</h2>
      <div className="flex gap-2">
      <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-1.5 rounded flex items-center justify-center gap-1 hover:bg-primary-container transition-colors" type="button" data-action-id="edit-9" onClick={actions?.["edit-9"]}>
      <Pencil  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" /> Edit
                              </button>
      <button className="flex-1 border border-secondary text-secondary font-label-md text-label-md py-1.5 rounded flex items-center justify-center gap-1 hover:bg-surface-container transition-colors" type="button" data-action-id="comment-10" onClick={actions?.["comment-10"]}>
      <Circle  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" /> Comment
                              </button>
      </div>
      </div>
      {/* Attributes Grid */}
      <div className="p-container-padding border-b border-outline-variant">
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-body-sm">
      <div>
      <span className="block text-label-sm font-label-sm text-on-surface-variant uppercase mb-1">Status</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed">In Progress</span>
      </div>
      <div>
      <span className="block text-label-sm font-label-sm text-on-surface-variant uppercase mb-1">Priority</span>
      <span className="text-error font-medium flex items-center gap-1 text-[13px]"><ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> High</span>
      </div>
      <div>
      <span className="block text-label-sm font-label-sm text-on-surface-variant uppercase mb-1">Assignee</span>
      <span className="text-on-surface flex items-center gap-2 text-[13px]">
      <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-[10px] text-on-secondary-container font-bold">AK</div>
                                      Amit Kumar
                                  </span>
      </div>
      <div>
      <span className="block text-label-sm font-label-sm text-on-surface-variant uppercase mb-1">Requester</span>
      <span className="text-on-surface text-[13px]">Elena Rostova</span>
      </div>
      </div>
      </div>
      {/* Activity Feed */}
      <div className="p-container-padding flex-1">
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Activity</h3>
      <div className="relative border-l-2 border-surface-variant ml-2 space-y-6">
      {/* Activity Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-tertiary rounded-full -left-[7px] top-1 border-2 border-surface"></div>
      <div className="text-[12px] text-on-surface-variant mb-1">10 mins ago • System</div>
      <div className="bg-surface-container rounded p-3 text-body-sm border border-outline-variant">
                                      Status changed from <span className="font-medium text-on-surface">Open</span> to <span className="font-medium text-on-surface">In Progress</span>
      </div>
      </div>
      {/* Comment Item */}
      <div className="relative pl-6">
      <div className="absolute w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-[10px] text-on-secondary-container font-bold -left-[11px] top-0 border-2 border-surface">AK</div>
      <div className="text-[12px] text-on-surface-variant mb-1">45 mins ago • Amit Kumar</div>
      <div className="bg-surface-container-high rounded p-3 text-body-sm text-on-surface border border-outline-variant">
                                      I'm heading over to Building 4 now to check the physical connections before initiating a remote reset.
                                  </div>
      </div>
      {/* Creation Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-outline-variant rounded-full -left-[7px] top-1 border-2 border-surface"></div>
      <div className="text-[12px] text-on-surface-variant mb-1">2 hours ago • Elena Rostova</div>
      <div className="text-body-sm text-on-surface-variant italic">
                                      Ticket created via Email Support Channel.
                                  </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
