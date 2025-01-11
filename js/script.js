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


//Responsive Preview 
document.addEventListener('DOMContentLoaded', function() {
  const desktopIcon = document.querySelector('.icon.desktop');
  const tabletIcon = document.querySelector('.icon.tablet');
  const mobileIcon = document.querySelector('.icon.mobile');
  
  function setupPreviewMode() {
      const mainContent = document.querySelector('.layout-wrapper');
      if (!document.querySelector('.preview-container')) {
          const previewContainer = document.createElement('div');
          previewContainer.className = 'preview-container';
          mainContent.parentNode.insertBefore(previewContainer, mainContent);
          previewContainer.appendChild(mainContent);
      }
      document.body.classList.add('preview-mode');
  }

  function removeActiveClass() {
      document.querySelectorAll('.icon').forEach(icon => {
          icon.classList.remove('active');
      });
  }

  function removeAllViewClasses() {
      document.body.classList.remove('desktop-view', 'tablet-view', 'mobile-view');
      const previewContainer = document.querySelector('.preview-container');
      if (previewContainer) {
          previewContainer.classList.remove('desktop-view', 'tablet-view', 'mobile-view');
      }
  }

  desktopIcon.addEventListener('click', function() {
      setupPreviewMode();
      removeActiveClass();
      removeAllViewClasses();
      this.classList.add('active');
      document.body.classList.add('desktop-view');
      const previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('desktop-view');
      previewContainer.style.width = '100%';
  });

  tabletIcon.addEventListener('click', function() {
      setupPreviewMode();
      removeActiveClass();
      removeAllViewClasses();
      this.classList.add('active');
      document.body.classList.add('tablet-view');
      const previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('tablet-view');
      previewContainer.style.width = '768px';
  });

  mobileIcon.addEventListener('click', function() {
      setupPreviewMode();
      removeActiveClass();
      removeAllViewClasses();
      this.classList.add('active');
      document.body.classList.add('mobile-view');
      const previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('mobile-view');
      previewContainer.style.width = '360px';
  });

  function setInitialView() {
      const width = window.innerWidth;
      if (width >= 1024) {
          desktopIcon.click();
      } else if (width >= 768) {
          tabletIcon.click();
      } else {
          mobileIcon.click();
      }
  }

  setInitialView();
});