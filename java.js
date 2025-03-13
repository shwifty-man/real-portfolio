const nav = document.querySelector("nav");
const pfpImg = document.getElementById("profile-img");
const text = document.querySelector(".second-name");

//Sticks the nav bar to the screen when scrolling:
function stickNav() {
  if (window.scrollY > 0) {
    nav.style.position = "sticky";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.backgroundColor = "white";
    nav.style.zIndex = "1000";
  } else {
    nav.style.position = "static";
  }
}

//Makes the h2 visible after scrolling past a certian point:
function textAppear() {
  if (window.scrollY > 500) {
    text.style.visibility = "visible";
  } else {
    text.style.visibility = "hidden";
  }
}

//Makes the small pfp appear after scrolling past a certain point:
function imgAppear() {
  if (window.scrollY > 500) {
    pfpImg.style.visibility = "visible";
  } else {
    pfpImg.style.visibility = "hidden";
  }
}
// Add changing background from image to different image or color:
document.addEventListener("DOMContentLoaded", function () {
  const introVideo = document.getElementById("intro-vid");
  const introContainer = document.querySelector(".intro");
  const content = document.querySelector(".content");

  // Add an event listener for when the video is playing
  introVideo.addEventListener("play", function () {
    // Set a timeout to fade out after a specific amount of time (e.g., 3 seconds)
    setTimeout(function () {
      introContainer.classList.add("fade-out"); // Start the fade-out effect
      setTimeout(() => {
        introContainer.style.display = "none"; // Completely hide the intro after fade-out
        content.classList.add("show-content"); // Show the main content
      }, 300); // Wait for the fade-out effect to complete (500ms)
    }, 1500);
  });
});

document
  .getElementById("composeEmail")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    let message = document.getElementById("emailBody").value;
    let encodedMessage = encodeURIComponent(message); // Encode text for URL

    let email = "codertimw@gmail.com"; // Replace with your email
    let subject = "Subject Here"; // Optional: Change the subject

    let gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodedMessage}`;

    window.open(gmailUrl, "_blank"); // Open in new tab
  });

window.addEventListener("scroll", stickNav);
window.addEventListener("scroll", imgAppear);
window.addEventListener("scroll", textAppear);
