const STORE_CONFIG = {
  whatsappNumber: "201000644355",
  googleSheetsEndpoint: "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
};

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

const orderForm = document.querySelector("#orderForm");
const formStatus = document.querySelector("#formStatus");

function setFormStatus(message, type = "neutral") {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.classList.remove("is-success", "is-error");

  if (type === "success") {
    formStatus.classList.add("is-success");
  }

  if (type === "error") {
    formStatus.classList.add("is-error");
  }
}

function buildWhatsAppOrderMessage(orderData) {
  const lines = [
    "Hello Beity,",
    `My name is ${orderData.name}.`,
    `Phone: ${orderData.phone}`,
    `Product: ${orderData.product}`,
    `Category: ${orderData.category}`,
    `Quantity: ${orderData.quantity}`
  ];

  if (orderData.city) {
    lines.push(`City / Area: ${orderData.city}`);
  }

  if (orderData.preferredContact) {
    lines.push(`Preferred contact: ${orderData.preferredContact}`);
  }

  if (orderData.notes) {
    lines.push(`Notes: ${orderData.notes}`);
  }

  return lines.join("\n");
}

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`, "_blank", "noopener");
}

function isGoogleSheetsConfigured() {
  return Boolean(
    STORE_CONFIG.googleSheetsEndpoint &&
    !STORE_CONFIG.googleSheetsEndpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")
  );
}

async function submitOrderToGoogleSheets(orderData) {
  const payload = new FormData();
  Object.entries(orderData).forEach(([key, value]) => payload.append(key, value));

  await fetch(STORE_CONFIG.googleSheetsEndpoint, {
    method: "POST",
    mode: "no-cors",
    body: payload
  });
}

function prefillOrderFormFromQuery() {
  if (!orderForm) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const product = params.get("product");
  const category = params.get("category");

  if (product) {
    const productField = document.querySelector("#productName");
    if (productField) {
      productField.value = product;
    }
  }

  if (category) {
    const categoryField = document.querySelector("#productCategory");
    if (categoryField) {
      categoryField.value = category;
    }
  }
}

prefillOrderFormFromQuery();

if (orderForm) {
  orderForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(orderForm);
    const orderData = {
      submittedAt: new Date().toISOString(),
      name: formData.get("name")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      product: formData.get("product")?.toString().trim() || "",
      category: formData.get("category")?.toString().trim() || "",
      quantity: formData.get("quantity")?.toString().trim() || "1",
      city: formData.get("city")?.toString().trim() || "",
      preferredContact: formData.get("preferredContact")?.toString().trim() || "WhatsApp",
      notes: formData.get("notes")?.toString().trim() || "",
      source: formData.get("source")?.toString().trim() || "Website order form",
      pageUrl: window.location.href
    };

    if (!orderData.name || !orderData.phone || !orderData.product || !orderData.category) {
      setFormStatus("Please fill in the customer name, phone number, product, and category.", "error");
      return;
    }

    const whatsappMessage = buildWhatsAppOrderMessage(orderData);

    try {
      if (isGoogleSheetsConfigured()) {
        setFormStatus("Submitting order...", "neutral");
        await submitOrderToGoogleSheets(orderData);
        setFormStatus("Order submitted successfully. It has been sent to your Google Sheet.", "success");
        orderForm.reset();
        prefillOrderFormFromQuery();
      } else {
        setFormStatus("Google Sheets is not connected yet. Opening WhatsApp instead so you still receive the order.", "error");
        openWhatsApp(whatsappMessage);
      }
    } catch (error) {
      setFormStatus("The Google Sheets submission failed, so WhatsApp has been opened as a fallback.", "error");
      openWhatsApp(whatsappMessage);
    }
  });
}
