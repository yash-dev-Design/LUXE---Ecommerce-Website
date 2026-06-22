// Global variables
let cart = JSON.parse(localStorage.getItem("cart")) || []
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null

// Sample product data with unique IDs across all categories
const products = {
  mens: [
    {
      id: 1,
      name: "Classic Navy Wool Suit",
      price: 999,
      image: "https://images.unsplash.com/photo-1426523038054-a260f3ef5bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMHN1aXR8ZW58MHwwfDB8fHww",
      rating: 4.9,
      reviews: 145,
      category: "mens"
    },
    {
      id: 2,
      name: "Charcoal Slim Fit Suit",
      price: 849,
      image: "https://images.unsplash.com/photo-1529635229076-82fefed713c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hhcmNvYWwlMjBTbGltJTIwRml0JTIwU3VpdHxlbnwwfDB8MHx8fDA%3D",
      rating: 4.7,
      reviews: 108,
      category: "mens"
    },
    {
      id: 3,
      name: "Beige Linen Summer Suit",
      price: 759,
      image: "https://i.pinimg.com/1200x/ad/08/4b/ad084b2f50c16af98c62cdadc04d4312.jpg",
      rating: 4.6,
      reviews: 96,
      category: "mens"
    },
    {
      id: 4,
      name: "Modern Grey Business Suit",
      price: 899,
      image: "https://i.pinimg.com/1200x/6d/5c/5b/6d5c5bf06a6fad4be135dcfcaae8ab17.jpg",
      rating: 4.8,
      reviews: 122,
      category: "mens"
    },
    {
      id: 5,
      name: "Midnight Black Tuxedo",
      price: 1099,
      image: "https://i.pinimg.com/736x/fa/29/16/fa2916766944845dd781f3b573575586.jpg",
      rating: 4.9,
      reviews: 180,
      category: "mens"
    },
    {
      id: 6,
      name: "Olive Green Casual Suit",
      price: 699,
      image: "https://i.pinimg.com/736x/59/bd/0b/59bd0bbdfcbe7f4872026ec13cee6383.jpg",
      rating: 4.5,
      reviews: 85,
      category: "mens"
    },
    {
      id: 7,
      name: "Checked Wool Winter Suit",
      price: 979,
      image: "https://i.pinimg.com/1200x/f2/2c/fb/f22cfb679459a974df0df02613767edb.jpg",
      rating: 4.8,
      reviews: 110,
      category: "mens"
    },
    {
      id: 8,
      name: "Royal Blue Wedding Suit",
      price: 1149,
      image: "https://i.pinimg.com/1200x/60/e8/1b/60e81bdffb61e8b935b6e376cf0ec69f.jpg",
      rating: 5.0,
      reviews: 207,
      category: "mens"
    },
    {
      id: 9,
      name: "Tan Lightweight Suit",
      price: 829,
      image: "https://i.pinimg.com/736x/c0/d8/bd/c0d8bdfd2aaad4ac6a7eb7c66740084a.jpg",
      rating: 4.6,
      reviews: 91,
      category: "mens"
    },
    // Jeans
    {
      id: 4,
      name: "Dark Blue Denim Jeans",
      price: 199,
      image: "https://images.unsplash.com/photo-1631112213238-b1bafeaecff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERhcmslMjBCbHVlJTIwRGVuaW0lMjBKZWFuc3xlbnwwfDB8MHx8fDA%3D",
      rating: 4.4,
      reviews: 152,
      category: "mens"
    },
    {
      id: 5,
      name: "Classic Black Slim Jeans",
      price: 209,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2xhc3NpYyUyMEJsYWNrJTIwU2xpbSUyMEplYW5zfGVufDB8MHwwfHx8MA%3D%3D",
      rating: 4.5,
      reviews: 142,
      category: "mens"
    },
    {
      id: 6,
      name: "Grey Straight Fit Jeans",
      price: 219,
      image: "https://images.unsplash.com/photo-1602585198422-d795fa9bfd6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdyZXklMjBTdHJhaWdodCUyMEZpdCUyMEplYW5zfGVufDB8MHwwfHx8MA%3D%3D",
      rating: 4.2,
      reviews: 138,
      category: "mens"
    },
    // Cotton Jeans
    {
      id: 7,
      name: "Light Cotton Stretch Jeans",
      price: 179,
      image: "https://plus.unsplash.com/premium_photo-1726768821727-13f3fb54840d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGlnaHQlMjBDb3R0b24lMjBTdHJldGNoJTIwSmVhbnN8ZW58MHwwfDB8fHww",
      rating: 4.5,
      reviews: 123,
      category: "mens"
    },
    {
      id: 8,
      name: "Khaki Cotton Jeans",
      price: 189,
      image: "https://plus.unsplash.com/premium_photo-1691367279139-218a8b8dcbb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEtoYWtpJTIwQ290dG9uJTIwSmVhbnN8ZW58MHwwfDB8fHww",
      rating: 4.4,
      reviews: 98,
      category: "mens"
    },
    {
      id: 9,
      name: "Olive Relaxed Cotton Jeans",
      price: 169,
      image: "https://plus.unsplash.com/premium_photo-1723507343374-e2466688aa70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8T2xpdmUlMjBSZWxheGVkJTIwQ290dG9uJTIwSmVhbnN8ZW58MHwwfDB8fHww",
      rating: 4.3,
      reviews: 102,
      category: "mens"
    },
    // Shirts
    {
      id: 10,
      name: "Formal White Shirt",
      price: 139,
      image: "https://images.unsplash.com/photo-1603252109612-24fa03d145c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rm9ybWFsJTIwV2hpdGUlMjBTaGlydHxlbnwwfDB8MHx8fDA%3D",
      rating: 4.6,
      reviews: 134,
      category: "mens"
    },
    {
      id: 11,
      name: "Checkered Cotton Shirt",
      price: 149,
      image: "https://images.unsplash.com/photo-1703929755159-a1a8835a0536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hlY2tlcmVkJTIwQ290dG9uJTIwU2hpcnR8ZW58MHwwfDB8fHww",
      rating: 4.5,
      reviews: 126,
      category: "mens"
    },
    {
      id: 12,
      name: "Sky Blue Casual Shirt",
      price: 119,
      image: "https://images.unsplash.com/photo-1618591552964-837a5a315fb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2t5JTIwQmx1ZSUyMENhc3VhbCUyMFNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D",
      rating: 4.4,
      reviews: 112,
      category: "mens"
    },
    // T-Shirts
    {
      id: 13,
      name: "Graphic Cotton T-Shirt",
      price: 99,
      image: "https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JhcGhpYyUyMENvdHRvbiUyMFQlMjBTaGlydHxlbnwwfDB8MHx8fDA%3D",
      rating: 4.3,
      reviews: 167,
      category: "mens"
    },
    {
      id: 14,
      name: "Plain Black Crew T-Shirt",
      price: 89,
      image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGxhaW4lMjBCbGFjayUyMENyZXclMjBUJTIwU2hpcnR8ZW58MHwwfDB8fHww",
      rating: 4.2,
      reviews: 145,
      category: "mens"
    },
    {
      id: 15,
      name: "Printed Round Neck Tee",
      price: 109,
      image: "https://i.pinimg.com/736x/93/5e/a8/935ea80f559c24b21001d7c7489bb950.jpg",
      rating: 4.4,
      reviews: 158,
      category: "mens"
    },
    // Shoes
    {
      id: 16,
      name: "Leather Derby Shoes",
      price: 279,
      image: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGVhdGhlciUyMERlcmJ5JTIwU2hvZXN8ZW58MHwwfDB8fHww",
      rating: 4.8,
      reviews: 91,
      category: "mens"
    },
    {
      id: 17,
      name: "Brown Loafers",
      price: 199,
      image: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJvd24lMjBMb2FmZXJzfGVufDB8MHwwfHx8MA%3D%3D",
      rating: 4.6,
      reviews: 99,
      category: "mens"
    },
    {
      id: 18,
      name: "Black Casual Sneakers",
      price: 169,
      image: "https://plus.unsplash.com/premium_photo-1674770380314-d1639a2d4b77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjBDYXN1YWwlMjBTbmVha2Vyc3xlbnwwfDB8MHx8fDA%3D",
      rating: 4.5,
      reviews: 132,
      category: "mens"
    },
    {
      id: 19,
      name: "Suede Chelsea Boots",
      price: 329,
      image: "https://i.pinimg.com/1200x/2c/a5/e4/2ca5e4474c373a1bf3d856fa9d570a62.jpg",
      rating: 4.7,
      reviews: 88,
      category: "mens"
    },
    {
      id: 20,
      name: "White Leather Sneakers",
      price: 249,
      image: "https://i.pinimg.com/1200x/80/b8/79/80b87917146a492da926769c50b5e1f3.jpg",
      rating: 4.6,
      reviews: 117,
      category: "mens"
    },
    {
      id: 21,
      name: "Formal Monk Strap Shoes",
      price: 299,
      image: "https://i.pinimg.com/1200x/1c/c7/9a/1cc79ac3589f3f9e78e13dd0a73a299b.jpg",
      rating: 4.8,
      reviews: 105,
      category: "mens"
    },
    // Watches
    {
      id: 19,
      name: "Chronograph Leather Watch",
      price: 399,
      image: "https://images.unsplash.com/photo-1606834297608-2858b9008f8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hyb25vZ3JhcGglMjBMZWF0aGVyJTIwV2F0Y2h8ZW58MHwwfDB8fHww",
      rating: 4.9,
      reviews: 117,
      category: "mens"
    },
    {
      id: 20,
      name: "Analog Gold Dial Watch",
      price: 349,
      image: "https://images.unsplash.com/photo-1615040270038-679220796f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFuYWxvZyUyMEdvbGQlMjBEaWFsJTIwV2F0Y2h8ZW58MHwwfDB8fHww",
      rating: 4.8,
      reviews: 102,
      category: "mens"
    },
    {
      id: 21,
      name: "Minimal Silver Watch",
      price: 289,
      image: "https://images.unsplash.com/photo-1660038019322-ce861ef711d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWluaW1hbCUyMFNpbHZlciUyMFdhdGNofGVufDB8MHwwfHx8MA%3D%3D",
      rating: 4.7,
      reviews: 91,
      category: "mens"
    },
    {
      id: 22,
      name: "Black Steel Sports Watch",
      price: 429,
      image: "https://i.pinimg.com/1200x/9d/cd/81/9dcd810c9f5d8d476e84c2281cb7e9f8.jpg",
      rating: 4.9,
      reviews: 134,
      category: "mens"
    },
    {
      id: 23,
      name: "Vintage Brown Strap Watch",
      price: 319,
      image: "https://i.pinimg.com/1200x/fc/c5/30/fcc5302d936390c23fda0f118b58b22e.jpg",
      rating: 4.6,
      reviews: 89,
      category: "mens"
    },
    {
      id: 24,
      name: "Smart Hybrid Digital Watch",
      price: 499,
      image: "https://i.pinimg.com/736x/d4/20/f9/d420f967fbf66472bc408aa578265ba8.jpg",
      rating: 4.8,
      reviews: 121,
      category: "mens"
    },
    // Belts
    {
      id: 22,
      name: "Premium Leather Belt",
      price: 89,
      image: "https://images.unsplash.com/photo-1664286074240-d7059e004dff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJlbWl1bSUyMExlYXRoZXIlMjBCZWx0fGVufDB8MHwwfHx8MA%3D%3D",
      rating: 4.5,
      reviews: 86,
      category: "mens"
    },
    {
      id: 23,
      name: "Reversible Brown-Black Belt",
      price: 109,
      image: "https://images.unsplash.com/photo-1667284152843-024e91829ad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmV2ZXJzaWJsZSUyMEJyb3duJTIwQmxhY2slMjBCZWx0fGVufDB8MHwwfHx8MA%3D%3D",
      rating: 4.4,
      reviews: 77,
      category: "mens"
    },
    {
      id: 24,
      name: "Casual Canvas Belt",
      price: 69,
      image: "https://images.unsplash.com/photo-1705493655920-20c572928501?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhc3VhbCUyMENhbnZhcyUyMEJlbHR8ZW58MHwwfDB8fHww",
      rating: 4.3,
      reviews: 82,
      category: "mens"
    },
    {
      id: 25,
      name: "Braided Leather Belt",
      price: 99,
      image: "https://i.pinimg.com/1200x/91/b8/bc/91b8bc50a78710b6c0df7878966b5fa4.jpg",
      rating: 4.6,
      reviews: 91,
      category: "mens"
    },
    {
      id: 26,
      name: "Formal Black Slim Belt",
      price: 119,
      image: "https://i.pinimg.com/1200x/7e/3b/a8/7e3ba88ba7a7da26a9f2880f4fef51ea.jpg",
      rating: 4.7,
      reviews: 104,
      category: "mens"
    },
    {
      id: 27,
      name: "Vintage Buckle Leather Belt",
      price: 139,
      image: "https://i.pinimg.com/736x/1d/7e/ec/1d7eecb9995a7b3d82118970a0006db5.jpg",
      rating: 4.8,
      reviews: 97,
      category: "mens"
    },
    // Jackets
    {
      id: 25,
      name: "Black Leather Biker Jacket",
      price: 599,
      image: "https://images.unsplash.com/photo-1588259166431-00a7e44b2712?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmxhY2slMjBMZWF0aGVyJTIwQmlrZXIlMjBKYWNrZXR8ZW58MHwwfDB8fHww",
      rating: 4.8,
      reviews: 112,
      category: "mens"
    },
    {
      id: 26,
      name: "Denim Blue Jacket",
      price: 379,
      image: "https://plus.unsplash.com/premium_photo-1694476790742-8e95108c4b52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fExlYXRoZXIlMjBCaWtlciUyMEphY2tldHxlbnwwfDB8MHx8fDA%3D",
      rating: 4.7,
      reviews: 103,
      category: "mens"
    },
    {
      id: 27,
      name: "Khaki Bomber Jacket",
      price: 429,
      image: "https://images.unsplash.com/photo-1727524366429-27de8607d5f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEtoYWtpJTIwQm9tYmVyJTIwSmFja2V0fGVufDB8MHwwfHx8fDA%3D",
      rating: 4.6,
      reviews: 95,
      category: "mens"
    },
    {
      id: 28,
      name: "Olive Green Utility Jacket",
      price: 449,
      image: "https://i.pinimg.com/736x/2a/00/3d/2a003d3a57f14a1856b44ee47dd5d7f7.jpg",
      rating: 4.7,
      reviews: 101,
      category: "mens"
    },
    {
      id: 29,
      name: "Grey Wool Overcoat",
      price: 649,
      image: "https://i.pinimg.com/736x/fb/bc/5f/fbbc5f3906f4d0b5bee0bb5db7211e6b.jpg",
      rating: 4.9,
      reviews: 128,
      category: "mens"
    },
    {
      id: 30,
      name: "Classic Tan Trench Coat",
      price: 719,
      image: "https://i.pinimg.com/1200x/dc/69/1c/dc691cd48bd27c47d6f4c10e8db61feb.jpg",
      rating: 4.8,
      reviews: 109,
      category: "mens"
    }
  ],
  womens: [
    {
      id: 113,
      name: "Striped Cotton Shirt Dress",
      price: 199,
      image: "https://i.pinimg.com/736x/c5/e1/32/c5e132bacdea54bb980ed503c9b732d0.jpg",
      rating: 4.4,
      reviews: 87,
      category: "womens"
    },
    {
      id: 114,
      name: "Relaxed Fit Overalls",
      price: 279,
      image: "https://i.pinimg.com/1200x/19/f3/98/19f398fe1818b8aa118cdade42553033.jpg",
      rating: 4.6,
      reviews: 91,
      category: "womens"
    },
    {
      id: 115,
      name: "Casual Tee & Shorts Set",
      price: 149,
      image: "https://i.pinimg.com/736x/ea/39/94/ea3994154244eb1394e79d2586e16a4d.jpg",
      rating: 4.3,
      reviews: 78,
      category: "womens"
    },
    {
      id: 116,
      name: "Denim Shirt Dress",
      price: 249,
      image: "https://i.pinimg.com/1200x/22/d3/5d/22d35d39637ded100e0e949ed334e450.jpg",
      rating: 4.5,
      reviews: 101,
      category: "womens"
    },
    {
      id: 117,
      name: "Printed Cotton Kurti",
      price: 189,
      image: "https://i.pinimg.com/736x/fb/a6/ea/fba6ea30f29be3ece1ba3c0832fea22c.jpg",
      rating: 4.4,
      reviews: 92,
      category: "womens"
    },
    {
      id: 118,
      name: "Flared Midi Skirt",
      price: 199,
      image: "https://i.pinimg.com/736x/94/46/ea/9446ea21e0edccc2ea38df0415fde246.jpg",
      rating: 4.5,
      reviews: 86,
      category: "womens"
    },

    // Traditional Wear
    {
      id: 119,
      name: "Banarasi Silk Saree",
      price: 649,
      image: "https://i.pinimg.com/1200x/ff/62/16/ff6216389185c89ec559621962a440f4.jpg",
      rating: 4.8,
      reviews: 164,
      category: "womens"
    },
    {
      id: 120,
      name: "Cotton Printed Kurta Set",
      price: 249,
      image: "https://i.pinimg.com/1200x/80/f1/75/80f175fb3a268fc594148204ce134d8a.jpg",
      rating: 4.6,
      reviews: 123,
      category: "womens"
    },
    {
      id: 121,
      name: "Patiala Salwar Suit",
      price: 289,
      image: "https://i.pinimg.com/736x/65/fc/bd/65fcbd81236dbd3683cae15f7537d017.jpg",
      rating: 4.5,
      reviews: 94,
      category: "womens"
    },
    {
      id: 122,
      name: "Embroidered Lehenga Choli",
      price: 729,
      image: "https://i.pinimg.com/1200x/c4/94/a7/c494a714df1f25bb32f8a07839452158.jpg",
      rating: 4.9,
      reviews: 185,
      category: "womens"
    },
    {
      id: 123,
      name: "Georgette Saree with Border",
      price: 359,
      image: "https://i.pinimg.com/1200x/14/76/43/14764325945c8b6b99150d7a2f1fe07a.jpg",
      rating: 4.4,
      reviews: 97,
      category: "womens"
    },
    {
      id: 124,
      name: "Chanderi Silk Anarkali Set",
      price: 489,
      image: "https://i.pinimg.com/1200x/39/7e/02/397e0200f049868fad81f14e40c29f55.jpg",
      rating: 4.7,
      reviews: 132,
      category: "womens"
    },
    // Formal Wear
    {
      id: 125,
      name: "Structured Blazer Dress",
      price: 389,
      image: "https://i.pinimg.com/736x/27/fe/66/27fe6609bed87c6e4265bc01b652e292.jpg",
      rating: 4.6,
      reviews: 108,
      category: "womens"
    },
    {
      id: 126,
      name: "Double-Breasted Coat Dress",
      price: 499,
      image: "https://i.pinimg.com/1200x/b7/07/25/b7072524d049fffaeb09dcf80f1c0930.jpg",
      rating: 4.8,
      reviews: 112,
      category: "womens"
    },
    {
      id: 127,
      name: "Business Blazer with Trousers",
      price: 419,
      image: "https://i.pinimg.com/1200x/f5/53/99/f553996de5d864e3e1e8cb20373ebed6.jpg",
      rating: 4.7,
      reviews: 98,
      category: "womens"
    },
    {
      id: 128,
      name: "Navy Blue Formal Suit Set",
      price: 459,
      image: "https://i.pinimg.com/736x/74/82/53/748253ba96c3551fb16a11f950d73254.jpg",
      rating: 4.7,
      reviews: 119,
      category: "womens"
    },
    {
      id: 129,
      name: "Formal Shirt & Pencil Skirt",
      price: 289,
      image: "https://i.pinimg.com/736x/65/6b/24/656b2480002252399d358a239115ccdd.jpg",
      rating: 4.5,
      reviews: 84,
      category: "womens"
    },
    {
      id: 130,
      name: "Sleeveless Office Jumpsuit",
      price: 319,
      image: "https://i.pinimg.com/736x/49/01/c9/4901c99fab6a5df03218c8e3886d9f19.jpg",
      rating: 4.6,
      reviews: 93,
      category: "womens"
    },

    // Nightwear
    {
      id: 131,
      name: "Comfy Ribbed Sleep Set",
      price: 179,
      image: "https://i.pinimg.com/736x/f4/1f/7d/f41f7d3a129bbecb73c0d0a35fc56fef.jpg",
      rating: 4.5,
      reviews: 79,
      category: "womens"
    },
    {
      id: 132,
      name: "Luxury Satin Slip Dress",
      price: 259,
      image: "https://i.pinimg.com/736x/a4/a8/c7/a4a8c71ff4740de4b0e8352730b8ed08.jpg",
      rating: 4.8,
      reviews: 95,
      category: "womens"
    },
    {
      id: 133,
      name: "Soft Thermal Pajama Set",
      price: 189,
      image: "https://i.pinimg.com/736x/f4/36/f0/f436f0c4ec040549b25a06a87124a2d3.jpg",
      rating: 4.4,
      reviews: 82,
      category: "womens"
    },
    {
      id: 134,
      name: "Lacy Babydoll Nightwear",
      price: 219,
      image: "https://i.pinimg.com/1200x/32/a1/19/32a119be9e5bff287788a09b5e1d2b82.jpg",
      rating: 4.6,
      reviews: 102,
      category: "womens"
    },
    {
      id: 135,
      name: "Fleece Hoodie Lounge Set",
      price: 239,
      image: "https://i.pinimg.com/736x/9a/9a/c0/9a9ac09b4084a64f515174240cf10949.jpg",
      rating: 4.7,
      reviews: 115,
      category: "womens"
    },
    {
      id: 136,
      name: "Printed Cotton Nighty",
      price: 149,
      image: "https://i.pinimg.com/1200x/be/18/1a/be181a997a13e0f67f0df0e8f04f1242.jpg",
      rating: 4.3,
      reviews: 73,
      category: "womens"
    }
  ],
  kids: [
    {
      id: 207,
      name: "Girls' Princess Gown",
      price: 109,
      image: "https://i.pinimg.com/736x/02/60/e9/0260e9c4f8e60b3ab30144a475a302e6.jpg",
      rating: 4.8,
      reviews: 91,
      category: "kids"
    },
    {
      id: 208,
      name: "Boys' Denim Overalls",
      price: 69,
      image: "https://i.pinimg.com/1200x/92/5b/ac/925bac7b037fd9e6d9fa8637445d282b.jpg",
      rating: 4.4,
      reviews: 66,
      category: "kids"
    },
    {
      id: 209,
      name: "Striped Hoodie & Joggers",
      price: 79,
      image: "https://i.pinimg.com/736x/9d/49/79/9d49795a941e89a37435653eb129b313.jpg",
      rating: 4.6,
      reviews: 74,
      category: "kids"
    },
    {
      id: 210,
      name: "Raincoat with Boots Combo",
      price: 119,
      image: "https://i.pinimg.com/1200x/e4/e0/e3/e4e0e3305c4d4c212a294d4595b2ef5d.jpg",
      rating: 4.7,
      reviews: 82,
      category: "kids"
    },
    {
      id: 211,
      name: "Summer Frock with Hat",
      price: 59,
      image: "https://i.pinimg.com/736x/5f/63/89/5f6389035f21e91fb9d7046659eb80d3.jpg",
      rating: 4.5,
      reviews: 68,
      category: "kids"
    },
    {
      id: 212,
      name: "Character Graphic Tee",
      price: 29,
      image: "https://i.pinimg.com/1200x/d7/fa/d5/d7fad54837618765323923ebb68a5d0b.jpg",
      rating: 4.3,
      reviews: 59,
      category: "kids"
    },
    {
      id: 213,
      name: "Kids Party Shoes",
      price: 89,
      image: "https://i.pinimg.com/1200x/08/c3/dd/08c3dda0edfe03be4025e4265e949a89.jpg",
      rating: 4.6,
      reviews: 84,
      category: "kids"
    },
    {
      id: 214,
      name: "Thermal Wear Set",
      price: 69,
      image: "https://i.pinimg.com/736x/ac/22/6b/ac226b3715c04a1880f9419571d0bf78.jpg",
      rating: 4.5,
      reviews: 75,
      category: "kids"
    },
    {
      id: 215,
      name: "Boys' Checkered Shirt & Pants",
      price: 79,
      image: "https://i.pinimg.com/736x/9c/56/0c/9c560c8b26a2b3319e42bc6a5a745722.jpg",
      rating: 4.4,
      reviews: 67,
      category: "kids"
    }
  ],
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  loadProducts()
  setupEventListeners()
  updateCountdown()
  setInterval(updateCountdown, 1000)
})

