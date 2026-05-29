/* ============================================
   HORROR TATOO - Main Script
   ============================================ */

// ---------- Mobile Menu Toggle ----------
function toggleMenu() {
    var nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('open');
}

// Cerrar menu al hacer clic en un enlace (mobile)
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            var nav = document.getElementById('navLinks');
            if (nav) nav.classList.remove('open');
        });
    }
});

// ---------- Progressive Gallery Load ----------
function loadMoreItems(containerSelector, loadMoreId, goToId) {
    var container = document.querySelector(containerSelector);
    if (!container) return;

    var items = container.querySelectorAll('.gallery-item.hidden');
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (count >= 9) break;
        items[i].classList.remove('hidden');
        count++;
    }

    var remaining = container.querySelectorAll('.gallery-item.hidden');
    var loadMoreEl = document.getElementById(loadMoreId);
    var goToEl = document.getElementById(goToId);

    if (remaining.length === 0) {
        if (loadMoreEl) loadMoreEl.style.display = 'none';
        if (goToEl) goToEl.style.display = 'block';
    }
}

// Shortcut functions for each page
function loadMoreLanding() {
    // Show extension serpents
    var seg2 = document.querySelectorAll('.serpent-deco.segment-2.hidden');
    for (var i = 0; i < seg2.length; i++) {
        seg2[i].classList.remove('hidden');
    }
    loadMoreItems('.gallery-preview', 'loadMoreLanding', 'goToGallery');
}

function loadMoreGallery() {
    loadMoreItems('.gallery', 'loadMoreGallery', 'goToIg');
}
