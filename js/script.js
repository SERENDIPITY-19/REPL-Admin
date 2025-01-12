// Collapse List Items in Navbar
document.querySelectorAll(".toggle-area").forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const collapseTarget = document.querySelector(
      this.getAttribute("data-bs-target")
    );
    const toggleIcon = this.querySelector(".toggle-icon");

    if (collapseTarget) {
      const collapseInstance =
        bootstrap.Collapse.getOrCreateInstance(collapseTarget);

      if (collapseTarget.classList.contains("show")) {
        collapseInstance.hide();
      } else {
        collapseInstance.show();
      }
    }
  });
});


// User-info dropdown
const userInfo = document.querySelector('.user-info');
const dropdownMenu = document.querySelector('.user-dropdown-menu');

userInfo.addEventListener('click', (event) => {
    event.preventDefault(); 
    dropdownMenu.classList.toggle('show'); 
});

document.addEventListener('click', (event) => {
    if (!dropdownMenu.contains(event.target) && !userInfo.contains(event.target)) {
        dropdownMenu.classList.remove('show'); 
    }
});


// Scroll to Top
const scrollToTopBtn = document.getElementById("scrollToTop");

scrollToTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {  
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Toggle Navbar in Mobile View
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  if (hamburgerIcon) {
      hamburgerIcon.addEventListener('click', function() {
          document.body.classList.toggle('main-nav-open');
      });
  }
});


// Tables
$(document).ready(function() {
    $('.table').DataTable({
        responsive: true,
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search..."
        },
        pagingType: "simple_numbers"
    });
});


//Theme Toggle
const themeIcon = document.getElementById('theme-icon');

function toggleTheme() {
    const root = document.documentElement; 
    const currentTheme = root.getAttribute('data-theme') || 'light';

    if (currentTheme === 'light') {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon'); 
    } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun'); 
    }
}

themeIcon.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const root = document.documentElement;

    root.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});