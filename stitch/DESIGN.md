---
name: SurfaceGate Desk Design System
colors:
  surface: '#faf9ff'
  surface-dim: '#ccdaff'
  surface-bright: '#faf9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d8e2ff'
  on-surface: '#051a3e'
  on-surface-variant: '#434654'
  inverse-surface: '#1d3054'
  inverse-on-surface: '#edf0ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#4f5f7b'
  on-secondary: '#ffffff'
  secondary-container: '#cdddff'
  on-secondary-container: '#51617e'
  tertiary: '#7b2600'
  on-tertiary: '#ffffff'
  tertiary-container: '#a33500'
  on-tertiary-container: '#ffc6b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b7c7e8'
  on-secondary-fixed: '#091c35'
  on-secondary-fixed-variant: '#374763'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812800'
  background: '#faf9ff'
  on-background: '#051a3e'
  surface-variant: '#d8e2ff'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01rem
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02rem
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
  code:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  gutter-table: 8px
  sidebar-width: 240px
  compact-row-height: 36px
  standard-row-height: 48px
---

## Brand & Style
The design system is engineered for high-velocity service desk environments where information density is a requirement, not a preference. The brand personality is **composed, efficient, and authoritative**. It aims to reduce the cognitive load on agents by utilizing a "Dense but Calm" aesthetic.

The style draws from **Corporate Modernism** with a focus on functional minimalism. It avoids decorative elements in favor of structural clarity, using a monochromatic base punctuated by high-signal semantic colors. The visual language conveys reliability and precision, ensuring that "power users" can navigate complex ticket lifecycles without visual fatigue.

## Colors
The palette is dominated by a refined range of neutral grays to provide a stable backdrop for data. 

- **Primary Blue:** Reserved for primary actions, active states, and focus indicators. 
- **Neutrals:** Used for typography, borders, and backgrounds to create distinct UI layers without high-contrast fatigue.
- **Semantic Accents:** Ticket priorities and SLA statuses use a specific traffic-light system optimized for legibility. "High" and "Overdue" utilize a saturated red to demand immediate attention, while "Healthy" signals use a muted green to recede into the background.
- **Surface Tints:** Subtle gray washes (#F4F5F7) distinguish navigation sidebars from the main workspace.

## Typography
This design system utilizes **Inter** for its exceptional legibility in small sizes and high-density layouts. 

- **Hierarchy:** The system prioritizes the `body-sm` (13px) for ticket lists and table data to maximize information density. `label-sm` is used for metadata and status badges to create visual distinction from the main content.
- **Scale:** On mobile devices, `headline-lg` scales down to 20px to preserve screen real estate.
- **Technical Data:** **JetBrains Mono** is introduced for ticket IDs, system logs, and technical snippets to prevent character confusion (e.g., 0 vs O).

## Layout & Spacing
The layout follows a **4px base grid** to ensure precise alignment in dense views.

- **Workspace:** A fixed-width left sidebar (240px) handles navigation, while the main content area uses a fluid grid with a maximum content width of 1600px for ultra-wide monitors.
- **Density:** Table views utilize "Compact" (36px) and "Standard" (48px) row heights. Gutters are kept tight (8px) to keep related data points proximal.
- **Breakpoints:** 
  - **Desktop (1024px+):** Full sidebar and multi-column ticket views.
  - **Tablet (768px - 1023px):** Collapsed icon-only sidebar, single-column main view.
  - **Mobile (<767px):** Bottom navigation or hamburger menu, vertical stack for all data cards.

## Elevation & Depth
To maintain a "calm" environment, the system avoids heavy shadows and dramatic depth.

- **Tonal Layering:** Surfaces are primarily distinguished by color. The background is `#FFFFFF`, while the sidebars and header bars use `#F4F5F7`.
- **Low-Contrast Outlines:** Instead of shadows, UI components like cards and input fields use 1px borders in `#DFE1E6`. 
- **Interactive Depth:** Only "active" elements (like a dragged ticket or an open dropdown) receive a subtle ambient shadow (0px 4px 8px rgba(9, 30, 66, 0.08)) to indicate they are on a higher Z-axis.

## Shapes
The shape language is **geometric and professional**. 

- **Base Radius:** A consistent 4px (Soft) radius is applied to buttons, input fields, and cards. This provides a modern feel without the "playfulness" of highly rounded corners.
- **Badges:** Status badges use the same 4px radius, maintaining a cohesive boxy-but-refined profile across the data grid.
- **Icons:** Use a 2px stroke weight to match the border weights of the UI components.

## Components

- **Tables (Data Grid):** The core of the application. Features include sticky headers, zebra-striping on hover (not static), and inline status badges. Text overflow is handled via ellipsis (...) but reveals via tooltip.
- **Status Badges:** Compact, rectangular shapes with 4px radius. They use a "Subtle" background tint (10% opacity of the semantic color) with "High Contrast" text (100% opacity of the semantic color) for accessibility.
- **Buttons:** 
  - *Primary:* Solid Blue (#0052CC) with white text.
  - *Secondary:* Transparent with Neutral Blue border (#42526E).
  - *Tertiary/Ghost:* No border, used for utility actions in tables.
- **Input Fields:** 1px border with a 2px Blue focus ring. Height is fixed at 32px for high-density forms.
- **SLA Countdown:** A specialized component using a progress bar (2px height) under the ticket ID, changing color from Green to Red as the deadline approaches.
- **Sidebar Navigation:** Clear vertical list with active state indicated by a 3px vertical "accent bar" on the left edge and a light blue background tint.