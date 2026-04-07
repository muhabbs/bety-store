const STORE_CONFIG = {
  whatsappNumber: "201000644355",
  facebookUrl: "https://www.facebook.com/profile.php?id=61565101641200"
};

const PRODUCT_CATALOG = [
  {
    id: "royal-living-set",
    categoryId: "living-rooms",
    name: { en: "Royal Living Set", ar: "طقم معيشة رويال" },
    category: { en: "Living Rooms", ar: "غرف المعيشة" }
  },
  {
    id: "heritage-corner-sofa",
    categoryId: "living-rooms",
    name: { en: "Heritage Corner Sofa", ar: "ركنة هيريتدج" },
    category: { en: "Living Rooms", ar: "غرف المعيشة" }
  },
  {
    id: "classic-reception-set",
    categoryId: "living-rooms",
    name: { en: "Classic Reception Set", ar: "طقم استقبال كلاسيك" },
    category: { en: "Living Rooms", ar: "غرف المعيشة" }
  },
  {
    id: "imperial-bedroom",
    categoryId: "bedrooms",
    name: { en: "Imperial Bedroom", ar: "غرفة نوم إمبريال" },
    category: { en: "Bedrooms", ar: "غرف النوم" }
  },
  {
    id: "serenity-bedroom-set",
    categoryId: "bedrooms",
    name: { en: "Serenity Bedroom Set", ar: "غرفة نوم سيرينيتي" },
    category: { en: "Bedrooms", ar: "غرف النوم" }
  },
  {
    id: "signature-wardrobe",
    categoryId: "bedrooms",
    name: { en: "Signature Wardrobe", ar: "دولاب سيجنتشر" },
    category: { en: "Bedrooms", ar: "غرف النوم" }
  },
  {
    id: "grand-chandelier",
    categoryId: "lighting",
    name: { en: "Grand Chandelier", ar: "نجفة جراند" },
    category: { en: "Lighting", ar: "الإضاءات" }
  },
  {
    id: "gold-pendant-light",
    categoryId: "lighting",
    name: { en: "Gold Pendant Light", ar: "نجفة جولد معلقة" },
    category: { en: "Lighting", ar: "الإضاءات" }
  },
  {
    id: "classic-side-lamp",
    categoryId: "lighting",
    name: { en: "Classic Side Lamp", ar: "أباجورة كلاسيك" },
    category: { en: "Lighting", ar: "الإضاءات" }
  },
  {
    id: "executive-office-suite",
    categoryId: "office-furniture",
    name: { en: "Executive Office Suite", ar: "طقم مكتب تنفيذي" },
    category: { en: "Office Furniture", ar: "أثاث مكتبي" }
  },
  {
    id: "prestige-office-desk",
    categoryId: "office-furniture",
    name: { en: "Prestige Office Desk", ar: "مكتب بريستيج" },
    category: { en: "Office Furniture", ar: "أثاث مكتبي" }
  },
  {
    id: "executive-work-chair",
    categoryId: "office-furniture",
    name: { en: "Executive Work Chair", ar: "كرسي مكتب تنفيذي" },
    category: { en: "Office Furniture", ar: "أثاث مكتبي" }
  },
  {
    id: "refined-dining-corner",
    categoryId: "home-essentials",
    name: { en: "Refined Dining Corner", ar: "ركن سفرة راقٍ" },
    category: { en: "Home Essentials", ar: "مستلزمات منزلية" }
  },
  {
    id: "emerald-sideboard",
    categoryId: "signature-pieces",
    name: { en: "Emerald Sideboard", ar: "بوفيه إميرالد" },
    category: { en: "Signature Pieces", ar: "قطع مميزة" }
  }
];

const APP_LANGUAGE = document.documentElement.lang === "ar" ? "ar" : "en";

