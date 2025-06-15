document.addEventListener("DOMContentLoaded", function () {
  // Navigation toggle for mobile
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  if (burger) {
    burger.addEventListener("click", () => {
      // Toggle Navigation
      nav.classList.toggle("nav-active");

      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });

      // Burger Animation
      burger.classList.toggle("toggle");
    });
  }

  // Scroll effect for header
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  // Handle wine and cigar buttons
  const wineBtn = document.getElementById("wineBtn");
  const cigarBtn = document.getElementById("cigarBtn");
  const wineList = document.getElementById("wineList");
  const cigarList = document.getElementById("cigarList");

  if (wineBtn && wineList) {
    wineBtn.addEventListener("click", function () {
      wineList.classList.toggle("hidden");
      if (!wineList.classList.contains("hidden")) {
        cigarList.classList.add("hidden");
      }
    });
  }

  if (cigarBtn && cigarList) {
    cigarBtn.addEventListener("click", function () {
      cigarList.classList.toggle("hidden");
      if (!cigarList.classList.contains("hidden")) {
        wineList.classList.add("hidden");
      }
    });
  }

  // Wine and Cigar Card Flip Functionality
  const wineCard = document.querySelector(".wine-card");
  const cigarCard = document.querySelector(".cigar-card");

  if (wineCard) {
    wineCard.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
  }

  if (cigarCard) {
    cigarCard.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
  }
});

// Smooth scroll for anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// Gallery Functionality
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sort-select");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const closeLightbox = document.querySelector(".close-lightbox");

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Sort functionality
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      const sortBy = sortSelect.value;
      const galleryGrid = document.querySelector(".masonry-gallery");
      const items = Array.from(galleryItems);

      items.sort((a, b) => {
        if (sortBy === "newest") {
          return (
            new Date(b.getAttribute("data-date")) -
            new Date(a.getAttribute("data-date"))
          );
        } else if (sortBy === "oldest") {
          return (
            new Date(a.getAttribute("data-date")) -
            new Date(b.getAttribute("data-date"))
          );
        } else if (sortBy === "name") {
          const titleA = a.querySelector("h3").textContent;
          const titleB = b.querySelector("h3").textContent;
          return titleA.localeCompare(titleB);
        }
      });

      // Reappend sorted items
      items.forEach((item) => {
        if (item.style.display !== "none") {
          galleryGrid.appendChild(item);
        }
      });
    });
  }

  // Lightbox functionality
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector(".img-placeholder").textContent;
      const title = item.querySelector("h3").textContent;
      const description = item.querySelector("p").textContent;

      lightboxImage.src = imgSrc;
      lightboxCaption.textContent = `${title} - ${description}`;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close lightbox
  if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Close lightbox on click outside
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Close lightbox on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