function initializeApp() {
  updateCartCount()
  updateWishlistCount()
  checkUserAuthentication()
}

function checkUserAuthentication() {
  if (currentUser) {
    showUserGreeting()
    hideAuthButtons()
    showProfileIcon()
  } else {
    hideUserGreeting()
    showAuthButtons()
    hideProfileIcon()
  }
}

function showUserGreeting() {
  const greetingElement = document.getElementById("user-greeting")
  const greetingText = document.getElementById("greeting-text")
  if (greetingElement && greetingText) {
    greetingText.textContent = `Hello, ${currentUser.firstName}!`
    greetingElement.style.display = "block"
  }
}

function hideUserGreeting() {
  const greetingElement = document.getElementById("user-greeting")
  if (greetingElement) {
    greetingElement.style.display = "none"
  }
}

function showAuthButtons() {
  const authButtons = document.getElementById("auth-buttons")
  if (authButtons) {
    authButtons.style.display = "flex"
  }
}

function hideAuthButtons() {
  const authButtons = document.getElementById("auth-buttons")
  if (authButtons) {
    authButtons.style.display = "none"
  }
}

function showProfileIcon() {
  const profileIcon = document.getElementById("profile-icon")
  if (profileIcon) {
    profileIcon.style.display = "block"
  }
}