const UI_TEXT = {
  en: {
    categoryPlaceholder: "Choose a category",
    productPlaceholder: "Choose a product",
    copiedMessage: "Copied Message",
    copiedMessenger: "Message copied. Paste it in Messenger.",
    missingFields: "Please fill in your name, phone number, category, and product first.",
    openingWhatsApp: "Opening WhatsApp with your order details...",
    openingFacebook: "Opening Facebook and copying your message...",
    askAboutProduct: "Hello Beity, I am asking about the product: {product}.",
    orderIntro: "Hello Beity,",
    myNameIs: "My name is {name}.",
    phone: "Phone: {phone}",
    product: "Product: {product}",
    category: "Category: {category}",
    quantity: "Quantity: {quantity}",
    city: "City / Area: {city}",
    preferredContact: "Preferred contact: {preferredContact}",
    notes: "Notes: {notes}"
  },
  ar: {
    categoryPlaceholder: "اختر الفئة",
    productPlaceholder: "اختر المنتج",
    copiedMessage: "تم نسخ الرسالة",
    copiedMessenger: "تم نسخ الرسالة. الصقها في ماسنجر.",
    missingFields: "من فضلك املأ الاسم ورقم الهاتف والفئة والمنتج أولاً.",
    openingWhatsApp: "جارٍ فتح واتساب مع تفاصيل الطلب...",
    openingFacebook: "جارٍ فتح فيسبوك ونسخ الرسالة...",
    askAboutProduct: "مرحباً بيتي، أنا أستفسر عن المنتج: {product}.",
    orderIntro: "مرحباً بيتي،",
    myNameIs: "اسمي {name}.",
    phone: "رقم الهاتف: {phone}",
    product: "المنتج: {product}",
    category: "الفئة: {category}",
    quantity: "الكمية: {quantity}",
    city: "المدينة / المنطقة: {city}",
    preferredContact: "وسيلة التواصل المفضلة: {preferredContact}",
    notes: "ملاحظات: {notes}"
  }
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navBackdrop = document.querySelector(".nav-backdrop");
const navMenuLinks = document.querySelectorAll(".nav-menu a");
const langSwitch = document.querySelector(".lang-switch");
const revealItems = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-button");
const filterItems = document.querySelectorAll(".filter-item");
const whatsappProductLinks = document.querySelectorAll(".whatsapp-product-link");
const facebookProductLinks = document.querySelectorAll(".facebook-product-link");
const orderForm = document.querySelector("#orderForm");
const formStatus = document.querySelector("#formStatus");
const categorySelect = document.querySelector("#productCategory");
const productSelect = document.querySelector("#productName");

function t(key) {
  return UI_TEXT[APP_LANGUAGE][key];
}

function interpolate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function getProductById(productId) {
  return PRODUCT_CATALOG.find((product) => product.id === productId);
}

function getCategories() {
  return PRODUCT_CATALOG.reduce((categories, product) => {
    if (!categories.some((category) => category.id === product.categoryId)) {
      categories.push({
        id: product.categoryId,
        label: product.category[APP_LANGUAGE]
      });
    }
    return categories;
  }, []);
}

function buildAskMessage(productId) {
  const product = getProductById(productId);
  if (!product) {
    return "";
  }

  return interpolate(t("askAboutProduct"), {
    product: product.name[APP_LANGUAGE]
  });
}

function buildOrderMessage(orderData) {
  const lines = [
    t("orderIntro"),
    interpolate(t("myNameIs"), { name: orderData.name }),
    interpolate(t("phone"), { phone: orderData.phone }),
    interpolate(t("product"), { product: orderData.product }),
    interpolate(t("category"), { category: orderData.category }),
    interpolate(t("quantity"), { quantity: orderData.quantity })
  ];

  if (orderData.city) {
    lines.push(interpolate(t("city"), { city: orderData.city }));
  }

  if (orderData.preferredContact) {
    lines.push(interpolate(t("preferredContact"), { preferredContact: orderData.preferredContact }));
  }

  if (orderData.notes) {
    lines.push(interpolate(t("notes"), { notes: orderData.notes }));
  }

  return lines.join("\n");
}

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`, "_blank", "noopener");
}

async function copyTextToClipboard(message) {
  if (!navigator.clipboard?.writeText) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(message);
    return true;
  } catch (error) {
    return false;
  }
}

function openFacebookMessenger(message) {
  copyTextToClipboard(message);
  window.open(STORE_CONFIG.facebookUrl, "_blank", "noopener");
}

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

function populateCategorySelect() {
  if (!categorySelect) {
    return;
  }

  const categories = getCategories();
  categorySelect.innerHTML = `<option value="">${t("categoryPlaceholder")}</option>`;

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.label;
    categorySelect.append(option);
  });
}

function populateProductSelect(selectedCategoryId = "", selectedProductId = "") {
  if (!productSelect) {
    return;
  }

  const filteredProducts = selectedCategoryId
    ? PRODUCT_CATALOG.filter((product) => product.categoryId === selectedCategoryId)
    : PRODUCT_CATALOG;

  productSelect.innerHTML = `<option value="">${t("productPlaceholder")}</option>`;

  filteredProducts.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name[APP_LANGUAGE];
    if (selectedProductId && product.id === selectedProductId) {
      option.selected = true;
    }
    productSelect.append(option);
  });
}

function syncCategoryWithProduct(productId) {
  const product = getProductById(productId);
  if (!product || !categorySelect) {
    return;
  }

  categorySelect.value = product.categoryId;
}

function prefillOrderFormFromQuery() {
  if (!orderForm) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");

  if (productId) {
    const product = getProductById(productId);
    if (product) {
      if (categorySelect) {
        categorySelect.value = product.categoryId;
      }

      populateProductSelect(product.categoryId, productId);
      return;
    }
  }

  populateProductSelect(categorySelect?.value || "");
}

function preserveLanguageSwitchState() {
  if (!langSwitch) {
    return;
  }

  const targetUrl = new URL(langSwitch.getAttribute("href"), window.location.href);
  targetUrl.search = window.location.search;
  targetUrl.hash = window.location.hash;

  langSwitch.setAttribute("href", `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`);
}

if (navToggle && navMenu) {
  const openLabel = navToggle.dataset.openLabel || navToggle.getAttribute("aria-label") || "Open navigation";
  const closeLabel = navToggle.dataset.closeLabel || openLabel;

  const closeNavigation = () => {
    navMenu.classList.remove("is-open");
    navBackdrop?.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", openLabel);
    document.body.classList.remove("nav-open");
  };

  const openNavigation = () => {
    navMenu.classList.add("is-open");
    navBackdrop?.classList.add("is-open");
    navToggle.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", closeLabel);
    document.body.classList.add("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("is-open");
    if (isOpen) {
      closeNavigation();
      return;
    }

    openNavigation();
  });

  navMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavigation();
    });
  });

  navBackdrop?.addEventListener("click", closeNavigation);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeNavigation();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900 && navMenu.classList.contains("is-open")) {
      closeNavigation();
    }
  });
}

preserveLanguageSwitchState();

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

whatsappProductLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const message = buildAskMessage(link.dataset.productId);
    if (message) {
      openWhatsApp(message);
    }
  });
});

facebookProductLinks.forEach((link) => {
  const originalLabel = link.textContent;

  link.addEventListener("click", async () => {
    const message = buildAskMessage(link.dataset.productId);
    const copied = await copyTextToClipboard(message);

    if (copied) {
      link.textContent = t("copiedMessage");
      link.classList.add("is-copied");

      window.setTimeout(() => {
        link.textContent = originalLabel;
        link.classList.remove("is-copied");
      }, 1800);
    }
  });
});

if (categorySelect) {
  populateCategorySelect();
  prefillOrderFormFromQuery();

  categorySelect.addEventListener("change", () => {
    populateProductSelect(categorySelect.value);
  });
}

if (productSelect) {
  productSelect.addEventListener("change", () => {
    if (productSelect.value) {
      syncCategoryWithProduct(productSelect.value);
      populateProductSelect(categorySelect?.value || "", productSelect.value);
    }
  });
}

if (orderForm) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(orderForm);
    const selectedProduct = getProductById(formData.get("product")?.toString());
    const selectedCategory = getCategories().find((category) => category.id === formData.get("category")?.toString());
    const preferredContactRaw = formData.get("preferredContact")?.toString().trim() || "";

    const orderData = {
      name: formData.get("name")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      product: selectedProduct ? selectedProduct.name[APP_LANGUAGE] : "",
      category: selectedCategory ? selectedCategory.label : "",
      quantity: formData.get("quantity")?.toString().trim() || "1",
      city: formData.get("city")?.toString().trim() || "",
      preferredContact: preferredContactRaw,
      notes: formData.get("notes")?.toString().trim() || ""
    };

    if (!orderData.name || !orderData.phone || !orderData.product || !orderData.category) {
      setFormStatus(t("missingFields"), "error");
      return;
    }

    const message = buildOrderMessage(orderData);

    if (preferredContactRaw === "Facebook Messenger" || preferredContactRaw === "ماسنجر") {
      setFormStatus(t("openingFacebook"), "success");
      openFacebookMessenger(message);
      return;
    }

    setFormStatus(t("openingWhatsApp"), "success");
    openWhatsApp(message);
  });
}
