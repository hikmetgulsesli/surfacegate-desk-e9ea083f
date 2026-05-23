// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ticket Editor - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, Info, Save, User } from "lucide-react";


export type TicketEditorSurfacegateDeskActionId = "button-1-1" | "cancel-2" | "save-changes-3";

export interface TicketEditorSurfacegateDeskProps {
  actions?: Partial<Record<TicketEditorSurfacegateDeskActionId, () => void>>;
}

export function TicketEditorSurfacegateDesk({ actions }: TicketEditorSurfacegateDeskProps) {
  return (
    <>
      {/* TopNavBar (Linear/Transactional layout, minimized nav) */}
      <header className="bg-surface border-b border-outline-variant h-standard-row-height sticky top-0 z-40 w-full flex items-center justify-between px-container-padding">
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant hover:bg-surface-container rounded p-1 transition-colors duration-200" title="Go Back" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-lg text-headline-lg font-black text-primary">SurfaceGate Desk</div>
      <div className="h-6 w-px bg-outline-variant mx-2"></div>
      <div className="font-headline-md text-headline-md text-on-surface">Edit Ticket TKT-8924</div>
      </div>
      <div className="flex items-center gap-4">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Editing as John Doe</span>
      </div>
      </header>
      <main className="flex-1 overflow-y-auto w-full max-w-[800px] mx-auto py-8 px-container-padding">
      {/* Unsaved Changes Banner */}
      <div className="bg-surface-container-high border border-outline-variant rounded mb-6 p-3 flex items-center gap-3">
      <Info className="text-primary fill-icon" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">You have unsaved changes. Please save to update the ticket.</span>
      </div>
      <form className="space-y-6">
      {/* Subject */}
      <div className="space-y-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="subject">
                          Subject <span aria-hidden={true} className="text-error">*</span>
      </label>
      <input className="w-full h-8 px-2 border border-outline-variant rounded bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md text-on-surface transition-shadow" id="subject" name="subject" required={true} type="text" value="System performance degradation during peak hours" />
      </div>
      {/* Description */}
      <div className="space-y-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="description">
                          Description <span aria-hidden={true} className="text-error">*</span>
      </label>
      {/* Simulation of an empty required field with validation error */}
      <textarea aria-describedby="description-error" aria-invalid="true" className="w-full p-2 border border-error rounded bg-error-container/10 focus:outline-none focus:ring-2 focus:ring-error focus:border-transparent font-body-md text-body-md text-on-surface transition-shadow" id="description" name="description" required={true} rows={5}></textarea>
      <p className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-1" id="description-error">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                          Description is required to proceed.
                      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Priority */}
      <div className="space-y-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="priority">
                              Priority
                          </label>
      <select className="w-full h-8 px-2 border border-outline-variant rounded bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md text-on-surface transition-shadow" id="priority" name="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option selected={true} value="high">High</option>
      <option value="critical">Critical</option>
      </select>
      </div>
      {/* Queue */}
      <div className="space-y-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="queue">
                              Queue
                          </label>
      <select className="w-full h-8 px-2 border border-outline-variant rounded bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md text-on-surface transition-shadow" id="queue" name="queue">
      <option value="general">General Support</option>
      <option value="network">Network Infrastructure</option>
      <option selected={true} value="software">Software Development</option>
      <option value="hardware">Hardware Provisioning</option>
      </select>
      </div>
      </div>
      {/* Assignee */}
      <div className="space-y-1">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-1" htmlFor="assignee">
                          Assignee
                      </label>
      <div className="relative">
      <input className="w-full h-8 px-2 pl-8 border border-outline-variant rounded bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md text-on-surface transition-shadow" id="assignee" name="assignee" type="text" value="Sarah Jenkins" />
      <User className="absolute left-2 top-1.5 text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Action Area */}
      <div className="pt-6 border-t border-outline-variant flex items-center justify-end gap-3">
      <button className="px-4 py-2 rounded font-label-md text-label-md text-secondary border border-secondary hover:bg-surface-container transition-colors duration-150" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>
                          Cancel
                      </button>
      <button className="px-4 py-2 rounded font-label-md text-label-md text-on-primary bg-primary-container hover:bg-primary transition-colors duration-150 flex items-center gap-2 shadow-sm" type="submit" data-action-id="save-changes-3" onClick={actions?.["save-changes-3"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                          Save Changes
                      </button>
      </div>
      </form>
      </main>
    </>
  );
}
