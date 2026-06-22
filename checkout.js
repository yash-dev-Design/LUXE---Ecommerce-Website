// Checkout page JavaScript
const cart = JSON.parse(localStorage.getItem("cart")) || []
const currentUser = JSON.parse(localStorage.getItem("currentUser"))

document.addEventListener("DOMContentLoaded", () => {
  if (!currentUser) {
    window.location.href = "signin.html"
    return
  }

  if (cart.length === 0) {
    window.location.href = "index.html"
    return
  }

  loadCheckoutItems()
  calculateTotals()
  setupCheckoutEventListeners()
})

function loadCheckoutItems() {
  const checkoutItems = document.getElementById("checkout-items")
  if (!checkoutItems) return

  checkoutItems.innerHTML = ""

  cart.forEach((item) => {
    const summaryItem = document.createElement("div")
    summaryItem.className = "summary-item"
    summaryItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="summary-item-details">
                <div class="summary-item-name">${item.name}</div>
                <div class="summary-item-price">$${item.price} x ${item.quantity}</div>
            </div>
        `
    checkoutItems.appendChild(summaryItem)
  })
}

function calculateTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10.0
  const taxRate = 0.08
  const tax = subtotal * taxRate
  const total = subtotal + shipping + tax

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`
  document.getElementById("shipping").textContent = `$${shipping.toFixed(2)}`
  document.getElementById("tax").textContent = `$${tax.toFixed(2)}`
  document.getElementById("final-total").textContent = `$${total.toFixed(2)}`
}

function setupCheckoutEventListeners() {
  // Pre-fill form with user data
  const form = document.getElementById("checkout-form")
  if (form && currentUser) {
    form.firstName.value = currentUser.firstName || ""
    form.lastName.value = currentUser.lastName || ""
    form.email.value = currentUser.email || ""
  }

  // Payment method selection
  document.querySelectorAll('input[name="payment"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      document.querySelectorAll(".payment-option").forEach((option) => {
        option.classList.remove("selected")
      })
      this.closest(".payment-option").classList.add("selected")
    })
  })
}

function placeOrder() {
  const form = document.getElementById("checkout-form")
  const selectedPayment = document.querySelector('input[name="payment"]:checked')

  // Validate form
  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  if (!selectedPayment) {
    showCheckoutNotification("Please select a payment method", "error")
    return
  }

  // Collect form data
  const formData = new FormData(form)
  const orderData = {
    id: "ORD-" + Date.now(),
    userId: currentUser.id,
    date: new Date().toISOString(),
    status: "processing",
    items: [...cart],
    shipping: {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      zip: formData.get("zip"),
    },
    payment: {
      method: selectedPayment.value,
    },
    subtotal: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    shipping: 10.0,
    tax: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 0.08,
    total:
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0) +
      10.0 +
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 0.08,
  }

  // Simulate payment processing
  showCheckoutNotification("Processing payment...", "info")

  setTimeout(() => {
    // Save order
    const orders = JSON.parse(localStorage.getItem("orders")) || []
    orders.push(orderData)
    localStorage.setItem("orders", JSON.stringify(orders))

    // Clear cart
    localStorage.removeItem("cart")

    showCheckoutNotification("Order placed successfully!", "success")

    setTimeout(() => {
      window.location.href = `order-confirmation.html?orderId=${orderData.id}`
    }, 2000)
  }, 2000)
}

function showCheckoutNotification(message, type = "success") {
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
        font-weight: 500;
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 4000)
}
