// Authentication JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.getElementById("signin-form")
  const signupForm = document.getElementById("signup-form")

  if (signinForm) {
    signinForm.addEventListener("submit", handleSignIn)
  }

  if (signupForm) {
    signupForm.addEventListener("submit", handleSignUp)
  }

  // Social auth buttons
  document.querySelectorAll(".social-btn").forEach((btn) => {
    btn.addEventListener("click", handleSocialAuth)
  })
})

function handleSignIn(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const email = formData.get("email")
  const password = formData.get("password")
  const remember = formData.get("remember")

  // Basic validation
  if (!email || !password) {
    showAuthNotification("Please fill in all fields", "error")
    return
  }

  // Simulate authentication
  const users = JSON.parse(localStorage.getItem("users")) || []
  const user = users.find((u) => u.email === email && u.password === password)

  if (user) {
    // Store current user
    localStorage.setItem("currentUser", JSON.stringify(user))

    if (remember) {
      localStorage.setItem("rememberUser", "true")
    }

    showAuthNotification("Sign in successful!", "success")

    setTimeout(() => {
      window.location.href = "index.html"
    }, 1500)
  } else {
    showAuthNotification("Invalid email or password", "error")
  }
}

function handleSignUp(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")
  const terms = formData.get("terms")

  // Validation
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    showAuthNotification("Please fill in all fields", "error")
    return
  }

  if (password !== confirmPassword) {
    showAuthNotification("Passwords do not match", "error")
    return
  }

  if (password.length < 6) {
    showAuthNotification("Password must be at least 6 characters", "error")
    return
  }

  if (!terms) {
    showAuthNotification("Please accept the terms and conditions", "error")
    return
  }

  // Check if user already exists
  const users = JSON.parse(localStorage.getItem("users")) || []
  if (users.find((u) => u.email === email)) {
    showAuthNotification("User with this email already exists", "error")
    return
  }

  // Create new user
  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    password,
    createdAt: new Date().toISOString(),
  }

  users.push(newUser)
  localStorage.setItem("users", JSON.stringify(users))
  localStorage.setItem("currentUser", JSON.stringify(newUser))

  showAuthNotification("Account created successfully!", "success")

  setTimeout(() => {
    window.location.href = "index.html"
  }, 1500)
}

function handleSocialAuth(e) {
  e.preventDefault()
  const provider = e.currentTarget.classList.contains("google") ? "Google" : "Facebook"
  showAuthNotification(`${provider} authentication coming soon!`, "info")
}

function showAuthNotification(message, type = "success") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".auth-notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  const notification = document.createElement("div")
  notification.className = "auth-notification"
  notification.textContent = message

  // Style based on type
  const colors = {
    success: "#28a745",
    error: "#dc3545",
    info: "#17a2b8",
  }

  notification.style.cssText = `
        position: fixed;
        top: 20px;
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

// Add CSS animation
const style = document.createElement("style")
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
`
document.head.appendChild(style)
