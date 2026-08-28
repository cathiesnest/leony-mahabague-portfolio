/* =========================================================
   LEONY D. MAHABAGUE
   PROFESSIONAL PORTFOLIO
   LUNA EVANS THEME
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", isOpen);

      menuToggle.innerHTML = isOpen ? "✕" : "☰";

    });

    /* Close mobile menu when a navigation link is clicked */

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = "☰";

      });

    });

  }


  /* =======================================================
     SCROLL REVEAL
     ======================================================= */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {

      revealObserver.observe(element);

    });

  } else {

    revealElements.forEach((element) => {

      element.classList.add("visible");

    });

  }


  /* =======================================================
     ACTIVE NAVIGATION LINK
     Highlights the section currently being viewed.
     ======================================================= */

  const sections = document.querySelectorAll("section[id]");
  const navigationLinks = document.querySelectorAll(".nav-links a");

  if ("IntersectionObserver" in window && sections.length) {

    const sectionObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            navigationLinks.forEach((link) => {

              const href = link.getAttribute("href");

              link.classList.toggle(
                "active",
                href === `#${currentId}`
              );

            });

          }

        });

      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {

      sectionObserver.observe(section);

    });

  }


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  const yearElement = document.querySelector("#current-year");

  if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

  }


  /* =======================================================
     CONTACT LINK FEEDBACK
     ======================================================= */

  const contactLinks = document.querySelectorAll(".contact-link");

  contactLinks.forEach((link) => {

    link.addEventListener("click", () => {

      link.classList.add("clicked");

      setTimeout(() => {

        link.classList.remove("clicked");

      }, 500);

    });

  });


  /* =======================================================
     BUTTON INTERACTION
     ======================================================= */

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      button.classList.add("button-clicked");

      setTimeout(() => {

        button.classList.remove("button-clicked");

      }, 300);

    });

  });


  /* =======================================================
     KEYBOARD ACCESSIBILITY
     ======================================================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      if (navLinks && menuToggle) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = "☰";

      }

    }

  });

});
