# Pages Documentation

## Home (`src/pages/Home.tsx`)
Landing page with full viewport hero section.

**Sections:**
1. **Hero:** Full-viewport with background image, animated title/subtitle, CTA buttons
2. **Services Overview:** 4 cards (Lawn Care, Garden Design, Irrigation, Hardscaping) with hover animations
3. **Stats Counter:** 15+ Years, 1,200+ Projects, 45 Team, 100% Satisfaction
4. **Why Choose Us:** 6 trust features with image
5. **Testimonials:** 3 customer reviews with star ratings
6. **FAQ Accordion:** 4 expandable questions + quick-contact card
7. **CTA Banner:** Bottom call-to-action

**Tech:** Framer Motion scroll-triggered animations, API content fetch.

---

## About (`src/pages/About.tsx`)
Company information page.

**Sections:**
1. **Hero:** "Crafting Landscapes with Diamond Precision" tagline
2. **Story:** Image + text about company with stats (500+ projects, 12+ years)
3. **Core Values:** 4 values on dark background
   - Precision
   - Trust
   - Quality
   - Local Expertise

**Tech:** API content fetch, Framer Motion animations.

---

## Services (`src/pages/Services.tsx`)
Services showcase page.

**Services (6 cards):**
1. Lawn Maintenance
2. Custom Garden Design
3. Expert Hardscaping
4. Irrigation Systems
5. Seasonal Cleanup
6. Commercial Landscaping

**Process Timeline (4 steps):**
1. Brief
2. Precision Design
3. Build Phase
4. Final Care

**Layout:** Responsive grid with images, icons, descriptions. Bottom CTA section.

**Tech:** Framer Motion staggered entry animations.

---

## Gallery (`src/pages/Gallery.tsx`)
Image gallery page.

**Features:**
- Masonry layout (CSS columns: 1/2/3 columns responsive)
- Hover overlay with title on each image
- Fullscreen lightbox on click with scale animation (AnimatePresence)

**Tech:** API gallery fetch, Framer Motion AnimatePresence.

---

## Contact (`src/pages/Contact.tsx`)
Contact information and form page.

**Layout:** Two-column
- **Left:** Contact info (phone, email, address, working hours) with icons
- **Right:** LeadForm component for appointment requests

---

## Admin (`src/pages/Admin.tsx`)
Admin dashboard (password-protected, demo password: `admin123`).

**Tabs:**
1. **Leads:** Table of form submissions
   - Columns: Date, Customer info, Service type, Message, Status badge, Delete action
2. **Gallery:** Manage gallery images
   - Add new images (title + URL)
   - Delete existing images
3. **Content:** Edit website content in real-time
   - Hero section (title, subtitle, background image URL)
   - About section (title, description)

**Features:** Toast notifications for all actions.

---

## Routing

Defined in `src/App.tsx`:

| Route | Component |
|-------|-----------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/gallery` | Gallery |
| `/contact` | Contact |
| `/admin/*` | Admin |

All pages wrapped in flex layout with Navbar and Footer.
