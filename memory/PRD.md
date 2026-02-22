# INSECSPACE'2026 Conference Website - Product Requirements Document

## Original Problem Statement
Create a modern, high-end conference/event website inspired by iac2026.org for INSECSPACE'2026 - a space security conference happening on April 29, 2026.

**Event Details:**
- Name: INSECSPACE'2026
- Date: 29 APRIL 2026
- Tagline: INNOVATIONS & SECURITY IN SPACE
- Theme: Electric blue gradient, dark futuristic, space-inspired
- Purpose: High-end showcase website (MVP stage)

## User Requirements
- Design: Dark futuristic theme with electric blue gradients
- Content: 6-8 speakers, placeholder sponsors
- Functionality: Newsletter signup (frontend-ready, no backend yet)
- Quality: Premium corporate feel, $20,000+ agency quality
- Style: Cinematic, immersive, high contrast

## Architecture & Tech Stack
- **Frontend**: React, Tailwind CSS, shadcn/ui components
- **Styling**: Space Grotesk & Inter fonts, electric blue gradients
- **Images**: Professional space/tech visuals from Unsplash/Pexels
- **Components**: Navigation, Hero, About, Highlights, Speakers, Schedule, Sponsors, Footer

## What's Been Implemented (December 2025)

### Frontend (Complete - MVP)
✅ **Navigation Component**
- Sticky navigation with transparency transition on scroll
- Mobile-responsive menu
- Smooth scroll to sections

✅ **Hero Section**
- Cinematic space background
- User-provided logo integration
- Large bold typography with gradient effects
- Live countdown timer to event date
- Dual CTAs (Register Now, Learn More)
- Event details with icons

✅ **About Section**
- Two-column responsive layout
- Abstract tech network visualization
- Statistics cards (3 days, 50+ speakers, 100+ sessions, 1000+ attendees)
- Gradient accents and glassmorphism

✅ **Highlights Section**
- 4 feature cards in grid layout
- Lucide-react icons (Satellite, Rocket, Globe, Cpu)
- Background images with overlay
- Hover animations and effects
- Expanding progress bars

✅ **Speakers Section**
- 8 professional headshots in grid
- Grayscale images with color on hover
- Speaker names, titles, and bios
- Card hover effects with glow

✅ **Schedule Section**
- Tabbed interface for 3 days
- Timeline-style session cards
- Time, title, and speaker info
- Hover effects with animated progress bars

✅ **Sponsors Section**
- Tier-based layout (Platinum, Gold, Silver, Bronze)
- Placeholder sponsor names with gradient effects
- "Become a Sponsor" CTA section
- Different grid sizes per tier

✅ **Footer Section**
- Newsletter signup form with validation
- Contact information
- Social media icons (Twitter, LinkedIn, Facebook)
- Privacy policy links
- Mock newsletter signup function

### Mock Data Structure
- Conference details (name, date, tagline)
- Hero images (background, logo)
- About section content
- 4 highlights with descriptions
- 8 speaker profiles
- 3-day schedule with sessions
- 8 sponsors with tier levels
- Newsletter signup mock function

### Design Implementation
✅ Electric blue gradient theme (cyan #06b6d4 to blue #3b82f6)
✅ Dark black background (#000000)
✅ Space Grotesk font for headings
✅ Inter font for body text
✅ High contrast white text
✅ Glassmorphism effects with backdrop blur
✅ Border styling with cyan/blue accents
✅ Smooth transitions and hover states
✅ Lucide-react icons (no emoji)
✅ Mobile-first responsive design
✅ Accessibility focus states
✅ Custom scrollbar styling

## Current Status
**Frontend**: ✅ Complete MVP with mock data
**Backend**: ❌ Not implemented yet
**Integration**: ❌ Newsletter form is frontend-only (mock)

## Next Action Items (Priority Order)

### P0 - Critical for Launch
1. Backend development for newsletter signup
   - MongoDB schema for newsletter subscribers
   - POST /api/newsletter endpoint
   - Email validation and duplicate checking
   - Success/error responses

### P1 - High Priority
2. Email integration for newsletter
   - SendGrid or similar email service integration
   - Welcome email automation
   - Admin notification on new signup

3. Contact form functionality
   - Contact form backend endpoint
   - Email notification to organizers
   - Auto-reply to submitters

### P2 - Enhancement Features
4. Registration/ticketing system
   - User registration form
   - Payment integration (if needed)
   - Ticket confirmation emails

5. Speaker detail pages
   - Individual speaker bio pages
   - Session details and schedule

6. Admin dashboard
   - View newsletter subscribers
   - Export subscriber list
   - Manage speakers and schedule

## API Contracts (To Be Implemented)

### Newsletter Signup
```
POST /api/newsletter
Body: { email: string }
Response: { success: boolean, message: string }
```

### Contact Form (Future)
```
POST /api/contact
Body: { name: string, email: string, message: string }
Response: { success: boolean, message: string }
```

## Mocked Functionality
⚠️ **Currently MOCKED (Frontend-only)**:
- Newsletter signup (mockData.js - newsletterSignup function)
  - Displays success toast after 1 second
  - No actual database storage
  - No email sending

## User Personas
1. **Conference Attendees**: Professionals in space security, researchers, industry leaders
2. **Speakers**: Expert presenters looking for event details
3. **Sponsors**: Companies interested in sponsorship opportunities
4. **Event Organizers**: Admin users managing content (future)

## Success Metrics (Future)
- Newsletter signups
- Page views and engagement
- CTA click-through rates
- Mobile vs desktop traffic
- Time on site

---
*Last Updated: December 2025*
*Status: MVP Frontend Complete - Ready for Backend Development*
