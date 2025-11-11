document.addEventListener("DOMContentLoaded", () => {
  // Dropdown menu
  document.querySelectorAll(".dropbtn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const parent = btn.parentElement;
      const isTopLevel = parent.parentElement.parentElement.classList.contains("main-links");
      if (isTopLevel) {
        document.querySelectorAll(".main-links > ul > .dropdown").forEach(d => {
          if (d !== parent) d.classList.remove("active");
        });
      }
      parent.classList.toggle("active");
    });
  });

  // Tutup dropdown jika klik di luar
  document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
    }
  });

  // Game card expand
  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.game-card').forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      card.classList.toggle('active');
    });
  });
});

let index = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide() {
    slides.forEach((s, i) => {
      s.style.display = (i === index) ? "block" : "none";
    });
    index = (index + 1) % slides.length;
  }

  showSlide();
  setInterval(showSlide, 3000); 