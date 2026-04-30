# Components Documentation

## Custom Components

### Navbar (`src/components/Navbar.tsx`)
Responsive navigation bar component.

**Features:**
- Top bar with phone, email, and hours (desktop only)
- Logo with Diamond icon and "Shining Diamond" branding
- 5 navigation links with active-state underline animation
- "Request Quote" CTA button
- Mobile hamburger menu with animated dropdown (Framer Motion AnimatePresence)
- Auto-closes on route change

### Footer (`src/components/Footer.tsx`)
Four-column footer component.

**Sections:**
1. Brand: Logo, tagline, social media icons (Facebook, Instagram, Twitter, LinkedIn)
2. Services: Quick links to service pages
3. Contact: Address, phone, email
4. Working Hours: Mon-Fri 8am-6pm, Sat 9am-4pm, Sun Closed

Bottom bar includes copyright and quick nav links.

**Styling:** Dark emerald background.

### LeadForm (`src/components/LeadForm.tsx`)
Contact/appointment form component.

**Fields:**
- Full Name (text input)
- Email (email input)
- Phone (tel input)
- Interested Service (dropdown: Lawn, Garden, Hardscape, Irrigation, Cleanup)
- Message (textarea)

**Behavior:**
- Submits via `api.submitLead()`
- Shows loading spinner during submission
- Displays success state ("Thank You!") on completion
- Shows error toast on failure

---

## UI Components (src/components/ui/)

### Button (`src/components/ui/button.tsx`)
shadcn Button component using Radix Slot.

**Variants:** default, outline, secondary, ghost, destructive, link

**Sizes:** xs, sm, default, lg, icon variants

**Props:** Supports `asChild` for polymorphism.

### Sonner (`src/components/ui/sonner.tsx`)
Toaster wrapper for sonner toast library.

**Features:**
- Theme integration via next-themes
- Custom icons for success/info/warning/error/loading states
- CSS variable-based styling

---

## UI Components (components/ui/) - Base UI

### Button (`components/ui/button.tsx`)
Alternative Button using `@base-ui/react/button`.

Same CVA variants/sizes as src version but uses Base UI primitives.

### Badge (`components/ui/badge.tsx`)
Pill-shaped badge component.

**Variants:** default, secondary, destructive, outline, ghost, link

### Card (`components/ui/card.tsx`)
Card container with sub-components.

**Sub-components:** Card, CardHeader, CardTitle, CardAction, CardDescription, CardContent, CardFooter

**Props:** Supports `size` prop (default/sm)

### Dialog (`components/ui/dialog.tsx`)
Modal/dialog component with animated overlay.

**Exports:** Dialog, DialogTrigger, DialogPortal, DialogClose, DialogOverlay, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription

**Features:** Responsive sizing, close button, animated overlay.

### Input (`components/ui/input.tsx`)
Styled text input component.

**Features:** Focus ring, disabled states, file upload support.

### Label (`components/ui/label.tsx`)
Styled label element with disabled/peer-disabled state handling.

### ScrollArea (`components/ui/scroll-area.tsx`)
Custom scroll area with styled scrollbars.

**Exports:** ScrollArea, ScrollBar

**Features:** Vertical/horizontal scrollbars with thumb indicator.

### Switch (`components/ui/switch.tsx`)
Toggle switch component.

**Sizes:** sm, default

**Features:** Animated thumb with checked/unchecked states.

### Tabs (`components/ui/tabs.tsx`)
Tab navigation component.

**Exports:** Tabs, TabsList, TabsTrigger, TabsContent

**Variants:** default (pill), line (underline)

**Orientations:** horizontal, vertical

### Table (`components/ui/table.tsx`)
Table component with sub-components.

**Sub-components:** Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption

**Features:** Overflow-x wrapper, hover states, selected row highlighting.

### Textarea (`components/ui/textarea.tsx`)
Multi-line text input.

**Features:** Focus ring, disabled states, auto-sizing via `field-sizing-content`.
