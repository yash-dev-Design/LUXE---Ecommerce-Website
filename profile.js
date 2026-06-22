// Fixed profile page JavaScript
const currentUser = JSON.parse(localStorage.getItem("currentUser"))
const cart = JSON.parse(localStorage.getItem("cart")) || []
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

document.addEventListener("DOMContentLoaded", () => {
  if (!currentUser) {
    window.location.href = "signin.html"
    return
  }

  initializeProfile()
  setupProfileEventListeners()
  loadProfileData()
})

function initializeProfile() {
  // Update profile greeting
  const profileGreeting = document.getElementById("profile-greeting")
  if (profileGreeting) {
    profileGreeting.textContent = `Hello, ${currentUser.firstName}!`
  }

  // Update profile info in sidebar
  const profileName = document.getElementById("profile-name")
  const profileEmail = document.getElementById("profile-email")

  if (profileName) {
    profileName.textContent = `${currentUser.firstName} ${currentUser.lastName}`
  }

  if (profileEmail) {
    profileEmail.textContent = currentUser.email
  }
}

// Fixed loadOrders function - now properly checks for actual orders
function loadOrders() {
  const ordersContainer = document.getElementById("orders-container")
  if (!ordersContainer) return

  // Get actual orders from localStorage (not sample data)
  const orders = JSON.parse(localStorage.getItem("orders")) || []

  ordersContainer.innerHTML = ""

  // Show empty state when there are NO orders (fixed logic)
  if (orders.length === 0) {
    ordersContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: #666;">
        <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
        <h3>No orders yet</h3>
        <p>When you place your first order, it will appear here.</p>
        <button onclick="window.location.href='index.html'" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #d4af37; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Start Shopping
        </button>
      </div>
    `
    return
  }

  // Display actual orders when they exist
  orders.forEach((order) => {
    const orderCard = document.createElement("div")
    orderCard.className = "order-card"

    orderCard.innerHTML = `
      <div class="order-header">
        <div>
          <div class="order-number">Order #${order.id}</div>
          <div style="color: #666; font-size: 0.9rem;">Placed on ${new Date(order.date).toLocaleDateString()}</div>
        </div>
        <div class="order-status ${order.status}">${order.status.toUpperCase()}</div>
      </div>
      <div class="order-items">
        ${order.items
          .map(
            (item) => `
          <div class="order-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="order-item-details">
              <div class="order-item-name">${item.name}</div>
              <div class="order-item-price">$${item.price} x ${item.quantity}</div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
      <div style="text-align: right; margin-top: 1rem; font-weight: 600; color: #d4af37;">
        Total: $${order.total}
      </div>
    `

    ordersContainer.appendChild(orderCard)
  })
}

// Fixed addToCartFromProfile function with proper product finding
function addToCartFromProfile(productId) {
  // Find product in wishlist first
  const product = wishlist.find((item) => item.id === productId)
  if (!product) {
    showProfileNotification("Product not found in wishlist!", "error")
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

  localStorage.setItem("cart", JSON.stringify(cart))
  showProfileNotification(`${product.name} added to cart!`, "success")

  // Refresh cart section if it's active
  if (document.getElementById("cart-section").classList.contains("active")) {
    loadProfileCart()
  }
}

// Fixed removeFromWishlistProfile function
function removeFromWishlistProfile(productId) {
  const product = wishlist.find((item) => item.id === productId)
  if (!product) {
    showProfileNotification("Product not found!", "error")
    return
  }

  wishlist = wishlist.filter((item) => item.id !== productId)
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
  showProfileNotification(`${product.name} removed from wishlist!`, "info")

  loadProfileWishlist()
}

// Fixed loadProfileWishlist function
function loadProfileWishlist() {
  const profileWishlist = document.getElementById("profile-wishlist")
  if (!profileWishlist) return

  profileWishlist.innerHTML = ""

  if (wishlist.length === 0) {
    profileWishlist.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: #666; grid-column: 1 / -1;">
        <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
        <h3>Your wishlist is empty</h3>
        <p>Save items you love for later by clicking the heart icon.</p>
        <button onclick="window.location.href='index.html'" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #d4af37; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Browse Products
        </button>
      </div>
    `
    return
  }

  wishlist.forEach((item) => {
    const wishlistCard = document.createElement("div")
    wishlistCard.className = "product-card"

    wishlistCard.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="product-info">
        <h5>${item.name}</h5>
        <p class="price">$${item.price}</p>
        <div class="product-actions">
          <button class="btn-cart" onclick="addToCartFromProfile(${item.id})">Add to Cart</button>
          <button class="btn-wishlist active" onclick="removeFromWishlistProfile(${item.id})">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    `

    profileWishlist.appendChild(wishlistCard)
  })
}

// Fixed loadProfileCart function
function loadProfileCart() {
  const profileCart = document.getElementById("profile-cart")
  if (!profileCart) return

  profileCart.innerHTML = ""

  if (cart.length === 0) {
    profileCart.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: #666;">
        <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
        <h3>Your cart is empty</h3>
        <p>Add some products to your cart to see them here.</p>
        <button onclick="window.location.href='index.html'" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #d4af37; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Start Shopping
        </button>
      </div>
    `
    return
  }

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
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCartProfile(${item.id})">Remove</button>
    `
    profileCart.appendChild(cartItem)
    total += item.price * item.quantity
  })

  // Add total and checkout button
  const cartFooter = document.createElement("div")
  cartFooter.style.cssText = "border-top: 1px solid #eee; padding-top: 1rem; margin-top: 1rem; text-align: right;"
  cartFooter.innerHTML = `
    <div style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem;">
      Total: $${total.toFixed(2)}
    </div>
    <button class="checkout-btn" onclick="proceedToCheckoutFromProfile()">Proceed to Checkout</button>
  `
  profileCart.appendChild(cartFooter)
}

// Rest of the profile functions remain the same...
function setupProfileEventListeners() {
  // Sidebar navigation
  document.querySelectorAll(".nav-item[data-section]").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const section = e.currentTarget.getAttribute("data-section")
      showSection(section)

      // Update active state
      document.querySelectorAll(".nav-item").forEach((nav) => nav.classList.remove("active"))
      e.currentTarget.classList.add("active")
    })
  })
}

function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active")
  })

  // Show selected section
  const targetSection = document.getElementById(`${sectionName}-section`)
  if (targetSection) {
    targetSection.classList.add("active")
    loadSectionData(sectionName)
  }
}

function loadSectionData(section) {
  switch (section) {
    case "orders":
      loadOrders()
      break
    case "wishlist":
      loadProfileWishlist()
      break
    case "cart":
      loadProfileCart()
      break
    case "tracking":
      // Tracking section is already loaded
      break
  }
}

function loadProfileData() {
  loadOrders()
  loadProfileWishlist()
  loadProfileCart()
}

function showProfileNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = "notification"
  notification.textContent = message

  const colors = {
    success: "#28a745",
    error: "#dc3545",
    info: "#17a2b8",
  }

  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${colors[type] || colors.success};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}
