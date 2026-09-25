# Yazhi Collection — Elegant Women's Boutique Website

Welcome to the **Yazhi Collection** boutique website, crafted in pure **HTML5, CSS3, and JavaScript** following the complete specifications in the Product Requirements Document (PRD v1.0).

---

## 🌟 Brand & Experience Architecture

- **Brand Aesthetic:** Royal Plum (`#4A234F`), Wine/Rose (`#9B4D68`), Soft Blush (`#F4DEE2`), Warm Cream (`#FAF7F2`), and Antique Gold (`#C8A45D`).
- **Typography:** Serif display headings (`Cormorant Garamond` / `Playfair Display`) paired with clean modern sans-serif (`Plus Jakarta Sans`).
- **Experience Flow:** Glance/Entry Screen &rarr; Home Page &rarr; Collections Hub &rarr; 8 Dedicated Collection Pages &rarr; Product Cards &rarr; Cart, Profile, History, Contact.

---

## 📁 Project Structure

```
yazhi-collection/
├── index.html              # Entry / Glance Screen (with smooth reveal & enter CTA)
├── home.html               # Main Home Page (Hero, perks, brand story, previews, new arrivals)
├── collections.html        # Collections Hub (All 8 major collections directory)
├── bridal.html             # Bridal Collection (5 types with exact PRD taglines)
├── festive.html            # Festive Splendor (Diwali, Pongal, Navratri, Onam, Christmas)
├── party.html              # Party Wear (Cocktail, Gowns, Sarees, Lehengas, Indo-Western)
├── ethnic.html             # Ethnic Classics (Salwar, Anarkali, Churidar, Maxi, Lehenga Choli)
├── custom-design.html      # Custom Design Atelier (Blouses, Dresses, Kidswear, Bridal, Sharara)
├── saree-collection.html   # Saree Collection (Pure Silks, Cottons, Silk Cottons, Embroidered, Party)
├── combos.html             # Combos & Pairings (Blouse+Skirt, Mother-Daughter, Couple, Family, Men&Women)
├── contemporary.html       # Contemporary Wear (Co-ords, Dresses, Tops, Casual, Evening)
├── cart.html               # Shopping Cart (Live math, coupon codes, and multi-step checkout)
├── profile.html            # Client Profile, Custom Measurements, Saved Addresses & Wishlist
├── history.html            # Order History & Live Handloom-to-Doorstep Tracking Timeline
├── contact.html            # Studio Contact, Consultation Booking Form, & FAQ Accordion
├── css/
│   └── style.css           # Modern luxury CSS design system & responsive layout
└── js/
    ├── cart.js             # LocalStorage cart, wishlist, orders state manager
    ├── script.js           # Global UI, sticky header, drawer, search modal & toasts
    └── interactions.js     # Quantity controls, Add to Cart, Buy Now & Customization modals
```

---

## 🛍️ Key Features & PRD Compliance

1. **Glance Screen (`index.html`):** Ambient background, floating glow orbs, gold boutique crest, and primary "Enter Collection" CTA.
2. **All 8 Major Collections & 5 Types Each:**
   - Every collection page displays the 5 exact types and supplied taglines from the PRD.
   - Products feature images, titles, descriptions, price, discount badges, and quantity controls.
3. **Cart & LocalStorage Persistence (`cart.html`):**
   - Real-time subtotal, shipping calculation, and discount coupon codes (`YAZHI10` for 10% off, `FESTIVE20` for 20% off).
   - Multi-step checkout modal that saves new orders to `history.html`.
4. **Customization Callouts:** Every product section includes the PRD prompt: *"Love this design in another color? Tell us your preference — we can explore a customized color or styling option for you."* with a modal trigger.
5. **Interactive Modals:**
   - **Quick View Modal:** Product preview with zoom and quantity controls.
   - **Express Buy Now Modal:** Instant purchase without navigating away.
   - **Customization Modal:** Request bespoke colorways and blouse patterns.
   - **Order Tracking Modal:** 4-stage live progress visualizer.
   - **Tax Invoice Modal:** Printable receipt view.
6. **Boutique Profile & Measurements (`profile.html`):** Save tailored bust, waist, hip, and shoulder measurements for bespoke stitching.
7. **Contact & Consultation (`contact.html`):** Flagship studio details in T. Nagar, Chennai, interactive appointment booking, and FAQ accordion.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or launch using any local web server:

```bash
# Option 1: Double-click index.html or open with your browser
# Option 2: Using Python built-in server (from this directory)
python -m http.server 8000
# Then open http://localhost:8000 in your browser

# Option 3: Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```
