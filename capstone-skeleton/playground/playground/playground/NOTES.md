# Accessibility Comparison Notes (Custom vs. shadcn/ui)

## Overview
Comparing hand-rolled React + TypeScript components against `@radix-ui/react-dialog` and `@radix-ui/react-tabs` used by shadcn/ui.

## Key Technical Gaps Identified

### 1. Scroll Locking & Dynamic Body Padding
* **Custom Gap:** Our custom `ModalDialog` locks focus inside the modal but leaves the background body scrollable, causing background layout jumps and scroll bleed when users attempt mouse or touch scrolling.
* **shadcn Solution:** Radix UI automatically injects `aria-hidden="true"` on all root sibling DOM elements outside the dialog portal and applies `data-scroll-locked` to prevent document scrolling while adjusting body padding to preserve scrollbar width.

### 2. Screen Reader Announce Handling & Portal Mounting
* **Custom Gap:** The custom modal renders inline inside the current DOM tree. If parent elements contain `overflow: hidden` or absolute z-index stacking rules, visual clipping or incorrect visual stacking occurs.
* **shadcn Solution:** shadcn mounts dialog portals directly into `document.body` via `@radix-ui/react-portal`. It provides explicit `<DialogTitle>` and `<DialogDescription>` components that ensure mandatory `aria-labelledby` and `aria-describedby` IDs are auto-linked for screen reader announcements.
