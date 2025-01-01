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
function toggleSidebar() {
  document.body.classList.toggle("main-nav-open");
}

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