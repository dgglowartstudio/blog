// ============================================================
//  DG GLOW ART STUDIO — PRODUCTS FILE
//  ✅ ફક્ત આ FILE EDIT કરો — Website auto update થઈ જશે!
//
//  2 TYPE ના BLOG POST:
//
//  type: "single"  →  1 product review
//  type: "multi"   →  5 Best... / Top 10... comparison blog
//
//  નવો product add કરવા TEMPLATE નીચે છે 👇
// ============================================================

const PRODUCTS = [

  // ════════════════════════════════════════════════════════
  //  PRODUCT 1 — SINGLE
  // ════════════════════════════════════════════════════════
  {
    id: "p1",
    slug: "bluesky-gel-nail-polish-starter-kit",
    type: "single",
    featured: true,

    badge: "BEST SELLER",
    badgeColor: "#C9748A",
    category: "NAIL ART TOOLS",
    tags: ["gel nail", "starter kit", "beginner", "UV lamp"],

    image: "1.png",
    title: "Bluesky Gel Nail Polish Starter Kit",
    description: "Everything you need to start nail art at home — gel nail kits, stamping sets, and affordable beginner essentials in one place.",
    readTime: "5 min read",

    rating: 4.5,
    ratingCount: 2847,

    seo: {
      metaTitle: "Bluesky Gel Nail Polish Starter Kit Review 2026 — DG Glow Art Studio",
      metaDescription: "Honest review of the Bluesky Gel Nail Starter Kit. Best for beginners. Includes UV lamp, gel polishes, base & top coat.",
      keywords: ["bluesky gel nail kit", "gel nail starter kit india", "beginner gel nail kit 2026"]
    },

    pinterest: {
      pinTitle: "Bluesky Gel Nail Kit — Best Starter Kit for Beginners 2026 💅",
      pinDescription: "Starting gel nails at home? This Bluesky Starter Kit has everything — UV lamp, gel polishes, base coat & top coat. Perfect for beginners! #NailArt #GelNails #BeginnerNails #NailKit #DGGlowArtStudio",
      boardName: "Nail Art Products"
    },

    productImage: "1.png",
    includes: [
      "UV/LED nail lamp",
      "3 gel polish colors",
      "Base coat & top coat",
      "Nail cleanser",
      "Nail file"
    ],
    whyChoose: "This kit is ideal for beginners because it removes the need to buy separate tools. Everything is pre-selected so you can start nail art immediately without confusion or extra cost.",
    bestFor: "This kit is perfect for total beginners who want a complete nail setup without confusion. It's also a great gift option for nail art lovers.",

    cta: {
      buttonText: "Check Price on Amazon →",
      subText: "🛒 Get This Kit Today"
    },

    amazonLink: "https://amzn.to/4ndgC6t",
    pinLink: "https://in.pinterest.com/beautyarthubs/"
  },


  // ════════════════════════════════════════════════════════
  //  PRODUCT 2 — SINGLE
  // ════════════════════════════════════════════════════════
  {
    id: "p2",
    slug: "urban-yog-makemeebold-automatic-hair-curler",
    type: "single",
    featured: true,

    badge: "HOT PICK",
    badgeColor: "#B86B77",
    category: "HAIR STYLING TOOLS",
    tags: ["hair curler", "automatic", "beginner", "salon style"],

    image: "2.png",
    title: "Urban Yog MakeMeeBold Automatic Hair Curler",
    description: "Create salon-style curls effortlessly at home with this automatic hair curler featuring two-way rotation, adjustable heat settings, and a safe anti-scald design.",
    readTime: "5 min read",

    rating: 4.3,
    ratingCount: 1204,

    seo: {
      metaTitle: "Urban Yog MakeMeeBold Automatic Hair Curler Review 2026 — DG Glow Art Studio",
      metaDescription: "Honest review of Urban Yog MakeMeeBold Auto Hair Curler. Best for beginners. Two-way rotation, anti-scald design, 4 heat settings.",
      keywords: ["urban yog hair curler", "automatic hair curler india", "makemeebold curler review 2026"]
    },

    pinterest: {
      pinTitle: "Urban Yog Auto Hair Curler — Salon Curls at Home 2026 🌀",
      pinDescription: "Want salon-style curls at home? The Urban Yog MakeMeeBold Automatic Curler is beginner-friendly & super easy to use! #HairCurler #AutoCurler #HairStyling #BeautyTools #DGGlowArtStudio",
      boardName: "Hair Styling Tools"
    },

    productImage: "2.png",
    includes: [
      "Automatic rotating curler",
      "4 temperature settings",
      "Two-way curling function",
      "Anti-scald protective cover",
      "Tangle-free curling system"
    ],
    whyChoose: "This curler makes hairstyling quick and beginner-friendly by automatically wrapping hair for smooth curls without tangling or burning your hands.",
    bestFor: "Perfect for women who want fast, effortless curls at home, especially beginners and busy users looking for salon-style results in minutes.",

    cta: {
      buttonText: "Check Price on Amazon →",
      subText: "🛒 Get This Curler Today"
    },

    amazonLink: "https://amzn.to/3PgiRcJ",
    pinLink: "https://in.pinterest.com/beautyarthubs/"
  },


  // ════════════════════════════════════════════════════════
  //  PRODUCT 3 — આગળ add કરો (single OR multi)
  // ════════════════════════════════════════════════════════
  //
  // ─── SINGLE PRODUCT TEMPLATE ───────────────────────────
  //
  // {
  //   id: "p3",
  //   slug: "product-name-here",          // no spaces, use -
  //   type: "single",
  //   featured: false,                    // true = Featured badge
  //   badge: "NEW",                       // NEW / SALE / HOT / ""
  //   badgeColor: "#C9748A",
  //   category: "NAIL ART TOOLS",
  //   tags: ["tag1", "tag2"],
  //   image: "card.jpg",                  // blog grid card image
  //   title: "Product Name Here",
  //   description: "Short 1-2 line description.",
  //   readTime: "3 min read",
  //   rating: 4.5,                        // 0 to 5
  //   ratingCount: 100,
  //   seo: {
  //     metaTitle: "Product Name Review 2026 — DG Glow Art Studio",
  //     metaDescription: "Max 150 chars. Short desc for Google.",
  //     keywords: ["keyword1", "keyword2"]
  //   },
  //   pinterest: {
  //     pinTitle: "Pin Title Here 💅",
  //     pinDescription: "Pin description with #Hashtags #NailArt",
  //     boardName: "Nail Art Products"
  //   },
  //   productImage: "detail.jpg",         // product detail page image
  //   includes: ["Item 1", "Item 2"],
  //   whyChoose: "Why buy this product.",
  //   bestFor: "Who should buy this.",
  //   cta: {
  //     buttonText: "Check Price on Amazon →",
  //     subText: "🛒 Get This Today"
  //   },
  //   amazonLink: "https://amzn.to/yourlink",
  //   pinLink: "https://in.pinterest.com/beautyarthubs/"
  // },
  //
  //
  // ─── MULTI PRODUCT TEMPLATE (5 Best... / Top 10...) ────
  //
  // {
  //   id: "p3",
  //   slug: "5-best-nail-art-kits-beginners-2026",
  //   type: "multi",
  //   featured: false,
  //   badge: "TOP 5",
  //   badgeColor: "#C4956A",
  //   category: "NAIL ART TOOLS",
  //   tags: ["top 5", "nail art", "comparison", "2026"],
  //   image: "blog-card.jpg",
  //   title: "5 Best Nail Art Kits for Beginners (2026)",
  //   description: "Compare the top 5 nail art kits — honest reviews & who each one is best for.",
  //   readTime: "7 min read",
  //   rating: 4.4,
  //   ratingCount: 560,
  //   seo: {
  //     metaTitle: "5 Best Nail Art Kits for Beginners 2026 — DG Glow Art Studio",
  //     metaDescription: "Compare top 5 nail art kits in India 2026. Budget to premium picks.",
  //     keywords: ["best nail art kit india 2026", "nail kit comparison"]
  //   },
  //   pinterest: {
  //     pinTitle: "5 Best Nail Art Kits for Beginners 2026 💅",
  //     pinDescription: "Can't decide which nail kit to buy? We compared the top 5! #NailArt #NailKit #BeginnerNails #DGGlowArtStudio",
  //     boardName: "Nail Art Products"
  //   },
  //   pinLink: "https://in.pinterest.com/beautyarthubs/",
  //   intro: "Finding the right nail art kit is confusing. We tested the top 5 in India so you don't have to.",
  //
  //   // Comparison Table
  //   tableColumns: ["Product", "Best For", "Price", "Rating"],
  //   tableRows: [
  //     ["Product 1", "Beginners", "₹1500", "4.5/5"],
  //     ["Product 2", "Advanced",  "₹3000", "4.3/5"],
  //     ["Product 3", "Budget",    "₹800",  "4.0/5"],
  //   ],
  //
  //   // Each product detail
  //   items: [
  //     {
  //       num: 1,
  //       title: "Product 1 Name",
  //       image: "p1.jpg",
  //       amazonLink: "https://amzn.to/link1",
  //       rating: 4.5,
  //       ratingCount: 200,
  //       description: "Description here.",
  //       includes: ["Feature 1", "Feature 2"],
  //       pros: ["Pro 1", "Pro 2"],
  //       cons: ["Con 1"],
  //       bestFor: "Who it is best for.",
  //       cta: {
  //         buttonText: "Buy Product 1 on Amazon →",
  //         subText: "🛒 Best Budget Pick"
  //       }
  //     },
  //     {
  //       num: 2,
  //       title: "Product 2 Name",
  //       image: "p2.jpg",
  //       amazonLink: "https://amzn.to/link2",
  //       rating: 4.3,
  //       ratingCount: 150,
  //       description: "Description here.",
  //       includes: ["Feature 1", "Feature 2"],
  //       pros: ["Pro 1"],
  //       cons: ["Con 1", "Con 2"],
  //       bestFor: "Who it is best for.",
  //       cta: {
  //         buttonText: "Buy Product 2 on Amazon →",
  //         subText: "🛒 Editor's Pick"
  //       }
  //     },
  //     // ... add more items
  //   ]
  // },

];