function hideProfileIcon() {
  const profileIcon = document.getElementById("profile-icon")
  if (profileIcon) {
    profileIcon.style.display = "none"
  }
}

function loadProducts() {
  loadCategoryProducts("mens")
  loadCategoryProducts("womens")
  loadCategoryProducts("kids")
}

function loadCategoryProducts(category) {
  const container = document.getElementById(`${category}-products`)
  if (!container) return

  container.innerHTML = ""

  products[category].forEach((product) => {
    const productCard = createProductCard(product)
    container.appendChild(productCard)
  })
}

function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"

  const isInWishlist = wishlist.some((item) => item.id === product.id)

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h5>${product.name}</h5>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">(${product.rating}) ${product.reviews} reviews</span>
            </div>
            <p class="price">$${product.price}</p>
            <div class="product-actions">
                <button class="btn-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn-wishlist ${isInWishlist ? "active" : ""}" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `

  return card
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let starsHTML = ""

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>'
  }

  return starsHTML
}

function setupEventListeners() {
  // Mobile navigation
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Category tabs
  const tabBtns = document.querySelectorAll(".tab-btn")
  const productCategories = document.querySelectorAll(".product-category")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((tab) => tab.classList.remove("active"))
      productCategories.forEach((category) => category.classList.remove("active"))

      btn.classList.add("active")
      const categoryId = btn.getAttribute("data-category")
      document.getElementById(categoryId).classList.add("active")
    })
  })

  // Search functionality
  const searchBtn = document.getElementById("search-btn")
  const searchInput = document.getElementById("search-input")

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", performSearch)
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch()
      }
    })
  }

  // Cart and wishlist icons
  const cartIcon = document.getElementById("cart-icon")
  const wishlistIcon = document.getElementById("wishlist-icon")
  const profileIcon = document.getElementById("profile-icon")

  if (cartIcon) {
    cartIcon.addEventListener("click", openCartModal)
  }

  if (wishlistIcon) {
    wishlistIcon.addEventListener("click", openWishlistModal)
  }

  if (profileIcon) {
    profileIcon.addEventListener("click", () => {
      window.location.href = "profile.html"
    })
  }

  // Modal close buttons
  const closeCart = document.getElementById("close-cart")
  const closeWishlist = document.getElementById("close-wishlist")

  if (closeCart) {
    closeCart.addEventListener("click", closeCartModal)
  }

  if (closeWishlist) {
    closeWishlist.addEventListener("click", closeWishlistModal)
  }

  // Newsletter subscription
  const newsletterBtn = document.querySelector(".newsletter button")
  if (newsletterBtn) {
    newsletterBtn.addEventListener("click", subscribeNewsletter)
  }

  // Notify me button
  const notifyBtn = document.querySelector(".notify-btn")
  if (notifyBtn) {
    notifyBtn.addEventListener("click", notifyMe)
  }
}

function performSearch() {
  const searchInput = document.getElementById("search-input")
  const searchTerm = searchInput.value.toLowerCase().trim()

  if (!searchTerm) {
    showNotification("Please enter a search term", "info")
    return
  }

  // Filter products based on search term
  const allProducts = [...products.mens, ...products.womens, ...products.kids]
  const filteredProducts = allProducts.filter((product) => product.name.toLowerCase().includes(searchTerm))

  if (filteredProducts.length > 0) {
    showNotification(`Found ${filteredProducts.length} products for "${searchTerm}"`, "success")
    displaySearchResults(filteredProducts)
  } else {
    showNotification(`No products found for "${searchTerm}"`, "info")
  }
}

function displaySearchResults(products) {
  // Hide all category sections
  document.querySelectorAll(".product-category").forEach((category) => {
    category.classList.remove("active")
  })

  // Create or update search results section
  let searchSection = document.getElementById("search-results")
  if (!searchSection) {
    searchSection = document.createElement("div")
    searchSection.id = "search-results"
    searchSection.className = "product-category active"
    document.querySelector(".products .container").appendChild(searchSection)
  }

  searchSection.innerHTML = `
        <div class="category-header">
            <h3>SEARCH RESULTS</h3>
            <p>Found ${products.length} products</p>
        </div>
        <div class="product-section">
            <div class="product-grid" id="search-products"></div>
        </div>
    `

  const searchContainer = document.getElementById("search-products")
  products.forEach((product) => {
    const productCard = createProductCard(product)
    searchContainer.appendChild(productCard)
  })

  searchSection.classList.add("active")

  // Scroll to results
  searchSection.scrollIntoView({ behavior: "smooth" })
}

function addToCart(productId) {
  const product = findProductById(productId)
  if (!product) {
    console.error(`Product with ID ${productId} not found`)
    showNotification("Product not found!", "error")
    return
  }

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }

  updateCartCount()
  saveCart()
  showNotification(`${product.name} added to cart!`, "success")
}

function toggleWishlist(productId) {
  const product = findProductById(productId)
  if (!product) {
    console.error(`Product with ID ${productId} not found`)
    showNotification("Product not found!", "error")
    return
  }

  const existingIndex = wishlist.findIndex((item) => item.id === productId)

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1)
    showNotification(`${product.name} removed from wishlist!`, "info")
  } else {
    wishlist.push(product)
    showNotification(`${product.name} added to wishlist!`, "success")
  }

  updateWishlistCount()
  saveWishlist()
  updateWishlistButtons()
}

function findProductById(id) {
  // Search through all categories to find the product
  const allProducts = [...products.mens, ...products.womens, ...products.kids]
  const product = allProducts.find((product) => product.id === id)

  if (!product) {
    console.error(`Product with ID ${id} not found in any category`)
  }

  return product
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count")
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  if (cartCount) {
    cartCount.textContent = totalItems
    cartCount.style.display = totalItems > 0 ? "flex" : "none"
  }
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById("wishlist-count")

  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length
    wishlistCount.style.display = wishlist.length > 0 ? "flex" : "none"
  }
}

function updateWishlistButtons() {
  document.querySelectorAll(".btn-wishlist").forEach((button) => {
    const productCard = button.closest(".product-card")
    const productName = productCard.querySelector("h5").textContent
    const isInWishlist = wishlist.some((item) => item.name === productName)

    if (isInWishlist) {
      button.classList.add("active")
    } else {
      button.classList.remove("active")
    }
  })
}

function openCartModal() {
  const modal = document.getElementById("cart-modal")
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (!modal || !cartItems || !cartTotal) return

  cartItems.innerHTML = ""

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>'
    cartTotal.textContent = "0.00"
  } else {
    let total = 0

    cart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"
      cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            `
      cartItems.appendChild(cartItem)
      total += item.price * item.quantity
    })

    cartTotal.textContent = total.toFixed(2)
  }

  modal.style.display = "block"
}

