// script.js
// Preloader
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Scroll Animations
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

// Scroll Progress Bar
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector(".scroll-progress");

  window.addEventListener("scroll", () => {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.setProperty("--scroll", scrolled + "%");
  });
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Loading Screen
document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loading");
  if (loading) {
    loading.classList.add("active");
    setTimeout(() => {
      loading.classList.remove("active");
    }, 1000);
  }
});

// Intersection Observer for Animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".project-card, .skill-card, .timeline-item, .fun-fact"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(element);
  });
};

// Mobile Navigation Toggle
const mobileNavToggle = () => {
  const navbar = document.querySelector(".navbar-collapse");
  if (navbar) {
    navbar.classList.toggle("show");
  }
};

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const navbar = document.querySelector(".navbar-collapse");
  const toggle = document.querySelector(".navbar-toggler");
  if (
    navbar &&
    toggle &&
    !navbar.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    navbar.classList.remove("show");
  }
});

// Touch device detection
const isTouchDevice = () => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

// Adjust animations for touch devices
const adjustForTouchDevices = () => {
  if (isTouchDevice()) {
    document.body.classList.add("touch-device");
  }
};

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll();
  mobileNavToggle();
  adjustForTouchDevices();
  window.addEventListener("scroll", reveal);
  reveal(); // Initial check
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Smooth scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll(".progress-bar");

const animateProgressBars = () => {
  progressBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    bar.style.width = `${progress}%`;
  });
};

// Intersection Observer for progress bars
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars();
        progressObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observe each progress bar container
document.querySelectorAll(".skill-progress").forEach((container) => {
  progressObserver.observe(container);
});

// Timeline Animation
const animateTimeline = () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
};

// Particle Effect Configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#4a6fa5",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 3,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4a6fa5",
      opacity: 0.4,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Copy to clipboard functionality
document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const textToCopy = this.getAttribute("data-text");
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        this.classList.add("copied");
        setTimeout(() => {
          this.classList.remove("copied");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});

// Mobile Animations
document.addEventListener("DOMContentLoaded", function () {
  // Scroll Reveal Animation
  const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

  const revealOnScroll = () => {
    scrollRevealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };

  // Parallax Effect
  const parallaxSections = document.querySelectorAll(".parallax-section");

  const handleParallax = () => {
    parallaxSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (
        sectionTop < window.innerHeight &&
        sectionTop > -section.offsetHeight
      ) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  };

  // Touch Feedback for Cards
  const mobileCards = document.querySelectorAll(".mobile-card");
  mobileCards.forEach((card) => {
    card.addEventListener("touchstart", () => {
      card.classList.add("active");
    });

    card.addEventListener("touchend", () => {
      card.classList.remove("active");
    });
  });

  // Pull to Refresh
  let touchStartY = 0;
  const pullToRefresh = document.querySelector(".pull-to-refresh");

  if (pullToRefresh) {
    pullToRefresh.addEventListener("touchstart", (e) => {
      touchStartY = e.touches[0].clientY;
    });

    pullToRefresh.addEventListener("touchmove", (e) => {
      const touchY = e.touches[0].clientY;
      const pullDistance = touchY - touchStartY;

      if (pullDistance > 0 && window.scrollY === 0) {
        pullToRefresh.classList.add("pulling");
        e.preventDefault();
      }
    });

    pullToRefresh.addEventListener("touchend", () => {
      pullToRefresh.classList.remove("pulling");
      // Add your refresh logic here
    });
  }

  // Add event listeners
  window.addEventListener("scroll", () => {
    revealOnScroll();
    handleParallax();
  });

  // Initial check
  revealOnScroll();
  handleParallax();
});

// Typed.js Initialization
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".typed-text", {
    strings: ["Ishant Jaswal"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    showCursor: false,
    loop: false,
  });
});
