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
});

// Smooth scroll for anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
