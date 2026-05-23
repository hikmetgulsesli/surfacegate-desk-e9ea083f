// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Agent Workload - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, ListFilter, Search, Settings, TriangleAlert } from "lucide-react";


export type AgentWorkloadSurfacegateDeskActionId = "button-1-1" | "button-2-2" | "create-ticket-3" | "filter-4" | "reassign-5" | "assign-6" | "assign-7";

export interface AgentWorkloadSurfacegateDeskProps {
  actions?: Partial<Record<AgentWorkloadSurfacegateDeskActionId, () => void>>;
}

export function AgentWorkloadSurfacegateDesk({ actions }: AgentWorkloadSurfacegateDeskProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline h-standard-row-height flex items-center justify-between px-container-padding w-full shrink-0 z-40">
      <div className="flex items-center gap-6 h-full">
      <div className="font-headline-lg text-headline-lg font-black text-primary dark:text-primary-fixed flex items-center gap-2">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      SurfaceGate Desk
                  </div>
      <div className="hidden md:flex h-full items-center gap-4">
      <div className="h-full flex items-center px-2 cursor-pointer text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-label-md text-label-md">
                          Dashboards
                      </div>
      <div className="h-full flex items-center px-2 cursor-pointer text-primary dark:text-primary-fixed font-bold border-b-2 border-primary transition-colors duration-200 ease-in-out font-label-md text-label-md">
                          Agents
                      </div>
      <div className="h-full flex items-center px-2 cursor-pointer text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-label-md text-label-md">
                          Tickets
                      </div>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="relative hidden sm:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <input className="h-8 pl-8 pr-3 bg-surface-container-low border border-outline-variant rounded-DEFAULT text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-shadow" placeholder="Search..." type="text" />
      </div>
      <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      <button className="h-8 px-4 bg-primary text-on-primary rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container transition-colors ml-2 hidden sm:flex items-center" type="button" data-action-id="create-ticket-3" onClick={actions?.["create-ticket-3"]}>
                          Create Ticket
                      </button>
      </div>
      </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline w-sidebar-width h-full shrink-0 flex flex-col hidden md:flex">
      <div className="p-4 border-b border-outline-variant/50">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-DEFAULT bg-primary-container text-on-primary flex items-center justify-center font-bold text-headline-md">
                              SG
                          </div>
      <div>
      <div className="font-headline-md text-headline-md text-on-surface">SurfaceGate</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Service Desk</div>
      </div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
      <nav className="flex flex-col gap-1 px-2">
      <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer rounded-DEFAULT font-label-md text-label-md">
      <Circle aria-hidden={true} focusable="false" />
                              Tickets
                          </div>
      <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer rounded-DEFAULT font-label-md text-label-md">
      <Circle aria-hidden={true} focusable="false" />
                              Queues
                          </div>
      <div className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary-fixed-dim text-on-secondary-container dark:text-on-secondary-fixed border-l-4 border-primary dark:border-primary-fixed cursor-pointer font-label-md text-label-md">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                              Agents
                          </div>
      <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-150 cursor-pointer rounded-DEFAULT font-label-md text-label-md">
      <Circle aria-hidden={true} focusable="false" />
                              Insights
                          </div>
      </nav>
      </div>
      <div className="p-2 border-t border-outline-variant/50">
      <div className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer rounded-DEFAULT font-label-md text-label-md">
      <Settings aria-hidden={true} focusable="false" />
                          Settings
                      </div>
      <div className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer rounded-DEFAULT font-label-md text-label-md">
      <Circle aria-hidden={true} focusable="false" />
                          Help
                      </div>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-surface-container-lowest p-container-padding custom-scrollbar">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Agent Workload</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Monitor ticket distribution and agent capacity across all queues.</p>
      </div>
      <div className="flex items-center gap-2">
      <div className="relative">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <input className="h-8 pl-8 pr-3 bg-surface border border-outline-variant rounded-DEFAULT text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full sm:w-48 transition-shadow" placeholder="Find agent..." type="text" />
      </div>
      <button className="h-8 px-3 border border-outline-variant rounded-DEFAULT hover:bg-surface-container-low transition-colors flex items-center gap-1 text-on-surface font-label-md text-label-md" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
                              Filter
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Main Agent List (Takes up most space) */}
      <div className="lg:col-span-2 xl:col-span-3 flex flex-col gap-4">
      {/* Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Agents</div>
      <div className="font-headline-lg text-headline-lg text-on-surface">24</div>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center text-error">
      <TriangleAlert aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Overloaded</div>
      <div className="font-headline-lg text-headline-lg text-on-surface">3</div>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Stale Tickets</div>
      <div className="font-headline-lg text-headline-lg text-on-surface">12</div>
      </div>
      </div>
      </div>
      {/* Agent Table Card */}
      <div className="bg-surface border border-outline-variant rounded-lg flex flex-col flex-1 overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant bg-surface-container-low h-compact-row-height">
      <th className="px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold sticky top-0 bg-surface-container-low z-10 w-1/3">Agent</th>
      <th className="px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold sticky top-0 bg-surface-container-low z-10 text-center">Workload</th>
      <th className="px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold sticky top-0 bg-surface-container-low z-10 text-center">Status</th>
      <th className="px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold sticky top-0 bg-surface-container-low z-10 text-right">Actions</th>
      </tr>
      </thead>
      <tbody>
      {/* Agent Row 1 (Overloaded) */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors h-standard-row-height group">
      <td className="px-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden shrink-0">
      <img alt="Agent Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a customer service agent in a bright, modern office setting. The lighting is soft and high-key, complementing the minimal, light-mode UI style of the application. The image features natural, muted colors with a focus on a clean, corporate modernism aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbBu1UzccuwldOFibFdWadobR15Ut71aSP-Vs4FDvRVWAyb6LptDm_IhZpFN5HlWwq9xoxIc2FHhrXqAOmB11Lj5TIh3OrJ4uBb-4jue_L6VPIEqZkxs_3MtQIU6xIp9XXQYNxkU1YK76Y-oH0TpuAM86PPCgUf6tN8zpFxbKO3eAUnHXCYA5AYEiqC0yAQ3F6M_WxG8bcH6uBwIUlc78F72k5JMgEZ0_T34nixsukFVK_kcaMbKL-8g12jpvthNmGK-xUcwRfh80Y" />
      </div>
      <div className="min-w-0">
      <div className="font-label-md text-label-md text-on-surface truncate">Sarah Jenkins</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">Tier 2 Support</div>
      </div>
      </div>
      </td>
      <td className="px-4">
      <div className="flex flex-col items-center gap-1">
      <div className="flex items-baseline gap-1">
      <span className="font-headline-md text-headline-md text-error font-bold">18</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">/ 15</span>
      </div>
      <div className="w-full max-w-[80px] h-1 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-error w-full"></div>
      </div>
      </div>
      </td>
      <td className="px-4 text-center">
      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-DEFAULT bg-error/10 text-error font-label-sm text-label-sm">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                                      Overloaded
                                                  </div>
      <div className="mt-1 font-body-sm text-body-sm text-tertiary flex items-center justify-center gap-1">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                                                      4 Stale
                                                  </div>
      </td>
      <td className="px-4 text-right">
      <button className="h-8 px-3 border border-outline-variant text-secondary rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100" type="button" data-action-id="reassign-5" onClick={actions?.["reassign-5"]}>
                                                      Reassign
                                                  </button>
      </td>
      </tr>
      {/* Agent Row 2 (Normal) */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors h-standard-row-height group">
      <td className="px-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden shrink-0">
      <img alt="Agent Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a male customer service agent in a bright, modern office setting. The lighting is soft and high-key, complementing the minimal, light-mode UI style of the application. The image features natural, muted colors with a focus on a clean, corporate modernism aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCko4Sij-K0kiT-us96xppqNPOImiY9v7h6LEeyCtS9DOulCLarde7fUjSLpysMJpwPJ4_fdcT2Ktm67EDNFdAJZRKWVKPZrlndepoASeOl_xwI9PDyr1_w-Y4OhSnVkczEjxLVJ1tnvwBD81Ok2e5Uqru1wRGwwDYHkLL9LtRypNNAz6kolwsdSDyUpprVyBRA5NtjqLtm_yZxvhsAEipWFnDvkr4G2tG6H7rzWDdILeEmlm3IWPePSylP61H1hmZjBDq86If6LYfP" />
      </div>
      <div className="min-w-0">
      <div className="font-label-md text-label-md text-on-surface truncate">Marcus Chen</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">Tier 1 Support</div>
      </div>
      </div>
      </td>
      <td className="px-4">
      <div className="flex flex-col items-center gap-1">
      <div className="flex items-baseline gap-1">
      <span className="font-headline-md text-headline-md text-on-surface font-bold">8</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">/ 20</span>
      </div>
      <div className="w-full max-w-[80px] h-1 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary w-[40%]"></div>
      </div>
      </div>
      </td>
      <td className="px-4 text-center">
      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-DEFAULT bg-primary/10 text-primary font-label-sm text-label-sm">
                                                      Optimal
                                                  </div>
      </td>
      <td className="px-4 text-right">
      <button className="h-8 px-3 border border-outline-variant text-secondary rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100" type="button" data-action-id="assign-6" onClick={actions?.["assign-6"]}>
                                                      Assign
                                                  </button>
      </td>
      </tr>
      {/* Agent Row 3 (Light) */}
      <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors h-standard-row-height group">
      <td className="px-4">
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden shrink-0 flex items-center justify-center text-on-surface-variant font-label-md">
                                                          AL
                                                      </div>
      <div className="min-w-0">
      <div className="font-label-md text-label-md text-on-surface truncate">Amanda Lopez</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">Billing Specialist</div>
      </div>
      </div>
      </td>
      <td className="px-4">
      <div className="flex flex-col items-center gap-1">
      <div className="flex items-baseline gap-1">
      <span className="font-headline-md text-headline-md text-on-surface font-bold">3</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">/ 10</span>
      </div>
      <div className="w-full max-w-[80px] h-1 bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary-fixed-dim w-[30%]"></div>
      </div>
      </div>
      </td>
      <td className="px-4 text-center">
      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                                                      Available
                                                  </div>
      </td>
      <td className="px-4 text-right">
      <button className="h-8 px-3 border border-outline-variant text-secondary rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100" type="button" data-action-id="assign-7" onClick={actions?.["assign-7"]}>
                                                      Assign
                                                  </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      {/* Right Sidebar (Activity Feed) */}
      <div className="lg:col-span-1 xl:col-span-1 flex flex-col gap-4">
      <div className="bg-surface border border-outline-variant rounded-lg p-4 flex-1 overflow-hidden flex flex-col h-[500px] lg:h-auto">
      <div className="flex items-center gap-2 border-b border-outline-variant pb-3 mb-3">
      <Circle className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <h2 className="font-headline-md text-headline-md text-on-surface">Recent Activity</h2>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
      <div className="relative border-l border-outline-variant ml-3 space-y-6 pb-4">
      {/* Activity Item 1 */}
      <div className="relative pl-6">
      <div className="absolute w-2 h-2 bg-primary rounded-full -left-[4px] top-1.5 border-2 border-surface"></div>
      <div className="font-label-md text-label-md text-on-surface">Ticket #4928 reassigned</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">From <span className="font-semibold text-on-surface">Sarah Jenkins</span> to <span className="font-semibold text-on-surface">Marcus Chen</span></div>
      <div className="font-code text-code text-outline mt-1">2 mins ago</div>
      </div>
      {/* Activity Item 2 */}
      <div className="relative pl-6">
      <div className="absolute w-2 h-2 bg-surface-variant rounded-full -left-[4px] top-1.5 border-2 border-surface"></div>
      <div className="font-label-md text-label-md text-on-surface">Auto-routing applied</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">5 incoming tickets distributed to Tier 1</div>
      <div className="font-code text-code text-outline mt-1">15 mins ago</div>
      </div>
      {/* Activity Item 3 */}
      <div className="relative pl-6">
      <div className="absolute w-2 h-2 bg-error rounded-full -left-[4px] top-1.5 border-2 border-surface"></div>
      <div className="font-label-md text-label-md text-error">SLA Warning</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ticket #4910 reached 90% SLA threshold under <span className="font-semibold text-on-surface">Sarah Jenkins</span></div>
      <div className="font-code text-code text-outline mt-1">1 hr ago</div>
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
