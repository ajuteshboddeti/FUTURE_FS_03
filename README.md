# 🌶️ Andhra's Kitchen — Luxury Heritage Restaurant Experience

> **Where Ancient Spice Meets Royal Tradition**  
> An ultra-premium, responsive web application celebrating authentic Rayalaseema & Coastal Andhra culinary heritage.

---

## 🌟 Overview

**Andhra's Kitchen** brings the rich, fiery flavors of Andhra Pradesh and Telangana to life through a modern, opulent digital dining experience. Designed with deep obsidian tones, royal saffron golds, and Guntur chili crimson accents, the website integrates authentic food photography, live interactive menu filtering, table pre-ordering, and table reservations with instant digital dining passes.

---

## ✨ Features & Architecture

### 👑 1. Regal Brand & Hero Section
- **Live Kitchen Status Pill**: Dynamically computes and displays current service hours (`OPEN NOW • Lunch / Dinner Service` or `KITCHEN PREP`).
- **Cinematic Photography Showcase**: Showcases the signature Hyderabadi Mutton Dum Biryani in antique brass handi with interactive floating badges.
- **Key Trust Stats**: Highlights ratings (4.9 ★ from 1,500+ diners), 100% stone-ground spices, and pure desi ghee woodfire preparations.

### 📜 2. Heritage & Master Chef Story
- **The Soul of Andhra Spices**: Detailed narrative exploring Guntur sun-dried chillies, cold-pressed gingelly oil, and fragrant Gongura leaves.
- **4 Culinary Pillars**: Sun-Dried Guntur Mirchi, Stone-Ground Masalas, Charcoal Wood Dum, and Banana Leaf Bhojanam.
- **Master Chef Mascot**: Interactive spotlight on the kitchen's culinary custodians with stats counter.

### 🍲 3. Interactive Culinary Menu Engine
- **Full Category Filter**: Instant tab switching between *Starters & Vepudu*, *Royal Biryanis*, *Spicy Curries & Pulusu*, *Traditional Bhojanam (Thalis)*, and *Beverages & Desserts*.
- **Real-Time Live Search**: Instant multi-keyword search across dish names, Telugu subtitles, and ingredients.
- **Dietary Filter System**: Quickly isolate Pure Veg 🟢, Non-Veg 🔴, or Chef's Fiery Specials 🌶️.
- **Rich Dish Metadata**: Real prices in INR (₹), spice intensity meter (🌶️ to 🌶️🌶️🌶️), portion descriptions, and dietary badges.

### 🛒 4. Interactive Table Pre-Order Drawer
- **Add to Order**: Diners can curate their preferred courses directly from the menu.
- **Quantity Controls**: Increment, decrement, or remove items in real-time with automatic bill subtotal calculations.
- **Auto-Sync to Booking**: Seamlessly transfer selected delicacies into the table reservation form's special notes with a single click.

### 📸 5. Visual Feast Gallery & Lightbox
- High-definition culinary photography featuring:
  - *Hyderabadi Mutton Dum Biryani* (`hero_biryani.jpg`)
  - *Kaju Chicken Vepudu* (`chicken_fry.jpg`)
  - *Andhra Gongura Mamsam & Parotta* (`curry_gongura.jpg`)
  - *Royal Banana Leaf Andhra Bhojanam* (`andhra_thali.jpg`)
  - *Rayalaseema Paneer 65* (`paneer_starter.jpg`)
- Interactive click-to-enlarge Lightbox modal with taste profile notes.

### 📅 6. Table Reservation & Digital Dining Pass
- **Smart Date Picker**: Restricts past dates and pre-fills today's date.
- **Time Slot Selector**: Separates Lunch (12:00 PM – 03:30 PM) and Dinner (07:00 PM – 11:00 PM) seatings.
- **Quick Guest Selector**: 1 to 10+ Royal Party selector.
- **Instant Digital Dining Pass**: Generates a stylized VIP Pass modal featuring a unique booking reference (e.g., `#AK-2026-8942`), guest details, and Print/Save support.
- **Formspree Integration**: Submits reservation data in the background to ensure contact forms remain active.

### ⭐ 7. Guest Reviews & Community Feedback
- High-end review cards featuring verified diners, star ratings, and authentic culinary testimonials.
- Interactive **"Share Your Experience"** modal to submit new reviews dynamically to the page.

### 📍 8. Location & Operating Hours
- Information cards for Visakhapatnam (Kancharapalem, Visakhapatnam - 530008).
- Valet parking, direct reservations contact, and email enquiries.

### 👨‍💻 9. Creator Credits & Socials
- Honors creator **Ajutesh Boddeti** with links to GitHub, LinkedIn, Instagram, and direct email.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags, accessibility attributes, schema structure.
- **CSS3**: Custom design tokens, glassmorphism (`backdrop-filter`), CSS Grid, Flexbox, smooth keyframe animations, mobile media queries.
- **Vanilla JavaScript**: Pure JS engine for filtering, search, cart state management, pass generator, modals, and toast notifications.
- **Typography**: Google Fonts (*Cinzel*, *Playfair Display*, *Plus Jakarta Sans*).

---

## 🚀 How to View Locally

1. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, serve via any lightweight static server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000` or `http://localhost:3000`.

---

## 📱 Responsive Breakpoints

- **Mobile Phones**: `< 768px` (Collapsible slide-out navigation drawer, stacked grids, mobile-optimized cart).
- **Tablets & Laptops**: `768px – 1024px` (Fluid dual-column grids, optimized hero showcase).
- **Desktops & Displays**: `> 1024px` (Full luxury layout, multi-column menu, interactive floating chips).

---

## 📄 License & Attribution

Conceived & Developed by **Ajutesh Boddeti** © 2026. All rights reserved.
