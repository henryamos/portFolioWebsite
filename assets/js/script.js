window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const logo = this.document.getElementById("logo")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.classList.add("scrolls")
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("scrolls")
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "Front-End Developer",
    "UI/UX Designer",
    "Freelancer",
    "Web Developer",
  ];
  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  const typingSpeed = 80; // Speed of typing (in milliseconds)
  const erasingSpeed = 30; // Speed of erasing (in milliseconds)
  const delayBetweenRoles = 1000; // Delay before starting the next role
  const typedRoleElement = document.getElementById("typed-role");

  function typeRole() {
    if (currentCharIndex < roles[currentRoleIndex].length) {
      typedRoleElement.textContent +=
        roles[currentRoleIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeRole, typingSpeed); // Continue typing
    } else {
      setTimeout(eraseRole, delayBetweenRoles); // Pause, then erase
    }
  }

  function eraseRole() {
    if (currentCharIndex > 0) {
      typedRoleElement.textContent = roles[currentRoleIndex].substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;
      setTimeout(eraseRole, erasingSpeed); // Continue erasing
    } else {
      currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
      setTimeout(typeRole, typingSpeed); // Start typing the next role
    }
  }

  setTimeout(typeRole, delayBetweenRoles); // Start typing the first role
});
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, 
    once: true, 
    easing: "ease-in-out", 
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    // Add active class to the clicked tab
    tab.classList.add("active");

    const filter = tab.dataset.filter;
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block"; // Show item
      } else {
        item.style.display = "none"; // Hide item
      }
    });
  });
});


