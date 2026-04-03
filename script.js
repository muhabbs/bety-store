const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Reveal sections as they enter the viewport for a polished scrolling experience.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18
  });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Product filters on the products page.
const filterButtons = document.querySelectorAll(".filter-button");
const filterItems = document.querySelectorAll(".filter-item");

if (filterButtons.length > 0 && filterItems.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      filterItems.forEach((card) => {
        const matches = selectedFilter === "all" || card.dataset.category === selectedFilter;
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
}

// Route the contact form through WhatsApp because the site is intentionally static.
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !message) {
      if (formStatus) {
        formStatus.textContent = "Please fill in your name and message first.";
      }
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hello A. Furniture,\nMy name is ${name}.\n${message}`
    );

    if (formStatus) {
      formStatus.textContent = "Opening WhatsApp with your message...";
    }

    window.open(`https://wa.me/201000000000?text=${whatsappMessage}`, "_blank", "noopener");
    contactForm.reset();
  });
}
