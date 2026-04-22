/* ============================================================
   Annas Fikri — My Blog | script.js
   ============================================================ */

/* ---------- PAGE NAVIGATION ---------- */
function showPage(pageId, btn) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });

  // Deactivate all nav buttons
  document.querySelectorAll('.nav-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  // Show selected page
  document.getElementById(pageId).classList.add('active');

  // Activate clicked button
  btn.classList.add('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile menu if open
  document.querySelector('.nav-links').classList.remove('open');
}

/* ---------- INTERNSHIP TABS ---------- */
function showTab(tabId, btn) {
  // Hide all tab contents
  document.querySelectorAll('.itab-content').forEach(function(t) {
    t.classList.remove('active');
  });

  // Deactivate all tab buttons
  document.querySelectorAll('.itab').forEach(function(b) {
    b.classList.remove('active');
  });

  // Show selected tab
  document.getElementById(tabId).classList.add('active');

  // Activate clicked tab button
  btn.classList.add('active');
}

/* ---------- HAMBURGER MENU (MOBILE) ---------- */
var hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
  });
}

/* ---------- BACK TO TOP BUTTON ---------- */
var backTopBtn = document.getElementById('backTop');

window.addEventListener('scroll', function() {
  if (backTopBtn) {
    if (window.scrollY > 300) {
      backTopBtn.classList.add('visible');
    } else {
      backTopBtn.classList.remove('visible');
    }
  }
});

if (backTopBtn) {
  backTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- SMOOTH PAGE TRANSITIONS ---------- */
document.addEventListener('DOMContentLoaded', function() {
  // Make sure About page is shown on load
  var aboutPage = document.getElementById('about');
  if (aboutPage) {
    aboutPage.classList.add('active');
  }

  // Close nav on outside click (mobile)
  document.addEventListener('click', function(e) {
    var navLinks = document.querySelector('.nav-links');
    var ham = document.getElementById('hamburger');
    if (navLinks && ham) {
      if (!navLinks.contains(e.target) && !ham.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    }
  });
});