const formElement = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");

// Logic for Timer
document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");

  // Checks for Time Element before executing code
  if (timeElement) {
    function updateTimer() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

      const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
      timeElement.textContent = timeString;
    }

    setInterval(updateTimer, 100);
  }
});

// Checks for Form Element before executing code
if (formElement) {
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
    successMsg.textContent = "";

    const formData = new FormData(formElement);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();

    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name
    if (!name) {
      document.getElementById("error-name").textContent =
        "Full name is required.";
      isValid = false;
    }

    // Validate email
    if (!email) {
      document.getElementById("error-email").textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("error-email").textContent = "Email is invalid.";
      isValid = false;
    }

    // Validate subject
    if (!subject) {
      document.getElementById("error-subject").textContent =
        "Subject is required.";
      isValid = false;
    }

    // Validate message
    if (!message) {
      document.getElementById("error-message").textContent =
        "Message is required.";
      isValid = false;
    } else if (message.length < 10) {
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters long.";
      isValid = false;
    }

    // Validation Successful
    if (isValid) {
      successMsg.textContent = "Form submitted successfully!";
      successMsg.classList.add("show");
      formElement.reset();

      // Remove the success message after 3 seconds (optional)
      setTimeout(() => {
        successMsg.classList.remove("show");
        successMsg.textContent = "";
      }, 3000);
    }
  });
}
