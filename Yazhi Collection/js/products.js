// ============================================================
// YAZHI COLLECTION – Centralized Product Data Model
// 8 Collections × 5 Types = 40 Handcrafted Types + 7 New Arrivals
// Founder & Head Designer: Sharmila M | Coimbatore, Tamil Nadu
// Phone / WhatsApp: 6369685930 | Shop Hours: 9:00 AM – 9:00 PM
// ============================================================

const YAZHI_PRODUCTS_OVERRIDE_KEY = 'yazhi_products_override';
const YAZHI_REVIEWS_KEY = 'yazhi_reviews';

// Curated high-res Indian boutique fashion imagery for realistic display
const YAZHI_BASE_PRODUCTS = {

  // ──────────────────────────────────────────────
  // 1. SAREE COLLECTION (All 5 Types Preserved)
  // ──────────────────────────────────────────────
  sarees: {
    id: 'sarees',
    label: 'Saree Collection',
    slug: 'saree-collection',
    tagline: 'Timeless drapes woven with heritage & grace',
    description: 'Explore the royal richness of traditional and modern sarees, handcrafted with the finest mulberry silks, breathable Coimbatore cottons, and intricate zari artistry.',
    heroColor: '#7A3455',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    items: [
      {
        id: 'sar-001',
        name: 'Silk Sarees',
        tagline: 'Weave Your Royal Moment',
        price: 8500,
        originalPrice: 12000,
        priceRange: '₹8,500 – ₹25,000',
        badge: 'Heritage Best Seller',
        available: true,
        isBestSeller: true,
        description: 'Pure Kanchipuram and Banarasi handwoven silk sarees with heavy gold zari borders and an opulent woven pallu. Hand-selected threads woven by master artisans.',
        fabric: '100% Pure Mulberry Kanchipuram Silk with Silver/Gold Zari Weave',
        designFit: 'Classic 6-yard drape with ornate pallu and matching unstitched blouse piece',
        closure: 'Traditional drape closure; unstitched blouse piece included',
        sizes: ['Free Size (Includes 0.8m Blouse Piece)'],
        colors: ['Crimson Red', 'Peacock Blue', 'Emerald Green', 'Deep Purple'],
        shipping: 'Complimentary insured shipping across India. Dispatched within 24-48 hours.',
        returnPolicy: '7-Day Easy Boutique Exchange Policy on unstitched and unused items.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'sar-002',
        name: 'Cotton Sarees',
        tagline: 'Breezy Comfort, Timeless Charm',
        price: 1400,
        originalPrice: 2200,
        priceRange: '₹1,400 – ₹3,500',
        badge: 'Eco Pick',
        available: true,
        description: 'Breathable organic Coimbatore and Chettinad handloom cotton sarees with artisanal border prints and natural vegetable dye accents.',
        fabric: '100% Organic Handloom Combed Cotton (80s Count)',
        designFit: 'Lightweight crisp drape suitable for warm South Indian climate and daily grace',
        closure: 'Traditional drape; matching blouse length attached',
        sizes: ['Free Size (6.2m including blouse)'],
        colors: ['Natural White', 'Indigo Blue', 'Terracotta', 'Sage Green'],
        shipping: 'Standard delivery in 3-5 business days. Free shipping above ₹4,000.',
        returnPolicy: '7-Day Exchange Policy in original boutique packaging.',
        image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'sar-003',
        name: 'Silk Cotton Sarees',
        tagline: 'The Perfect Blend of Grace & Comfort',
        price: 2600,
        originalPrice: 3800,
        priceRange: '₹2,600 – ₹6,000',
        badge: 'Trending',
        available: true,
        description: 'Featherlight blend of lustrous mulberry silk and airy combed cotton for day-to-night elegance at festive family gatherings.',
        fabric: '60% Mulberry Silk, 40% Fine Cotton Blend with Tested Zari',
        designFit: 'Soft silhouette with gentle sheen and effortless pleating',
        closure: 'Traditional drape',
        sizes: ['Free Size (6.25m with blouse piece)'],
        colors: ['Mustard Gold', 'Slate Blue', 'Coral Pink', 'Olive Jade'],
        shipping: 'Express courier delivery across Tamil Nadu within 48 hours.',
        returnPolicy: '7-Day Boutique Exchange Guaranteed.',
        image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'sar-004',
        name: 'Embroidered Sarees',
        tagline: 'Every Thread Tells a Story',
        price: 4500,
        originalPrice: 6200,
        priceRange: '₹4,500 – ₹11,000',
        badge: 'Artisan',
        available: true,
        description: 'Delicate georgette and organza drapes featuring intricate Kashmiri resham threadwork, micro sequins, and cut-dana scalloped borders.',
        fabric: 'Pure Viscose Georgette & Organza with Hand-Resham Embroidery',
        designFit: 'Fluid feminine drape that enhances natural silhouette with subtle glimmer',
        closure: 'Traditional drape with custom blouse fabrication available',
        sizes: ['Free Size (Includes Designer Blouse Piece)'],
        colors: ['Blush Pink', 'Champagne', 'Ice Blue', 'Mint Green'],
        shipping: 'Dispatches within 24 hours from Coimbatore boutique.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'sar-005',
        name: 'Designer & Party Wear',
        tagline: 'Drape. Dazzle. Celebrate.',
        price: 6800,
        originalPrice: 9500,
        priceRange: '₹6,800 – ₹18,000',
        badge: 'Best Seller',
        available: true,
        isBestSeller: true,
        description: 'Statement pre-pleated, ruffled, and metallic tissue sarees made to turn heads at cocktail receptions and sangeet parties.',
        fabric: 'Metallic Tissue Organza with Micro-Pleats & Crystal Border Trims',
        designFit: 'Pre-stitched pleat drape option available with structured silhouette',
        closure: 'Concealed hook waist fastening or traditional pin drape',
        sizes: ['Free Size (Pre-stitched custom option available)'],
        colors: ['Ruby Wine', 'Midnight Black', 'Metallic Rose', 'Gold Glow'],
        shipping: 'Free delivery above ₹4,000 across India.',
        returnPolicy: '7-Day Boutique Exchange on all ready-to-wear pieces.',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 2. BRIDAL COLLECTION (All 5 Types Preserved)
  // ──────────────────────────────────────────────
  bridal: {
    id: 'bridal',
    label: 'Bridal Collection',
    slug: 'bridal',
    tagline: 'Every bride deserves a story worth telling',
    description: 'Immaculately crafted bridal couture curated and designed by Sharmila M. Grand bridal lehengas, pure silk muhurtham drapes, and bespoke maggam work blouses.',
    heroColor: '#3B1F3F',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
    items: [
      {
        id: 'bri-001',
        name: 'Kanchipuram Silk Sarees',
        tagline: 'Traditional South Indian bridal wear with rich zari work',
        price: 18500,
        originalPrice: 24000,
        priceRange: '₹18,500 – ₹65,000',
        badge: 'Bridal Muhurtham',
        available: true,
        description: 'Authentic 3-ply pure silk woven with genuine silver and gold zari motifs depicting South Indian temple corridors, rudraksh, and twin-peacock motifs.',
        fabric: 'Pure Mulberry Silk (Heavy 3-Ply) with Pure Tested Gold Zari',
        designFit: 'Heirloom heavy bridal drape with 18-inch contrast zari border',
        closure: 'Traditional drape; coordinating brocade blouse fabric included',
        sizes: ['Free Size (Includes Heavy Bridal Blouse Fabric)'],
        colors: ['Kumkum Red', 'Deep Maroon', 'Kalyanam Yellow', 'Royal Pink'],
        shipping: 'Insured express white-glove shipping with bridal gift box.',
        returnPolicy: 'Boutique exchange available within 7 days in unstitched condition.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'bri-002',
        name: 'Bridal Lehenga',
        tagline: 'Popular for engagement, reception and North Indian-style weddings',
        price: 28000,
        originalPrice: 36000,
        priceRange: '₹28,000 – ₹95,000',
        badge: 'Couture Best Seller',
        available: true,
        isBestSeller: true,
        description: 'Opulent multi-panel velvet and raw silk bridal lehenga adorned with authentic zardozi, dabka, French knot resham, and hand-cut mirrors.',
        fabric: 'Rich Micro Velvet & Pure Raw Silk with Dual Organza Dupattas',
        designFit: '16-Kali architectural kalidaar flare with double can-can support',
        closure: 'Side concealed YKK zip with handcrafted dori & heavy latkans',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Made to Measurements'],
        colors: ['Bridal Crimson', 'Royal Wine', 'Antique Rust', 'Dusty Rose'],
        shipping: 'Free national priority shipping in bespoke garment trunk.',
        returnPolicy: 'Customized bridal lehengas are created to exact size measurements.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'bri-003',
        name: 'Designer Bridal Sarees',
        tagline: 'Modern sarees with embroidery, sequins, stone and zari work',
        price: 16000,
        originalPrice: 21000,
        priceRange: '₹16,000 – ₹45,000',
        badge: 'Reception Luxe',
        available: true,
        description: 'Contemporary organza, shimmer georgette, and tissue silk bridal sarees accented with Swarovski elements, scalloped edges, and stone embellishments.',
        fabric: 'Tissue Organza & Shimmer Silk with Hand-Set Crystal Embellishments',
        designFit: 'Airy translucent luxury drape with glittering pallu',
        closure: 'Traditional drape with custom blouse tailoring option',
        sizes: ['Free Size (Includes Designer Blouse Material)'],
        colors: ['Ivory Gold', 'Blush Peach', 'Lavender Mist', 'Champagne'],
        shipping: 'Complimentary shipping across India.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'bri-004',
        name: 'Bridal Blouse Collection',
        tagline: 'Heavy maggam, zardozi and embroidery blouses to pair with bridal sarees',
        price: 6500,
        originalPrice: 8500,
        priceRange: '₹6,500 – ₹18,000',
        badge: 'Handcrafted',
        available: true,
        description: 'Bespoke bridal blouses meticulously tailored with heavy maggam work, cutwork sleeves, ornate pearl tassels, and personalized bridal monogramming.',
        fabric: 'Heavy Raw Silk Base with Pure Metallic Wire & Kundan Maggam Work',
        designFit: 'Structured padded princess-cut bodice with deep back neckline',
        closure: 'Back hook-and-eye closure with handcrafted dori tassels',
        sizes: ['32', '34', '36', '38', '40', '42', 'Custom Tailored'],
        colors: ['Matching Saree Hue', 'Gold Antique', 'Deep Emerald', 'Ruby Red'],
        shipping: 'Tailored and dispatched within 5-7 boutique working days.',
        returnPolicy: 'Complimentary fitting adjustment at our Coimbatore atelier.',
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'bri-005',
        name: 'Reception / Party Wear',
        tagline: 'Tissue silk, brocade and contemporary bridal outfits suitable for receptions',
        price: 19500,
        originalPrice: 26000,
        priceRange: '₹19,500 – ₹55,000',
        badge: 'Exclusive',
        available: true,
        description: 'Architectural sweep trails, dramatic drapes, and lightweight brocade fusion gowns crafted for unforgettable wedding receptions.',
        fabric: 'Pure Banarasi Brocade & Featherweight Duchesse Satin',
        designFit: 'Structured Indo-Western silhouette with graceful drape train',
        closure: 'Concealed side zipper with decorative fabric-covered buttons',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Fitted'],
        colors: ['Midnight Blue', 'Emerald Green', 'Rose Gold', 'Burgundy'],
        shipping: 'Free insured courier delivery.',
        returnPolicy: '7-Day Exchange Policy on standard sizes.',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 3. FESTIVE WEAR (All 5 Types Preserved)
  // ──────────────────────────────────────────────
  festive: {
    id: 'festive',
    label: 'Festive Wear',
    slug: 'festive',
    tagline: 'Celebrate every moment in spectacular style',
    description: 'Honor the joyous festivals of India with auspicious colors, authentic handlooms, and dazzling festive silhouettes curated for celebrations.',
    heroColor: '#A4813B',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80',
    items: [
      {
        id: 'fes-001',
        name: 'Diwali',
        tagline: 'Shine Bright, Celebrate in Style',
        price: 7200,
        originalPrice: 9500,
        priceRange: '₹7,200 – ₹18,000',
        badge: 'Diwali Special',
        available: true,
        description: 'Glimmering festive lehengas and flared Anarkalis woven with gold thread and mirror motifs to brighten your Diwali celebrations.',
        fabric: 'Art Silk Brocade with Gota Patti & Mirror Accents',
        designFit: 'Flared kalidaar with matching dupatta and choli',
        closure: 'Drawstring waist with latkans and side zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Fiery Orange', 'Golden Yellow', 'Deep Scarlet', 'Royal Plum'],
        shipping: 'Express festive dispatch in 24 hours.',
        returnPolicy: '7-Day Easy Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'fes-002',
        name: 'Pongal',
        tagline: 'Tradition Woven with Elegance',
        price: 3600,
        originalPrice: 4800,
        priceRange: '₹3,600 – ₹8,500',
        badge: 'Tamil Pride',
        available: true,
        description: 'Heritage Korvai cotton-silk sarees and traditional dhavani half-saree sets tailored for festive harvest blessings and temple poojas.',
        fabric: 'Pure Chettinad Cotton-Silk with Contrast Temple Korvai Border',
        designFit: 'Comfortable traditional silhouette designed for festive rituals',
        closure: 'Traditional drape / tie skirt',
        sizes: ['Free Size', 'S', 'M', 'L'],
        colors: ['Sun Gold', 'Kumkum Border', 'Peacock Green', 'Mango Orange'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Guaranteed.',
        image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'fes-003',
        name: 'Navratri',
        tagline: 'Celebrate Every Color, Every Moment',
        price: 4500,
        originalPrice: 6000,
        priceRange: '₹4,500 – ₹11,000',
        badge: 'Garba Hit',
        available: true,
        description: 'Vibrant multi-kalidaar Chaniya Choli ensembles engineered with huge flair for 9 nights of nonstop dancing and joy.',
        fabric: 'Pure Cotton with Gamthi Mirror Work & Colorful Bandhani Dupatta',
        designFit: 'Extensive 8-meter flare skirt for dynamic swirl motion',
        closure: 'Elasticated drawstring waist with comfortable stretch',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Nine-Color Multi', 'Electric Cyan', 'Saffron', 'Hot Pink'],
        shipping: 'Dispatches within 24-48 hours.',
        returnPolicy: '7-Day Easy Exchange.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'fes-004',
        name: 'Onam',
        tagline: 'Grace in Every Golden Thread',
        price: 4200,
        originalPrice: 5500,
        priceRange: '₹4,200 – ₹9,800',
        badge: 'Kasavu Gold',
        available: true,
        description: 'Authentic Kerala Kasavu handloom set-mundu and tissue sarees finished with pure 24kt gold-look zari borders.',
        fabric: 'Handloom Cotton Tissue with Rich Golden Kasavu Border',
        designFit: 'Ethereal traditional 2-piece set-mundu drape',
        closure: 'Traditional fold and pin closure',
        sizes: ['Free Size (Includes Contrast Blouse Piece)'],
        colors: ['Pure Off-White & Gold', 'Cream & Antique Zari', 'Ivory'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'fes-005',
        name: 'Christmas',
        tagline: 'Festive Charm, Timeless Style',
        price: 5200,
        originalPrice: 6800,
        priceRange: '₹5,200 – ₹13,000',
        badge: 'Holiday Luxe',
        available: true,
        description: 'Rich velvet midis, emerald cocktail dresses, and red lace fusion gowns designed for joyous Christmas and New Year celebrations.',
        fabric: 'Plush Stretch Velvet with Lace Neckline & Satin Lining',
        designFit: 'Tailored fit-and-flare holiday silhouette',
        closure: 'Concealed back zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Crimson Red', 'Forest Green', 'Midnight Velvet', 'Champagne'],
        shipping: 'Quick express shipping nationwide.',
        returnPolicy: '7-Day Boutique Exchange Guarantee.',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 4. PARTY WEAR (All 5 Types Preserved)
  // ──────────────────────────────────────────────
  party: {
    id: 'party',
    label: 'Party Wear',
    slug: 'party',
    tagline: 'Dress to dazzle, always',
    description: 'Glamorous evening wear, high-octane gowns, and contemporary fusion silhouettes curated for life’s most celebrated parties.',
    heroColor: '#522A58',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80',
    items: [
      {
        id: 'par-001',
        name: 'Cocktail Wear',
        tagline: 'Make Every Moment Sparkle',
        price: 5800,
        originalPrice: 7800,
        priceRange: '₹5,800 – ₹14,000',
        badge: 'Hot Pick',
        available: true,
        description: 'Shimmering georgette cocktail dresses with asymmetrical hemlines and tasteful crystal embellishments.',
        fabric: 'Shimmer Chiffon-Georgette with Fine Micro-Sequin Lining',
        designFit: 'Asymmetric contemporary silhouette with cinched waist',
        closure: 'Invisible side zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Starlight Silver', 'Rose Gold', 'Midnight Obsidian', 'Bronze'],
        shipping: 'Dispatches in 24 hours.',
        returnPolicy: '7-Day Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'par-002',
        name: 'Party Gowns',
        tagline: 'Elegance That Turns Heads',
        price: 7500,
        originalPrice: 9800,
        priceRange: '₹7,500 – ₹18,000',
        badge: 'Bestseller',
        available: true,
        description: 'Full-length designer evening gowns crafted in pleated satin and organza with corset bodices and sweeping skirts.',
        fabric: 'Heavy Crepe Satin with Pleated Micro-Net Overlay',
        designFit: 'Floor-length ball gown silhouette with inner boning',
        closure: 'Corset lace-up back and hidden zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
        colors: ['Emerald Green', 'Royal Navy', 'Burgundy Wine', 'Champagne'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'par-003',
        name: 'Designer Sarees',
        tagline: 'Drape Yourself in Glamour',
        price: 6200,
        originalPrice: 8200,
        priceRange: '₹6,200 – ₹15,500',
        badge: 'Glamour',
        available: true,
        description: 'Ready-to-wear pre-draped party sarees with metallic sequin accents, feather trims, and structured blouses.',
        fabric: 'Liquid Metallic Lycra & Organza Ruffle',
        designFit: 'Pre-stitched 1-minute drape with flattering fall',
        closure: 'Concealed hook waistband with elastic waist tabs',
        sizes: ['Free Size (Pre-stitched Fits 26-36 inch waist)'],
        colors: ['Gunmetal Grey', 'Rose Shimmer', 'Opal White', 'Plum Sparkle'],
        shipping: 'Dispatches within 24 hours.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'par-004',
        name: 'Party Lehengas',
        tagline: 'Celebrate in Style',
        price: 8900,
        originalPrice: 11500,
        priceRange: '₹8,900 – ₹22,000',
        badge: 'Party Star',
        available: true,
        description: 'Lightweight flare lehengas crafted for sangeet nights and cocktail parties with 3D floral accents and ruffled dupattas.',
        fabric: 'Net & Silk Georgette with 3D Floral Appliqué',
        designFit: 'Moderate flare with lightweight underskirt for easy dancing',
        closure: 'Drawstring with tassels + side zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Neon Coral', 'Pastel Lilac', 'Teal Glow', 'Golden Champagne'],
        shipping: 'Free insured delivery.',
        returnPolicy: '7-Day Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'par-005',
        name: 'Indo-Western Wear',
        tagline: 'Modern Style, Timeless Charm',
        price: 4600,
        originalPrice: 6200,
        priceRange: '₹4,600 – ₹11,000',
        badge: 'Trending',
        available: true,
        description: 'Jacket-dhoti sets, crop tops with draped cape skirts, and modern fusion co-ords combining ease with charisma.',
        fabric: 'Soft Viscose Modal with Embroidered Organza Cape',
        designFit: 'Contemporary relaxed drape with tailored waist accent',
        closure: 'Concealed front hooks & pull-on dhoti pants',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Electric Blue', 'Hot Fuchsia', 'Olive Satin', 'Rust Copper'],
        shipping: 'Dispatched within 24-48 hours.',
        returnPolicy: '7-Day Boutique Exchange Guarantee.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 5. ETHNIC WEAR (All 5 Types Preserved)
  // ──────────────────────────────────────────────
  ethnic: {
    id: 'ethnic',
    label: 'Ethnic Wear',
    slug: 'ethnic',
    tagline: 'Rooted in culture, styled for today',
    description: 'Graceful daily and festive Indian wear — classic Anarkalis, stylish salwar suits, and refined straight silhouettes tailored for grace and comfort.',
    heroColor: '#5C223D',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80',
    items: [
      {
        id: 'eth-001',
        name: 'Salwar Suits',
        tagline: 'Timeless Tradition, Effortless Grace',
        price: 2800,
        originalPrice: 3800,
        priceRange: '₹2,800 – ₹6,500',
        badge: 'Classic',
        available: true,
        description: 'Hand-block printed chanderi and modal silk salwar suits complete with matching bottoms and pure chiffon dupatta.',
        fabric: 'Chanderi Silk Kurta with Cotton Bottom & Chiffon Dupatta',
        designFit: 'Straight silhouette with side slits and comfortable trousers',
        closure: 'Pull-over with keyhole button neckline',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Peacock Blue', 'Maroon Red', 'Turquoise', 'Golden Ochre'],
        shipping: 'Dispatches in 24 hours.',
        returnPolicy: '7-Day Easy Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'eth-002',
        name: 'Anarkali Suits',
        tagline: 'Royal Elegance in Every Flow',
        price: 3900,
        originalPrice: 5200,
        priceRange: '₹3,900 – ₹9,500',
        badge: 'Popular',
        available: true,
        description: 'Floor-sweeping 32-kali Anarkali suit sets with intricate gota-patti and threadwork across the neckline and flare.',
        fabric: 'Pure Georgette with Pure Santoon Lining & Gota Borders',
        designFit: '32-Kali full royal flare with churidar pants',
        closure: 'Concealed side zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Wine Red', 'Sage Green', 'Deep Teal', 'Blush Coral'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'eth-003',
        name: 'Churidar Sets',
        tagline: 'Classic Style, Beautifully Crafted',
        price: 2400,
        originalPrice: 3200,
        priceRange: '₹2,400 – ₹5,500',
        badge: 'Daily Refined',
        available: true,
        description: 'Impeccably tailored straight-cut kurtis paired with gathered churidars and printed mulmul dupattas.',
        fabric: '100% Breathable Fine Combed Cotton with Silk Border Accents',
        designFit: 'Classic straight cut with mandarin collar and pocket',
        closure: 'Button placket front and drawstring churidar',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
        colors: ['Ivory Floral', 'Indigo Blue', 'Dusty Rose', 'Olive Khaki'],
        shipping: 'Dispatches within 24 hours.',
        returnPolicy: '7-Day Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'eth-004',
        name: 'Maxi Fits',
        tagline: 'Celebrate Tradition with Grace',
        price: 3200,
        originalPrice: 4400,
        priceRange: '₹3,200 – ₹7,200',
        badge: 'Trending',
        available: true,
        description: 'Comfortable bohemian ethnic maxi dresses featuring gathered tiers, tassel ties, and delicate foil prints.',
        fabric: 'Viscose Rayon with Breathable Voile Lining',
        designFit: 'Tiered maxi flare with gentle empire waistline',
        closure: 'Front neck tassel tie and discreet nursing-friendly hidden zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Mustard Botanical', 'Rust Earth', 'Midnight Blue', 'Emerald Floral'],
        shipping: 'Fast shipping nationwide.',
        returnPolicy: '7-Day Easy Exchange.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'eth-005',
        name: 'Lehenga Choli',
        tagline: 'Heritage Meets Festive Elegance',
        price: 5800,
        originalPrice: 7500,
        priceRange: '₹5,800 – ₹14,500',
        badge: 'Heritage',
        available: true,
        description: 'Festive cotton-silk and brocade lehenga sets paired with contrast blouses and embellished organza dupattas.',
        fabric: 'Chanderi Cotton-Silk with Metallic Zari Jacquard Weave',
        designFit: 'Circular cut flare with contrast woven hemline',
        closure: 'Drawstring waist with latkans and back-hook choli',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Rani Pink', 'Royal Navy', 'Forest Green', 'Sunset Yellow'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Guarantee.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 6. CUSTOM DESIGN (All 5 Types Preserved)
  // ──────────────────────────────────────────────
  customDesign: {
    id: 'customDesign',
    label: 'Custom Design',
    slug: 'custom-design',
    tagline: 'Your imagination, our expertise — one-of-a-kind creations',
    description: 'Personalized bespoke tailoring service guided personally by Sharmila M. From one-of-a-kind bridal lehengas to customized family ensembles.',
    heroColor: '#3B1F3F',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    items: [
      {
        id: 'cus-001',
        name: 'Custom-Made Blouses',
        tagline: 'Designed Just for You',
        price: 3200,
        originalPrice: 4500,
        priceRange: '₹3,200 – ₹9,500',
        badge: 'Bespoke',
        available: true,
        description: 'Custom pattern drafting, maggam embroidery, hand zardozi, and perfect-fit tailoring for your heirloom sarees.',
        fabric: 'Pure Raw Silk / Brocade / Velvet with Customer Choice Embroidery',
        designFit: 'Custom draft tailored to your precise bust, shoulder, and armhole measurements',
        closure: 'Hook-and-eye or side zipper with handcrafted tassel tiebacks',
        sizes: ['Custom Fitted (Measurements taken via WhatsApp or in-boutique)'],
        colors: ['Client Palette Choice'],
        shipping: 'Tailored and delivered within 5-7 boutique days.',
        returnPolicy: 'Includes free boutique fitting alterations at Coimbatore atelier.',
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'cus-002',
        name: 'Custom-Made Dresses',
        tagline: 'Your Style, Your Design',
        price: 6800,
        originalPrice: 9000,
        priceRange: '₹6,800 – ₹19,000',
        badge: 'Couture',
        available: true,
        description: 'Bespoke dresses and gowns created around your exact silhouette, choice of silk/satin fabrics, and design moodboard.',
        fabric: 'Choice of Pure Organza, Mulberry Silk, Duchesse Satin, or Velvet',
        designFit: 'Custom pattern engineered for client body proportions',
        closure: 'Bespoke closure according to dress design',
        sizes: ['Full Custom Tailoring'],
        colors: ['Unlimited Choice'],
        shipping: 'Dispatches within 7-10 days after design approval.',
        returnPolicy: 'Free fitting trial and alterations included.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'cus-003',
        name: 'Custom-Made Kidswear',
        tagline: 'Little Styles, Made with Love',
        price: 2600,
        originalPrice: 3500,
        priceRange: '₹2,600 – ₹6,800',
        badge: 'Little Luxe',
        available: true,
        description: 'Adorable traditional pattu-pavadai, mini lehengas, and ethnic outfits stitched with soft, child-safe inner cotton linings.',
        fabric: 'Soft Silk / Handloom Cotton with Ultra-Soft 100% Cotton Inner Lining',
        designFit: 'Comfortable relaxed fit with growth margins inside for children',
        closure: 'Soft zipper or tie-backs with fabric flap protection',
        sizes: ['Age 1 to 14 Years Custom Measurements'],
        colors: ['Cheerful Pastels', 'Traditional Gold & Red', 'Festive Yellow'],
        shipping: 'Dispatched within 4-6 boutique days.',
        returnPolicy: 'Boutique exchange and fitting support guaranteed.',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'cus-004',
        name: 'Custom-Made Bridal Wear',
        tagline: 'Your Dream, Our Creation',
        price: 36000,
        originalPrice: 48000,
        priceRange: '₹36,000 – ₹1,50,000',
        badge: 'Masterwork',
        available: true,
        description: 'A completely personalized bridal gown or lehenga designed in private consultation with Sharmila M, including fabric swatches and trial fits.',
        fabric: 'Highest Grade Raw Silk, French Velvet, Pure Zari, & Hand-Dyed Organza',
        designFit: 'Haute Couture bridal tailoring with internal corsetry and custom kali flare',
        closure: 'Bespoke bridal closure with bridal monogram tag',
        sizes: ['Complete Custom Fit to Client Measurements'],
        colors: ['Bespoke Bridal Palette'],
        shipping: 'Dedicated insured courier in boutique wooden keepsake box.',
        returnPolicy: 'Includes 2 personalized mock fittings with Sharmila M.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'cus-005',
        name: 'Custom-Made Sharara Sets',
        tagline: 'Made for Your Special Moments',
        price: 8200,
        originalPrice: 11000,
        priceRange: '₹8,200 – ₹24,000',
        badge: 'Exclusive',
        available: true,
        description: 'Three-piece custom sharara outfits with hand-selected pure georgette fabrics, customized flared tiers, and delicate hand embroidery.',
        fabric: 'Pure Viscose Georgette with Gotta Patti & Mukaish Work',
        designFit: 'Short peplum/straight kurti paired with voluminous three-tier sharara',
        closure: 'Side concealed zipper with elasticated back waist',
        sizes: ['Custom Tailored to Measurements'],
        colors: ['Bespoke Selection'],
        shipping: 'Dispatches within 7 days.',
        returnPolicy: 'Free boutique fitting adjustments included.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 7. COMBOS & BUNDLES (All 5 Types Preserved)
  // ──────────────────────────────────────────────
  combos: {
    id: 'combos',
    label: 'Combos & Bundles',
    slug: 'combos',
    tagline: 'More value, more style — curated for you',
    description: 'Smartly coordinated sets, mother-daughter twins, and family wedding bundles curated for effortless harmony and attractive bundle savings.',
    heroColor: '#C9A45C',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80',
    items: [
      {
        id: 'com-001',
        name: 'Blouse + Skirt Combo',
        tagline: 'A Match Made for Moments',
        price: 4900,
        originalPrice: 6500,
        priceRange: '₹4,900 – ₹11,000',
        badge: 'Combo Deal',
        available: true,
        description: 'Handcrafted embroidered blouse paired with a coordinating circular brocade skirt. Ready to wear with zero styling hassle.',
        fabric: 'Embroidered Raw Silk Blouse with Banarasi Brocade Skirt',
        designFit: 'Tailored crop top paired with pleated circular flared skirt',
        closure: 'Back blouse hooks + side skirt zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Wine & Gold', 'Teal & Pink', 'Black & Copper', 'Emerald & Rose'],
        shipping: 'Free delivery above ₹4,000 across India.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'com-002',
        name: 'Mother-Daughter Combo',
        tagline: 'Matching Moments, Cherished Forever',
        price: 7800,
        originalPrice: 10500,
        priceRange: '₹7,800 – ₹18,500',
        badge: 'Family Favorite',
        available: true,
        description: 'Matching ethnic silk ensembles for mother and daughter. Perfect for milestone birthdays, temple visits, and family portraits.',
        fabric: 'Matching Pure Coimbatore Silk Blend with Gold Zari Border',
        designFit: 'Mother saree/anarkali + daughter pattu pavadai twin set',
        closure: 'Standard saree + tailored kidswear closure',
        sizes: ['Adult (S-XL) + Child (2-10 Years)'],
        colors: ['Coordinated Rose Gold', 'Festive Kumkum', 'Peacock Silk'],
        shipping: 'Dispatched within 48 hours.',
        returnPolicy: '7-Day Easy Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'com-003',
        name: 'Couple Outfit Combo',
        tagline: 'Two Styles, One Beautiful Story',
        price: 9800,
        originalPrice: 13000,
        priceRange: '₹9,800 – ₹25,000',
        badge: 'Couple Goal',
        available: true,
        description: 'Complementary color-coordinated couple outfit set featuring a designer saree/lehenga and matching men\'s silk bandhgala kurta set.',
        fabric: 'Fine Chanderi Silk & Cotton Silk Blend in Synchronized Weave',
        designFit: 'Her: Designer Saree/Lehenga; Him: Tailored Kurta-Churidar set',
        closure: 'Traditional Her + Buttoned Placket Him',
        sizes: ['Her: XS-XL, Him: 38-44'],
        colors: ['Royal Ivory & Gold', 'Wine & Charcoal', 'Emerald Duo'],
        shipping: 'Free express shipping nationwide.',
        returnPolicy: '7-Day Boutique Exchange Guarantee.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'com-004',
        name: 'Family Matching Combo',
        tagline: 'Together in Style, Together in Love',
        price: 13500,
        originalPrice: 18000,
        priceRange: '₹13,500 – ₹34,000',
        badge: 'Celebration Set',
        available: true,
        description: 'Complete 4-member family package (Parents + 2 Children) in unified weave, auspicious colors, and luxury boutique detailing.',
        fabric: 'Handloom Silk-Cotton with Coordinated Zari Motifs',
        designFit: 'Custom-coordinated silhouettes for all family members',
        closure: 'Assorted custom fasteners for comfortable wear',
        sizes: ['Custom Fitted for the Whole Family'],
        colors: ['Royal Gold & Maroon', 'Heritage Peacock Silk', 'Warm Ochre'],
        shipping: 'Free insured doorstep shipping.',
        returnPolicy: 'Includes free boutique adjustment on kidswear.',
        image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'com-005',
        name: 'Men & Women Combo',
        tagline: 'Effortless Style, Perfectly Paired',
        price: 8200,
        originalPrice: 11000,
        priceRange: '₹8,200 – ₹19,500',
        badge: 'Smart Pair',
        available: true,
        description: 'Twin occasion wear set featuring a lightweight occasion saree and matching men\'s silk bandhgala kurta.',
        fabric: 'Art Silk with Jacquard Weaving & Cotton Inner Lining',
        designFit: 'Coordinated occasion fit for duo celebrations',
        closure: 'Standard drape + Button Kurta',
        sizes: ['Standard S-XL for Both'],
        colors: ['Sapphire & Silver', 'Ruby & Antique Gold', 'Sage & Champagne'],
        shipping: 'Free shipping above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 8. CONTEMPORARY (All 5 Types Preserved)
  // ──────────────────────────────────────────────
  contemporary: {
    id: 'contemporary',
    label: 'Contemporary',
    slug: 'contemporary',
    tagline: 'Where modern design meets timeless femininity',
    description: 'Clean-lined modern silhouettes, power co-ord sets, tailored dresses, and versatile day-to-evening ensembles designed for the cosmopolitan woman.',
    heroColor: '#261129',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
    items: [
      {
        id: 'con-001',
        name: 'Co-ord Sets',
        tagline: 'One Look, Perfectly Paired',
        price: 3600,
        originalPrice: 4800,
        priceRange: '₹3,600 – ₹8,200',
        badge: 'Trending Best Seller',
        available: true,
        isBestSeller: true,
        description: 'Sleek shirt-pant and blazer-trouser matching co-ord sets in breathable linen and crepe blends. Elevated elegance for modern power dressing.',
        fabric: 'Premium Japanese Crepe & Cotton Linen Blend',
        designFit: 'Tailored relaxed blazer with high-waisted straight leg trousers',
        closure: 'Front buttons on top; zip fly with elastic back on trousers',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Clay Terracotta', 'Olive Khaki', 'Monochrome Grid', 'Powder Blue'],
        shipping: 'Dispatched within 24 hours. Free shipping over ₹4,000.',
        returnPolicy: '7-Day Easy Boutique Exchange Guarantee.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'con-002',
        name: 'Western Dresses',
        tagline: 'Modern Style, Effortless Grace',
        price: 3900,
        originalPrice: 5200,
        priceRange: '₹3,900 – ₹8,800',
        badge: 'Work to Party',
        available: true,
        description: 'Flowy wrap midis, A-line day dresses, and structured shifts cut from imported pleated fabrics for day-to-night versatility.',
        fabric: 'Pleated Poly-Georgette with Soft Knit Inner Lining',
        designFit: 'Wrap midi silhouette with adjustable self-tie belt',
        closure: 'Wrap tie-up and hidden side zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Dusty Lavender', 'Sunset Coral', 'Rich Navy', 'Ivory'],
        shipping: 'Dispatches within 24 hours.',
        returnPolicy: '7-Day Boutique Exchange.',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'con-003',
        name: 'Tops & Shirts',
        tagline: 'Everyday Style, Elevated',
        price: 1950,
        originalPrice: 2800,
        priceRange: '₹1,950 – ₹4,500',
        badge: 'Everyday Chic',
        available: true,
        description: 'Premium organza blouses, bishop-sleeve silk tops, and tailored satin shirts that elevate any pair of trousers.',
        fabric: 'Pure Viscose Satin & Semi-Sheer Organza Accents',
        designFit: 'Structured relaxed fit with cuffed statement sleeves',
        closure: 'Mother-of-pearl front buttons',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Pearl White', 'Champagne Nude', 'Black Obsidian', 'Wine'],
        shipping: 'Dispatches in 24 hours.',
        returnPolicy: '7-Day Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'con-004',
        name: 'Casual Wear',
        tagline: 'Relaxed Looks, Refined Style',
        price: 2500,
        originalPrice: 3400,
        priceRange: '₹2,500 – ₹5,800',
        badge: 'Relaxed Luxe',
        available: true,
        description: 'Soft linen tunic sets, easy tiered sundresses, and breathable everyday cotton dresses with functional deep pockets.',
        fabric: '100% Washed Pure Linen & Organic Voile',
        designFit: 'Easy breezy relaxed A-line fit with deep side pockets',
        closure: 'Slip-on with comfortable neck notch',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Sage Green', 'Warm Ecru', 'Denim Blue', 'Mustard Stripe'],
        shipping: 'Dispatches within 24-48 hours.',
        returnPolicy: '7-Day Boutique Exchange Guaranteed.',
        image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'con-005',
        name: 'Evening Wear',
        tagline: 'Own the Night in Style',
        price: 6400,
        originalPrice: 8500,
        priceRange: '₹6,400 – ₹15,000',
        badge: 'Statement',
        available: true,
        description: 'Dramatic cape-sleeve maxi dresses, one-shoulder satin gowns, and tailored cocktail tuxedos for memorable soirees.',
        fabric: 'Heavy Crepe Satin with Chiffon Drape Cape',
        designFit: 'Fitted column silhouette with fluid cascading cape',
        closure: 'Concealed side zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Midnight Black', 'Deep Plum', 'Ruby Spark', 'Emerald Satin'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
};

// ──────────────────────────────────────────────
// NEW ARRIVALS (Strictly Limited to 7 Pieces)
// ──────────────────────────────────────────────
const YAZHI_BASE_NEW_ARRIVALS = [
  {
    id: 'new-001',
    name: 'Pearl Embellished Lehenga',
    tagline: 'Pearls of perfection for your precious moment',
    price: 14500,
    originalPrice: 18000,
    collection: 'Bridal',
    collectionId: 'bridal',
    badge: 'Just Arrived',
    available: true,
    isNew: true,
    description: 'Statement lehenga with hand-set pearl embroidery, delicate floral motifs, and crystal borders on a deep wine silk velvet base.',
    fabric: 'Micro Velvet with Hand-Set Freshwater Pearl & Zari Embroidery',
    designFit: 'Voluminous 12-kali flare with organza ruffles and padded blouse',
    closure: 'Side zipper with handcrafted pearl latkans',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Made'],
    colors: ['Wine Pearl', 'Ivory Pearl', 'Rose Pearl'],
    shipping: 'Free insured priority courier across India.',
    returnPolicy: '7-Day Boutique Exchange on standard sizes.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-002',
    name: 'Mirror Work Kurta Set',
    tagline: 'Reflect your radiance with every step',
    price: 4200,
    originalPrice: 5500,
    collection: 'Ethnic',
    collectionId: 'ethnic',
    badge: 'New Arrival',
    available: true,
    isNew: true,
    description: 'Vibrant celebratory kurta adorned with authentic Kutchi mirror embroidery, paired with cigarette pants and pure chiffon dupatta.',
    fabric: 'Pure Chanderi Silk with Real Mirror Hand-Embroidered Yoke',
    designFit: 'Calf-length straight cut kurta with tapered trousers',
    closure: 'Buttoned round neck and elastic back trousers',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Turquoise', 'Saffron', 'Bright Pink'],
    shipping: 'Dispatches in 24 hours.',
    returnPolicy: '7-Day Easy Exchange Policy.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-003',
    name: 'Pastel Ombre Saree',
    tagline: 'Where dawn meets dusk on silk',
    price: 5800,
    originalPrice: 7200,
    collection: 'Sarees',
    collectionId: 'sarees',
    badge: 'New Arrival',
    available: true,
    isNew: true,
    description: 'Gradient ombre pure chiffon saree transitioning smoothly from soft blush pink to evening lavender with fine sequin scalloped border.',
    fabric: 'Pure French Chiffon with Micro Zari Threadwork',
    designFit: 'Featherlight airy drape with effortless fluid pleats',
    closure: 'Traditional drape; matching unstitched satin blouse fabric',
    sizes: ['Free Size (6.3m including blouse)'],
    colors: ['Blush to Lavender', 'Mint to Sky', 'Peach to Coral'],
    shipping: 'Free shipping on orders above ₹4,000.',
    returnPolicy: '7-Day Boutique Exchange.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-004',
    name: 'Sequin Festive Gown',
    tagline: 'Every festivity needs its showstopper',
    price: 7200,
    originalPrice: 9000,
    collection: 'Party',
    collectionId: 'party',
    badge: 'Just In',
    available: true,
    isNew: true,
    description: 'Indo-western fusion gown with all-over matte sequin work, thigh-high modest slit detail, and attached pleated drape dupatta.',
    fabric: 'Georgette with Velvet Lining & Self-Colored Matte Sequins',
    designFit: 'Fitted bodice cascading into flared sweep skirt',
    closure: 'Concealed side zipper',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Champagne Gold', 'Deep Maroon', 'Midnight Blue'],
    shipping: 'Dispatches within 24 hours.',
    returnPolicy: '7-Day Boutique Exchange Guaranteed.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-005',
    name: 'Organza Floral Saree',
    tagline: 'Blossom into elegance with every drape',
    price: 3900,
    originalPrice: 5000,
    collection: 'Sarees',
    collectionId: 'sarees',
    badge: 'New Arrival',
    available: true,
    isNew: true,
    description: 'Sheer hand-painted organza saree with delicate 3D floral appliqué, scalloped pearl border, and lightweight sheer fall.',
    fabric: 'Pure Semi-Sheer Organza Silk with Pearl Scallop Border',
    designFit: 'Airy statement drape ideal for garden weddings and daytime festivities',
    closure: 'Traditional drape; matching designer blouse included',
    sizes: ['Free Size (6.2m with blouse piece)'],
    colors: ['Baby Pink', 'Ivory', 'Powder Blue', 'Lavender'],
    shipping: 'Dispatched within 24-48 hours.',
    returnPolicy: '7-Day Boutique Exchange Policy.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-006',
    name: 'Co-ord Crop Lehenga Set',
    tagline: 'Fusion fashion for the fearless young woman',
    price: 5200,
    originalPrice: 6800,
    collection: 'Contemporary',
    collectionId: 'contemporary',
    badge: 'Just Arrived',
    available: true,
    isNew: true,
    description: 'Modern structured crop top with flared skirt in jacquard brocade with a sheer organza cape. High-fashion fusion at its finest.',
    fabric: 'Brocade Jacquard with Pure Organza Cape',
    designFit: 'Structured crop top with box-pleated flared skirt',
    closure: 'Back metal zip on crop top; side zip on skirt',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Teal Brocade', 'Gold Jacquard', 'Black Silver'],
    shipping: 'Free delivery above ₹4,000.',
    returnPolicy: '7-Day Boutique Exchange Guarantee.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'new-007',
    name: 'Hand-Painted Kalamkari Saree',
    tagline: 'Wear a story painted by tradition',
    price: 6500,
    originalPrice: 8500,
    collection: 'Sarees',
    collectionId: 'sarees',
    badge: 'Artisan Craft',
    available: true,
    isNew: true,
    description: 'Authentic hand-painted Kalamkari saree featuring mythological vine motifs on handloom tussar silk with antique zari border.',
    fabric: 'Pure Handloom Tussar Silk with Natural Eco-Friendly Dyes',
    designFit: 'Rich textured organic silk drape with artisanal narrative pallu',
    closure: 'Traditional drape; matching handloom blouse piece',
    sizes: ['Free Size (6.3m with blouse)'],
    colors: ['Natural Brown', 'Indigo Blue', 'Traditional Multi'],
    shipping: 'Insured nationwide courier.',
    returnPolicy: '7-Day Boutique Exchange Guarantee.',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80'
  }
];

// ──────────────────────────────────────────────
// OFFERS & PROMOTIONS CONFIGURATION
// ──────────────────────────────────────────────
const YAZHI_DEFAULT_OFFERS = {
  firstOrder:      { discount: 0.50, label: '50% Off First Order', code: 'YAZHI50', minOrder: 0, active: true },
  birthday:        { discount: 0.30, label: '30% Birthday Special', code: 'BDAY30', minOrder: 0, active: true },
  festival:        { discount: 0.20, label: '20% Festival Special', code: 'FESTIVE20', minOrder: 0, active: true },
  freeDelivery:    { discount: 0,    label: 'Free Delivery', code: null, minOrder: 4000, active: true },
  premiumDiscount: { discount: 0.70, label: '70% Off Premium Orders', code: 'PREMIUM70', minOrder: 9000, active: true }
};

// ──────────────────────────────────────────────
// INITIAL CUSTOMER REVIEWS (Realistic Boutique Testimonials)
// ──────────────────────────────────────────────
const YAZHI_INITIAL_REVIEWS = [
  {
    id: 'rev-001',
    productId: 'sar-001',
    productName: 'Silk Sarees',
    customerName: 'Priyadharshini K.',
    rating: 5,
    date: '2026-03-12',
    comment: 'The Kanchipuram silk saree is absolutely breathtaking! The pure silk weight and gold zari shine are truly heirloom quality. Sharmila M helped me with matching blouse advice as well.',
    status: 'approved'
  },
  {
    id: 'rev-002',
    productId: 'bri-002',
    productName: 'Bridal Lehenga',
    customerName: 'Ananya Ramesh',
    rating: 5,
    date: '2026-03-05',
    comment: 'Ordered for my wedding reception in Coimbatore. The velvet texture, intricate zardozi craftsmanship, and fit were 100% perfection. Received compliments all evening!',
    status: 'approved'
  },
  {
    id: 'rev-003',
    productId: 'con-001',
    productName: 'Co-ord Sets',
    customerName: 'Kavitha Mohan',
    rating: 5,
    date: '2026-02-28',
    comment: 'The crepe fabric is breathable and falls so elegantly. Beautiful stitching and modern silhouette. Very comfortable for both boutique events and office dinners.',
    status: 'approved'
  },
  {
    id: 'rev-004',
    productId: 'new-001',
    productName: 'Pearl Embellished Lehenga',
    customerName: 'Deepa Sundaram',
    rating: 5,
    date: '2026-02-18',
    comment: 'The wine pearl lehenga is even more stunning in person than on screen! High-grade embroidery and timely delivery.',
    status: 'approved'
  }
];

// ──────────────────────────────────────────────
// ACTIVE DATA MANAGEMENT & OVERRIDES
// ──────────────────────────────────────────────
function yazhiGetProductOverrides() {
  try {
    return JSON.parse(localStorage.getItem(YAZHI_PRODUCTS_OVERRIDE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function yazhiSaveProductOverride(id, data) {
  const overrides = yazhiGetProductOverrides();
  overrides[id] = { ...(overrides[id] || {}), ...data, updatedAt: new Date().toISOString() };
  localStorage.setItem(YAZHI_PRODUCTS_OVERRIDE_KEY, JSON.stringify(overrides));
  return overrides[id];
}

// Get all collections with overrides applied
function yazhiGetCollections() {
  const overrides = yazhiGetProductOverrides();
  const collections = JSON.parse(JSON.stringify(YAZHI_BASE_PRODUCTS));

  Object.keys(collections).forEach(colKey => {
    const col = collections[colKey];
    col.items = col.items.map(item => {
      const merged = { ...item, collection: col.label, collectionId: col.id };
      if (overrides[item.id]) {
        Object.assign(merged, overrides[item.id]);
      }
      return merged;
    });
  });

  return [
    collections.sarees,
    collections.bridal,
    collections.party,
    collections.ethnic,
    collections.festive,
    collections.contemporary,
    collections.customDesign,
    collections.combos
  ];
}

// Get all products flat list
function yazhiGetAllProducts() {
  const collections = yazhiGetCollections();
  const newArrivals = yazhiGetNewArrivals();
  const list = [];
  const seen = new Set();

  collections.forEach(col => {
    col.items.forEach(p => {
      if (!seen.has(p.id)) {
        seen.add(p.id);
        list.push(p);
      }
    });
  });

  newArrivals.forEach(p => {
    if (!seen.has(p.id)) {
      seen.add(p.id);
      list.push(p);
    }
  });

  return list;
}

// Get single product by ID
function yazhiGetProduct(id) {
  if (!id) return null;
  const cleanId = String(id).trim().toLowerCase();
  const all = yazhiGetAllProducts();
  return all.find(p => String(p.id).toLowerCase() === cleanId) || null;
}

// Get collection by ID or slug
function yazhiGetCollection(idOrSlug) {
  if (!idOrSlug) return null;
  const raw = String(idOrSlug).toLowerCase().trim().replace(/#/g, '');
  const clean = raw.replace(/[^a-z0-9]/g, '');
  const cols = yazhiGetCollections();
  for (const c of cols) {
    if (c.id.toLowerCase() === raw ||
        c.slug.toLowerCase() === raw ||
        c.id.toLowerCase().replace(/[^a-z0-9]/g, '') === clean ||
        c.slug.toLowerCase().replace(/[^a-z0-9]/g, '') === clean ||
        c.label.toLowerCase().replace(/[^a-z0-9]/g, '') === clean) {
      return c;
    }
  }
  return null;
}

// Best Sellers - Exactly 3 products (Requirement 15)
function yazhiGetBestSellers() {
  const all = yazhiGetAllProducts();
  // Filter for products marked isBestSeller, ensuring exactly 3
  const best = all.filter(p => p.isBestSeller && p.available !== false);
  if (best.length === 3) return best;
  // If overrides changed it, take the top 3 curated bestsellers
  const preferredIds = ['sar-001', 'bri-002', 'con-001'];
  const res = preferredIds.map(id => yazhiGetProduct(id)).filter(Boolean);
  return res.slice(0, 3);
}

// New Arrivals - Strictly max 7 products
function yazhiGetNewArrivals() {
  const overrides = yazhiGetProductOverrides();
  return YAZHI_BASE_NEW_ARRIVALS.slice(0, 7).map(item => {
    const merged = { ...item };
    if (overrides[item.id]) Object.assign(merged, overrides[item.id]);
    return merged;
  });
}

// Global Search (Requirement 6 & 21)
function yazhiSearchProducts(query) {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const all = yazhiGetAllProducts();
  return all.filter(p => {
    const nameMatch = (p.name || '').toLowerCase().includes(q);
    const colMatch = (p.collection || '').toLowerCase().includes(q);
    const tagMatch = (p.tagline || '').toLowerCase().includes(q);
    const descMatch = (p.description || '').toLowerCase().includes(q);
    const fabricMatch = (p.fabric || '').toLowerCase().includes(q);
    const badgeMatch = (p.badge || '').toLowerCase().includes(q);
    const colorMatch = Array.isArray(p.colors) && p.colors.some(c => c.toLowerCase().includes(q));
    return nameMatch || colMatch || tagMatch || descMatch || fabricMatch || badgeMatch || colorMatch;
  });
}

// ──────────────────────────────────────────────
// CUSTOMER REVIEWS API (Requirement 16)
// ──────────────────────────────────────────────
function yazhiGetAllReviews() {
  try {
    const stored = localStorage.getItem(YAZHI_REVIEWS_KEY);
    if (!stored) {
      localStorage.setItem(YAZHI_REVIEWS_KEY, JSON.stringify(YAZHI_INITIAL_REVIEWS));
      return YAZHI_INITIAL_REVIEWS;
    }
    return JSON.parse(stored);
  } catch (e) {
    return YAZHI_INITIAL_REVIEWS;
  }
}

function yazhiGetApprovedReviews(productId = null) {
  const all = yazhiGetAllReviews();
  return all.filter(r => {
    const isApproved = r.status === 'approved';
    if (!productId) return isApproved;
    return isApproved && (r.productId === productId || !r.productId);
  });
}

function yazhiSubmitReview(review) {
  const reviews = yazhiGetAllReviews();
  const newRev = {
    id: 'rev-' + Date.now(),
    productId: review.productId || '',
    productName: review.productName || 'Yazhi Boutique Piece',
    customerName: review.customerName || 'Boutique Guest',
    rating: Number(review.rating) || 5,
    comment: review.comment || '',
    date: new Date().toISOString().split('T')[0],
    status: 'approved' // Auto-approved or moderation; approved by default for instant feedback
  };
  reviews.unshift(newRev);
  localStorage.setItem(YAZHI_REVIEWS_KEY, JSON.stringify(reviews));
  return newRev;
}

function yazhiUpdateReviewStatus(reviewId, status) {
  const reviews = yazhiGetAllReviews();
  const idx = reviews.findIndex(r => r.id === reviewId);
  if (idx !== -1) {
    if (status === 'deleted') {
      reviews.splice(idx, 1);
    } else {
      reviews[idx].status = status;
    }
    localStorage.setItem(YAZHI_REVIEWS_KEY, JSON.stringify(reviews));
    return true;
  }
  return false;
}

// ──────────────────────────────────────────────
// OFFERS MANAGEMENT API
// ──────────────────────────────────────────────
function yazhiGetOffers() {
  try {
    const stored = localStorage.getItem('yazhi_offers');
    return stored ? JSON.parse(stored) : YAZHI_DEFAULT_OFFERS;
  } catch (e) {
    return YAZHI_DEFAULT_OFFERS;
  }
}

function yazhiSaveOffers(offers) {
  localStorage.setItem('yazhi_offers', JSON.stringify(offers));
}

// Legacy exports for compatibility
const YAZHI_PRODUCTS = YAZHI_BASE_PRODUCTS;
const YAZHI_NEW_ARRIVALS = YAZHI_BASE_NEW_ARRIVALS;
const YAZHI_COLLECTIONS = yazhiGetCollections();
const YAZHI_OFFERS = YAZHI_DEFAULT_OFFERS;

if (typeof module !== 'undefined') {
  module.exports = {
    YAZHI_PRODUCTS,
    YAZHI_NEW_ARRIVALS,
    YAZHI_COLLECTIONS,
    YAZHI_OFFERS,
    yazhiGetCollections,
    yazhiGetAllProducts,
    yazhiGetProduct,
    yazhiGetCollection,
    yazhiGetBestSellers,
    yazhiGetNewArrivals,
    yazhiSearchProducts,
    yazhiSaveProductOverride,
    yazhiGetAllReviews,
    yazhiGetApprovedReviews,
    yazhiSubmitReview,
    yazhiUpdateReviewStatus,
    yazhiGetOffers,
    yazhiSaveOffers
  };
}
