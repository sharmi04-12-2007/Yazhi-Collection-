// ============================================================
// YAZHI COLLECTION – Product Data Model (PRD v2)
// 8 Collections × 5 Types = 40 types + 7 New Arrivals
// Owner: Sharmila M | Coimbatore | Tel: 6369685930
// ============================================================

const YAZHI_PRODUCTS = {

  // ──────────────────────────────────────────────
  // 1. SAREE COLLECTION
  // ──────────────────────────────────────────────
  sarees: {
    id: 'sarees',
    label: 'Saree Collection',
    slug: 'saree-collection',
    tagline: 'Timeless drapes woven with heritage & grace',
    heroColor: '#7A3455',
    items: [
      {
        id: 'sar-001', name: 'Kanjivaram Silk Saree',
        tagline: 'Royal threads of Kanchipuram, eternally yours',
        price: 8500, priceRange: '₹8,500 – ₹25,000',
        badge: 'Bestseller', available: true,
        description: 'Handwoven pure silk with zari borders and traditional motifs. Each piece is a heritage masterwork.',
        colors: ['Crimson', 'Peacock Blue', 'Emerald', 'Deep Purple'],
        sizes: ['Free Size']
      },
      {
        id: 'sar-002', name: 'Chiffon Georgette Saree',
        tagline: 'Featherlight elegance that moves with you',
        price: 2200, priceRange: '₹2,200 – ₹5,500',
        badge: 'Trending', available: true,
        description: 'Sheer chiffon with delicate embroidery, perfect for parties and receptions.',
        colors: ['Blush Pink', 'Ice Blue', 'Champagne', 'Mint'],
        sizes: ['Free Size']
      },
      {
        id: 'sar-003', name: 'Cotton Handloom Saree',
        tagline: 'Simple, soulful, sustainably beautiful',
        price: 1200, priceRange: '₹1,200 – ₹3,500',
        badge: 'Eco Pick', available: true,
        description: 'Breathable handloom cotton with block-print designs. Ideal for everyday elegance.',
        colors: ['Natural White', 'Indigo', 'Terracotta', 'Sage Green'],
        sizes: ['Free Size']
      },
      {
        id: 'sar-004', name: 'Banarasi Silk Saree',
        tagline: 'Mughal artistry draped in modern splendour',
        price: 6500, priceRange: '₹6,500 – ₹18,000',
        badge: 'Premium', available: true,
        description: 'Opulent Banarasi weave with gold-silver brocade, a treasure for every wardrobe.',
        colors: ['Ruby Red', 'Midnight Blue', 'Forest Green', 'Antique Gold'],
        sizes: ['Free Size']
      },
      {
        id: 'sar-005', name: 'Linen Printed Saree',
        tagline: 'Contemporary prints on nature\'s finest fabric',
        price: 1800, priceRange: '₹1,800 – ₹4,000',
        badge: 'New', available: true,
        description: 'Modern geometric and floral prints on premium linen. A workwear staple reinvented.',
        colors: ['Mustard', 'Slate Blue', 'Coral', 'Olive'],
        sizes: ['Free Size']
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 2. BRIDAL COLLECTION
  // ──────────────────────────────────────────────
  bridal: {
    id: 'bridal',
    label: 'Bridal Collection',
    slug: 'bridal',
    tagline: 'Every bride deserves a story worth telling',
    heroColor: '#3B1F3F',
    items: [
      {
        id: 'bri-001', name: 'Bridal Lehenga Choli',
        tagline: 'The crown jewel of your wedding ensemble',
        price: 22000, priceRange: '₹22,000 – ₹75,000',
        badge: 'Signature', available: true,
        description: 'Hand-embroidered bridal lehenga with zardosi and mirror work. Available in custom sizing.',
        colors: ['Bridal Red', 'Deep Maroon', 'Royal Pink', 'Ivory Gold'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom']
      },
      {
        id: 'bri-002', name: 'Silk Bridal Saree',
        tagline: 'Tradition wrapped in pure magnificence',
        price: 15000, priceRange: '₹15,000 – ₹45,000',
        badge: 'Premium', available: true,
        description: 'Grand silk bridal saree with heavy pallu and zari border, blouse included.',
        colors: ['Kum Kum Red', 'Gold Rose', 'Magenta', 'Deep Coral'],
        sizes: ['Free Size + Blouse Custom']
      },
      {
        id: 'bri-003', name: 'Bridal Anarkali Suit',
        tagline: 'Regal grace from floor to ceiling',
        price: 12000, priceRange: '₹12,000 – ₹35,000',
        badge: 'Trending', available: true,
        description: 'Floor-length Anarkali with intricate embroidery and dupatta. Bridal-ready from day one.',
        colors: ['Wine Red', 'Forest Green', 'Royal Blue', 'Peach Gold'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'bri-004', name: 'Mehendi Ceremony Outfit',
        tagline: 'Sun-kissed hues for your golden ceremony',
        price: 8500, priceRange: '₹8,500 – ₹22,000',
        badge: 'Popular', available: true,
        description: 'Vibrant yellow-green sharara or lehenga set for mehendi rituals.',
        colors: ['Sunflower Yellow', 'Lime Green', 'Mango', 'Orange Burst'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'bri-005', name: 'Reception Gown',
        tagline: 'End your wedding journey on a glamorous note',
        price: 18000, priceRange: '₹18,000 – ₹55,000',
        badge: 'Exclusive', available: true,
        description: 'Contemporary Indo-western reception gown with trail and embellishments. Custom orders welcome.',
        colors: ['Champagne', 'Blush Pink', 'Midnight Blue', 'Emerald'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom']
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 3. PARTY WEAR
  // ──────────────────────────────────────────────
  party: {
    id: 'party',
    label: 'Party Wear',
    slug: 'party',
    tagline: 'Dress to dazzle, always',
    heroColor: '#522A58',
    items: [
      {
        id: 'par-001', name: 'Sequin Party Gown',
        tagline: 'Shimmer your way into every spotlight',
        price: 5500, priceRange: '₹5,500 – ₹14,000',
        badge: 'Hot Pick', available: true,
        description: 'All-over sequin gown with thigh slit and halter neck. Be the star of every party.',
        colors: ['Silver', 'Gold', 'Rose Gold', 'Midnight Black'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        id: 'par-002', name: 'Embroidered Sharara Set',
        tagline: 'Flowy silhouettes with festive hearts',
        price: 4200, priceRange: '₹4,200 – ₹9,500',
        badge: 'Bestseller', available: true,
        description: 'Wide-leg sharara with embroidered kurta and dupatta. Party meets heritage.',
        colors: ['Deep Pink', 'Teal', 'Burgundy', 'Sky Blue'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'par-003', name: 'Indo-Western Co-ord Set',
        tagline: 'Two pieces, one unforgettable look',
        price: 3800, priceRange: '₹3,800 – ₹8,000',
        badge: 'Trending', available: true,
        description: 'Crop top and palazzo co-ord in georgette with lace trim. Modern festive perfection.',
        colors: ['Electric Blue', 'Hot Pink', 'Emerald', 'Burnt Orange'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        id: 'par-004', name: 'Velvet Cocktail Dress',
        tagline: 'Luxe velvet for your most glamorous evenings',
        price: 4800, priceRange: '₹4,800 – ₹10,500',
        badge: 'Premium', available: true,
        description: 'Plush velvet mini or midi dress with a V-neck and ruched sides. Effortlessly chic.',
        colors: ['Deep Plum', 'Forest Green', 'Navy', 'Scarlet'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        id: 'par-005', name: 'Printed Maxi Dress',
        tagline: 'Bold prints, bolder attitude',
        price: 2800, priceRange: '₹2,800 – ₹6,000',
        badge: 'Value Pick', available: true,
        description: 'Floor-length maxi with vibrant tropical or geometric prints. Versatile day-to-night look.',
        colors: ['Tropical Multi', 'Boho Blue', 'Sunset Orange', 'Abstract Beige'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 4. ETHNIC WEAR
  // ──────────────────────────────────────────────
  ethnic: {
    id: 'ethnic',
    label: 'Ethnic Wear',
    slug: 'ethnic',
    tagline: 'Rooted in culture, styled for today',
    heroColor: '#5C223D',
    items: [
      {
        id: 'eth-001', name: 'Anarkali Kurta Set',
        tagline: 'Cascade of grace, morning to evening',
        price: 3200, priceRange: '₹3,200 – ₹7,500',
        badge: 'Classic', available: true,
        description: 'Flared Anarkali kurta with palazzo and chiffon dupatta. Timeless ethnic perfection.',
        colors: ['Peacock Blue', 'Magenta', 'Sage Green', 'Terracotta'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'eth-002', name: 'Patiala Salwar Suit',
        tagline: 'Pleated perfection with Punjabi spirit',
        price: 2500, priceRange: '₹2,500 – ₹6,000',
        badge: 'Popular', available: true,
        description: 'Vibrant Patiala salwar suit with phulkari-inspired embroidery and dupatta.',
        colors: ['Rani Pink', 'Cobalt Blue', 'Saffron', 'Lime Green'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'eth-003', name: 'Straight Kurti with Pants',
        tagline: 'Everyday ethnic, effortlessly refined',
        price: 1800, priceRange: '₹1,800 – ₹4,500',
        badge: 'Daily Wear', available: true,
        description: 'Cotton-blend straight kurti paired with fitted cigarette pants. Work meets tradition.',
        colors: ['White', 'Powder Blue', 'Dusty Rose', 'Olive'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']
      },
      {
        id: 'eth-004', name: 'Palazzo Kurta Dupatta',
        tagline: 'Wide-legged wonder for the free spirit',
        price: 2900, priceRange: '₹2,900 – ₹6,500',
        badge: 'Trending', available: true,
        description: 'Block-printed palazzo set with matching dupatta. Bohemian ethnic at its best.',
        colors: ['Indigo', 'Rust Red', 'Deep Teal', 'Mustard'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'eth-005', name: 'Jacket Style Ethnic Set',
        tagline: 'Layered luxury with a modern edge',
        price: 4200, priceRange: '₹4,200 – ₹9,000',
        badge: 'Exclusive', available: true,
        description: 'Ethnic kurta with embroidered long jacket and churidar. Statement-making ensemble.',
        colors: ['Burgundy', 'Deep Green', 'Charcoal', 'Royal Blue'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 5. FESTIVE WEAR
  // ──────────────────────────────────────────────
  festive: {
    id: 'festive',
    label: 'Festive Wear',
    slug: 'festive',
    tagline: 'Celebrate every moment in spectacular style',
    heroColor: '#A4813B',
    items: [
      {
        id: 'fes-001', name: 'Diwali Special Lehenga',
        tagline: 'Light up the festival like you were born to shine',
        price: 6500, priceRange: '₹6,500 – ₹16,000',
        badge: 'Festival Hit', available: true,
        description: 'Sparkly lehenga choli set adorned with mirror work and zari. Perfect for Diwali celebrations.',
        colors: ['Fiery Orange', 'Gold', 'Deep Red', 'Bright Pink'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'fes-002', name: 'Navratri Chaniya Choli',
        tagline: 'Twirl, celebrate, and own the garba floor',
        price: 3800, priceRange: '₹3,800 – ₹9,000',
        badge: 'Garba Special', available: true,
        description: 'Traditional Chaniya Choli with mirror and thread embroidery. Garba-ready and fabulous.',
        colors: ['Multi-Color', 'Turquoise', 'Saffron', 'Royal Pink'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'fes-003', name: 'Onam Pattupavadai',
        tagline: 'Kerala\'s pride, your most beautiful tradition',
        price: 4500, priceRange: '₹4,500 – ₹11,000',
        badge: 'South Special', available: true,
        description: 'Traditional Kerala silk Pavadai-Davani set in kasavu with gold borders.',
        colors: ['Cream & Gold', 'White & Gold', 'Off White', 'Light Yellow'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        id: 'fes-004', name: 'Pongal Celebration Saree',
        tagline: 'Harvest the joy of tradition in style',
        price: 2800, priceRange: '₹2,800 – ₹7,000',
        badge: 'Tamil Pride', available: true,
        description: 'Vibrant cotton-silk Pongal saree with korvai border. Celebrate the harvest with grace.',
        colors: ['Yellow Gold', 'Green & Red', 'Blue Border', 'Traditional Multi'],
        sizes: ['Free Size']
      },
      {
        id: 'fes-005', name: 'Eid Special Gharara',
        tagline: 'Celebrate Eid in timeless grandeur',
        price: 7500, priceRange: '₹7,500 – ₹18,000',
        badge: 'Eid Special', available: true,
        description: 'Heavily embroidered Gharara with silk dupatta. Eid glamour at its most majestic.',
        colors: ['Ivory', 'Peach', 'Light Mint', 'Pale Lavender'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 6. CONTEMPORARY
  // ──────────────────────────────────────────────
  contemporary: {
    id: 'contemporary',
    label: 'Contemporary',
    slug: 'contemporary',
    tagline: 'Where modern design meets timeless femininity',
    heroColor: '#261129',
    items: [
      {
        id: 'con-001', name: 'Structured Blazer Dress',
        tagline: 'Power dressing with a feminine twist',
        price: 4200, priceRange: '₹4,200 – ₹9,000',
        badge: 'Work Glam', available: true,
        description: 'Tailored blazer-style dress in crepe with belt. Boardroom to brunch in one look.',
        colors: ['Ivory', 'Charcoal', 'Dusty Rose', 'Navy'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        id: 'con-002', name: 'Midi Wrap Dress',
        tagline: 'The wrap that wraps up every occasion',
        price: 2900, priceRange: '₹2,900 – ₹6,500',
        badge: 'Versatile', available: true,
        description: 'Classic wrap midi in floral satin. Adjustable fit for all body types.',
        colors: ['Floral Pink', 'Blue Botanical', 'Sage Floral', 'Monochrome'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'con-003', name: 'Linen Shift Dress',
        tagline: 'Effortless minimalism for the modern woman',
        price: 2200, priceRange: '₹2,200 – ₹5,000',
        badge: 'Summer Fave', available: true,
        description: 'Clean-cut linen shift with subtle texture. Minimalist wardrobe essential.',
        colors: ['Ecru', 'Powder Blue', 'Biscuit', 'Clay'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'con-004', name: 'Peplum Kurta-Pants Set',
        tagline: 'Indo-western fusion at its most stylish',
        price: 3500, priceRange: '₹3,500 – ₹7,500',
        badge: 'Fusion', available: true,
        description: 'Peplum-hem kurta with straight cropped pants in digital-print fabric.',
        colors: ['Cobalt & White', 'Blush & Plum', 'Mint & Ivory', 'Black & Gold'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        id: 'con-005', name: 'Crop Top & Skirt Set',
        tagline: 'Two pieces. Infinite possibilities',
        price: 3100, priceRange: '₹3,100 – ₹7,000',
        badge: 'Young & Bold', available: true,
        description: 'Embellished crop top with flared or pencil skirt. Mix, match, slay.',
        colors: ['White & Beige', 'Black & Silver', 'Peach & Nude', 'Teal & Ivory'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 7. CUSTOM DESIGN
  // ──────────────────────────────────────────────
  customDesign: {
    id: 'customDesign',
    label: 'Custom Design',
    slug: 'custom-design',
    tagline: 'Your imagination, our expertise — one-of-a-kind creations',
    heroColor: '#3B1F3F',
    items: [
      {
        id: 'cus-001', name: 'Custom Bridal Lehenga',
        tagline: 'Designed around you, for the day about you',
        price: 35000, priceRange: '₹35,000 – ₹1,50,000',
        badge: 'Bespoke', available: true,
        description: 'Fully customised bridal lehenga designed from scratch by Sharmila M with personal fitting sessions.',
        colors: ['Your Choice'], sizes: ['Full Custom']
      },
      {
        id: 'cus-002', name: 'Custom Embroidery Saree',
        tagline: 'Each stitch tells your unique story',
        price: 12000, priceRange: '₹12,000 – ₹50,000',
        badge: 'Artisan', available: true,
        description: 'Hand-embroidered saree with custom motifs — family insignias, initials, or floral themes.',
        colors: ['Your Choice'], sizes: ['Free Size']
      },
      {
        id: 'cus-003', name: 'Tailored Kurta Set',
        tagline: 'Precision cut for your perfect silhouette',
        price: 5500, priceRange: '₹5,500 – ₹15,000',
        badge: 'Made-to-Fit', available: true,
        description: 'Custom-stitched kurta set in your preferred fabric, print, and embellishment style.',
        colors: ['Your Choice'], sizes: ['Full Custom']
      },
      {
        id: 'cus-004', name: 'Matching Family Outfits',
        tagline: 'United in style, together in elegance',
        price: 8000, priceRange: '₹8,000 – ₹30,000',
        badge: 'Family Set', available: true,
        description: 'Coordinated family ensemble for weddings and functions. Custom sizing for all ages.',
        colors: ['Coordinated Theme'], sizes: ['All Sizes Custom']
      },
      {
        id: 'cus-005', name: 'Custom Blouse & Accessories',
        tagline: 'The finishing touch that transforms everything',
        price: 2500, priceRange: '₹2,500 – ₹8,000',
        badge: 'Finishing Touch', available: true,
        description: 'Custom-stitched blouse with embroidery, cut work, or stone embellishments. Matching dupattas available.',
        colors: ['Your Choice'], sizes: ['Full Custom']
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 8. COMBOS & BUNDLES
  // ──────────────────────────────────────────────
  combos: {
    id: 'combos',
    label: 'Combos & Bundles',
    slug: 'combos',
    tagline: 'More value, more style — curated for you',
    heroColor: '#C9A45C',
    items: [
      {
        id: 'com-001', name: 'Bridal Trousseau Pack',
        tagline: 'Everything she needs for her new journey',
        price: 45000, priceRange: '₹45,000 – ₹1,20,000',
        badge: 'Best Value', available: true,
        description: 'Complete bridal trousseau with lehenga, reception outfit, mehendi dress, and 5 occasion sarees.',
        colors: ['Curated Set'], sizes: ['Custom']
      },
      {
        id: 'com-002', name: '3 Saree Bundle',
        tagline: 'Triple the elegance, half the worry',
        price: 5500, priceRange: '₹5,500 – ₹12,000',
        badge: 'Save 15%', available: true,
        description: 'Handpicked bundle of 3 silk or cotton sarees — mix and match from our catalogue.',
        colors: ['Mix & Match'], sizes: ['Free Size']
      },
      {
        id: 'com-003', name: 'Festival Season Combo',
        tagline: 'One pack, every festival covered',
        price: 8500, priceRange: '₹8,500 – ₹20,000',
        badge: 'Season Special', available: true,
        description: 'Curated festive combo with Diwali lehenga, Pongal saree, and ethnic kurta set.',
        colors: ['Festive Mix'], sizes: ['S to XL']
      },
      {
        id: 'com-004', name: 'Workwear Weekly Pack',
        tagline: 'Monday to Friday, always polished',
        price: 6000, priceRange: '₹6,000 – ₹14,000',
        badge: 'Office Ready', available: true,
        description: '5 kurta sets for the work week. Mix formal and semi-formal for a complete wardrobe.',
        colors: ['Professional Mix'], sizes: ['XS to XXL']
      },
      {
        id: 'com-005', name: 'Mother & Daughter Combo',
        tagline: 'Match the magic, share the moment',
        price: 5500, priceRange: '₹5,500 – ₹13,000',
        badge: 'Adorable', available: true,
        description: 'Matching ethnic outfits for mother and daughter. Perfect for family portraits and functions.',
        colors: ['Coordinated'], sizes: ['Adult + Kids Custom']
      }
    ]
  }
};

// ──────────────────────────────────────────────
// NEW ARRIVALS — Strictly max 7 items (PRD v2)
// ──────────────────────────────────────────────
const YAZHI_NEW_ARRIVALS = [
  {
    id: 'new-001', name: 'Pearl Embellished Lehenga',
    tagline: 'Pearls of perfection for your precious moment',
    price: 14500, originalPrice: 18000,
    collection: 'Bridal', badge: 'Just Arrived',
    available: true, isNew: true,
    description: 'Statement lehenga with hand-set pearl embroidery on deep wine base.',
    colors: ['Wine Pearl', 'Ivory Pearl', 'Rose Pearl'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom']
  },
  {
    id: 'new-002', name: 'Mirror Work Kurta Set',
    tagline: 'Reflect your radiance with every step',
    price: 4200, originalPrice: 5500,
    collection: 'Ethnic', badge: 'New Arrival',
    available: true, isNew: true,
    description: 'Vibrant kurta adorned with traditional Kutchi mirror work on rich fabric.',
    colors: ['Turquoise', 'Saffron', 'Bright Pink'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'new-003', name: 'Pastel Ombre Saree',
    tagline: 'Where dawn meets dusk on silk',
    price: 5800, originalPrice: 7200,
    collection: 'Sarees', badge: 'New Arrival',
    available: true, isNew: true,
    description: 'Gradient ombre chiffon saree transitioning from blush to lavender.',
    colors: ['Blush to Lavender', 'Mint to Sky', 'Peach to Coral'],
    sizes: ['Free Size']
  },
  {
    id: 'new-004', name: 'Sequin Festive Gown',
    tagline: 'Every festivity needs its showstopper',
    price: 7200, originalPrice: 9000,
    collection: 'Party', badge: 'Just In',
    available: true, isNew: true,
    description: 'Indo-western fusion gown with all-over sequin work and slit detail.',
    colors: ['Champagne Gold', 'Deep Maroon', 'Midnight Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'new-005', name: 'Organza Floral Saree',
    tagline: 'Blossom into elegance with every drape',
    price: 3900, originalPrice: 5000,
    collection: 'Sarees', badge: 'New Arrival',
    available: true, isNew: true,
    description: 'Sheer organza saree with 3D floral appliqué and ruffle border.',
    colors: ['Baby Pink', 'Ivory', 'Powder Blue', 'Lavender'],
    sizes: ['Free Size']
  },
  {
    id: 'new-006', name: 'Co-ord Crop Lehenga Set',
    tagline: 'Fusion fashion for the fearless young woman',
    price: 5200, originalPrice: 6800,
    collection: 'Contemporary', badge: 'Just Arrived',
    available: true, isNew: true,
    description: 'Modern crop top with flared skirt in jacquard brocade. Fusion at its finest.',
    colors: ['Teal Brocade', 'Gold Jacquard', 'Black Silver'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'new-007', name: 'Hand-Painted Kalamkari Saree',
    tagline: 'Wear a story painted by tradition',
    price: 6500, originalPrice: 8500,
    collection: 'Sarees', badge: 'Artisan Craft',
    available: true, isNew: true,
    description: 'Authentic hand-painted Kalamkari saree with mythological motifs on natural cotton.',
    colors: ['Natural Brown', 'Indigo Blue', 'Traditional Multi'],
    sizes: ['Free Size']
  }
];

// ──────────────────────────────────────────────
// OFFER RULES (PRD v2 Section 12)
// ──────────────────────────────────────────────
const YAZHI_OFFERS = {
  firstOrder:      { discount: 0.50, label: '50% Off First Order', code: 'YAZHI50', minOrder: 0 },
  birthday:        { discount: 0.30, label: '30% Birthday Special', code: 'BDAY30', minOrder: 0 },
  festival:        { discount: 0.20, label: '20% Festival Special', code: 'FESTIVE20', minOrder: 0 },
  freeDelivery:    { discount: 0,    label: 'Free Delivery', code: null, minOrder: 4000 },
  premiumDiscount: { discount: 0.70, label: '70% Off Premium Orders', code: 'PREMIUM70', minOrder: 9000 }
};

// ──────────────────────────────────────────────
// COLLECTIONS ARRAY (ordered for navigation)
// ──────────────────────────────────────────────
const YAZHI_COLLECTIONS = [
  YAZHI_PRODUCTS.sarees,
  YAZHI_PRODUCTS.bridal,
  YAZHI_PRODUCTS.party,
  YAZHI_PRODUCTS.ethnic,
  YAZHI_PRODUCTS.festive,
  YAZHI_PRODUCTS.contemporary,
  YAZHI_PRODUCTS.customDesign,
  YAZHI_PRODUCTS.combos
];

// ──────────────────────────────────────────────
// HELPER: Get product by ID
// ──────────────────────────────────────────────
function yazhiGetProduct(id) {
  for (const col of YAZHI_COLLECTIONS) {
    const found = col.items.find(p => p.id === id);
    if (found) return { ...found, collection: col.label, collectionId: col.id };
  }
  const newArrival = YAZHI_NEW_ARRIVALS.find(p => p.id === id);
  return newArrival || null;
}

// ──────────────────────────────────────────────
// HELPER: Generate placeholder SVG data URL
// ──────────────────────────────────────────────
function yazhiPlaceholder(w = 400, h = 500, label = 'Yazhi Collection', color = '#3B1F3F') {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>
    <defs>
      <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' style='stop-color:${color};stop-opacity:1'/>
        <stop offset='100%' style='stop-color:#C9A45C;stop-opacity:0.7'/>
      </linearGradient>
    </defs>
    <rect width='${w}' height='${h}' fill='url(#g)'/>
    <text x='50%' y='45%' font-family='Georgia,serif' font-size='18' fill='rgba(255,255,255,0.6)' text-anchor='middle' dominant-baseline='middle'>✦</text>
    <text x='50%' y='55%' font-family='Georgia,serif' font-size='13' fill='rgba(255,255,255,0.5)' text-anchor='middle' dominant-baseline='middle'>${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Export for use across pages
if (typeof module !== 'undefined') {
  module.exports = { YAZHI_PRODUCTS, YAZHI_NEW_ARRIVALS, YAZHI_OFFERS, YAZHI_COLLECTIONS, yazhiGetProduct, yazhiPlaceholder };
}
