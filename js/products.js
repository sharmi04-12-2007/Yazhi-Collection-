// ============================================================
// YAZHI COLLECTION – Centralized Product Data Model
// 8 Collections × 5 Types = 40 Handcrafted Types + 7 New Arrivals
// Founder & Head Designer: Sharmila M | Coimbatore, Tamil Nadu
// Phone / WhatsApp: 6369685930 | Shop Hours: 9:00 AM – 9:00 PM
// ============================================================

const YAZHI_PRODUCTS_OVERRIDE_KEY = 'yazhi_products_override';
const YAZHI_REVIEWS_KEY = 'yazhi_reviews';
const YAZHI_CUSTOM_PRODUCTS_KEY = 'yazhi_custom_products';
const YAZHI_DELETED_PRODUCTS_KEY = 'yazhi_deleted_products';

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
    image: 'images_yazhi/Saree Collection.webp',
    items: [
      {
        id: 'sar-001',
        name: 'Silk Sarees',
        tagline: 'Weave Your Royal Moment',
        price: 8500,
        originalPrice: 12000,
        priceRange: '₹8,500 – ₹25,000',
        available: true,
        isBestSeller: true,
        description: 'Pure Kanchipuram and Banarasi handwoven silk sarees with heavy gold zari borders and an opulent woven pallu. Hand-selected threads woven by master artisans.',
        fabric: '100% Pure Mulberry Kanchipuram Silk with Silver/Gold Zari Weave',
        designFit: 'Classic 6-yard drape with ornate pallu and matching unstitched blouse piece',
        closure: 'Traditional drape closure; unstitched blouse piece included',
        sizes: ['Free Size (Includes 0.8m Blouse Piece)'],
        shipping: 'Complimentary insured shipping across India. Dispatched within 24-48 hours.',
        returnPolicy: '7-Day Easy Boutique Exchange Policy on unstitched and unused items.',
        image: 'images_yazhi/Silk Saree.webp'
      },
      {
        id: 'sar-002',
        name: 'Cotton Sarees',
        tagline: 'Breezy Comfort, Timeless Charm',
        price: 1400,
        originalPrice: 2200,
        priceRange: '₹1,400 – ₹3,500',
        available: true,
        description: 'Breathable organic Coimbatore and Chettinad handloom cotton sarees with artisanal border prints and natural vegetable dye accents.',
        fabric: '100% Organic Handloom Combed Cotton (80s Count)',
        designFit: 'Lightweight crisp drape suitable for warm South Indian climate and daily grace',
        closure: 'Traditional drape; matching blouse length attached',
        sizes: ['Free Size (6.2m including blouse)'],
        shipping: 'Standard delivery in 3-5 business days. Free shipping above ₹4,000.',
        returnPolicy: '7-Day Exchange Policy in original boutique packaging.',
        image: 'images_yazhi/Cotton Saree.webp'
      },
      {
        id: 'sar-003',
        name: 'Silk Cotton Sarees',
        tagline: 'The Perfect Blend of Grace & Comfort',
        price: 2600,
        originalPrice: 3800,
        priceRange: '₹2,600 – ₹6,000',
        available: true,
        description: 'Featherlight blend of lustrous mulberry silk and airy combed cotton for day-to-night elegance at festive family gatherings.',
        fabric: '60% Mulberry Silk, 40% Fine Cotton Blend with Tested Zari',
        designFit: 'Soft silhouette with gentle sheen and effortless pleating',
        closure: 'Traditional drape',
        sizes: ['Free Size (6.25m with blouse piece)'],
        shipping: 'Express courier delivery across Tamil Nadu within 48 hours.',
        returnPolicy: '7-Day Boutique Exchange Guaranteed.',
        image: 'images_yazhi/Silk Cotton Saree.jpg'
      },
      {
        id: 'sar-004',
        name: 'Embroidered Sarees',
        tagline: 'Every Thread Tells a Story',
        price: 4500,
        originalPrice: 6200,
        priceRange: '₹4,500 – ₹11,000',
        available: true,
        description: 'Delicate georgette and organza drapes featuring intricate Kashmiri resham threadwork, micro sequins, and cut-dana scalloped borders.',
        fabric: 'Pure Viscose Georgette & Organza with Hand-Resham Embroidery',
        designFit: 'Fluid feminine drape that enhances natural silhouette with subtle glimmer',
        closure: 'Traditional drape with custom blouse fabrication available',
        sizes: ['Free Size (Includes Designer Blouse Piece)'],
        shipping: 'Dispatches within 24 hours from Coimbatore boutique.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'images_yazhi/Embroidered Saree.webp'
      },
      {
        id: 'sar-005',
        name: 'Designer & Party Wear',
        tagline: 'Drape. Dazzle. Celebrate.',
        price: 6800,
        originalPrice: 9500,
        priceRange: '₹6,800 – ₹18,000',
        available: true,
        isBestSeller: true,
        description: 'Statement pre-pleated, ruffled, and metallic tissue sarees made to turn heads at cocktail receptions and sangeet parties.',
        fabric: 'Metallic Tissue Organza with Micro-Pleats & Crystal Border Trims',
        designFit: 'Pre-stitched pleat drape option available with structured silhouette',
        closure: 'Concealed hook waist fastening or traditional pin drape',
        sizes: ['Free Size (Pre-stitched custom option available)'],
        shipping: 'Free delivery above ₹4,000 across India.',
        returnPolicy: '7-Day Boutique Exchange on all ready-to-wear pieces.',
        image: 'images_yazhi/Designer & Party Wear.avif'
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
    image: 'images_yazhi/Bridal Collections.webp',
    items: [
      {
        id: 'bri-001',
        name: 'Kanchipuram Silk Sarees',
        tagline: 'Traditional South Indian bridal wear with rich zari work',
        price: 18500,
        originalPrice: 24000,
        priceRange: '₹18,500 – ₹65,000',
        available: true,
        description: 'Authentic 3-ply pure silk woven with genuine silver and gold zari motifs depicting South Indian temple corridors, rudraksh, and twin-peacock motifs.',
        fabric: 'Pure Mulberry Silk (Heavy 3-Ply) with Pure Tested Gold Zari',
        designFit: 'Heirloom heavy bridal drape with 18-inch contrast zari border',
        closure: 'Traditional drape; coordinating brocade blouse fabric included',
        sizes: ['Free Size (Includes Heavy Bridal Blouse Fabric)'],
        shipping: 'Insured express white-glove shipping with bridal gift box.',
        returnPolicy: 'Boutique exchange available within 7 days in unstitched condition.',
        image: 'images_yazhi/Kanchipuram Silk Sarees.jpg'
      },
      {
        id: 'bri-002',
        name: 'Bridal Lehenga',
        tagline: 'Popular for engagement, reception and North Indian-style weddings',
        price: 28000,
        originalPrice: 36000,
        priceRange: '₹28,000 – ₹95,000',
        available: true,
        isBestSeller: true,
        description: 'Opulent multi-panel velvet and raw silk bridal lehenga adorned with authentic zardozi, dabka, French knot resham, and hand-cut mirrors.',
        fabric: 'Rich Micro Velvet & Pure Raw Silk with Dual Organza Dupattas',
        designFit: '16-Kali architectural kalidaar flare with double can-can support',
        closure: 'Side concealed YKK zip with handcrafted dori & heavy latkans',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Made to Measurements'],
        shipping: 'Free national priority shipping in bespoke garment trunk.',
        returnPolicy: 'Customized bridal lehengas are created to exact size measurements.',
        image: 'images_yazhi/Bridal Lehenga.jpg'
      },
      {
        id: 'bri-003',
        name: 'Designer Bridal Sarees',
        tagline: 'Modern sarees with embroidery, sequins, stone and zari work',
        price: 16000,
        originalPrice: 21000,
        priceRange: '₹16,000 – ₹45,000',
        available: true,
        description: 'Contemporary organza, shimmer georgette, and tissue silk bridal sarees accented with Swarovski elements, scalloped edges, and stone embellishments.',
        fabric: 'Tissue Organza & Shimmer Silk with Hand-Set Crystal Embellishments',
        designFit: 'Airy translucent luxury drape with glittering pallu',
        closure: 'Traditional drape with custom blouse tailoring option',
        sizes: ['Free Size (Includes Designer Blouse Material)'],
        shipping: 'Complimentary shipping across India.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'images_yazhi/Designer Bridal Sarees.jpg'
      },
      {
        id: 'bri-004',
        name: 'Bridal Blouse Collection',
        tagline: 'Heavy maggam, zardozi and embroidery blouses to pair with bridal sarees',
        price: 6500,
        originalPrice: 8500,
        priceRange: '₹6,500 – ₹18,000',
        available: true,
        description: 'Bespoke bridal blouses meticulously tailored with heavy maggam work, cutwork sleeves, ornate pearl tassels, and personalized bridal monogramming.',
        fabric: 'Heavy Raw Silk Base with Pure Metallic Wire & Kundan Maggam Work',
        designFit: 'Structured padded princess-cut bodice with deep back neckline',
        closure: 'Back hook-and-eye closure with handcrafted dori tassels',
        sizes: ['32', '34', '36', '38', '40', '42', 'Custom Tailored'],
        shipping: 'Tailored and dispatched within 5-7 boutique working days.',
        returnPolicy: 'Complimentary fitting adjustment at our Coimbatore atelier.',
        image: 'images_yazhi/Bridal Blouse Collection.webp'
      },
      {
        id: 'bri-005',
        name: 'Reception / Party Wear',
        tagline: 'Tissue silk, brocade and contemporary bridal outfits suitable for receptions',
        price: 19500,
        originalPrice: 26000,
        priceRange: '₹19,500 – ₹55,000',
        available: true,
        description: 'Architectural sweep trails, dramatic drapes, and lightweight brocade fusion gowns crafted for unforgettable wedding receptions.',
        fabric: 'Pure Banarasi Brocade & Featherweight Duchesse Satin',
        designFit: 'Structured Indo-Western silhouette with graceful drape train',
        closure: 'Concealed side zipper with decorative fabric-covered buttons',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Fitted'],
        shipping: 'Free insured courier delivery.',
        returnPolicy: '7-Day Exchange Policy on standard sizes.',
        image: 'images_yazhi/Reception party wear.webp'
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
    image: 'images_yazhi/Festive wear.webp',
    items: [
      {
        id: 'fes-001',
        name: 'Diwali',
        tagline: 'Shine Bright, Celebrate in Style',
        price: 7200,
        originalPrice: 9500,
        priceRange: '₹7,200 – ₹18,000',
        available: true,
        description: 'Glimmering festive lehengas and flared Anarkalis woven with gold thread and mirror motifs to brighten your Diwali celebrations.',
        fabric: 'Art Silk Brocade with Gota Patti & Mirror Accents',
        designFit: 'Flared kalidaar with matching dupatta and choli',
        closure: 'Drawstring waist with latkans and side zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        shipping: 'Express festive dispatch in 24 hours.',
        returnPolicy: '7-Day Easy Exchange Policy.',
        image: 'images_yazhi/Diwali.jpg'
      },
      {
        id: 'fes-002',
        name: 'Pongal',
        tagline: 'Tradition Woven with Elegance',
        price: 3600,
        originalPrice: 4800,
        priceRange: '₹3,600 – ₹8,500',
        available: true,
        description: 'Heritage Korvai cotton-silk sarees and traditional dhavani half-saree sets tailored for festive harvest blessings and temple poojas.',
        fabric: 'Pure Chettinad Cotton-Silk with Contrast Temple Korvai Border',
        designFit: 'Comfortable traditional silhouette designed for festive rituals',
        closure: 'Traditional drape / tie skirt',
        sizes: ['Free Size', 'S', 'M', 'L'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Guaranteed.',
        image: 'images_yazhi/Pongal.jpg'
      },
      {
        id: 'fes-003',
        name: 'Navratri',
        tagline: 'Celebrate Every Color, Every Moment',
        price: 4500,
        originalPrice: 6000,
        priceRange: '₹4,500 – ₹11,000',
        available: true,
        description: 'Vibrant multi-kalidaar Chaniya Choli ensembles engineered with huge flair for 9 nights of nonstop dancing and joy.',
        fabric: 'Pure Cotton with Gamthi Mirror Work & Colorful Bandhani Dupatta',
        designFit: 'Extensive 8-meter flare skirt for dynamic swirl motion',
        closure: 'Elasticated drawstring waist with comfortable stretch',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Dispatches within 24-48 hours.',
        returnPolicy: '7-Day Easy Exchange.',
        image: 'images_yazhi/Navratri.jpg'
      },
      {
        id: 'fes-004',
        name: 'Onam',
        tagline: 'Grace in Every Golden Thread',
        price: 4200,
        originalPrice: 5500,
        priceRange: '₹4,200 – ₹9,800',
        available: true,
        description: 'Authentic Kerala Kasavu handloom set-mundu and tissue sarees finished with pure 24kt gold-look zari borders.',
        fabric: 'Handloom Cotton Tissue with Rich Golden Kasavu Border',
        designFit: 'Ethereal traditional 2-piece set-mundu drape',
        closure: 'Traditional fold and pin closure',
        sizes: ['Free Size (Includes Contrast Blouse Piece)'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'images_yazhi/Onam.jpg'
      },
      {
        id: 'fes-005',
        name: 'Christmas',
        tagline: 'Festive Charm, Timeless Style',
        price: 5200,
        originalPrice: 6800,
        priceRange: '₹5,200 – ₹13,000',
        available: true,
        description: 'Rich velvet midis, emerald cocktail dresses, and red lace fusion gowns designed for joyous Christmas and New Year celebrations.',
        fabric: 'Plush Stretch Velvet with Lace Neckline & Satin Lining',
        designFit: 'Tailored fit-and-flare holiday silhouette',
        closure: 'Concealed back zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Quick express shipping nationwide.',
        returnPolicy: '7-Day Boutique Exchange Guarantee.',
        image: 'images_yazhi/Christmas.jpg'
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
    image: 'images_yazhi/Party Wear.webp',
    items: [
      {
        id: 'par-001',
        name: 'Cocktail Wear',
        tagline: 'Make Every Moment Sparkle',
        price: 5800,
        originalPrice: 7800,
        priceRange: '₹5,800 – ₹14,000',
        available: true,
        description: 'Shimmering georgette cocktail dresses with asymmetrical hemlines and tasteful crystal embellishments.',
        fabric: 'Shimmer Chiffon-Georgette with Fine Micro-Sequin Lining',
        designFit: 'Asymmetric contemporary silhouette with cinched waist',
        closure: 'Invisible side zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Dispatches in 24 hours.',
        returnPolicy: '7-Day Exchange Policy.',
        image: 'images_yazhi/Cocktail Wear.webp'
      },
      {
        id: 'par-002',
        name: 'Party Gowns',
        tagline: 'Elegance That Turns Heads',
        price: 7500,
        originalPrice: 9800,
        priceRange: '₹7,500 – ₹18,000',
        available: true,
        description: 'Full-length designer evening gowns crafted in pleated satin and organza with corset bodices and sweeping skirts.',
        fabric: 'Heavy Crepe Satin with Pleated Micro-Net Overlay',
        designFit: 'Floor-length ball gown silhouette with inner boning',
        closure: 'Corset lace-up back and hidden zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'images_yazhi/Party Gowns.jpg'
      },
      {
        id: 'par-003',
        name: 'Designer Sarees',
        tagline: 'Drape Yourself in Glamour',
        price: 6200,
        originalPrice: 8200,
        priceRange: '₹6,200 – ₹15,500',
        available: true,
        description: 'Ready-to-wear pre-draped party sarees with metallic sequin accents, feather trims, and structured blouses.',
        fabric: 'Liquid Metallic Lycra & Organza Ruffle',
        designFit: 'Pre-stitched 1-minute drape with flattering fall',
        closure: 'Concealed hook waistband with elastic waist tabs',
        sizes: ['Free Size (Pre-stitched Fits 26-36 inch waist)'],
        shipping: 'Dispatches within 24 hours.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'images_yazhi/Designer Sarees.avif'
      },
      {
        id: 'par-004',
        name: 'Party Lehengas',
        tagline: 'Celebrate in Style',
        price: 8900,
        originalPrice: 11500,
        priceRange: '₹8,900 – ₹22,000',
        available: true,
        description: 'Lightweight flare lehengas crafted for sangeet nights and cocktail parties with 3D floral accents and ruffled dupattas.',
        fabric: 'Net & Silk Georgette with 3D Floral Appliqué',
        designFit: 'Moderate flare with lightweight underskirt for easy dancing',
        closure: 'Drawstring with tassels + side zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Free insured delivery.',
        returnPolicy: '7-Day Exchange Policy.',
        image: 'images_yazhi/Party Lehengas.avif'
      },
      {
        id: 'par-005',
        name: 'Indo-Western Wear',
        tagline: 'Modern Style, Timeless Charm',
        price: 4600,
        originalPrice: 6200,
        priceRange: '₹4,600 – ₹11,000',
        available: true,
        description: 'Jacket-dhoti sets, crop tops with draped cape skirts, and modern fusion co-ords combining ease with charisma.',
        fabric: 'Soft Viscose Modal with Embroidered Organza Cape',
        designFit: 'Contemporary relaxed drape with tailored waist accent',
        closure: 'Concealed front hooks & pull-on dhoti pants',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Dispatched within 24-48 hours.',
        returnPolicy: '7-Day Boutique Exchange Guarantee.',
        image: 'images_yazhi/Indo-Western Wear.jpg'
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
    image: 'images_yazhi/Ethnic Wear.webp',
    items: [
      {
        id: 'eth-001',
        name: 'Salwar Suits',
        tagline: 'Timeless Tradition, Effortless Grace',
        price: 2800,
        originalPrice: 3800,
        priceRange: '₹2,800 – ₹6,500',
        available: true,
        description: 'Hand-block printed chanderi and modal silk salwar suits complete with matching bottoms and pure chiffon dupatta.',
        fabric: 'Chanderi Silk Kurta with Cotton Bottom & Chiffon Dupatta',
        designFit: 'Straight silhouette with side slits and comfortable trousers',
        closure: 'Pull-over with keyhole button neckline',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        shipping: 'Dispatches in 24 hours.',
        returnPolicy: '7-Day Easy Exchange Policy.',
        image: 'images_yazhi/Salwar Suits.jpg'
      },
      {
        id: 'eth-002',
        name: 'Anarkali Suits',
        tagline: 'Royal Elegance in Every Flow',
        price: 3900,
        originalPrice: 5200,
        priceRange: '₹3,900 – ₹9,500',
        available: true,
        description: 'Floor-sweeping 32-kali Anarkali suit sets with intricate gota-patti and threadwork across the neckline and flare.',
        fabric: 'Pure Georgette with Pure Santoon Lining & Gota Borders',
        designFit: '32-Kali full royal flare with churidar pants',
        closure: 'Concealed side zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'images_yazhi/Anarkali Suits.jpg'
      },
      {
        id: 'eth-003',
        name: 'Churidar Sets',
        tagline: 'Classic Style, Beautifully Crafted',
        price: 2400,
        originalPrice: 3200,
        priceRange: '₹2,400 – ₹5,500',
        available: true,
        description: 'Impeccably tailored straight-cut kurtis paired with gathered churidars and printed mulmul dupattas.',
        fabric: '100% Breathable Fine Combed Cotton with Silk Border Accents',
        designFit: 'Classic straight cut with mandarin collar and pocket',
        closure: 'Button placket front and drawstring churidar',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
        shipping: 'Dispatches within 24 hours.',
        returnPolicy: '7-Day Exchange Policy.',
        image: 'images_yazhi/Churidar Sets.jpg'
      },
      {
        id: 'eth-004',
        name: 'Maxi Fits',
        tagline: 'Celebrate Tradition with Grace',
        price: 3200,
        originalPrice: 4400,
        priceRange: '₹3,200 – ₹7,200',
        available: true,
        description: 'Comfortable bohemian ethnic maxi dresses featuring gathered tiers, tassel ties, and delicate foil prints.',
        fabric: 'Viscose Rayon with Breathable Voile Lining',
        designFit: 'Tiered maxi flare with gentle empire waistline',
        closure: 'Front neck tassel tie and discreet nursing-friendly hidden zip',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        shipping: 'Fast shipping nationwide.',
        returnPolicy: '7-Day Easy Exchange.',
        image: 'images_yazhi/Maxi Fits.webp'
      },
      {
        id: 'eth-005',
        name: 'Lehenga Choli',
        tagline: 'Heritage Meets Festive Elegance',
        price: 5800,
        originalPrice: 7500,
        priceRange: '₹5,800 – ₹14,500',
        available: true,
        description: 'Festive cotton-silk and brocade lehenga sets paired with contrast blouses and embellished organza dupattas.',
        fabric: 'Chanderi Cotton-Silk with Metallic Zari Jacquard Weave',
        designFit: 'Circular cut flare with contrast woven hemline',
        closure: 'Drawstring waist with latkans and back-hook choli',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Guarantee.',
        image: 'images_yazhi/Lehenga Choli.webp'
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
    image: 'images_yazhi/Custom Design.jpeg',
    items: [
      {
        id: 'cus-001',
        name: 'Custom-Made Blouses',
        tagline: 'Designed Just for You',
        price: 3200,
        originalPrice: 4500,
        priceRange: '₹3,200 – ₹9,500',
        available: true,
        description: 'Custom pattern drafting, maggam embroidery, hand zardozi, and perfect-fit tailoring for your heirloom sarees.',
        fabric: 'Pure Raw Silk / Brocade / Velvet with Customer Choice Embroidery',
        designFit: 'Custom draft tailored to your precise bust, shoulder, and armhole measurements',
        closure: 'Hook-and-eye or side zipper with handcrafted tassel tiebacks',
        sizes: ['Custom Fitted (Measurements taken via WhatsApp or in-boutique)'],
        shipping: 'Tailored and delivered within 5-7 boutique days.',
        returnPolicy: 'Includes free boutique fitting alterations at Coimbatore atelier.',
        image: 'images_yazhi/Custom-made Blouses.jpg'
      },
      {
        id: 'cus-002',
        name: 'Custom-Made Dresses',
        tagline: 'Your Style, Your Design',
        price: 6800,
        originalPrice: 9000,
        priceRange: '₹6,800 – ₹19,000',
        available: true,
        description: 'Bespoke dresses and gowns created around your exact silhouette, choice of silk/satin fabrics, and design moodboard.',
        fabric: 'Choice of Pure Organza, Mulberry Silk, Duchesse Satin, or Velvet',
        designFit: 'Custom pattern engineered for client body proportions',
        closure: 'Bespoke closure according to dress design',
        sizes: ['Full Custom Tailoring'],
        shipping: 'Dispatches within 7-10 days after design approval.',
        returnPolicy: 'Free fitting trial and alterations included.',
        image: 'images_yazhi/Custom-made Dresses.webp'
      },
      {
        id: 'cus-003',
        name: 'Custom-Made Kidswear',
        tagline: 'Little Styles, Made with Love',
        price: 2600,
        originalPrice: 3500,
        priceRange: '₹2,600 – ₹6,800',
        available: true,
        description: 'Adorable traditional pattu-pavadai, mini lehengas, and ethnic outfits stitched with soft, child-safe inner cotton linings.',
        fabric: 'Soft Silk / Handloom Cotton with Ultra-Soft 100% Cotton Inner Lining',
        designFit: 'Comfortable relaxed fit with growth margins inside for children',
        closure: 'Soft zipper or tie-backs with fabric flap protection',
        sizes: ['Age 1 to 14 Years Custom Measurements'],
        shipping: 'Dispatched within 4-6 boutique days.',
        returnPolicy: 'Boutique exchange and fitting support guaranteed.',
        image: 'images_yazhi/Custom-made Kidswear.jpg'
      },
      {
        id: 'cus-004',
        name: 'Custom-Made Bridal Wear',
        tagline: 'Your Dream, Our Creation',
        price: 36000,
        originalPrice: 48000,
        priceRange: '₹36,000 – ₹1,50,000',
        available: true,
        description: 'A completely personalized bridal gown or lehenga designed in private consultation with Sharmila M, including fabric swatches and trial fits.',
        fabric: 'Highest Grade Raw Silk, French Velvet, Pure Zari, & Hand-Dyed Organza',
        designFit: 'Haute Couture bridal tailoring with internal corsetry and custom kali flare',
        closure: 'Bespoke bridal closure with bridal monogram tag',
        sizes: ['Complete Custom Fit to Client Measurements'],
        shipping: 'Dedicated insured courier in boutique wooden keepsake box.',
        returnPolicy: 'Includes 2 personalized mock fittings with Sharmila M.',
        image: 'images_yazhi/Custom-Made Bridal Wear.jpg'
      },
      {
        id: 'cus-005',
        name: 'Custom-Made Sharara Sets',
        tagline: 'Made for Your Special Moments',
        price: 8200,
        originalPrice: 11000,
        priceRange: '₹8,200 – ₹24,000',
        available: true,
        description: 'Three-piece custom sharara outfits with hand-selected pure georgette fabrics, customized flared tiers, and delicate hand embroidery.',
        fabric: 'Pure Viscose Georgette with Gotta Patti & Mukaish Work',
        designFit: 'Short peplum/straight kurti paired with voluminous three-tier sharara',
        closure: 'Side concealed zipper with elasticated back waist',
        sizes: ['Custom Tailored to Measurements'],
        shipping: 'Dispatches within 7 days.',
        returnPolicy: 'Free boutique fitting adjustments included.',
        image: 'images_yazhi/Custom-Made Sharara Sets.jpg'
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
    image: 'images_yazhi/Combos & Bundles.jpg',
    items: [
      {
        id: 'com-001',
        name: 'Blouse + Skirt Combo',
        tagline: 'A Match Made for Moments',
        price: 4900,
        originalPrice: 6500,
        priceRange: '₹4,900 – ₹11,000',
        available: true,
        description: 'Handcrafted embroidered blouse paired with a coordinating circular brocade skirt. Ready to wear with zero styling hassle.',
        fabric: 'Embroidered Raw Silk Blouse with Banarasi Brocade Skirt',
        designFit: 'Tailored crop top paired with pleated circular flared skirt',
        closure: 'Back blouse hooks + side skirt zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Free delivery above ₹4,000 across India.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'images_yazhi/Blouse + Skirt Combo.jpg'
      },
      {
        id: 'com-002',
        name: 'Mother-Daughter Combo',
        tagline: 'Matching Moments, Cherished Forever',
        price: 7800,
        originalPrice: 10500,
        priceRange: '₹7,800 – ₹18,500',
        available: true,
        description: 'Matching ethnic silk ensembles for mother and daughter. Perfect for milestone birthdays, temple visits, and family portraits.',
        fabric: 'Matching Pure Coimbatore Silk Blend with Gold Zari Border',
        designFit: 'Mother saree/anarkali + daughter pattu pavadai twin set',
        closure: 'Standard saree + tailored kidswear closure',
        sizes: ['Adult (S-XL) + Child (2-10 Years)'],
        shipping: 'Dispatched within 48 hours.',
        returnPolicy: '7-Day Easy Exchange Policy.',
        image: 'images_yazhi/Mother-Daughter Combo.webp'
      },
      {
        id: 'com-003',
        name: 'Couple Outfit Combo',
        tagline: 'Two Styles, One Beautiful Story',
        price: 9800,
        originalPrice: 13000,
        priceRange: '₹9,800 – ₹25,000',
        available: true,
        description: 'Complementary color-coordinated couple outfit set featuring a designer saree/lehenga and matching men\'s silk bandhgala kurta set.',
        fabric: 'Fine Chanderi Silk & Cotton Silk Blend in Synchronized Weave',
        designFit: 'Her: Designer Saree/Lehenga; Him: Tailored Kurta-Churidar set',
        closure: 'Traditional Her + Buttoned Placket Him',
        sizes: ['Her: XS-XL, Him: 38-44'],
        shipping: 'Free express shipping nationwide.',
        returnPolicy: '7-Day Boutique Exchange Guarantee.',
        image: 'images_yazhi/Couple Outfit Combo.webp'
      },
      {
        id: 'com-004',
        name: 'Family Matching Combo',
        tagline: 'Together in Style, Together in Love',
        price: 13500,
        originalPrice: 18000,
        priceRange: '₹13,500 – ₹34,000',
        available: true,
        description: 'Complete 4-member family package (Parents + 2 Children) in unified weave, auspicious colors, and luxury boutique detailing.',
        fabric: 'Handloom Silk-Cotton with Coordinated Zari Motifs',
        designFit: 'Custom-coordinated silhouettes for all family members',
        closure: 'Assorted custom fasteners for comfortable wear',
        sizes: ['Custom Fitted for the Whole Family'],
        shipping: 'Free insured doorstep shipping.',
        returnPolicy: 'Includes free boutique adjustment on kidswear.',
        image: 'images_yazhi/Family Matching Combo.webp'
      },
      {
        id: 'com-005',
        name: 'Men & Women Combo',
        tagline: 'Effortless Style, Perfectly Paired',
        price: 8200,
        originalPrice: 11000,
        priceRange: '₹8,200 – ₹19,500',
        available: true,
        description: 'Twin occasion wear set featuring a lightweight occasion saree and matching men\'s silk bandhgala kurta.',
        fabric: 'Art Silk with Jacquard Weaving & Cotton Inner Lining',
        designFit: 'Coordinated occasion fit for duo celebrations',
        closure: 'Standard drape + Button Kurta',
        sizes: ['Standard S-XL for Both'],
        shipping: 'Free shipping above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange.',
        image: 'images_yazhi/Men & Women Combo.jpg'
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
    image: 'images_yazhi/Contemporary.jpg',
    items: [
      {
        id: 'con-001',
        name: 'Co-ord Sets',
        tagline: 'One Look, Perfectly Paired',
        price: 3600,
        originalPrice: 4800,
        priceRange: '₹3,600 – ₹8,200',
        available: true,
        isBestSeller: true,
        description: 'Sleek shirt-pant and blazer-trouser matching co-ord sets in breathable linen and crepe blends. Elevated elegance for modern power dressing.',
        fabric: 'Premium Japanese Crepe & Cotton Linen Blend',
        designFit: 'Tailored relaxed blazer with high-waisted straight leg trousers',
        closure: 'Front buttons on top; zip fly with elastic back on trousers',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Dispatched within 24 hours. Free shipping over ₹4,000.',
        returnPolicy: '7-Day Easy Boutique Exchange Guarantee.',
        image: 'images_yazhi/Co-ord Sets.webp'
      },
      {
        id: 'con-002',
        name: 'Western Dresses',
        tagline: 'Modern Style, Effortless Grace',
        price: 3900,
        originalPrice: 5200,
        priceRange: '₹3,900 – ₹8,800',
        available: true,
        description: 'Flowy wrap midis, A-line day dresses, and structured shifts cut from imported pleated fabrics for day-to-night versatility.',
        fabric: 'Pleated Poly-Georgette with Soft Knit Inner Lining',
        designFit: 'Wrap midi silhouette with adjustable self-tie belt',
        closure: 'Wrap tie-up and hidden side zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        shipping: 'Dispatches within 24 hours.',
        returnPolicy: '7-Day Boutique Exchange.',
        image: 'images_yazhi/Western Dresses.webp'
      },
      {
        id: 'con-003',
        name: 'Tops & Shirts',
        tagline: 'Everyday Style, Elevated',
        price: 1950,
        originalPrice: 2800,
        priceRange: '₹1,950 – ₹4,500',
        available: true,
        description: 'Premium organza blouses, bishop-sleeve silk tops, and tailored satin shirts that elevate any pair of trousers.',
        fabric: 'Pure Viscose Satin & Semi-Sheer Organza Accents',
        designFit: 'Structured relaxed fit with cuffed statement sleeves',
        closure: 'Mother-of-pearl front buttons',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Dispatches in 24 hours.',
        returnPolicy: '7-Day Exchange Policy.',
        image: 'images_yazhi/Tops & Shirts.avif'
      },
      {
        id: 'con-004',
        name: 'Casual Wear',
        tagline: 'Relaxed Looks, Refined Style',
        price: 2500,
        originalPrice: 3400,
        priceRange: '₹2,500 – ₹5,800',
        available: true,
        description: 'Soft linen tunic sets, easy tiered sundresses, and breathable everyday cotton dresses with functional deep pockets.',
        fabric: '100% Washed Pure Linen & Organic Voile',
        designFit: 'Easy breezy relaxed A-line fit with deep side pockets',
        closure: 'Slip-on with comfortable neck notch',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        shipping: 'Dispatches within 24-48 hours.',
        returnPolicy: '7-Day Boutique Exchange Guaranteed.',
        image: 'images_yazhi/Casual Wear.webp'
      },
      {
        id: 'con-005',
        name: 'Evening Wear',
        tagline: 'Own the Night in Style',
        price: 6400,
        originalPrice: 8500,
        priceRange: '₹6,400 – ₹15,000',
        available: true,
        description: 'Dramatic cape-sleeve maxi dresses, one-shoulder satin gowns, and tailored cocktail tuxedos for memorable soirees.',
        fabric: 'Heavy Crepe Satin with Chiffon Drape Cape',
        designFit: 'Fitted column silhouette with fluid cascading cape',
        closure: 'Concealed side zipper',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        shipping: 'Free delivery above ₹4,000.',
        returnPolicy: '7-Day Boutique Exchange Policy.',
        image: 'images_yazhi/Evening Wear.webp'
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
    shipping: 'Free insured priority courier across India.',
    returnPolicy: '7-Day Boutique Exchange on standard sizes.',
    image: 'images_yazhi/Pearl Embellished Lehenga.webp'
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
    shipping: 'Dispatches in 24 hours.',
    returnPolicy: '7-Day Easy Exchange Policy.',
    image: 'images_yazhi/Mirror Work Kurta Set.webp'
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
    shipping: 'Free shipping on orders above ₹4,000.',
    returnPolicy: '7-Day Boutique Exchange.',
    image: 'images_yazhi/Pastel Ombre Saree.webp'
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
    shipping: 'Dispatches within 24 hours.',
    returnPolicy: '7-Day Boutique Exchange Guaranteed.',
    image: 'images_yazhi/Sequin Festive Gown.avif'
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
    shipping: 'Dispatched within 24-48 hours.',
    returnPolicy: '7-Day Boutique Exchange Policy.',
    image: 'images_yazhi/Organza Floral Saree.jpg'
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
    shipping: 'Free delivery above ₹4,000.',
    returnPolicy: '7-Day Boutique Exchange Guarantee.',
    image: 'images_yazhi/Co-ord Crop Lehenga Set.webp'
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
    shipping: 'Insured nationwide courier.',
    returnPolicy: '7-Day Boutique Exchange Guarantee.',
    image: 'images_yazhi/Hand-Painted Kalamkari Saree.webp'
  }
];

// ──────────────────────────────────────────────
// OFFERS & PROMOTIONS CONFIGURATION
// ──────────────────────────────────────────────
const YAZHI_DEFAULT_OFFERS = {
  firstOrder: { discount: 0.50, label: '50% Off First Order', code: 'YAZHI50', minOrder: 0, active: true },
  birthday: { discount: 0.30, label: '30% Birthday Special', code: 'BDAY30', minOrder: 0, active: true },
  festival: { discount: 0.20, label: '20% Festival Special', code: 'FESTIVE20', minOrder: 0, active: true },
  freeDelivery: { discount: 0, label: 'Free Delivery', code: null, minOrder: 4000, active: true },
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

// Get custom (admin-added) products
function yazhiGetCustomProducts() {
  try {
    return JSON.parse(localStorage.getItem(YAZHI_CUSTOM_PRODUCTS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

// Get deleted product IDs set
function yazhiGetDeletedProductIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(YAZHI_DELETED_PRODUCTS_KEY)) || []);
  } catch (e) {
    return new Set();
  }
}

// Add a brand-new product (Admin only)
function yazhiAddNewProduct(data) {
  const customProducts = yazhiGetCustomProducts();
  const newId = 'custom-' + Date.now().toString(36);
  const newProduct = {
    id: newId,
    name: data.name || 'New Product',
    tagline: data.tagline || 'Handcrafted for you',
    price: Number(data.price) || 0,
    originalPrice: Number(data.originalPrice) || Number(data.price) || 0,
    image: data.image || 'images/logo.svg',
    collection: data.collection || 'New Arrival',
    collectionId: (data.collection || 'New Arrival').toLowerCase().replace(/[^a-z0-9]/g, '-'),
    badge: data.badge || 'New',
    description: data.description || '',
    fabric: data.fabric || '',
    designFit: data.designFit || '',
    closure: data.closure || '',
    colors: data.colors ? data.colors.split(',').map(c => c.trim()).filter(Boolean) : ['Default'],
    sizes: data.sizes ? data.sizes.split(',').map(s => s.trim()).filter(Boolean) : ['Free Size'],
    available: data.available !== false,
    isCustom: true,
    createdAt: new Date().toISOString()
  };
  customProducts.unshift(newProduct);
  localStorage.setItem(YAZHI_CUSTOM_PRODUCTS_KEY, JSON.stringify(customProducts));
  return newProduct;
}

// Delete a product (marks as deleted; preserves historical order data)
function yazhiDeleteProduct(id) {
  // Remove from custom products if it's a custom one
  const customProducts = yazhiGetCustomProducts();
  const filteredCustom = customProducts.filter(p => p.id !== id);
  localStorage.setItem(YAZHI_CUSTOM_PRODUCTS_KEY, JSON.stringify(filteredCustom));

  // Add to deleted set (for base products, so they are hidden but orders still reference them)
  const deleted = yazhiGetDeletedProductIds();
  deleted.add(id);
  localStorage.setItem(YAZHI_DELETED_PRODUCTS_KEY, JSON.stringify([...deleted]));
  return true;
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

// Get all products flat list (includes custom admin-added products, excludes deleted)
function yazhiGetAllProducts() {
  const collections = yazhiGetCollections();
  const newArrivals = yazhiGetNewArrivals();
  const customProducts = yazhiGetCustomProducts();
  const deletedIds = yazhiGetDeletedProductIds();
  const overrides = yazhiGetProductOverrides();
  const list = [];
  const seen = new Set();

  collections.forEach(col => {
    col.items.forEach(p => {
      if (!seen.has(p.id) && !deletedIds.has(p.id)) {
        seen.add(p.id);
        list.push(p);
      }
    });
  });

  newArrivals.forEach(p => {
    if (!seen.has(p.id) && !deletedIds.has(p.id)) {
      seen.add(p.id);
      list.push(p);
    }
  });

  // Include admin-added custom products (apply overrides to them too)
  customProducts.forEach(p => {
    if (!seen.has(p.id) && !deletedIds.has(p.id)) {
      seen.add(p.id);
      const merged = { ...p };
      if (overrides[p.id]) Object.assign(merged, overrides[p.id]);
      list.push(merged);
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
    yazhiAddNewProduct,
    yazhiDeleteProduct,
    yazhiGetCustomProducts,
    yazhiGetDeletedProductIds,
    yazhiGetAllReviews,
    yazhiGetApprovedReviews,
    yazhiSubmitReview,
    yazhiUpdateReviewStatus,
    yazhiGetOffers,
    yazhiSaveOffers
  };
}