function closeCartModal() {
  const modal = document.getElementById("cart-modal")
  if (modal) {
    modal.style.display = "none"
  }
}

function openWishlistModal() {
  const modal = document.getElementById("wishlist-modal")
  const wishlistItems = document.getElementById("wishlist-items")

  if (!modal || !wishlistItems) return

  wishlistItems.innerHTML = ""

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your wishlist is empty</p>'
  } else {
    wishlist.forEach((item) => {
      const wishlistItem = document.createElement("div")
      wishlistItem.className = "wishlist-item"
      wishlistItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price}</div>
                </div>
                <button class="btn-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
            `
      wishlistItems.appendChild(wishlistItem)
    })
  }

  modal.style.display = "block"
}

function closeWishlistModal() {
  const modal = document.getElementById("wishlist-modal")
  if (modal) {
    modal.style.display = "none"
  }
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (!item) return

  item.quantity += change

  if (item.quantity <= 0) {
    removeFromCart(productId)
  } else {
    updateCartCount()
    saveCart()
    openCartModal() // Refresh the modal
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartCount()
  saveCart()
  openCartModal() // Refresh the modal

  const product = findProductById(productId)
  if (product) {
    showNotification(`${product.name} removed from cart!`, "info")
  }
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId)
  updateWishlistCount()
  saveWishlist()
  updateWishlistButtons()
  openWishlistModal() // Refresh the modal

  const product = findProductById(productId)
  if (product) {
    showNotification(`${product.name} removed from wishlist!`, "info")
  }
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!", "info")
    return
  }

  if (!currentUser) {
    showNotification("Please sign in to proceed to checkout", "info")
    setTimeout(() => {
      window.location.href = "signin.html"
    }, 2000)
    return
  }

  window.location.href = "checkout.html"
}

function subscribeNewsletter(e) {
  e.preventDefault()
  const email = document.querySelector(".newsletter input").value

  if (email && email.includes("@")) {
    showNotification("Thank you for subscribing to our newsletter!", "success")
    document.querySelector(".newsletter input").value = ""
  } else {
    showNotification("Please enter a valid email address.", "info")
  }
}

function notifyMe() {
  const email = prompt("Enter your email to get notified when the collection launches:")
  if (email && email.includes("@")) {
    showNotification("Thank you! We will notify you when the Summer Collection 2025 launches.", "success")
  }
}

function updateCountdown() {
  const targetDate = new Date("2025-07-01T00:00:00").getTime()
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    const daysEl = document.getElementById("days")
    const hoursEl = document.getElementById("hours")
    const minutesEl = document.getElementById("minutes")
    const secondsEl = document.getElementById("seconds")

    if (daysEl) daysEl.textContent = days.toString().padStart(2, "0")
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, "0")
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, "0")
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, "0")
  } else {
    const countdown = document.querySelector(".countdown")
    if (countdown) {
      countdown.innerHTML = '<h3 style="color: #d4af37;">Collection Now Available!</h3>'
    }
  }
}

function scrollToProducts() {
  const productsSection = document.getElementById("products")
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth" })
  }
}

function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = "notification"
  notification.textContent = message

  if (type === "success") {
    notification.style.background = "#28a745"
  } else if (type === "info") {
    notification.style.background = "#17a2b8"
  } else if (type === "error") {
    notification.style.background = "#dc3545"
  }

  // Add notification styles
  notification.style.cssText += `
    position: fixed;
    top: 20px;
    right: 20px;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 10000;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease-out;
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-in"
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 3000)
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
      navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.boxShadow = "none"
    }
  }
})

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  const cartModal = document.getElementById("cart-modal")
  const wishlistModal = document.getElementById("wishlist-modal")

  if (e.target === cartModal) {
    closeCartModal()
  }

  if (e.target === wishlistModal) {
    closeWishlistModal()
  }
})

// Add CSS animations for notifications
const style = document.createElement('style')
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)