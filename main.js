// Start Input Verify
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("email-input"),
    button = document.getElementById("button-submit");

  button.addEventListener("click", verifyEmail);
  function verifyEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      inputValue = input.value,
      message = document.getElementById("message");
    if (emailRegex.test(inputValue)) {
      // window.open("success.html", "_blank");
      window.location.href = "sucess.html";
      message.style.display = "none";
    } else {
      message.style.display = "block";
      input.style.color = "hsl(4, 100%, 70%)";
      input.style.backgroundColor = "hsl(4, 100%, 93%)";
      input.style.border = "1.5px solid hsl(4, 100%, 70%)";
    }
  }
  // End Input Verify
  // Start Input Placeholder
  function handleFocus() {
    if (!input.value) {
      input.placeholder = "";
    }
  }
  function handleBlur() {
    if (!input.value) {
      input.placeholder = "Enter Your Email";
    }
  }
  function handleInput() {
    message.style.display = "none";
    input.style.color = "";
    input.style.backgroundColor = "";
    input.style.border = "1px solid #dedede";
    if (input.value) {
      input.placeholder = "";
    } else {
      input.placeholder = "Enter Your Email";
    }
  }

  input.addEventListener("focus", handleFocus);
  input.addEventListener("blur", handleBlur);
  input.addEventListener("input", handleInput);
  // End Input Placeholder
  // Start Image Mobile Change
  const image = document.getElementById("image"),
    mobileMedia = window.matchMedia("(max-width:767px");
  function handleImageScreen(event) {
    if (event.matches) {
      image.setAttribute(
        "src",
        "./assets/images/illustration-sign-up-mobile.svg"
      );
    } else {
      image.setAttribute(
        "src",
        "./assets/images/illustration-sign-up-desktop.svg"
      );
    }
  }
  handleImageScreen(mobileMedia);
  mobileMedia.addEventListener("change", handleImageScreen);
  // End Image Mobile Change
});
